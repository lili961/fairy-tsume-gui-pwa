"use strict";

importScripts("./app.js?v=20260319h");

self.addEventListener("message", (ev) => {
  const data = ev?.data && typeof ev.data === "object" ? ev.data : null;
  if (!data) return;
  const id = Number(data.id || 0);
  const key = String(data.key || "");
  if (!id || !key) return;

  try {
    if (typeof reverseComputeOnePlyCandidates !== "function") {
      throw new Error("reverseComputeOnePlyCandidates unavailable");
    }
    if (!data.state || typeof data.state !== "object") {
      throw new Error("invalid reverse worker payload: state");
    }

    sessionId = String(data.session_id || "worker");
    revision = Number(data.revision || 0);
    state = data.state;
    displayNames = data.display_names && typeof data.display_names === "object" ? data.display_names : {};
    playSubMode = "reverse";
    reverseComputeContextOverride =
      data.reverse_context && typeof data.reverse_context === "object"
        ? {
            start_turn: Number(data.reverse_context.start_turn) === 1 ? 1 : 0,
            current_forward_ply: (() => {
              const n = Number.parseInt(data.reverse_context.current_forward_ply, 10);
              return Number.isFinite(n) && n >= 0 ? n : null;
            })(),
          }
        : null;
    reverseCacheKey = "";
    reverseMoves = [];
    reverseStatusText = "-";
    if (reverseResultCache && typeof reverseResultCache.clear === "function") {
      reverseResultCache.clear();
    }

    const profile = reverseComputeOnePlyCandidates();
    self.postMessage({
      id,
      key,
      ok: true,
      moves: Array.isArray(reverseMoves) ? reverseMoves : [],
      status: String(reverseStatusText || "-"),
      profile: profile && typeof profile === "object" ? profile : null,
    });
  } catch (e) {
    self.postMessage({
      id,
      key,
      ok: false,
      error: e?.message || String(e),
    });
  }
});
