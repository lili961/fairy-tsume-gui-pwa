const FILE_LABELS = ["９", "８", "７", "６", "５", "４", "３", "２", "１"];
const RANK_LABELS = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
const APP_VERSION = "v1.0.0";
const IS_WORKER_CONTEXT =
  typeof WorkerGlobalScope !== "undefined" &&
  typeof self !== "undefined" &&
  self instanceof WorkerGlobalScope &&
  typeof document === "undefined";
const getEl = (id) => (typeof document !== "undefined" ? document.getElementById(id) : null);

const ui = {
  boardGrid: getEl("boardGrid"),
  historyPanel: getEl("historyPanel"),
  historyInfo: getEl("historyInfo"),
  historyList: getEl("historyList"),
  historyColumns: getEl("historyColumns"),
  historyDivider: getEl("historyDivider"),
  historyMainHeader: getEl("historyMainHeader"),
  historyBranchHeader: getEl("historyBranchHeader"),
  btnRepeatDialogOpen: getEl("btnRepeatDialogOpen"),
  btnPromoteBranch: getEl("btnPromoteBranch"),
  btnDeleteBranch: getEl("btnDeleteBranch"),
  legalTitle: getEl("legalTitle"),
  legalList: getEl("legalList"),
  legalSummary: getEl("legalSummary"),
  btnPlayModeNormal: getEl("btnPlayModeNormal"),
  btnPlayModeReverse: getEl("btnPlayModeReverse"),
  sessionInfo: getEl("sessionInfo"),
  revisionInfo: getEl("revisionInfo"),
  versionInfo: getEl("versionInfo"),
  modeInfo: getEl("modeInfo"),
  turnInfo: getEl("turnInfo"),
  ruleNameInfo: getEl("ruleNameInfo"),
  selectedInfo: getEl("selectedInfo"),
  logPanel: getEl("logPanel"),
  logArea: getEl("logArea"),
  hand0Wrap: getEl("hand0Wrap"),
  hand1Wrap: getEl("hand1Wrap"),
  hand0List: getEl("hand0List"),
  hand1List: getEl("hand1List"),
  legalPanel: getEl("legalPanel"),
  pieceBoxBoardHost: getEl("pieceBoxBoardHost"),
  pieceBoxSidePanel: getEl("pieceBoxSidePanel"),
  pieceBoxSideHost: getEl("pieceBoxSideHost"),
  pieceBoxWrap: getEl("pieceBoxWrap"),
  pieceBoxFairyTabs: getEl("pieceBoxFairyTabs"),
  pieceBoxList: getEl("pieceBoxList"),
  btnPieceBoxStandard: getEl("btnPieceBoxStandard"),
  btnPieceBoxNonStandard: getEl("btnPieceBoxNonStandard"),
  editPanelSection: getEl("editPanelSection"),
  attrDialog: getEl("attrDialog"),
  attrDialogForm: getEl("attrDialogForm"),
  attrTargetInfo: getEl("attrTargetInfo"),
  attrScopeSelect: getEl("attrScopeSelect"),
  attrDlgDisplayNameInput: getEl("attrDlgDisplayNameInput"),
  attrDlgPromoteToSelect: getEl("attrDlgPromoteToSelect"),
  attrDlgToHandInput: getEl("attrDlgToHandInput"),
  attrDlgIsKingInput: getEl("attrDlgIsKingInput"),
  attrDlgImmortalInput: getEl("attrDlgImmortalInput"),
  attrDialogCancel: getEl("attrDialogCancel"),
  attrDialogOk: getEl("attrDialogOk"),
  editPieceSelect: getEl("editPieceSelect"),
  btnEditOwnerSente: getEl("btnEditOwnerSente"),
  btnEditOwnerGote: getEl("btnEditOwnerGote"),
  btnEditOwnerNeutral: getEl("btnEditOwnerNeutral"),
  btnQuickOwnerSente: getEl("btnQuickOwnerSente"),
  btnQuickOwnerGote: getEl("btnQuickOwnerGote"),
  btnQuickOwnerNeutral: getEl("btnQuickOwnerNeutral"),
  btnEditPlaceMode: getEl("btnEditPlaceMode"),
  btnEditEraseMode: getEl("btnEditEraseMode"),
  btnEditAddSenteHand: getEl("btnEditAddSenteHand"),
  btnEditRemoveSenteHand: getEl("btnEditRemoveSenteHand"),
  btnEditAddGoteHand: getEl("btnEditAddGoteHand"),
  btnEditRemoveGoteHand: getEl("btnEditRemoveGoteHand"),
  btnEditPresetHirate: getEl("btnEditPresetHirate"),
  btnEditPresetTsume: getEl("btnEditPresetTsume"),
  btnEditPresetClear: getEl("btnEditPresetClear"),
  btnEditSwitchTurn: getEl("btnEditSwitchTurn"),
  attrFileInput: getEl("attrFileInput"),
  attrRankInput: getEl("attrRankInput"),
  btnAttrLoadFromBoard: getEl("btnAttrLoadFromBoard"),
  btnAttrApplyToBoard: getEl("btnAttrApplyToBoard"),
  btnAttrApplyToType: getEl("btnAttrApplyToType"),
  attrDisplayNameInput: getEl("attrDisplayNameInput"),
  attrPromoteToSelect: getEl("attrPromoteToSelect"),
  attrToHandInput: getEl("attrToHandInput"),
  attrIsKingInput: getEl("attrIsKingInput"),
  attrImmortalInput: getEl("attrImmortalInput"),
  ioText: getEl("ioText"),
  ioDialog: getEl("ioDialog"),
  ioFileInput: getEl("ioFileInput"),
  ioBusy: getEl("ioBusy"),
  ioProgress: getEl("ioProgress"),
  ioProgressText: getEl("ioProgressText"),
  ioClipboardNotice: getEl("ioClipboardNotice"),
  btnNewHirate: getEl("btnNewHirate"),
  btnNewTsume: getEl("btnNewTsume"),
  btnRuleDialogOpen: getEl("btnRuleDialogOpen"),
  btnMiscDialogOpen: getEl("btnMiscDialogOpen"),
  btnIoDialogOpen: getEl("btnIoDialogOpen"),
  btnHelpDialogOpen: getEl("btnHelpDialogOpen"),
  btnIoDialogClose: getEl("btnIoDialogClose"),
  btnIoUpload: getEl("btnIoUpload"),
  btnIoUploadKifuOnly: getEl("btnIoUploadKifuOnly"),
  btnIoDownload: getEl("btnIoDownload"),
  btnRefresh: getEl("btnRefresh"),
  btnModePlay: getEl("btnModePlay"),
  btnModeEdit: getEl("btnModeEdit"),
  btnEditTurnTop: getEl("btnEditTurnTop"),
  btnEditAttrDialogTop: getEl("btnEditAttrDialogTop"),
  btnHistStart: getEl("btnHistStart"),
  btnHistBack: getEl("btnHistBack"),
  btnHistPlayReverse: getEl("btnHistPlayReverse"),
  btnHistForward: getEl("btnHistForward"),
  btnHistPlay: getEl("btnHistPlay"),
  btnHistEnd: getEl("btnHistEnd"),
  btnLoadClipboard: getEl("btnLoadClipboard"),
  btnLoadClipboardKifuOnly: getEl("btnLoadClipboardKifuOnly"),
  btnExportSfen: getEl("btnExportSfen"),
  btnExportKifu: getEl("btnExportKifu"),
  ruleDialog: getEl("ruleDialog"),
  miscDialog: getEl("miscDialog"),
  helpDialog: getEl("helpDialog"),
  miscSettingList: getEl("miscSettingList"),
  miscTabBar: getEl("miscTabBar"),
  btnMiscApply: getEl("btnMiscApply"),
  btnMiscDialogClose: getEl("btnMiscDialogClose"),
  btnHelpDialogClose: getEl("btnHelpDialogClose"),
  ruleNameText: getEl("ruleNameText"),
  ruleStrategySelect: getEl("ruleStrategySelect"),
  ruleObjectiveSelect: getEl("ruleObjectiveSelect"),
  ruleProblemPlyInput: getEl("ruleProblemPlyInput"),
  ruleTabs: getEl("ruleTabs"),
  ruleConstraintInfo: getEl("ruleConstraintInfo"),
  ruleFlags: getEl("ruleFlags"),
  btnRuleApply: getEl("btnRuleApply"),
  btnRuleReset: getEl("btnRuleReset"),
  btnRuleDialogClose: getEl("btnRuleDialogClose"),
  promoteDialog: getEl("promoteDialog"),
  btnPromoteYes: getEl("btnPromoteYes"),
  btnPromoteNo: getEl("btnPromoteNo"),
  playSubModeDialog: getEl("playSubModeDialog"),
  playSubModeDialogTitle: getEl("playSubModeDialogTitle"),
  playSubModeDialogMessage: getEl("playSubModeDialogMessage"),
  playSubModeDialogActions: getEl("playSubModeDialogActions"),
  reverseCaptureDialog: getEl("reverseCaptureDialog"),
  reverseCaptureDialogInfo: getEl("reverseCaptureDialogInfo"),
  reverseCaptureDialogOptions: getEl("reverseCaptureDialogOptions"),
  btnReverseCaptureCancel: getEl("btnReverseCaptureCancel"),
  branchDeleteDialog: getEl("branchDeleteDialog"),
  branchDeleteTarget: getEl("branchDeleteTarget"),
  btnBranchDeleteCancel: getEl("btnBranchDeleteCancel"),
  btnBranchDeleteAll: getEl("btnBranchDeleteAll"),
  btnBranchDeleteOk: getEl("btnBranchDeleteOk"),
  historyBranchDialog: getEl("historyBranchDialog"),
  historyBranchDialogTitle: getEl("historyBranchDialogTitle"),
  historyBranchDialogList: getEl("historyBranchDialogList"),
  btnHistoryBranchDialogClose: getEl("btnHistoryBranchDialogClose"),
  repeatDialog: getEl("repeatDialog"),
  repeatRangeInfo: getEl("repeatRangeInfo"),
  repeatFromInput: getEl("repeatFromInput"),
  repeatToInput: getEl("repeatToInput"),
  repeatCountInput: getEl("repeatCountInput"),
  btnRepeatDialogClose: getEl("btnRepeatDialogClose"),
  btnRepeatApply: getEl("btnRepeatApply"),
  btnEditClearGoteHandToBox: getEl("btnEditClearGoteHandToBox"),
  customFairyDialog: getEl("customFairyDialog"),
  customFairyNameInput: getEl("customFairyNameInput"),
  customFairyDisplayInput: getEl("customFairyDisplayInput"),
  customFairyMoveModeSelect: getEl("customFairyMoveModeSelect"),
  customFairyCopyFromWrap: getEl("customFairyCopyFromWrap"),
  customFairyMoveSelect: getEl("customFairyMoveSelect"),
  customFairyVectorsWrap: getEl("customFairyVectorsWrap"),
  customFairyVectorsInput: getEl("customFairyVectorsInput"),
  customFairyDxInput: getEl("customFairyDxInput"),
  customFairyDyInput: getEl("customFairyDyInput"),
  btnCustomFairyVectorAdd: getEl("btnCustomFairyVectorAdd"),
  btnCustomFairyVectorUndo: getEl("btnCustomFairyVectorUndo"),
  btnCustomFairyVectorBoardOpen: getEl("btnCustomFairyVectorBoardOpen"),
  customFairyVectorBoardDialog: getEl("customFairyVectorBoardDialog"),
  customFairyVectorBoard: getEl("customFairyVectorBoard"),
  customFairyVectorBoardCaption: getEl("customFairyVectorBoardCaption"),
  btnCustomFairyVectorBoardClear: getEl("btnCustomFairyVectorBoardClear"),
  btnCustomFairyVectorBoardClose: getEl("btnCustomFairyVectorBoardClose"),
  customFairyVectorsPreview: getEl("customFairyVectorsPreview"),
  customFairyTagInput: getEl("customFairyTagInput"),
  customFairyDescInput: getEl("customFairyDescInput"),
  btnCustomFairyAdd: getEl("btnCustomFairyAdd"),
  btnCustomFairyClearAll: getEl("btnCustomFairyClearAll"),
  btnCustomFairyClose: getEl("btnCustomFairyClose"),
  fairyMoveViewerDialog: getEl("fairyMoveViewerDialog"),
  fairyMoveViewerSelect: getEl("fairyMoveViewerSelect"),
  fairyMoveViewerScenario: getEl("fairyMoveViewerScenario"),
  fairyMoveViewerCaption: getEl("fairyMoveViewerCaption"),
  fairyMoveViewerGuide: getEl("fairyMoveViewerGuide"),
  fairyMoveViewerBoard: getEl("fairyMoveViewerBoard"),
  btnFairyMoveViewerClose: getEl("btnFairyMoveViewerClose"),
};

let sessionId = null;
let revision = 0;
let state = null;
let legalMoves = [];
let legalStatus = { kind: "none", text: "" };
let reverseMoves = [];
let reverseStatusText = "-";
let reverseCacheKey = "";
let playSubMode = "normal"; // normal | reverse
let reverseHistoryTree = null; // {root_id,current_id,nodes:[{node_id,parent_id,ply,label,state,children}]}
let reverseHistoryNodeSeq = 1;
let reverseSelectedNodeId = null;
let keepReverseTrailOnNextStateApply = false;
const reverseResultCache = new Map(); // key -> {moves, status}
const REVERSE_RESULT_CACHE_MAX = 64;
const reversePredecessorLegalGlobalCache = new Map(); // key -> {skip, legal}
const REVERSE_PREDECESSOR_LEGAL_CACHE_MAX = 2048;
const REVERSE_IO_HEADER = "F-TSUME-REVERSE-V1";
const REVERSE_IO_KIND = "f-tsume-reverse-kifu-v1";
const REVERSE_IO_EMBED_PREFIX = "F-TSUME-REVERSE-EMBED:";
const REVERSE_PLAIN_MARKER_LINE = "逆算棋譜";
const REVERSE_WORKER_SCRIPT = "./reverse_worker.js?v=20260322a";
const REVERSE_WORKER_TIMEOUT_MS = 5000;
const REVERSE_PROFILE_LOG_ENABLED = true;
const REVERSE_PRE_LEGAL_CACHE_VERSION = "20260314j";
let reverseWorker = null;
let reverseWorkerReqSeq = 1;
let reverseWorkerPendingId = 0;
let reverseWorkerPendingKey = "";
let reverseWorkerPendingAt = 0;
let reverseWorkerWatchdogTimer = null;
let reverseComputeContextOverride = null;
let customVectorPresetActive = "";
const CUSTOM_VECTOR_BOARD_RADIUS = 9;
let historyTree = null;
let selectedHistoryNodeId = null;
let historyNodeMapNodesRef = null;
let historyNodeMapCache = new Map();
let historyRenderNodesRef = null;
let historyRenderRowByNodeId = new Map();
let historyRenderRowOrder = [];
let historyRenderRowIndexByNodeId = new Map();
let historyRenderCurrentNodeId = null;
let historyRenderFocusNodeId = null;
let boardGridCells = null;
let boardGridOwnerEl = null;
let boardHoverMoveSource = null; // {x,y} | null
let boardHoverMoveDestKeys = null; // Set(coordKey) | null
let selected = null; // {type:'board', x,y} | {type:'hand', owner,name} | null
let takeMakePending = null; // {fromX, fromY, stepX, stepY, cands?} | null
let displayNames = {};
let pieceDescriptions = {};
let ruleKeys = [];
let ruleLabels = {};
let ruleStrategyOptions = [];
let ruleObjectiveOptions = [];
let renderedRuleFlagKeys = [];
let activeRuleTab = "performance";
let activeMiscSettingTab = "display";
let ruleDraft = null;
let ruleConstraintInfoText = "";
let customPieceMoveLikeMap = new Map();
let customPieceDirectSpecMap = new Map();
let customPieceUserTagMap = new Map();
const logs = [];
let editPieceNames = [];
let editOwner = 0;
let editEraseMode = false;
let editSelection = null; // {source:'board'|'hand'|'box', name, owner, x?, y?}
let pieceBoxStandardMode = true;
let pieceBoxFairyTab = "leaper";
let suppressEditClickOnce = false;
const LONG_PRESS_MS = 450;
const RIGHT_DOUBLE_MS = 280;
const HISTORY_BRANCH_INLINE_MAX = 2;
let historyBranchDialogCleanup = null;
let pendingRightAction = null;
let ioBusyCount = 0;
let ioDragDepth = 0;
let ioFileLoadMode = "auto";
let ioProgressPulseTimer = null;
let ioClipboardNoticeTimer = null;
let ioLoadProgressHook = null;
let sequentialActionQueue = Promise.resolve();
let sessionRecoveryPromise = null;
let lastSessionPreset = "tsume";
let historyPlayTimer = null;
let historyPlayRunning = false;
let historyPlayStepInFlight = false;
let historyPlayDirection = 0; // 1: forward, -1: back
let historyPlayLegalListInFlight = false;
let historyPlayLegalListPending = false;
let legalNeedsRefreshAfterPlayback = false;
let localMetaCache = null;
let localSessionSeq = 1;
const localSessions = new Map();
let engine = null;
let uiSettings = null;
let attackOverlayOptions = null;
let attackOverlayData = null;
let attackOverlayCacheKey = "";
let attackOverlayInFlightKey = "";
let refreshEpoch = 0;
let refreshStateSeq = 0;
let refreshLegalSeq = 0;
let refreshHistorySeq = 0;
let historyDividerDragging = null;
let historyScrollbarSyncRaf = 0;
let suppressHistoryAutoScroll = false;
const REJECTED_LEGAL_BY_POSITION_MAX = 24;
const rejectedLegalByPosition = new Map(); // key: `${sessionId}:${revision}` -> Set(signature)

const PROMOTION_TOGGLE_MAP = {
  歩: "と",
  と: "歩",
  香: "成香",
  成香: "香",
  桂: "成桂",
  成桂: "桂",
  銀: "成銀",
  成銀: "銀",
  角: "馬",
  馬: "角",
  飛: "龍",
  龍: "飛",
  王: "玉",
  玉: "王",
};
const PROMOTED_NAMES = new Set(["と", "成香", "成桂", "成銀", "馬", "龍"]);
const DEFAULT_CAN_PROMOTE_NAMES = new Set(["歩", "香", "桂", "銀", "角", "飛"]);
const BASE_NAME_MAP = {
  と: "歩",
  成香: "香",
  成桂: "桂",
  成銀: "銀",
  馬: "角",
  龍: "飛",
};
const STANDARD_COUNTS = {
  王: 2,
  飛: 2,
  角: 2,
  金: 4,
  銀: 4,
  桂: 4,
  香: 4,
  歩: 18,
};
const HAND_ORDER = ["飛", "角", "金", "銀", "桂", "香", "歩"];
const STANDARD_BASE_MAP = {
  玉: "王",
  と: "歩",
  成香: "香",
  成桂: "桂",
  成銀: "銀",
  馬: "角",
  龍: "飛",
};
const LOCAL_STANDARD_PIECE_NAMES = new Set([
  "玉",
  "王",
  "飛",
  "角",
  "金",
  "銀",
  "桂",
  "香",
  "歩",
  "龍",
  "馬",
  "と",
  "成香",
  "成桂",
  "成銀",
]);
const LOCAL_KIFU_USAGE_NAME_MAP = Object.freeze({});
const LOCAL_CIRCE_START_POS_SENTE = Object.freeze({
  歩: Object.freeze(Array.from({ length: 9 }, (_v, i) => Object.freeze([i, 6]))),
  角: Object.freeze([Object.freeze([1, 7])]),
  飛: Object.freeze([Object.freeze([7, 7])]),
  香: Object.freeze([Object.freeze([0, 8]), Object.freeze([8, 8])]),
  桂: Object.freeze([Object.freeze([1, 8]), Object.freeze([7, 8])]),
  銀: Object.freeze([Object.freeze([2, 8]), Object.freeze([6, 8])]),
  金: Object.freeze([Object.freeze([3, 8]), Object.freeze([5, 8])]),
  玉: Object.freeze([Object.freeze([4, 8])]),
  王: Object.freeze([Object.freeze([4, 8])]),
});
const LOCAL_RULE_STRATEGY_FALLBACK_OPTIONS = ["詰将棋", "協力", "最善", "最悪", "悪魔", "天使"];
const LOCAL_RULE_OBJECTIVE_FALLBACK_OPTIONS = ["詰", "自玉詰", "逃れ", "ステイルメイト", "自玉ステイルメイト", "千日手"];
const LOCAL_RULE_LABEL_PARSE_ORDER = Object.freeze([
  "greedy",
  "abstinence",
  "maxi",
  "mini",
  "koko",
  "narikin",
  "torikin",
  "attacker_no_capture",
  "zentorikin",
  "koma_amari_kin",
  "cant_repeat_type",
  "cant_capture_repeat_type",
  "circe",
  "anti_circe",
  "pwc",
  "rifle",
  "take_make",
  "k_take_make",
  "all_in_shogi",
  "isardam",
  "andernach",
  "anti_andernach",
  "all_andernach",
  "annan",
  "anpoku",
  "annan_nifu_invalid",
  "patrol",
  "lortap",
  "tenjiku",
  "madrasi",
  "k_madrasi",
  "haimen",
  "taimen",
  "tenkyo",
  "nekoneko",
  "messigny",
  "messigny_no_back",
  "allow_double_fu",
  "allow_drop_fu_into_check",
  "uchifu_simple",
  "uchifu_complete",
  "allow_check_on_self",
  "allow_sente_non_check",
  "isardam_type_b",
]);
const LOCAL_RULE_LABELS_CONSTRAINT = Object.freeze([
  ["greedy", "強欲"],
  ["abstinence", "禁欲"],
  ["maxi", "マキシ"],
  ["mini", "ミニ"],
  ["koko", "Koko"],
  ["narikin", "成禁"],
  ["torikin", "取禁"],
  ["attacker_no_capture", "攻方取禁"],
  ["zentorikin", "全取禁"],
  ["koma_amari_kin", "駒余り禁"],
  ["cant_repeat_type", "駒全マネ禁"],
  ["cant_capture_repeat_type", "駒全マネ取禁"],
]);
const LOCAL_RULE_LABELS_SPECIAL = Object.freeze([
  ["circe", "キルケ"],
  ["anti_circe", "アンチキルケ"],
  ["pwc", "PWC"],
  ["rifle", "ライフル"],
  ["take_make", "Take&Make"],
  ["k_take_make", "K-Take&Make"],
  ["all_in_shogi", "All-in-Shogi"],
  ["isardam", "Isardam"],
  ["andernach", "Andernach"],
  ["anti_andernach", "Anti-Andernach"],
  ["all_andernach", "全Andernach"],
  ["annan", "安南"],
  ["anpoku", "安北"],
  ["annan_nifu_invalid", "利き二歩無効"],
  ["patrol", "Patrol"],
  ["lortap", "Lortap"],
  ["tenjiku", "天竺"],
  ["madrasi", "マドラシ"],
  ["k_madrasi", "Kマドラシ"],
  ["haimen", "背面"],
  ["taimen", "対面"],
  ["tenkyo", "点鏡"],
  ["nekoneko", "ネコネコ"],
  ["messigny", "Messigny"],
]);
const LOCAL_RULE_LABELS_BASIC = Object.freeze([
  ["allow_double_fu", "二歩可"],
  ["allow_drop_fu_into_check", "打歩詰可"],
  ["uchifu_simple", "単純打歩"],
  ["uchifu_complete", "打歩"],
  ["allow_check_on_self", "王手放置可"],
  ["allow_sente_non_check", "非王手可"],
]);
const LOCAL_DEFAULT_RULES = Object.freeze({
  allow_double_fu: false,
  allow_drop_fu_into_check: false,
  uchifu_simple: false,
  uchifu_complete: false,
  allow_check_on_self: false,
  allow_sente_non_check: false,
  circe: false,
  anti_circe: false,
  pwc: false,
  rifle: false,
  take_make: false,
  k_take_make: false,
  all_in_shogi: false,
  andernach: false,
  anti_andernach: false,
  all_andernach: false,
  greedy: false,
  abstinence: false,
  attacker_no_capture: false,
  koko: false,
  narikin: false,
  torikin: false,
  zentorikin: false,
  koma_amari_kin: false,
  maxi: false,
  mini: false,
  cant_repeat_type: false,
  cant_capture_repeat_type: false,
  annan: false,
  anpoku: false,
  annan_nifu_invalid: false,
  patrol: false,
  lortap: false,
  tenjiku: false,
  madrasi: false,
  k_madrasi: false,
  haimen: false,
  taimen: false,
  tenkyo: false,
  nekoneko: false,
  messigny: false,
  messigny_no_back: false,
  isardam: false,
  isardam_type_b: false,
  detect_sennichite: false,
  strategy: "詰将棋",
  objective: "詰",
  problem_ply: 0,
});
const PROMOTED_SET = new Set(["と", "成香", "成桂", "成銀", "馬", "龍"]);
const PIECEBOX_FAIRY_TAB_IDS = ["leaper", "rider", "hopper", "chushogi", "other", "custom"];
const PIECEBOX_FAIRY_TAB_LABELS = {
  leaper: "Leaper系",
  rider: "Rider系",
  hopper: "Hopper系",
  chushogi: "中将棋駒",
  other: "その他",
  custom: "追加駒",
};
const PIECEBOX_FAIRY_LEAPER_NAMES = new Set(["Knight", "Camel", "Zebra", "Wazir", "Dabbaba", "獅子"]);
const PIECEBOX_FAIRY_RIDER_NAMES = new Set(["Queen", "NightRider", "Rose"]);
const PIECEBOX_FAIRY_HOPPER_NAMES = new Set([
  "Grasshopper",
  "Bishop-Grasshopper",
  "Rook-Grasshopper",
  "NightRiderHopper",
  "Locust",
  "Siren",
  "Triton",
  "Equihopper",
  "Pao",
  "Lion",
  "Bishop-Lion",
  "RoseLion",
  "Kangaroo",
  "Eagle",
  "Moose",
  "Sparrow",
]);
const PIECEBOX_FAIRY_CHUSHOGI_NAMES = new Set(["獅子", "石", "穴", "塔", "横行"]);
const RULE_PROFILE_KEYS = new Set(["strategy", "objective", "problem_ply"]);
const RULE_INTERNAL_HIDDEN_KEYS = new Set(["detect_sennichite"]);
const RULE_TAB_IDS = ["performance", "selection", "capture_owner", "other"];
const ANNA_NIFU_RULE_KEY = "annan_nifu_invalid";
const ANNA_NIFU_HOST_RULE_KEYS = new Set(["annan", "anpoku", "haimen", "taimen", "tenkyo", "nekoneko"]);
const ISARDAM_RULE_KEY = "isardam";
const ISARDAM_TYPE_B_RULE_KEY = "isardam_type_b";
const MESSIGNY_NO_BACK_RULE_KEY = "messigny_no_back";
const K_MADRASI_RULE_KEY = "k_madrasi";
const K_MADRASI_HOST_RULE_KEY = "madrasi";
const K_TAKE_MAKE_RULE_KEY = "k_take_make";
const K_TAKE_MAKE_HOST_RULE_KEY = "take_make";
const UCHIFU_SIMPLE_RULE_KEY = "uchifu_simple";
const UCHIFU_COMPLETE_HOST_RULE_KEY = "uchifu_complete";
const CANT_REPEAT_TYPE_RULE_KEY = "cant_repeat_type";
const CANT_CAPTURE_REPEAT_TYPE_RULE_KEY = "cant_capture_repeat_type";
const PATROL_RULE_KEY = "patrol";
const LORTAP_RULE_KEY = "lortap";
const INLINE_RULE_HOST_TO_CHILD = new Map([
  ...Array.from(ANNA_NIFU_HOST_RULE_KEYS).map((host) => [host, ANNA_NIFU_RULE_KEY]),
  [ISARDAM_RULE_KEY, ISARDAM_TYPE_B_RULE_KEY],
  ["messigny", MESSIGNY_NO_BACK_RULE_KEY],
  [K_MADRASI_HOST_RULE_KEY, K_MADRASI_RULE_KEY],
  [K_TAKE_MAKE_HOST_RULE_KEY, K_TAKE_MAKE_RULE_KEY],
  [UCHIFU_COMPLETE_HOST_RULE_KEY, UCHIFU_SIMPLE_RULE_KEY],
]);
const INLINE_RULE_CHILD_KEYS = new Set([
  ANNA_NIFU_RULE_KEY,
  ISARDAM_TYPE_B_RULE_KEY,
  MESSIGNY_NO_BACK_RULE_KEY,
  K_MADRASI_RULE_KEY,
  K_TAKE_MAKE_RULE_KEY,
  UCHIFU_SIMPLE_RULE_KEY,
]);
const INLINE_PSEUDO_HOST_KEYS = new Set([
  ISARDAM_RULE_KEY,
  K_MADRASI_HOST_RULE_KEY,
  K_TAKE_MAKE_HOST_RULE_KEY,
  UCHIFU_COMPLETE_HOST_RULE_KEY,
]);
const RULE_TAB_KEY_MAP = {
  performance: new Set([
    "annan",
    "anpoku",
    "haimen",
    "taimen",
    "tenkyo",
    "nekoneko",
    "madrasi",
    "k_madrasi",
    "tenjiku",
  ]),
  selection: new Set([
    "greedy",
    "abstinence",
    "maxi",
    "mini",
    "koko",
    "cant_repeat_type",
    "cant_capture_repeat_type",
    "allow_sente_non_check",
    "allow_check_on_self",
    "isardam",
    "isardam_type_b",
    "narikin",
    "torikin",
    "attacker_no_capture",
    "zentorikin",
    "uchifu_simple",
    "uchifu_complete",
  ]),
  capture_owner: new Set([
    "all_andernach",
    "andernach",
    "anti_andernach",
    "circe",
    "anti_circe",
    "pwc",
    "rifle",
    "take_make",
    "k_take_make",
  ]),
  other: new Set(["all_in_shogi", "patrol", "lortap", "messigny", "messigny_no_back", "koma_amari_kin"]),
};
const CAPTURE_OWNER_MUTUAL_EXCLUSIVE_KEYS = Object.freeze([
  "all_andernach",
  "andernach",
  "anti_andernach",
  "circe",
  "anti_circe",
  "pwc",
  "rifle",
  "take_make",
  "k_take_make",
]);
const PERFORMANCE_MUTUAL_EXCLUSIVE_KEYS = Object.freeze([
  "annan",
  "anpoku",
  "haimen",
  "taimen",
  "tenkyo",
  "nekoneko",
  "madrasi",
  "k_madrasi",
  "tenjiku",
]);
const UI_SETTINGS_STORAGE_KEY = "ftsume_ui_settings_v1";
const ATTACK_OVERLAY_STORAGE_KEY = "ftsume_attack_overlay_v1";
const LOCAL_SESSION_STORAGE_KEY = "ftsume_local_session_v1";
const CUSTOM_CATALOG_STORAGE_KEY = "ftsume_custom_catalog_v1";
const CUSTOM_CATALOG_SEED_MARK_KEY = "ftsume_custom_catalog_seeded_v1";
const CUSTOM_USER_TAG_PREFIX = "ui-tag:";
const CUSTOM_USER_TAG_MARK = "ui-added";
const ATTACKER_COLOR = "#E74C3C";
const DEFENDER_COLOR = "#3498DB";
const UI_SETTING_DEFS = Object.freeze([
  {
    key: "show_history_panel",
    label: "棋譜エリアを表示",
    note: "検討モード時",
    defaultValue: true,
    type: "boolean",
    section: "display",
  },
  {
    key: "show_legal_panel",
    label: "可能指し手エリアを表示",
    note: "検討モード時",
    defaultValue: true,
    type: "boolean",
    section: "display",
  },
  {
    key: "show_log_panel",
    label: "ログエリアを表示",
    note: "常時",
    defaultValue: true,
    type: "boolean",
    section: "display",
  },
  {
    key: "show_attack_overlay",
    label: "利き表示を表示",
    note: "検討モード時",
    defaultValue: true,
    type: "boolean",
    section: "display",
  },
  {
    key: "show_effective_move_badge",
    label: "性能変化駒の現在動きを表示",
    note: "変化駒のみ: 右下に元の駒を小表示",
    defaultValue: false,
    type: "boolean",
    section: "display",
  },
  {
    key: "attacker_king_glyph",
    label: "攻方玉の表示",
    note: "盤面/棋譜/出力で使用",
    defaultValue: "玉",
    options: ["玉", "王"],
    type: "select",
    section: "display",
  },
  {
    key: "defender_king_glyph",
    label: "受方玉の表示",
    note: "盤面/棋譜/出力で使用",
    defaultValue: "玉",
    options: ["玉", "王"],
    type: "select",
    section: "display",
  },
  {
    key: "board_scale_percent",
    label: "盤倍率(%)",
    note: "盤・持駒・駒箱の大きさ",
    defaultValue: 100,
    min: 70,
    max: 140,
    step: 5,
    integer: true,
    type: "number",
    section: "display",
  },
  {
    key: "piece_scale_percent",
    label: "駒文字倍率(%)",
    note: "盤・持駒・駒箱の駒文字サイズ",
    defaultValue: 100,
    min: 70,
    max: 160,
    step: 5,
    integer: true,
    type: "number",
    section: "display",
  },
  {
    key: "history_main_col_percent",
    label: "本譜列幅(%)",
    note: "棋譜表示の本譜/変化の区切り位置",
    defaultValue: 30,
    min: 20,
    max: 70,
    step: 1,
    integer: true,
    type: "number",
    section: "display",
    hideInMisc: true,
  },
  {
    key: "history_play_interval_ms",
    label: "棋譜再生間隔(ms)",
    note: "再生ボタンの1手ごとの待ち時間（最小100ms）",
    defaultValue: 600,
    min: 100,
    max: 5000,
    step: 50,
    integer: true,
    type: "number",
    section: "playback",
  },
  {
    key: "detect_sennichite",
    label: "千日手を検出",
    note: "同一局面(同手番)が2回出現したら検出",
    defaultValue: false,
    type: "boolean",
    section: "display",
  },
]);
const UI_SETTING_DEF_MAP = new Map(UI_SETTING_DEFS.map((def) => [def.key, def]));
const MISC_SETTING_TABS = Object.freeze([
  Object.freeze({ key: "display", label: "表示" }),
  Object.freeze({ key: "notation", label: "表記" }),
  Object.freeze({ key: "size", label: "サイズ" }),
  Object.freeze({ key: "playback", label: "再生" }),
  Object.freeze({ key: "attack", label: "利き" }),
]);
const MISC_SETTING_TAB_LABELS = Object.freeze(
  MISC_SETTING_TABS.reduce((acc, tab) => {
    acc[tab.key] = tab.label;
    return acc;
  }, {}),
);

function normalizeMiscSettingTabKey(raw) {
  const key = String(raw || "").trim();
  return MISC_SETTING_TAB_LABELS[key] ? key : "display";
}

function localMiscSettingTabKeyForDef(def, sectionOverride = null) {
  const key = String(def?.key || "");
  const section = String(sectionOverride || def?.section || "display");
  if (section === "playback") return "playback";
  if (section === "attack") return "attack";
  if (key === "show_attack_overlay") return "attack";
  if (key === "attacker_king_glyph" || key === "defender_king_glyph") return "notation";
  if (key === "board_scale_percent" || key === "piece_scale_percent") return "size";
  return "display";
}
const ATTACK_OVERLAY_SETTING_DEFS = Object.freeze([
  { key: "show_attacker_pieces", label: "利き: 攻方", note: "攻方の駒利きを表示" },
  { key: "arrow_attacker_pieces", label: "利き: 攻駒矢印", note: "攻方の利き経路を矢印表示" },
  { key: "show_defender_pieces", label: "利き: 受方", note: "受方の駒利きを表示" },
  { key: "arrow_defender_pieces", label: "利き: 受駒矢印", note: "受方の利き経路を矢印表示" },
  { key: "show_attacker_king", label: "利き: 攻方玉", note: "攻方玉の利きを表示" },
  { key: "show_defender_king", label: "利き: 受方玉", note: "受方玉の利きを表示" },
]);

function buildDefaultUiSettings() {
  const defaults = {};
  for (const def of UI_SETTING_DEFS) {
    if (def.type === "number") {
      const raw = Number(def.defaultValue);
      const fallback = Number.isFinite(raw) ? raw : 0;
      defaults[def.key] = normalizeUiSettingNumber(def, fallback, fallback);
    } else if (def.type === "select") {
      defaults[def.key] = normalizeUiSettingSelect(def, def.defaultValue, def.defaultValue);
    } else {
      defaults[def.key] = Boolean(def.defaultValue);
    }
  }
  return defaults;
}

function normalizeUiSettingNumber(def, rawValue, fallbackValue) {
  let n = Number(rawValue);
  if (!Number.isFinite(n)) {
    n = Number(fallbackValue);
  }
  if (!Number.isFinite(n)) {
    n = Number(def.defaultValue);
  }
  if (!Number.isFinite(n)) n = 0;
  if (def.integer) n = Math.round(n);
  if (Number.isFinite(def.min)) n = Math.max(def.min, n);
  if (Number.isFinite(def.max)) n = Math.min(def.max, n);
  return n;
}

function normalizeUiSettingSelect(def, rawValue, fallbackValue) {
  const opts = Array.isArray(def?.options)
    ? def.options.map((v) => String(v || "").trim()).filter((v) => v.length > 0)
    : [];
  if (opts.length <= 0) return String(rawValue ?? fallbackValue ?? def?.defaultValue ?? "");
  const rv = String(rawValue ?? "").trim();
  if (opts.includes(rv)) return rv;
  const fv = String(fallbackValue ?? "").trim();
  if (opts.includes(fv)) return fv;
  const dv = String(def?.defaultValue ?? "").trim();
  if (opts.includes(dv)) return dv;
  return opts[0];
}

function normalizeUiSettings(raw) {
  const normalized = buildDefaultUiSettings();
  if (!raw || typeof raw !== "object") return normalized;
  for (const def of UI_SETTING_DEFS) {
    const v = raw[def.key];
    if (def.type === "number") {
      normalized[def.key] = normalizeUiSettingNumber(def, v, normalized[def.key]);
      continue;
    }
    if (def.type === "select") {
      normalized[def.key] = normalizeUiSettingSelect(def, v, normalized[def.key]);
      continue;
    }
    if (typeof v === "boolean") normalized[def.key] = v;
  }
  return normalized;
}

function loadUiSettings() {
  try {
    const raw = window.localStorage.getItem(UI_SETTINGS_STORAGE_KEY);
    if (!raw) return buildDefaultUiSettings();
    const parsed = JSON.parse(raw);
    return normalizeUiSettings(parsed);
  } catch (_e) {
    return buildDefaultUiSettings();
  }
}

function saveUiSettings() {
  try {
    window.localStorage.setItem(UI_SETTINGS_STORAGE_KEY, JSON.stringify(uiSettings));
  } catch (_e) {
    // Ignore local storage failures (private mode etc).
  }
}

function isUiSettingEnabled(key, fallback = true) {
  if (!uiSettings || typeof uiSettings !== "object") return fallback;
  const v = uiSettings[key];
  return typeof v === "boolean" ? v : fallback;
}

function getUiSettingNumber(key, fallback = 0) {
  const def = UI_SETTING_DEF_MAP.get(key);
  if (!def || def.type !== "number") return Number(fallback) || 0;
  const raw = uiSettings && typeof uiSettings === "object" ? uiSettings[key] : undefined;
  return normalizeUiSettingNumber(def, raw, fallback);
}

function getUiSettingSelect(key, fallback = "") {
  const def = UI_SETTING_DEF_MAP.get(key);
  if (!def || def.type !== "select") return String(fallback ?? "");
  const raw = uiSettings && typeof uiSettings === "object" ? uiSettings[key] : undefined;
  return normalizeUiSettingSelect(def, raw, fallback);
}

function getHistoryPlayIntervalMs() {
  return getUiSettingNumber("history_play_interval_ms", 600);
}

function getHistoryMainColumnPercent() {
  return getUiSettingNumber("history_main_col_percent", 30);
}

function setHistoryMainColumnPercent(rawValue, persist = true) {
  const def = UI_SETTING_DEF_MAP.get("history_main_col_percent");
  if (!def || def.type !== "number") return;
  if (!uiSettings || typeof uiSettings !== "object") {
    uiSettings = buildDefaultUiSettings();
  }
  const current = getHistoryMainColumnPercent();
  const next = normalizeUiSettingNumber(def, rawValue, current);
  uiSettings.history_main_col_percent = next;
  applyHistoryMainColumnSetting();
  if (persist) saveUiSettings();
}

function applyHistoryMainColumnSetting() {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (!root) return;
  const raw = getHistoryMainColumnPercent();
  const pct = Math.max(20, Math.min(70, Number(raw) || 30));
  root.style.setProperty("--history-main-col-percent", `${pct}%`);
}

function updateHistoryMainColumnFromClientX(clientX, persist = false) {
  if (!ui.historyColumns) return;
  const rect = ui.historyColumns.getBoundingClientRect();
  if (!Number.isFinite(rect.width) || rect.width <= 0) return;
  const x = Math.min(Math.max(clientX, rect.left), rect.right);
  const pct = ((x - rect.left) / rect.width) * 100;
  setHistoryMainColumnPercent(pct, persist);
}

function endHistoryDividerDrag(pointerId = null, persist = true) {
  if (!historyDividerDragging) return;
  if (pointerId !== null && historyDividerDragging.pointerId !== pointerId) return;
  historyDividerDragging = null;
  if (document?.body) document.body.classList.remove("history-divider-dragging");
  if (persist) saveUiSettings();
}

function syncHistoryHeaderScrollbarCompensation() {
  if (!ui.historyPanel || !ui.historyList) return;
  const listWidth = Number(ui.historyList.offsetWidth) || 0;
  const listClientWidth = Number(ui.historyList.clientWidth) || 0;
  const scrollbarWidth = Math.max(0, listWidth - listClientWidth);
  ui.historyPanel.style.setProperty("--history-scrollbar-width", `${scrollbarWidth}px`);
}

function scheduleHistoryHeaderScrollbarCompensation() {
  if (historyScrollbarSyncRaf) return;
  historyScrollbarSyncRaf = requestAnimationFrame(() => {
    historyScrollbarSyncRaf = 0;
    syncHistoryHeaderScrollbarCompensation();
  });
}

function initHistoryDividerDrag() {
  const divider = ui.historyDivider;
  if (!divider || divider.dataset.dragReady === "1") return;
  divider.dataset.dragReady = "1";
  divider.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (!ui.historyColumns) return;
    e.preventDefault();
    historyDividerDragging = { pointerId: e.pointerId };
    if (document?.body) document.body.classList.add("history-divider-dragging");
    try {
      divider.setPointerCapture(e.pointerId);
    } catch (_e2) {
      // ignore
    }
    updateHistoryMainColumnFromClientX(e.clientX, false);
  });
  divider.addEventListener("pointermove", (e) => {
    if (!historyDividerDragging || historyDividerDragging.pointerId !== e.pointerId) return;
    e.preventDefault();
    updateHistoryMainColumnFromClientX(e.clientX, false);
  });
  divider.addEventListener("pointerup", (e) => {
    if (!historyDividerDragging || historyDividerDragging.pointerId !== e.pointerId) return;
    e.preventDefault();
    updateHistoryMainColumnFromClientX(e.clientX, false);
    endHistoryDividerDrag(e.pointerId, true);
  });
  divider.addEventListener("pointercancel", (e) => {
    if (!historyDividerDragging || historyDividerDragging.pointerId !== e.pointerId) return;
    endHistoryDividerDrag(e.pointerId, true);
  });
  divider.addEventListener("lostpointercapture", () => {
    endHistoryDividerDrag(null, true);
  });
  divider.addEventListener("keydown", (e) => {
    const step = e.shiftKey ? 5 : 1;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setHistoryMainColumnPercent(getHistoryMainColumnPercent() - step, true);
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setHistoryMainColumnPercent(getHistoryMainColumnPercent() + step, true);
      return;
    }
    if (e.key === "Home") {
      e.preventDefault();
      setHistoryMainColumnPercent(20, true);
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      setHistoryMainColumnPercent(70, true);
    }
  });
}

function renderMiscSettingInputs() {
  if (!ui.miscSettingList) return;
  const activeTab = normalizeMiscSettingTabKey(activeMiscSettingTab);
  activeMiscSettingTab = activeTab;

  if (ui.miscTabBar) {
    ui.miscTabBar.innerHTML = "";
    for (const tab of MISC_SETTING_TABS) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `misc-tab${tab.key === activeTab ? " active" : ""}`;
      btn.textContent = tab.label;
      btn.dataset.miscTab = tab.key;
      btn.addEventListener("click", () => {
        if (tab.key === activeMiscSettingTab) return;
        syncUiSettingsFromInputs();
        activeMiscSettingTab = tab.key;
        renderMiscSettingInputs();
      });
      ui.miscTabBar.appendChild(btn);
    }
  }

  ui.miscSettingList.innerHTML = "";

  const appendSelectSettingRow = (def) => {
    const row = document.createElement("div");
    row.className = "misc-setting-number-row";

    const label = document.createElement("label");
    label.className = "misc-setting-number-label";
    label.textContent = def.label;
    row.appendChild(label);

    const select = document.createElement("select");
    select.className = "misc-setting-number-input";
    select.dataset.settingKey = def.key;
    const options = Array.isArray(def.options) ? def.options : [];
    const current = getUiSettingSelect(def.key, def.defaultValue);
    for (const rawOpt of options) {
      const optVal = String(rawOpt || "");
      const op = document.createElement("option");
      op.value = optVal;
      op.textContent = optVal;
      if (optVal === current) op.selected = true;
      select.appendChild(op);
    }
    row.appendChild(select);

    if (def.note) {
      const note = document.createElement("small");
      note.className = "misc-setting-note";
      note.textContent = def.note;
      row.appendChild(note);
    }
    ui.miscSettingList.appendChild(row);
  };

  const appendNumberSettingRow = (def) => {
    const row = document.createElement("div");
    row.className = "misc-setting-number-row";

    const label = document.createElement("label");
    label.className = "misc-setting-number-label";
    label.textContent = def.label;
    row.appendChild(label);

    const input = document.createElement("input");
    input.type = "number";
    input.className = "misc-setting-number-input";
    input.dataset.settingKey = def.key;
    if (Number.isFinite(def.min)) input.min = String(def.min);
    if (Number.isFinite(def.max)) input.max = String(def.max);
    if (Number.isFinite(def.step)) input.step = String(def.step);
    input.value = String(getUiSettingNumber(def.key, def.defaultValue));
    row.appendChild(input);

    if (def.note) {
      const note = document.createElement("small");
      note.className = "misc-setting-note";
      note.textContent = def.note;
      row.appendChild(note);
    }
    ui.miscSettingList.appendChild(row);
  };

  const appendBooleanSettingRow = (def) => {
    const label = document.createElement("label");
    label.className = "rule-flag misc-setting-row";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.dataset.settingKey = def.key;
    let checked = Boolean(uiSettings[def.key]);
    if (def.key === "detect_sennichite" && typeof state?.rules?.detect_sennichite === "boolean") {
      checked = Boolean(state.rules.detect_sennichite);
      if (uiSettings && typeof uiSettings === "object") {
        uiSettings.detect_sennichite = checked;
      }
    }
    input.checked = checked;

    const textWrap = document.createElement("span");
    textWrap.className = "misc-setting-text";
    const title = document.createElement("span");
    title.textContent = def.label;
    textWrap.appendChild(title);
    if (def.note) {
      const note = document.createElement("small");
      note.className = "misc-setting-note";
      note.textContent = ` (${def.note})`;
      textWrap.appendChild(note);
    }

    label.appendChild(input);
    label.appendChild(textWrap);
    ui.miscSettingList.appendChild(label);
    if (def.key === "show_attack_overlay") {
      input.addEventListener("change", () => {
        syncUiSettingsFromInputs();
        renderMiscSettingInputs();
      });
    }
  };

  const panelTitle = document.createElement("div");
  panelTitle.className = "misc-section-title";
  panelTitle.textContent = activeTab === "attack" ? "利き表示" : (MISC_SETTING_TAB_LABELS[activeTab] || "表示");
  ui.miscSettingList.appendChild(panelTitle);

  const baseDefs = UI_SETTING_DEFS.filter(
    (def) => !def.hideInMisc && localMiscSettingTabKeyForDef(def) === activeTab,
  );
  for (const def of baseDefs) {
    if (def.type === "number") {
      appendNumberSettingRow(def);
      continue;
    }
    if (def.type === "select") {
      appendSelectSettingRow(def);
      continue;
    }
    if (def.type === "boolean") {
      appendBooleanSettingRow(def);
    }
  }

  if (activeTab !== "attack") return;

  const attackOpts = attackOverlayOptions || buildDefaultAttackOverlayOptions();
  const overlayEnabled = Boolean(uiSettings?.show_attack_overlay);
  for (const def of ATTACK_OVERLAY_SETTING_DEFS) {
    const label = document.createElement("label");
    label.className = "rule-flag misc-setting-row";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.dataset.attackKey = def.key;
    input.checked = Boolean(attackOpts[def.key]);
    input.disabled = !overlayEnabled;

    const textWrap = document.createElement("span");
    textWrap.className = "misc-setting-text";
    const marker = document.createElement("span");
    marker.className = "attack-setting-marker attack-legend-icon";
    switch (def.key) {
      case "show_attacker_pieces":
        addAttackLegendDot(marker, 0, "small");
        break;
      case "arrow_attacker_pieces":
        addAttackLegendArrow(marker, 0);
        break;
      case "show_defender_pieces":
        addAttackLegendDot(marker, 1, "small");
        break;
      case "arrow_defender_pieces":
        addAttackLegendArrow(marker, 1);
        break;
      case "show_attacker_king":
        addAttackLegendDot(marker, 0, "large");
        break;
      case "show_defender_king":
        addAttackLegendDot(marker, 1, "large");
        break;
      default:
        break;
    }
    textWrap.appendChild(marker);
    const title = document.createElement("span");
    title.textContent = def.label;
    textWrap.appendChild(title);
    if (def.note) {
      const note = document.createElement("small");
      note.className = "misc-setting-note";
      note.textContent = ` (${def.note})`;
      textWrap.appendChild(note);
    }

    label.appendChild(input);
    label.appendChild(textWrap);
    ui.miscSettingList.appendChild(label);
  }
}

function syncUiSettingsFromInputs() {
  if (!ui.miscSettingList) return;
  const next = normalizeUiSettings(uiSettings);
  const settingInputs = ui.miscSettingList.querySelectorAll("[data-setting-key]");
  for (const input of settingInputs) {
    const key = input.dataset?.settingKey;
    if (!Object.prototype.hasOwnProperty.call(next, key)) continue;
    const def = UI_SETTING_DEF_MAP.get(key);
    if (!def) continue;
    if (def.type === "number") {
      next[key] = normalizeUiSettingNumber(def, input.value, next[key]);
      continue;
    }
    if (def.type === "select") {
      next[key] = normalizeUiSettingSelect(def, input.value, next[key]);
      continue;
    }
    next[key] = Boolean(input.checked);
  }
  uiSettings = normalizeUiSettings(next);

  const nextAttack = normalizeAttackOverlayOptions(attackOverlayOptions || {});
  const attackInputs = ui.miscSettingList.querySelectorAll("input[type='checkbox'][data-attack-key]");
  for (const input of attackInputs) {
    const key = input.dataset.attackKey;
    if (!Object.prototype.hasOwnProperty.call(nextAttack, key)) continue;
    nextAttack[key] = Boolean(input.checked);
  }
  attackOverlayOptions = normalizeAttackOverlayOptions(nextAttack);
}

function closeMiscDialog() {
  if (ui.miscDialog?.open) ui.miscDialog.close();
}

function openMiscDialog() {
  if (!ui.miscDialog) return;
  renderMiscSettingInputs();
  if (!ui.miscDialog.open) ui.miscDialog.showModal();
}

function closeHelpDialog() {
  if (ui.helpDialog?.open) ui.helpDialog.close();
}

function openHelpDialog() {
  if (!ui.helpDialog) return;
  if (!ui.helpDialog.open) ui.helpDialog.showModal();
}

function closeCustomFairyDialog() {
  if (ui.customFairyVectorBoardDialog?.open) ui.customFairyVectorBoardDialog.close();
  if (ui.customFairyDialog?.open) ui.customFairyDialog.close();
}

function closeCustomFairyVectorBoardDialog() {
  if (ui.customFairyVectorBoardDialog?.open) ui.customFairyVectorBoardDialog.close();
}

function fitVectorBoardCellSize(boardEl, kind = "viewer") {
  if (!boardEl) return;
  const vw = Math.max(320, Number(window.innerWidth) || 0);
  const vh = Math.max(320, Number(window.innerHeight) || 0);
  const widthBudget = Math.max(180, Math.floor(vw * 0.96) - 72);
  const heightPad = kind === "viewer" ? 260 : 210;
  const heightBudget = Math.max(180, Math.floor(vh * 0.86) - heightPad);
  const gridLinePx = 20; // 18 gaps + outer 1px * 2
  const raw = Math.min(24, (widthBudget - gridLinePx) / 19, (heightBudget - gridLinePx) / 19);
  const px = Math.max(12, Math.floor(raw));
  boardEl.style.setProperty("--vector-cell-size", `${px}px`);
}

function syncVectorBoardCellSizes() {
  fitVectorBoardCellSize(ui.customFairyVectorBoard, "custom");
  fitVectorBoardCellSize(ui.fairyMoveViewerBoard, "viewer");
}

function openCustomFairyVectorBoardDialog() {
  if (!ui.customFairyVectorBoardDialog) return;
  updateCustomFairyVectorPreview();
  syncVectorBoardCellSizes();
  if (ui.customFairyVectorBoardDialog.open) return;
  try {
    ui.customFairyVectorBoardDialog.showModal();
  } catch (_e) {
    ui.customFairyVectorBoardDialog.show();
  }
}

function syncCustomFairyDialogMoveMode() {
  const mode = normalizeCustomMoveMode(ui.customFairyMoveModeSelect?.value);
  if (ui.customFairyMoveModeSelect && ui.customFairyMoveModeSelect.value !== mode) {
    ui.customFairyMoveModeSelect.value = mode;
  }
  const isCopy = mode === "copy_from";
  if (ui.customFairyCopyFromWrap) ui.customFairyCopyFromWrap.hidden = !isCopy;
  if (ui.customFairyVectorsWrap) ui.customFairyVectorsWrap.hidden = isCopy;
  if (!isCopy) updateCustomFairyVectorPreview();
}

function openCustomFairyDialog(editPieceName = null) {
  if (!ui.customFairyDialog) return;
  setCustomVectorPresetActive("");
  if (ui.customFairyMoveSelect) {
    const moveNames = buildMoveLikeCandidateNames();
    const curr = ui.customFairyMoveSelect.value || "";
    ui.customFairyMoveSelect.innerHTML = "";
    for (const name of moveNames) {
      const op = document.createElement("option");
      op.value = name;
      op.textContent = `${displayNameForName(name)} (${name})`;
      ui.customFairyMoveSelect.appendChild(op);
    }
    if (curr && moveNames.includes(curr)) {
      ui.customFairyMoveSelect.value = curr;
    }
  }
  if (ui.customFairyMoveModeSelect && !ui.customFairyMoveModeSelect.value) {
    ui.customFairyMoveModeSelect.value = "copy_from";
  }
  syncCustomFairyDialogMoveMode();
  const editName = String(editPieceName || "").trim();
  if (editName) {
    const target = getUiAddedCustomPieceByName(editName);
    if (target) {
      applyCustomFairyDialogValuesFromPiece(target);
    } else {
      logLine(`再編集対象が見つかりません: ${editName}`, true);
    }
  }
  updateCustomFairyVectorPreview();
  if (!ui.customFairyDialog.open) ui.customFairyDialog.showModal();
}

async function applyUiSettings() {
  const prevAttackKey = JSON.stringify(attackOverlayOptions || {});
  const prevDetectSennichite = Boolean(state?.rules?.detect_sennichite);
  syncUiSettingsFromInputs();
  saveUiSettings();
  const nextDetectSennichite = isUiSettingEnabled("detect_sennichite", prevDetectSennichite);
  if (sessionId && prevDetectSennichite !== nextDetectSennichite) {
    const envRules = await currentEngine().patchRules(sessionId, revision, {
      detect_sennichite: nextDetectSennichite,
    });
    applyStateEnvelope(envRules);
  }
  applyHistoryMainColumnSetting();
  applyBoardPieceScaleSettings();
  saveAttackOverlayOptions();
  if (JSON.stringify(attackOverlayOptions || {}) !== prevAttackKey) {
    invalidateAttackOverlayCache();
  }
  await refreshLegal();
  await refreshHistory();
  if (historyPlayRunning) {
    scheduleHistoryPlaybackTick();
  }
  renderAll();
  logLine("各種設定を適用");
}

function applyPanelVisibility(isEdit) {
  const showHistory = isUiSettingEnabled("show_history_panel", true);
  const showLegal = isUiSettingEnabled("show_legal_panel", true);
  const showLog = isUiSettingEnabled("show_log_panel", true);

  if (ui.historyPanel) ui.historyPanel.hidden = isEdit || !showHistory;
  if (ui.legalPanel) ui.legalPanel.hidden = isEdit || !showLegal;
  if (ui.logPanel) ui.logPanel.hidden = !showLog;
  if (ui.pieceBoxSidePanel) ui.pieceBoxSidePanel.hidden = !isEdit;
}

function applyBoardPieceScaleSettings() {
  if (IS_WORKER_CONTEXT || typeof document === "undefined") return;
  const root = document.documentElement;
  if (!root) return;
  const boardScale = getUiSettingNumber("board_scale_percent", 100) / 100;
  const pieceScale = getUiSettingNumber("piece_scale_percent", 100) / 100;
  root.style.setProperty("--board-scale", String(boardScale));
  root.style.setProperty("--piece-scale", String(pieceScale));
}

uiSettings = loadUiSettings();
if (!IS_WORKER_CONTEXT) {
  applyHistoryMainColumnSetting();
  applyBoardPieceScaleSettings();
}

function buildDefaultAttackOverlayOptions() {
  return {
    show_attacker_pieces: false,
    show_defender_pieces: false,
    show_attacker_king: false,
    show_defender_king: false,
    arrow_attacker_pieces: false,
    arrow_defender_pieces: false,
  };
}

function normalizeAttackOverlayOptions(raw) {
  const out = buildDefaultAttackOverlayOptions();
  if (!raw || typeof raw !== "object") return out;
  for (const key of Object.keys(out)) {
    if (typeof raw[key] === "boolean") out[key] = raw[key];
  }
  return out;
}

function loadAttackOverlayOptions() {
  try {
    const raw = window.localStorage.getItem(ATTACK_OVERLAY_STORAGE_KEY);
    if (!raw) return buildDefaultAttackOverlayOptions();
    return normalizeAttackOverlayOptions(JSON.parse(raw));
  } catch (_e) {
    return buildDefaultAttackOverlayOptions();
  }
}

function saveAttackOverlayOptions() {
  try {
    window.localStorage.setItem(ATTACK_OVERLAY_STORAGE_KEY, JSON.stringify(attackOverlayOptions));
  } catch (_e) {
    // Ignore local storage failures.
  }
}

function invalidateAttackOverlayCache() {
  attackOverlayData = null;
  attackOverlayCacheKey = "";
  attackOverlayInFlightKey = "";
}

function hasAnyAttackOverlayFlagEnabled() {
  if (!isUiSettingEnabled("show_attack_overlay", true)) return false;
  if (!attackOverlayOptions) return false;
  return Object.values(attackOverlayOptions).some((v) => Boolean(v));
}

function buildAttackOverlayRequestParams() {
  const p = new URLSearchParams();
  const o = attackOverlayOptions || buildDefaultAttackOverlayOptions();
  for (const [k, v] of Object.entries(o)) {
    p.set(k, v ? "true" : "false");
  }
  return p;
}

function attackOverlayRequestKey() {
  if (!sessionId || !state) return "";
  const p = buildAttackOverlayRequestParams();
  return `${sessionId}:${revision}:${state.mode}:${p.toString()}`;
}

attackOverlayOptions = loadAttackOverlayOptions();

function applyMiscDialogLabels() {
  if (ui.btnMiscDialogOpen) ui.btnMiscDialogOpen.textContent = "\u5404\u7a2e\u8a2d\u5b9a";
  if (ui.btnMiscApply) ui.btnMiscApply.textContent = "\u9069\u7528";
  if (ui.btnMiscDialogClose) ui.btnMiscDialogClose.textContent = "\u9589\u3058\u308b";
  const title = ui.miscDialog ? ui.miscDialog.querySelector("h3") : null;
  if (title) title.textContent = "\u5404\u7a2e\u8a2d\u5b9a";
}

function logLine(text, isError = false) {
  const stamp = new Date().toLocaleTimeString("ja-JP", { hour12: false });
  logs.unshift(`[${stamp}] ${isError ? "ERROR: " : ""}${text}`);
  while (logs.length > 120) logs.pop();
  if (ui.logArea) ui.logArea.textContent = logs.join("\n");
}

function currentLegalRejectKey() {
  return `${String(sessionId || "")}:${Number(revision || 0)}`;
}

function legalMoveSignatureForReject(mv) {
  if (!mv || typeof mv !== "object") return "";
  const kind = String(mv.kind || "");
  if (kind === "move") {
    const from = mv.from ? `${Number(mv.from.x)},${Number(mv.from.y)}` : "-";
    const to = mv.to ? `${Number(mv.to.x)},${Number(mv.to.y)}` : "-";
    const rb =
      mv.rebirth && localInBoard(Number(mv.rebirth.x), Number(mv.rebirth.y))
        ? `${Number(mv.rebirth.x)},${Number(mv.rebirth.y)}`
        : "-";
    const step =
      mv?.take_make?.step_to && localInBoard(Number(mv.take_make.step_to.x), Number(mv.take_make.step_to.y))
        ? `${Number(mv.take_make.step_to.x)},${Number(mv.take_make.step_to.y)}`
        : "-";
    const capAt =
      mv?.take_make?.capture_at && localInBoard(Number(mv.take_make.capture_at.x), Number(mv.take_make.capture_at.y))
        ? `${Number(mv.take_make.capture_at.x)},${Number(mv.take_make.capture_at.y)}`
        : "-";
    return [
      "m",
      Number(mv.owner),
      String(mv.name || ""),
      from,
      to,
      mv.promote ? "p1" : "p0",
      mv.messigny_swap ? "ms1" : "ms0",
      `rb=${rb}`,
      `st=${step}`,
      `cap=${capAt}`,
    ].join("|");
  }
  if (kind === "drop") {
    const to = mv.to ? `${Number(mv.to.x)},${Number(mv.to.y)}` : "-";
    const token = String(mv.hand_token || mv.name || "");
    return ["d", Number(mv.owner), token, to].join("|");
  }
  return "";
}

function pruneRejectedLegalCache() {
  while (rejectedLegalByPosition.size > REJECTED_LEGAL_BY_POSITION_MAX) {
    const it = rejectedLegalByPosition.keys().next();
    if (it.done) break;
    rejectedLegalByPosition.delete(it.value);
  }
}

function getRejectedLegalSet(key = currentLegalRejectKey()) {
  const k = String(key || "");
  if (!k) return null;
  let set = rejectedLegalByPosition.get(k);
  if (!(set instanceof Set)) {
    set = new Set();
    rejectedLegalByPosition.set(k, set);
    pruneRejectedLegalCache();
  }
  return set;
}

function markRejectedLegalMove(mv) {
  const sig = legalMoveSignatureForReject(mv);
  if (!sig) return;
  const set = getRejectedLegalSet();
  if (!set) return;
  set.add(sig);
}

function filterRejectedLegalMoves(moves) {
  const arr = Array.isArray(moves) ? moves : [];
  if (arr.length <= 0) return [];
  const set = rejectedLegalByPosition.get(currentLegalRejectKey());
  if (!(set instanceof Set) || set.size <= 0) return arr;
  return arr.filter((mv) => !set.has(legalMoveSignatureForReject(mv)));
}

async function api(path, options = {}, internal = {}) {
  const init = { method: options.method || "GET", headers: {} };
  if (options.body !== undefined) {
    init.headers["Content-Type"] = "application/json";
    init.body = JSON.stringify(options.body);
  }

  let res;
  try {
    res = await fetch(path, init);
  } catch (e) {
    throw new Error(`Network error: ${e.message || e}`);
  }

  let payload = null;
  try {
    payload = await res.json();
  } catch (_e) {
    throw new Error(`JSON parse failed (${res.status})`);
  }

  if (!res.ok || !payload?.ok) {
    const err = payload?.error;
    if (!internal.skipSessionRecovery && err?.code === "SESSION_NOT_FOUND" && canAutoRecoverSession(path)) {
      await recoverSessionIfMissing();
      const retryPath = replaceSessionIdInPath(path, sessionId);
      const retryOptions = buildRetryOptions(options);
      return await api(retryPath, retryOptions, { skipSessionRecovery: true });
    }
    const msg = err ? `${err.code}: ${err.message}` : `HTTP ${res.status}`;
    const e = new Error(msg);
    e.apiCode = err?.code || null;
    e.apiMessage = err?.message || msg;
    e.apiDetails = err?.details || null;
    e.httpStatus = res.status;
    throw e;
  }
  return payload;
}

function createHttpEngine() {
  return {
    kind: "http",
    postWithRevision: (path, expectedRevision, body = {}) =>
      api(path, {
        method: "POST",
        body: { expected_revision: expectedRevision, ...body },
      }),
    fetchMeta: () => api("/api/v1/meta/rules"),
    createSession: (preset) =>
      api("/api/v1/sessions", {
        method: "POST",
        body: { initial: { preset } },
      }),
    getSession: (sid) => api(`/api/v1/sessions/${sid}`),
    patchRules: (sid, expectedRevision, rules) =>
      api(`/api/v1/sessions/${sid}/rules`, {
        method: "PATCH",
        body: { expected_revision: expectedRevision, rules },
      }),
    patchMode: (sid, expectedRevision, mode) =>
      api(`/api/v1/sessions/${sid}/mode`, {
        method: "PATCH",
        body: { expected_revision: expectedRevision, mode },
      }),
    getLegalAll: (sid) => api(`/api/v1/sessions/${sid}/legal/all?include_status=true`),
    getLegalPiece: (sid, x, y) => api(`/api/v1/sessions/${sid}/legal/piece/${x}/${y}`),
    getLegalHand: (sid, owner, name) => api(`/api/v1/sessions/${sid}/legal/hand/${owner}/${encodeURIComponent(name)}`),
    getHistoryTree: (sid) => api(`/api/v1/sessions/${sid}/history/tree`),
    getAttackOverlay: (sid, params) => api(`/api/v1/sessions/${sid}/analysis/attacks?${params.toString()}`),
    applyMove: (sid, body) =>
      api(`/api/v1/sessions/${sid}/moves`, {
        method: "POST",
        body,
      }),
    applyDrop: (sid, body) =>
      api(`/api/v1/sessions/${sid}/drops`, {
        method: "POST",
        body,
      }),
    historySelect: (sid, expectedRevision, nodeId) =>
      api(`/api/v1/sessions/${sid}/history/select`, {
        method: "POST",
        body: { expected_revision: expectedRevision, node_id: nodeId },
      }),
    historyAction: (sid, kind, expectedRevision, queryParams = null) => {
      const query = queryParams ? `?${queryParams.toString()}` : "";
      return api(`/api/v1/sessions/${sid}/history/${kind}${query}`, {
        method: "POST",
        body: { expected_revision: expectedRevision },
      });
    },
    historyRepeatApply: (sid, expectedRevision, payload) =>
      api(`/api/v1/sessions/${sid}/history/repeat-apply`, {
        method: "POST",
        body: { expected_revision: expectedRevision, ...payload },
      }),
    historyPromoteBranch: (sid, expectedRevision, nodeId) =>
      api(`/api/v1/sessions/${sid}/history/promote-branch`, {
        method: "POST",
        body: { expected_revision: expectedRevision, node_id: nodeId },
      }),
    historyDeleteBranch: (sid, expectedRevision, nodeId) =>
      api(`/api/v1/sessions/${sid}/history/delete-branch`, {
        method: "POST",
        body: { expected_revision: expectedRevision, node_id: nodeId },
      }),
    historyAddTerminal: (sid, expectedRevision, result) =>
      api(`/api/v1/sessions/${sid}/history/add-terminal`, {
        method: "POST",
        body: { expected_revision: expectedRevision, result },
      }),
    ioLoadSfen: (sid, expectedRevision, sfen) =>
      api(`/api/v1/sessions/${sid}/io/load-sfen`, {
        method: "POST",
        body: { expected_revision: expectedRevision, sfen },
      }),
    ioLoadKifu: (sid, expectedRevision, kifu, options = {}) => {
      const opt = options && typeof options === "object" ? options : {};
      const body = { expected_revision: expectedRevision, kifu };
      if (opt.moves_only) body.moves_only = true;
      return api(`/api/v1/sessions/${sid}/io/load-kifu`, {
        method: "POST",
        body,
      });
    },
    ioExportSfen: (sid) => api(`/api/v1/sessions/${sid}/io/export-sfen`),
    ioExportKifuText: (sid) => api(`/api/v1/sessions/${sid}/io/export-kifu?format=text`),
  };
}

function normalizeMetaSourcePayload(payload) {
  if (payload && typeof payload === "object") {
    if (payload.data && typeof payload.data === "object" && payload.data.meta && typeof payload.data.meta === "object") {
      return payload.data.meta;
    }
    if (
      Array.isArray(payload.rule_keys) &&
      payload.rule_labels &&
      typeof payload.rule_labels === "object" &&
      payload.display_names &&
      typeof payload.display_names === "object"
    ) {
      return payload;
    }
  }
  return null;
}

const CUSTOM_MOVE_SPEC_TYPE_MAP = Object.freeze({
  copy: "copy_from",
  copy_from: "copy_from",
  leap: "step",
  leaper: "step",
  step: "step",
  rider: "slide",
  slider: "slide",
  slide: "slide",
  hopper: "hopper",
});

function normalizeCustomMoveMode(raw) {
  const mode = String(raw || "").trim().toLowerCase();
  if (mode === "leaper" || mode === "step") return "leaper";
  if (mode === "rider" || mode === "slide") return "rider";
  if (mode === "hopper") return "hopper";
  return "copy_from";
}

function normalizeCustomMoveVectors(rawVectors) {
  const vecs = [];
  const pushVec = (dxRaw, dyRaw) => {
    const dx = Number.parseInt(dxRaw, 10);
    const dy = Number.parseInt(dyRaw, 10);
    if (!Number.isFinite(dx) || !Number.isFinite(dy)) return;
    if (dx === 0 && dy === 0) return;
    if (Math.abs(dx) > CUSTOM_VECTOR_BOARD_RADIUS || Math.abs(dy) > CUSTOM_VECTOR_BOARD_RADIUS) return;
    vecs.push([dx, dy]);
  };

  if (Array.isArray(rawVectors)) {
    for (const row of rawVectors) {
      if (Array.isArray(row) && row.length >= 2) {
        pushVec(row[0], row[1]);
      } else if (row && typeof row === "object") {
        pushVec(row.dx, row.dy);
      }
    }
  } else if (typeof rawVectors === "string") {
    const nums = rawVectors.match(/-?\d+/g) || [];
    for (let i = 0; i + 1 < nums.length; i += 2) {
      pushVec(nums[i], nums[i + 1]);
    }
  }

  const uniq = [];
  const seen = new Set();
  for (const [dx, dy] of vecs) {
    const key = `${dx},${dy}`;
    if (seen.has(key)) continue;
    seen.add(key);
    uniq.push([dx, dy]);
  }
  return uniq;
}

function normalizeCustomMoveSpec(rawMoveSpec) {
  if (!rawMoveSpec || typeof rawMoveSpec !== "object") return null;
  const rawType = String(rawMoveSpec.type || "").trim().toLowerCase();
  const mappedType = CUSTOM_MOVE_SPEC_TYPE_MAP[rawType] || "";
  if (!mappedType) return null;

  if (mappedType === "copy_from") {
    const rawFrom = String(rawMoveSpec.from ?? rawMoveSpec.copy_from ?? rawMoveSpec.name ?? "").trim();
    if (!rawFrom) return null;
    return { type: "copy_from", from: rawFrom };
  }

  const vectors = normalizeCustomMoveVectors(rawMoveSpec.vectors);
  if (vectors.length <= 0) return null;
  return { type: mappedType, vectors };
}

function formatCustomVectorsForLog(vectors) {
  const arr = Array.isArray(vectors) ? vectors : [];
  return arr.map((v) => `${Number(v?.[0] || 0)},${Number(v?.[1] || 0)}`).join(" ");
}

const CUSTOM_VECTOR_PRESETS = Object.freeze({
  king: [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ],
  rook: [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ],
  bishop: [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ],
  knight: [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
  ],
  dabbaba: [
    [2, 0],
    [-2, 0],
    [0, 2],
    [0, -2],
  ],
});

function getCustomFairyVectorCenterLabel() {
  const display = String(ui.customFairyDisplayInput?.value || "").trim();
  if (display) return display.slice(0, 2);
  const name = String(ui.customFairyNameInput?.value || "").trim();
  if (name) return name.slice(0, 2);
  return "駒";
}

function ensureCustomFairyVectorBoard() {
  if (!ui.customFairyVectorBoard) return;
  if (ui.customFairyVectorBoard.dataset.built === "1") return;
  const frag = document.createDocumentFragment();
  for (let dy = -CUSTOM_VECTOR_BOARD_RADIUS; dy <= CUSTOM_VECTOR_BOARD_RADIUS; dy += 1) {
    for (let dx = -CUSTOM_VECTOR_BOARD_RADIUS; dx <= CUSTOM_VECTOR_BOARD_RADIUS; dx += 1) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "misc-fairy-vector-board-cell";
      cell.dataset.dx = String(dx);
      cell.dataset.dy = String(dy);
      if (dx === 0 && dy === 0) {
        cell.classList.add("center");
        cell.dataset.center = "1";
      } else {
        cell.title = `dx=${dx}, dy=${dy}`;
        cell.setAttribute("aria-label", `dx=${dx}, dy=${dy}`);
      }
      frag.appendChild(cell);
    }
  }
  ui.customFairyVectorBoard.innerHTML = "";
  ui.customFairyVectorBoard.appendChild(frag);
  ui.customFairyVectorBoard.dataset.built = "1";
}

function updateCustomFairyVectorBoardCenter() {
  if (!ui.customFairyVectorBoard) return;
  ensureCustomFairyVectorBoard();
  const center = ui.customFairyVectorBoard.querySelector(".misc-fairy-vector-board-cell.center");
  if (center) center.textContent = getCustomFairyVectorCenterLabel();
}

function customFairyVectorGcd(a, b) {
  let x = Math.abs(Number(a) || 0);
  let y = Math.abs(Number(b) || 0);
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x || 1;
}

function normalizeCustomFairyBoardVectorByMode(dxRaw, dyRaw) {
  const mode = normalizeCustomMoveMode(ui.customFairyMoveModeSelect?.value);
  const dx = Number.parseInt(dxRaw, 10);
  const dy = Number.parseInt(dyRaw, 10);
  if (!Number.isFinite(dx) || !Number.isFinite(dy)) return [dx, dy];
  if (mode !== "rider" && mode !== "hopper") return [dx, dy];
  const g = customFairyVectorGcd(dx, dy);
  if (g <= 1) return [dx, dy];
  return [Math.trunc(dx / g), Math.trunc(dy / g)];
}

function collectCustomFairyBoardReachableKeys(vectors, mode) {
  const out = new Set();
  if (!Array.isArray(vectors) || vectors.length <= 0) return out;
  const normalizedMode = normalizeCustomMoveMode(mode);
  if (normalizedMode === "leaper") {
    for (const [dx, dy] of vectors) {
      out.add(`${dx},${dy}`);
    }
    return out;
  }
  if (normalizedMode === "rider" || normalizedMode === "hopper") {
    for (const [dx, dy] of vectors) {
      if (!dx && !dy) continue;
      let tx = dx;
      let ty = dy;
      let guard = 0;
      while (Math.abs(tx) <= CUSTOM_VECTOR_BOARD_RADIUS && Math.abs(ty) <= CUSTOM_VECTOR_BOARD_RADIUS && guard < 64) {
        out.add(`${tx},${ty}`);
        tx += dx;
        ty += dy;
        guard += 1;
      }
    }
  }
  return out;
}

function updateCustomFairyVectorBoardModeHint(modeRaw) {
  const mode = normalizeCustomMoveMode(modeRaw);
  if (ui.customFairyVectorBoard) ui.customFairyVectorBoard.dataset.mode = mode;
  if (!ui.customFairyVectorBoardCaption) return;
  if (mode === "leaper") {
    ui.customFairyVectorBoardCaption.textContent = "Leaper: クリックしたマスがそのまま移動先";
    return;
  }
  if (mode === "rider") {
    ui.customFairyVectorBoardCaption.textContent = "Rider: クリック方向を設定（同一直線が利き）";
    return;
  }
  if (mode === "hopper") {
    ui.customFairyVectorBoardCaption.textContent = "Hopper: クリック方向を設定（飛び越し方向）";
    return;
  }
  ui.customFairyVectorBoardCaption.textContent = "中心の駒から動けるマスをクリックで追加/解除";
}

function updateCustomFairyVectorBoardSelection(vectorsRaw = null) {
  if (!ui.customFairyVectorBoard) return;
  ensureCustomFairyVectorBoard();
  const mode = normalizeCustomMoveMode(ui.customFairyMoveModeSelect?.value);
  updateCustomFairyVectorBoardModeHint(mode);
  const vectors =
    vectorsRaw === null
      ? normalizeCustomMoveVectors(ui.customFairyVectorsInput?.value || "")
      : normalizeCustomMoveVectors(vectorsRaw);
  const selected = new Set(vectors.map(([dx, dy]) => `${dx},${dy}`));
  const reachable = collectCustomFairyBoardReachableKeys(vectors, mode);
  const cells = ui.customFairyVectorBoard.querySelectorAll(".misc-fairy-vector-board-cell");
  for (const cell of cells) {
    if (cell.dataset.center === "1") continue;
    const key = `${cell.dataset.dx || "0"},${cell.dataset.dy || "0"}`;
    cell.classList.toggle("reachable", reachable.has(key));
    cell.classList.toggle("selected", selected.has(key));
  }
}

function toggleCustomFairyVectorBoardCell(dxRaw, dyRaw) {
  const [dx, dy] = normalizeCustomFairyBoardVectorByMode(dxRaw, dyRaw);
  if (!Number.isFinite(dx) || !Number.isFinite(dy)) return;
  if (dx === 0 && dy === 0) return;
  if (Math.abs(dx) > CUSTOM_VECTOR_BOARD_RADIUS || Math.abs(dy) > CUSTOM_VECTOR_BOARD_RADIUS) return;
  if (ui.customFairyDxInput) ui.customFairyDxInput.value = String(dx);
  if (ui.customFairyDyInput) ui.customFairyDyInput.value = String(dy);
  const base = normalizeCustomMoveVectors(ui.customFairyVectorsInput?.value || "");
  const key = `${dx},${dy}`;
  const idx = base.findIndex(([vx, vy]) => `${vx},${vy}` === key);
  if (idx >= 0) {
    base.splice(idx, 1);
  } else {
    base.push([dx, dy]);
  }
  setCustomVectorPresetActive("");
  setCustomFairyVectorsFromArray(base);
}

function fairyMoveViewerPieceNames() {
  const src = Array.isArray(editPieceNames) && editPieceNames.length > 0 ? editPieceNames : Object.keys(LOCAL_PIECE_SPECS || {});
  const out = [];
  const seen = new Set();
  for (const nmRaw of src) {
    const nm = String(nmRaw || "").trim();
    if (!nm) continue;
    if (seen.has(nm)) continue;
    const base = standardBaseName(nm);
    if (STANDARD_COUNTS[base] !== undefined) continue;
    seen.add(nm);
    out.push(nm);
  }
  out.sort((a, b) => {
    const da = displayNameForName(a);
    const db = displayNameForName(b);
    const byDisplay = da.localeCompare(db, "ja");
    if (byDisplay !== 0) return byDisplay;
    return String(a).localeCompare(String(b), "ja");
  });
  return out;
}

function ensureFairyMoveViewerBoard() {
  if (!ui.fairyMoveViewerBoard) return;
  if (ui.fairyMoveViewerBoard.dataset.built === "1") return;
  const frag = document.createDocumentFragment();
  for (let dy = -CUSTOM_VECTOR_BOARD_RADIUS; dy <= CUSTOM_VECTOR_BOARD_RADIUS; dy += 1) {
    for (let dx = -CUSTOM_VECTOR_BOARD_RADIUS; dx <= CUSTOM_VECTOR_BOARD_RADIUS; dx += 1) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "misc-fairy-vector-board-cell";
      cell.dataset.dx = String(dx);
      cell.dataset.dy = String(dy);
      if (dx === 0 && dy === 0) {
        cell.classList.add("center");
        cell.dataset.center = "1";
      } else {
        cell.tabIndex = -1;
      }
      frag.appendChild(cell);
    }
  }
  ui.fairyMoveViewerBoard.innerHTML = "";
  ui.fairyMoveViewerBoard.appendChild(frag);
  ui.fairyMoveViewerBoard.dataset.built = "1";
}

function buildFairyMoveViewerPattern(spec, scenarioRaw = "empty") {
  const selected = new Set();
  const directionVectors = new Set();
  const directionCells = new Map();
  const reachable = new Set();
  const capture = new Set();
  const sampleEnemy = new Set();
  const sampleHurdle = new Set();
  const sampleFriendly = new Set();
  const modes = new Set();
  const unsupported = new Set();
  const scenario = ["empty", "capture", "hop", "mixed"].includes(String(scenarioRaw || ""))
    ? String(scenarioRaw)
    : "empty";
  const scenarioLabel =
    scenario === "capture"
      ? "駒取り例"
      : scenario === "hop"
        ? "飛び越し例"
        : scenario === "mixed"
          ? "統合表示"
          : "空盤";
  let mixedNoHurdleShown = false;
  let mixedFriendlyBlockShown = false;
  let mixedLongLeapEnemyShown = false;
  let mixedLongLeapFriendlyShown = false;
  let mixedHopperEnemyCount = 0;
  let mixedHopperHurdleCount = 0;
  let mixedHopperReachableShown = false;
  const mixedHopperHurdleMax = 5;

  const addCell = (set, dx, dy) => {
    const x = Number(dx);
    const y = Number(dy);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return false;
    if (x === 0 && y === 0) return false;
    if (Math.abs(x) > CUSTOM_VECTOR_BOARD_RADIUS || Math.abs(y) > CUSTOM_VECTOR_BOARD_RADIUS) return false;
    set.add(`${x},${y}`);
    return true;
  };

  const addDirectionVector = (dxRaw, dyRaw) => {
    const dx = Number(dxRaw);
    const dy = Number(dyRaw);
    if (!Number.isFinite(dx) || !Number.isFinite(dy) || (dx === 0 && dy === 0)) return;
    directionVectors.add(`${dx},${dy}`);
  };

  const addDirectionCell = (dxRaw, dyRaw, sxRaw, syRaw) => {
    const dx = Number(dxRaw);
    const dy = Number(dyRaw);
    const sx = Number(sxRaw);
    const sy = Number(syRaw);
    if (!Number.isFinite(dx) || !Number.isFinite(dy)) return;
    if (!Number.isFinite(sx) || !Number.isFinite(sy) || (sx === 0 && sy === 0)) return;
    if (dx === 0 && dy === 0) return;
    if (Math.abs(dx) > CUSTOM_VECTOR_BOARD_RADIUS || Math.abs(dy) > CUSTOM_VECTOR_BOARD_RADIUS) return;
    directionCells.set(`${dx},${dy}`, [sx, sy]);
  };

  const addRay = (set, dx, dy) => {
    if (!dx && !dy) return;
    let tx = Number(dx);
    let ty = Number(dy);
    let guard = 0;
    while (Math.abs(tx) <= CUSTOM_VECTOR_BOARD_RADIUS && Math.abs(ty) <= CUSTOM_VECTOR_BOARD_RADIUS && guard < 64) {
      addCell(set, tx, ty);
      tx += dx;
      ty += dy;
      guard += 1;
    }
  };

  const maxBoardSteps = (dxRaw, dyRaw) => {
    const dx = Number(dxRaw);
    const dy = Number(dyRaw);
    if (!Number.isFinite(dx) || !Number.isFinite(dy) || (dx === 0 && dy === 0)) return 0;
    let step = 0;
    while (step < CUSTOM_VECTOR_BOARD_RADIUS) {
      const nx = dx * (step + 1);
      const ny = dy * (step + 1);
      if (Math.abs(nx) > CUSTOM_VECTOR_BOARD_RADIUS || Math.abs(ny) > CUSTOM_VECTOR_BOARD_RADIUS) break;
      step += 1;
    }
    return step;
  };

  const isCaptureSide = (dxRaw, dyRaw) => {
    const dx = Number(dxRaw);
    const dy = Number(dyRaw);
    if (!Number.isFinite(dx) || !Number.isFinite(dy) || (dx === 0 && dy === 0)) return false;
    return dx > 0 || (dx === 0 && dy < 0);
  };

  const addFromTargets = (part) => {
    const out = [];
    const seen = new Set();
    const pieceMap = new Map();
    localGenerateTargetsBySpec(part, { owner: 0, neutral_orientation_owner: 0 }, pieceMap, 4, 4, out, seen, "move");
    for (const t of out) {
      const dx = Number(t.x) - 4;
      const dy = Number(t.y) - 4;
      if (scenario === "capture") {
        if (addCell(capture, dx, dy)) addCell(sampleEnemy, dx, dy);
      } else {
        addCell(reachable, dx, dy);
      }
    }
    return out.length > 0;
  };

  const addPart = (part) => {
    if (!part || typeof part !== "object") return;
    const type = String(part.type || "").trim();
    if (!type || type === "none" || type === "stone") return;
    if (type === "mixed") {
      for (const sub of part.parts || []) addPart(sub);
      return;
    }

    const vectors = normalizeCustomMoveVectors(part.vectors || []);
    for (const [dx, dy] of vectors) addCell(selected, dx, dy);

    if (type === "step") {
      modes.add("leaper");
      for (const [dx, dy] of vectors) {
        if (scenario === "mixed") {
          const canCapture = !Boolean(part.no_capture);
          if (isCaptureSide(dx, dy)) {
            if (canCapture && addCell(capture, dx, dy)) addCell(sampleEnemy, dx, dy);
          } else {
            addCell(reachable, dx, dy);
          }
        } else if (scenario === "capture") {
          const canCapture = !Boolean(part.no_capture);
          if (canCapture && addCell(capture, dx, dy)) addCell(sampleEnemy, dx, dy);
        } else {
          addCell(reachable, dx, dy);
        }
      }
      return;
    }

    if (type === "slide") {
      modes.add("rider");
      for (const [dx, dy] of vectors) {
        addDirectionVector(dx, dy);
        const isLongLeapRider = Math.max(Math.abs(dx), Math.abs(dy)) > 1;
        if (scenario === "mixed") {
          const canCapture = !Boolean(part.no_capture);
          if (isLongLeapRider) {
            const maxStep = maxBoardSteps(dx, dy);
            const blockStep = Math.min(3, maxStep);
            if (isCaptureSide(dx, dy)) {
              if (!mixedLongLeapEnemyShown && canCapture && blockStep >= 1) {
                mixedLongLeapEnemyShown = true;
                for (let step = 1; step < blockStep; step += 1) {
                  addCell(reachable, dx * step, dy * step);
                }
                if (addCell(sampleEnemy, dx * blockStep, dy * blockStep)) {
                  addCell(capture, dx * blockStep, dy * blockStep);
                }
              } else {
                addRay(reachable, dx, dy);
              }
            } else {
              if (!mixedLongLeapFriendlyShown && blockStep >= 2) {
                mixedLongLeapFriendlyShown = true;
                for (let step = 1; step < blockStep; step += 1) {
                  addCell(reachable, dx * step, dy * step);
                }
                addCell(sampleFriendly, dx * blockStep, dy * blockStep);
              } else {
                addRay(reachable, dx, dy);
              }
            }
            continue;
          }
          if (isCaptureSide(dx, dy)) {
            if (canCapture && addCell(sampleEnemy, dx, dy)) {
              addCell(capture, dx, dy);
            }
          } else {
            addRay(reachable, dx, dy);
          }
        } else if (scenario === "capture") {
          const canCapture = !Boolean(part.no_capture);
          if (canCapture && addCell(sampleEnemy, dx, dy)) {
            addCell(capture, dx, dy);
          }
        } else {
          addRay(reachable, dx, dy);
        }
      }
      return;
    }

    if (type === "pao") {
      modes.add("hopper");
      for (const [dx, dy] of vectors) {
        addDirectionVector(dx, dy);
        if (scenario === "empty") {
          addRay(reachable, dx, dy);
          continue;
        }
        if (scenario === "mixed") {
          if (isCaptureSide(dx, dy)) {
            const hx = dx * 3;
            const hy = dy * 3;
            const lx = hx + dx;
            const ly = hy + dy;
            addCell(sampleHurdle, hx, hy);
            if (addCell(sampleEnemy, lx, ly)) addCell(capture, lx, ly);
            addCell(reachable, dx, dy);
            addCell(reachable, dx * 2, dy * 2);
          } else {
            addRay(reachable, dx, dy);
          }
          continue;
        }
        const hx = dx * 3;
        const hy = dy * 3;
        const lx = hx + dx;
        const ly = hy + dy;
        addCell(sampleHurdle, hx, hy);
        if (scenario === "capture") {
          if (addCell(sampleEnemy, lx, ly)) addCell(capture, lx, ly);
        } else {
          addCell(reachable, lx, ly);
        }
      }
      return;
    }

    if (type === "hopper") {
      modes.add("hopper");
      if (scenario === "empty") return;
      for (const [dx, dy] of vectors) {
        addDirectionVector(dx, dy);
        const hx = dx * 3;
        const hy = dy * 3;
        const lx = hx + dx;
        const ly = hy + dy;
        if (scenario === "mixed") {
          if (!mixedNoHurdleShown && isCaptureSide(dx, dy)) {
            mixedNoHurdleShown = true;
            continue;
          }
          if (isCaptureSide(dx, dy)) {
            if (mixedHopperEnemyCount >= 2) continue;
            if (mixedHopperHurdleCount >= mixedHopperHurdleMax) continue;
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            if (addCell(sampleEnemy, lx, ly)) {
              addCell(capture, lx, ly);
              mixedHopperEnemyCount += 1;
            }
            continue;
          }
          if (!mixedFriendlyBlockShown && mixedHopperHurdleCount < mixedHopperHurdleMax) {
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            addCell(sampleFriendly, lx, ly);
            mixedFriendlyBlockShown = true;
            continue;
          }
          if (!mixedHopperReachableShown && mixedHopperHurdleCount < mixedHopperHurdleMax) {
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            addCell(reachable, lx, ly);
            mixedHopperReachableShown = true;
            continue;
          }
          if (mixedHopperHurdleCount < mixedHopperHurdleMax) {
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            addCell(reachable, lx, ly);
          }
          continue;
        } else if (scenario === "capture") {
          addCell(sampleHurdle, hx, hy);
          if (addCell(sampleEnemy, lx, ly)) addCell(capture, lx, ly);
        } else {
          addCell(sampleHurdle, hx, hy);
          addCell(reachable, lx, ly);
        }
      }
      return;
    }

    if (type === "locust") {
      modes.add("hopper");
      if (scenario === "empty") return;
      for (const [dx, dy] of vectors) {
        addDirectionVector(dx, dy);
        if (scenario === "mixed" && !isCaptureSide(dx, dy)) continue;
        const hx = dx * 3;
        const hy = dy * 3;
        const lx = hx + dx;
        const ly = hy + dy;
        addCell(sampleEnemy, hx, hy);
        if (scenario === "capture" || scenario === "mixed") addCell(capture, lx, ly);
      }
      return;
    }

    if (type === "eagle") {
      modes.add("hopper");
      if (scenario === "empty") return;
      for (const [dx, dy] of vectors) {
        addDirectionVector(dx, dy);
        const hx = dx * 3;
        const hy = dy * 3;
        const turns = [
          [-dy, dx],
          [dy, -dx],
        ];
        const landingCells = turns
          .map((turn) => [hx + Number(turn[0] || 0), hy + Number(turn[1] || 0)])
          .filter(([lx, ly]) => Number.isFinite(lx) && Number.isFinite(ly));
        if (landingCells.length <= 0) continue;
        if (scenario === "mixed") {
          if (!mixedNoHurdleShown && isCaptureSide(dx, dy)) {
            mixedNoHurdleShown = true;
            continue;
          }
          if (isCaptureSide(dx, dy)) {
            if (mixedHopperEnemyCount >= 2) continue;
            if (mixedHopperHurdleCount >= mixedHopperHurdleMax) continue;
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            const landingIndex = mixedHopperEnemyCount % landingCells.length;
            const [lx, ly] = landingCells[landingIndex] || landingCells[0];
            if (addCell(sampleEnemy, lx, ly)) {
              addCell(capture, lx, ly);
              mixedHopperEnemyCount += 1;
            }
            for (let i = 0; i < landingCells.length; i += 1) {
              if (i === landingIndex) continue;
              const [rx, ry] = landingCells[i];
              addCell(reachable, rx, ry);
            }
            continue;
          }
          if (!mixedFriendlyBlockShown && mixedHopperHurdleCount < mixedHopperHurdleMax) {
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            const [fx, fy] = landingCells[0];
            addCell(sampleFriendly, fx, fy);
            for (let i = 1; i < landingCells.length; i += 1) {
              const [rx, ry] = landingCells[i];
              addCell(reachable, rx, ry);
            }
            mixedFriendlyBlockShown = true;
            continue;
          }
          if (!mixedHopperReachableShown && mixedHopperHurdleCount < mixedHopperHurdleMax) {
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            for (const [rx, ry] of landingCells) addCell(reachable, rx, ry);
            mixedHopperReachableShown = true;
            continue;
          }
          if (mixedHopperHurdleCount < mixedHopperHurdleMax) {
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            for (const [lx, ly] of landingCells) addCell(reachable, lx, ly);
          }
          continue;
        }
        addCell(sampleHurdle, hx, hy);
        const captureSide = scenario === "capture";
        if (captureSide) {
          for (const [lx, ly] of landingCells) {
            if (addCell(sampleEnemy, lx, ly)) addCell(capture, lx, ly);
          }
        } else {
          for (const [lx, ly] of landingCells) addCell(reachable, lx, ly);
        }
      }
      return;
    }

    if (type === "bent") {
      modes.add("hopper");
      if (scenario === "empty") return;
      const bentAngle = Number(part?.angle || 90);
      for (const [dx, dy] of vectors) {
        addDirectionVector(dx, dy);
        const hx = dx * 3;
        const hy = dy * 3;
        const turns = localBentTurnVectors(dx, dy, bentAngle);
        const landingCells = turns
          .map((turn) => [hx + Number(turn?.[0] || 0), hy + Number(turn?.[1] || 0)])
          .filter(([lx, ly]) => Number.isFinite(lx) && Number.isFinite(ly));
        if (landingCells.length <= 0) continue;
        if (scenario === "mixed") {
          if (!mixedNoHurdleShown && isCaptureSide(dx, dy)) {
            mixedNoHurdleShown = true;
            continue;
          }
          if (isCaptureSide(dx, dy)) {
            if (mixedHopperEnemyCount >= 2) continue;
            if (mixedHopperHurdleCount >= mixedHopperHurdleMax) continue;
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            const landingIndex = mixedHopperEnemyCount % landingCells.length;
            const [lx, ly] = landingCells[landingIndex] || landingCells[0];
            if (addCell(sampleEnemy, lx, ly)) {
              addCell(capture, lx, ly);
              mixedHopperEnemyCount += 1;
            }
            for (let i = 0; i < landingCells.length; i += 1) {
              if (i === landingIndex) continue;
              const [rx, ry] = landingCells[i];
              addCell(reachable, rx, ry);
            }
            continue;
          }
          if (!mixedFriendlyBlockShown && mixedHopperHurdleCount < mixedHopperHurdleMax) {
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            const [fx, fy] = landingCells[0];
            addCell(sampleFriendly, fx, fy);
            for (let i = 1; i < landingCells.length; i += 1) {
              const [rx, ry] = landingCells[i];
              addCell(reachable, rx, ry);
            }
            mixedFriendlyBlockShown = true;
            continue;
          }
          if (!mixedHopperReachableShown && mixedHopperHurdleCount < mixedHopperHurdleMax) {
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            for (const [rx, ry] of landingCells) addCell(reachable, rx, ry);
            mixedHopperReachableShown = true;
            continue;
          }
          if (mixedHopperHurdleCount < mixedHopperHurdleMax) {
            if (addCell(sampleHurdle, hx, hy)) mixedHopperHurdleCount += 1;
            for (const [lx, ly] of landingCells) addCell(reachable, lx, ly);
          }
          continue;
        }
        addCell(sampleHurdle, hx, hy);
        const captureSide = scenario === "capture";
        if (captureSide) {
          for (const [lx, ly] of landingCells) {
            if (addCell(sampleEnemy, lx, ly)) addCell(capture, lx, ly);
          }
        } else {
          for (const [lx, ly] of landingCells) addCell(reachable, lx, ly);
        }
      }
      return;
    }

    if (type === "rose") {
      modes.add("rider");
      const vecCount = vectors.length;
      if (vecCount <= 0) return;
      for (let startIdx = 0; startIdx < vecCount; startIdx += 1) {
        for (const turnDir of [1, -1]) {
          let cx = 0;
          let cy = 0;
          const visited = new Set(["0,0"]);
          for (let stepI = 0; stepI < 512; stepI += 1) {
            const idx = (startIdx + turnDir * stepI + vecCount * 1024) % vecCount;
            const [vxRaw, vyRaw] = vectors[idx];
            const vx = Number(vxRaw || 0);
            const vy = Number(vyRaw || 0);
            const nx = cx + vx;
            const ny = cy + vy;
            if (!Number.isFinite(nx) || !Number.isFinite(ny)) break;
            if (Math.abs(nx) > CUSTOM_VECTOR_BOARD_RADIUS || Math.abs(ny) > CUSTOM_VECTOR_BOARD_RADIUS) break;
            const nkey = `${nx},${ny}`;
            if (visited.has(nkey)) break;
            addCell(reachable, nx, ny);
            visited.add(nkey);
            cx = nx;
            cy = ny;
            if (nx === 0 && ny === 0) break;
          }
        }
      }
      return;
    }

    if (type === "lion") {
      modes.add("hopper");
      if (scenario === "empty") return;
      for (const [dx, dy] of vectors) {
        addDirectionVector(dx, dy);
        const hx = dx * 3;
        const hy = dy * 3;
        const lx = hx + dx;
        const ly = hy + dy;
        if (scenario === "mixed") {
          if (!mixedNoHurdleShown && isCaptureSide(dx, dy)) {
            mixedNoHurdleShown = true;
            continue;
          }
          addCell(sampleHurdle, hx, hy);
          if (!mixedFriendlyBlockShown && !isCaptureSide(dx, dy)) {
            addCell(sampleFriendly, lx, ly);
            mixedFriendlyBlockShown = true;
            continue;
          }
          if (isCaptureSide(dx, dy)) {
            if (addCell(sampleEnemy, lx, ly)) addCell(capture, lx, ly);
          } else {
            addCell(reachable, lx, ly);
          }
        } else if (scenario === "capture") {
          addCell(sampleHurdle, hx, hy);
          if (addCell(sampleEnemy, lx, ly)) addCell(capture, lx, ly);
        } else {
          addCell(sampleHurdle, hx, hy);
          addCell(reachable, lx, ly);
        }
      }
      return;
    }

    if (type === "kangaroo") {
      modes.add("hopper");
      if (scenario === "empty") return;
      for (const [dx, dy] of vectors) {
        addDirectionVector(dx, dy);
        const h1x = dx * 2;
        const h1y = dy * 2;
        const h2x = dx * 4;
        const h2y = dy * 4;
        const lx = h2x + dx;
        const ly = h2y + dy;
        if (scenario === "mixed") {
          if (!mixedNoHurdleShown && isCaptureSide(dx, dy)) {
            mixedNoHurdleShown = true;
            continue;
          }
          addCell(sampleHurdle, h1x, h1y);
          addCell(sampleHurdle, h2x, h2y);
          if (isCaptureSide(dx, dy)) {
            if (addCell(sampleEnemy, lx, ly)) addCell(capture, lx, ly);
          } else if (!mixedFriendlyBlockShown) {
            addCell(sampleFriendly, lx, ly);
            mixedFriendlyBlockShown = true;
          } else {
            addCell(reachable, lx, ly);
          }
        } else if (scenario === "capture") {
          addCell(sampleHurdle, h1x, h1y);
          addCell(sampleHurdle, h2x, h2y);
          if (addCell(sampleEnemy, lx, ly)) addCell(capture, lx, ly);
        } else {
          addCell(sampleHurdle, h1x, h1y);
          addCell(sampleHurdle, h2x, h2y);
          addCell(reachable, lx, ly);
        }
      }
      return;
    }

    if (type === "zero") {
      modes.add("leaper");
      return;
    }

    if (addFromTargets(part)) {
      modes.add("leaper");
      return;
    }
    unsupported.add(type);
  };

  addPart(spec);
  if (scenario === "mixed" && modes.has("rider")) {
    const blockers = new Set([...sampleEnemy, ...sampleHurdle]);
    for (const key of selected) {
      const [dxRaw, dyRaw] = String(key).split(",");
      const dx = Number(dxRaw);
      const dy = Number(dyRaw);
      if (!Number.isFinite(dx) || !Number.isFinite(dy) || (dx === 0 && dy === 0)) continue;
      if (!isCaptureSide(dx, dy)) continue;
      let hitStep = 0;
      for (let step = 1; step <= CUSTOM_VECTOR_BOARD_RADIUS; step += 1) {
        if (blockers.has(`${dx * step},${dy * step}`)) {
          hitStep = step;
          break;
        }
      }
      if (hitStep <= 1) continue;
      for (let step = 1; step < hitStep; step += 1) {
        addCell(reachable, dx * step, dy * step);
      }
    }
  }
  const mode = modes.has("hopper") ? "hopper" : modes.has("rider") ? "rider" : "leaper";
  const tags = [scenarioLabel];
  if (modes.has("leaper")) tags.push("Leaper");
  if (modes.has("rider")) tags.push("Rider");
  if (modes.has("hopper")) tags.push("Hopper");
  if (unsupported.size > 0) tags.push(`未対応:${Array.from(unsupported).join(",")}`);
  if (reachable.size <= 0 && capture.size <= 0) tags.push("表示対象なし");
  return {
    selected,
    directionVectors,
    directionCells,
    reachable,
    capture,
    sampleEnemy,
    sampleHurdle,
    sampleFriendly,
    mode,
    summary: tags.join(" / "),
  };
}

function fairyMoveViewerCollectSpecTypes(spec, out = new Set()) {
  if (!spec || typeof spec !== "object") return out;
  const type = String(spec.type || "").trim();
  if (!type) return out;
  out.add(type);
  if (type === "mixed") {
    for (const sub of spec.parts || []) fairyMoveViewerCollectSpecTypes(sub, out);
  }
  return out;
}

function fairyMoveViewerHasLongLeapSlideSpec(spec) {
  if (!spec || typeof spec !== "object") return false;
  const type = String(spec.type || "").trim();
  if (type === "slide") {
    const vectors = Array.isArray(spec.vectors) ? spec.vectors : [];
    for (const vec of vectors) {
      const dx = Math.abs(Number(vec?.[0]) || 0);
      const dy = Math.abs(Number(vec?.[1]) || 0);
      if (Math.max(dx, dy) > 1) return true;
    }
  }
  if (type === "mixed") {
    for (const sub of spec.parts || []) {
      if (fairyMoveViewerHasLongLeapSlideSpec(sub)) return true;
    }
  }
  return false;
}

function fairyMoveViewerScenarioText(scenarioRaw = "empty") {
  const scenario = String(scenarioRaw || "empty");
  if (scenario === "mixed") return "総合表示";
  if (scenario === "capture") return "駒取りを見る（敵駒を配置した例）";
  if (scenario === "hop") return "飛び越しを見る（障害駒を配置した例）";
  return "通常移動";
}

function fairyMoveViewerDirectionArrow(dxRaw, dyRaw) {
  const dx = Number(dxRaw);
  const dy = Number(dyRaw);
  if (!Number.isFinite(dx) || !Number.isFinite(dy) || (dx === 0 && dy === 0)) return "・";
  const sx = Math.sign(dx);
  const sy = Math.sign(dy);
  if (sx === 0 && sy < 0) return "↑";
  if (sx > 0 && sy < 0) return "↗";
  if (sx > 0 && sy === 0) return "→";
  if (sx > 0 && sy > 0) return "↘";
  if (sx === 0 && sy > 0) return "↓";
  if (sx < 0 && sy > 0) return "↙";
  if (sx < 0 && sy === 0) return "←";
  if (sx < 0 && sy < 0) return "↖";
  return "・";
}

function fairyMoveViewerScenarioOptionsForSpec(spec) {
  const types = fairyMoveViewerCollectSpecTypes(spec);
  const hasLongLeapSlide = fairyMoveViewerHasLongLeapSlideSpec(spec);
  const hasFreeMoveType =
    types.has("step") ||
    types.has("slide") ||
    types.has("rose") ||
    types.has("lion") ||
    types.has("equi") ||
    types.has("area2") ||
    types.has("zero");
  const hasPao = types.has("pao");
  const hasHopperLike = types.has("hopper") || types.has("eagle") || types.has("bent") || types.has("kangaroo");
  const hasLionLike = types.has("lion");
  const hasLocustLike = types.has("locust");
  const values = [];
  if ((hasLocustLike && hasFreeMoveType) || hasPao || hasHopperLike || hasLionLike || hasLongLeapSlide) {
    values.push("mixed");
  }
  if (hasFreeMoveType || hasPao) values.push("empty");
  if (hasLocustLike || hasPao) values.push("capture");
  if (hasHopperLike || hasLionLike) values.push("hop");
  if (values.length <= 0) values.push("empty");
  const seen = new Set();
  const uniq = [];
  for (const v of values) {
    if (seen.has(v)) continue;
    seen.add(v);
    uniq.push(v);
  }
  return uniq.map((value) => ({ value, label: fairyMoveViewerScenarioText(value) }));
}

function syncFairyMoveViewerScenarioOptions(pieceName, spec = null) {
  if (!ui.fairyMoveViewerScenario) return "empty";
  const actualSpec = spec || localPieceSpec(pieceName);
  const options = fairyMoveViewerScenarioOptionsForSpec(actualSpec);
  const current = String(ui.fairyMoveViewerScenario.value || "").trim();
  ui.fairyMoveViewerScenario.innerHTML = "";
  for (const item of options) {
    const op = document.createElement("option");
    op.value = item.value;
    op.textContent = item.label;
    ui.fairyMoveViewerScenario.appendChild(op);
  }
  const next = options.some((o) => o.value === current) ? current : options[0].value;
  ui.fairyMoveViewerScenario.value = next;
  return next;
}

function fairyMoveViewerGuideText(pieceName, spec, scenarioRaw = "empty") {
  const name = String(pieceName || "").trim();
  const display = displayNameForName(name);
  const descRaw = String(pieceDescriptions?.[name] || "").trim();
  const desc = descRaw.replace(/\r\n?/g, "\n").replace(/\n{3,}/g, "\n\n");
  const types = fairyMoveViewerCollectSpecTypes(spec);
  const lines = [];
  if (desc) {
    lines.push(`【${display}】${desc}`);
  } else if (name) {
    lines.push(`【${display}】個別説明は未登録です。下の盤表示で動きを確認してください。`);
  }
  if (types.has("locust")) {
    lines.push("【Locust系】敵駒を飛び越えて1マス先に着地し、飛び越えた駒を取ります。");
  }
  if (types.has("hopper")) {
    lines.push("【Hopper系】進行方向の最初の駒を飛び越えて着地します。総合表示では障害駒なし方向と、障害駒の先が味方駒の方向も示します。");
  }
  if (types.has("eagle")) {
    lines.push("【Eagle系】駒を飛び越えた後、90度曲がった先に着地します。");
  }
  if (types.has("bent")) {
    lines.push("【Bent系】駒を飛び越えた後、指定角度だけ曲がった先に着地します。");
  }
  if (types.has("kangaroo")) {
    lines.push("【Kangaroo】Queen方向の駒を2つ飛び越え、2つ目の1マス先に着地します。着地点に敵駒がいれば取れます。");
  }
  if (types.has("pao")) {
    lines.push("【Pao系】通常移動と駒取りで条件が異なります（駒取りは飛び越しが必要）。");
  }
  if (types.has("slide")) {
    lines.push("【Rider系】直進移動は途中の駒で止まります。");
  }
  if (types.has("step")) {
    lines.push("【Leaper系】指定ベクトルへ1回で移動します。");
  }
  if (types.has("zero")) {
    lines.push("【Zero】同じマスでの着手です（位置は変わりません）。");
  }
  if (types.size <= 0 || lines.length <= 2) {
    lines.push("【補足】この駒は特殊合成のため、盤上ハイライトを中心に確認してください。");
  }
  return lines.join("\n");
}

function renderFairyMoveViewerBoard() {
  if (!ui.fairyMoveViewerBoard || !ui.fairyMoveViewerSelect) return;
  ensureFairyMoveViewerBoard();
  const pieceName = String(ui.fairyMoveViewerSelect.value || "").trim();
  const display = displayNameForName(pieceName);
  const spec = localPieceSpec(pieceName);
  const scenario = syncFairyMoveViewerScenarioOptions(pieceName, spec);
  const center = ui.fairyMoveViewerBoard.querySelector(".misc-fairy-vector-board-cell.center");
  if (center) center.textContent = String(display || pieceName || "駒").slice(0, 2);
  const pattern = buildFairyMoveViewerPattern(spec, scenario);
  const friendlyCells = pattern.sampleFriendly || new Set();
  ui.fairyMoveViewerBoard.dataset.mode = pattern.mode;
  if (ui.fairyMoveViewerCaption) {
    ui.fairyMoveViewerCaption.textContent = `【${display} (${pieceName})】${fairyMoveViewerScenarioText(scenario)}`;
  }
  if (ui.fairyMoveViewerGuide) {
    ui.fairyMoveViewerGuide.textContent = fairyMoveViewerGuideText(pieceName, spec, scenario);
  }
  const customDirectionCells =
    pattern.directionCells instanceof Map && pattern.directionCells.size > 0
      ? pattern.directionCells
      : new Map();
  const directionTrail = new Set();
  const blockerCells = new Set([...pattern.sampleEnemy, ...pattern.sampleHurdle, ...friendlyCells]);
  const addDirectionTrail = (sx, sy) => {
    if (!Number.isFinite(sx) || !Number.isFinite(sy)) return;
    let hitStep = 0;
    for (let step = 1; step <= CUSTOM_VECTOR_BOARD_RADIUS; step += 1) {
      const key = `${sx * step},${sy * step}`;
      if (blockerCells.has(key)) {
        hitStep = step;
        break;
      }
    }
    const maxStep = hitStep > 0 ? Math.max(0, hitStep - 1) : 2;
    for (let step = 1; step <= maxStep; step += 1) {
      directionTrail.add(`${sx * step},${sy * step}`);
    }
  };
  const directionSource =
    pattern.directionVectors instanceof Set && pattern.directionVectors.size > 0
      ? pattern.directionVectors
      : new Set();
  for (const k of directionSource) {
    const [sxRaw, syRaw] = String(k).split(",");
    addDirectionTrail(Number(sxRaw), Number(syRaw));
  }
  const cells = ui.fairyMoveViewerBoard.querySelectorAll(".misc-fairy-vector-board-cell");
  const showSelectedCells = pattern.mode !== "leaper";
  for (const cell of cells) {
    if (cell.dataset.center === "1") continue;
    if (cell.disabled) cell.disabled = false;
    const dx = Number(cell.dataset.dx || "0");
    const dy = Number(cell.dataset.dy || "0");
    const key = `${dx},${dy}`;
    const customDir = customDirectionCells.get(key) || null;
    const isCustomDirection =
      Array.isArray(customDir) && customDir.length >= 2 && Number.isFinite(Number(customDir[0])) && Number.isFinite(Number(customDir[1]));
    const isDefaultDirection =
      directionTrail.has(key) &&
      !pattern.sampleEnemy.has(key) &&
      !pattern.sampleHurdle.has(key) &&
      !friendlyCells.has(key);
    const isDirection = isCustomDirection || isDefaultDirection;
    const isDirectionUnreachable = !isCustomDirection && isDefaultDirection && !pattern.reachable.has(key);
    const dirDx = isCustomDirection ? Number(customDir[0]) : dx;
    const dirDy = isCustomDirection ? Number(customDir[1]) : dy;
    cell.textContent = isDirection ? fairyMoveViewerDirectionArrow(dirDx, dirDy) : "";
    cell.classList.toggle("sample-hurdle", pattern.sampleHurdle.has(key));
    cell.classList.toggle("sample-enemy", pattern.sampleEnemy.has(key));
    cell.classList.toggle("sample-friendly", friendlyCells.has(key));
    cell.classList.toggle("reachable", pattern.reachable.has(key));
    cell.classList.toggle("capture", pattern.capture.has(key));
    cell.classList.toggle("selected", showSelectedCells && pattern.selected.has(key) && !isDirection);
    cell.classList.toggle("direction", isDirection);
    cell.classList.toggle("direction-unreachable", isDirectionUnreachable);
  }
}

function closeFairyMoveViewerDialog() {
  if (ui.fairyMoveViewerDialog?.open) ui.fairyMoveViewerDialog.close();
}

function openFairyMoveViewerDialog(initialPieceName = "") {
  if (!ui.fairyMoveViewerDialog || !ui.fairyMoveViewerSelect) return;
  const names = fairyMoveViewerPieceNames();
  if (names.length <= 0) {
    logLine("表示できるフェアリー駒がありません。");
    return;
  }
  const requested = String(initialPieceName || "").trim();
  const current = String(ui.fairyMoveViewerSelect.value || "").trim();
  ui.fairyMoveViewerSelect.innerHTML = "";
  for (const name of names) {
    const op = document.createElement("option");
    op.value = name;
    op.textContent = `${displayNameForName(name)} (${name})`;
    ui.fairyMoveViewerSelect.appendChild(op);
  }
  if (requested && names.includes(requested)) ui.fairyMoveViewerSelect.value = requested;
  else if (current && names.includes(current)) ui.fairyMoveViewerSelect.value = current;
  else ui.fairyMoveViewerSelect.value = names[0];
  if (ui.fairyMoveViewerScenario) ui.fairyMoveViewerScenario.value = "";
  syncVectorBoardCellSizes();
  renderFairyMoveViewerBoard();
  if (ui.fairyMoveViewerDialog.open) return;
  try {
    ui.fairyMoveViewerDialog.showModal();
  } catch (_e) {
    ui.fairyMoveViewerDialog.show();
  }
}

function setCustomFairyVectorsFromArray(vectors) {
  const normalized = normalizeCustomMoveVectors(vectors);
  const text = formatCustomVectorsForLog(normalized);
  if (ui.customFairyVectorsInput) ui.customFairyVectorsInput.value = text;
  updateCustomFairyVectorPreview(normalized);
}

function updateCustomFairyVectorPreview(vectorsRaw = null) {
  if (!ui.customFairyVectorsPreview) return;
  const vectors =
    vectorsRaw === null
      ? normalizeCustomMoveVectors(ui.customFairyVectorsInput?.value || "")
      : normalizeCustomMoveVectors(vectorsRaw);
  updateCustomFairyVectorBoardCenter();
  updateCustomFairyVectorBoardSelection(vectors);
  if (vectors.length <= 0) {
    ui.customFairyVectorsPreview.textContent = "（未入力）";
    return;
  }
  ui.customFairyVectorsPreview.innerHTML = "";
  for (const [dx, dy] of vectors) {
    const chip = document.createElement("span");
    chip.className = "misc-fairy-vector-chip";
    chip.textContent = `${dx},${dy}`;
    ui.customFairyVectorsPreview.appendChild(chip);
  }
}

function setCustomVectorPresetActive(key) {
  customVectorPresetActive = String(key || "").trim();
  if (!ui.customFairyVectorsWrap) return;
  const buttons = ui.customFairyVectorsWrap.querySelectorAll("[data-custom-vector-preset]");
  for (const btn of buttons) {
    const k = btn.getAttribute("data-custom-vector-preset") || "";
    btn.classList.toggle("active", Boolean(customVectorPresetActive) && k === customVectorPresetActive);
  }
}

function buildKnightLikeVectors(dxRaw, dyRaw) {
  const dx = Number.parseInt(dxRaw, 10);
  const dy = Number.parseInt(dyRaw, 10);
  if (!Number.isFinite(dx) || !Number.isFinite(dy)) return [];
  const ax = Math.abs(dx);
  const ay = Math.abs(dy);
  if (ax < 1 || ay < 1 || ax > CUSTOM_VECTOR_BOARD_RADIUS || ay > CUSTOM_VECTOR_BOARD_RADIUS) return [];
  return [
    [ax, ay],
    [-ax, ay],
    [ax, -ay],
    [-ax, -ay],
    [ay, ax],
    [-ay, ax],
    [ay, -ax],
    [-ay, -ax],
  ];
}

function appendCustomFairyVector(dxRaw, dyRaw) {
  const base = normalizeCustomMoveVectors(ui.customFairyVectorsInput?.value || "");
  const add = normalizeCustomMoveVectors([[dxRaw, dyRaw]]);
  if (add.length <= 0) return false;
  const merged = normalizeCustomMoveVectors([...base, ...add]);
  setCustomFairyVectorsFromArray(merged);
  return true;
}

function undoCustomFairyVector() {
  const base = normalizeCustomMoveVectors(ui.customFairyVectorsInput?.value || "");
  if (base.length <= 0) return;
  base.pop();
  setCustomFairyVectorsFromArray(base);
}

function applyCustomVectorPreset(presetKey) {
  const key = String(presetKey || "").trim();
  if (key === "clear") {
    setCustomFairyVectorsFromArray([]);
    setCustomVectorPresetActive("");
    return;
  }
  let vectors = CUSTOM_VECTOR_PRESETS[key];
  if (key === "knight") {
    vectors = buildKnightLikeVectors(ui.customFairyDxInput?.value, ui.customFairyDyInput?.value);
    if (!vectors || vectors.length <= 0) {
      logLine("桂型は dx/dy を 1〜9 で入力してください。", true);
      return;
    }
  }
  if (!vectors) return;
  setCustomFairyVectorsFromArray(vectors);
}

function normalizeCustomCatalogPayload(payload) {
  if (!payload || typeof payload !== "object") return null;
  if (payload.kind !== "f-tsume-custom-catalog-v1") return null;
  if (Number(payload.version) !== 1) return null;
  const registry = Array.isArray(payload?.pieces?.registry) ? payload.pieces.registry : [];
  const normalizedRegistry = [];
  for (const item of registry) {
    if (!item || typeof item !== "object") continue;
    const name = String(item.name || "").trim();
    const display = String(item.display_name || "").trim();
    const desc = String(item.description || "").trim();
    if (!name || !display || !desc) continue;
    const normalizedMoveSpec = normalizeCustomMoveSpec(item.move_spec);
    normalizedRegistry.push({
      name,
      display_name: display,
      description: desc,
      notation: typeof item.notation === "string" ? item.notation : "",
      aliases: Array.isArray(item.aliases)
        ? item.aliases.map((v) => String(v || "").trim()).filter((v) => v)
        : [],
      owner_mode: String(item.owner_mode || ""),
      to_hand: item.to_hand,
      promote_to: item.promote_to,
      tags: Array.isArray(item.tags) ? item.tags.map((v) => String(v || "").trim()).filter((v) => v) : [],
      move_spec: normalizedMoveSpec,
    });
  }
  return {
    kind: "f-tsume-custom-catalog-v1",
    version: 1,
    pieces: { registry: normalizedRegistry },
    rule_composition: payload.rule_composition || null,
  };
}

function localBuildMetaOverlayFromCustomCatalog(catalog) {
  const out = {
    display_names: {},
    piece_names: [],
    piece_descriptions: {},
  };
  if (!catalog || typeof catalog !== "object") return out;
  const registry = Array.isArray(catalog?.pieces?.registry) ? catalog.pieces.registry : [];
  for (const item of registry) {
    const name = String(item?.name || "").trim();
    if (!name) continue;
    const display = String(item?.display_name || "").trim() || name;
    const desc = String(item?.description || "").trim();
    out.display_names[name] = display;
    out.piece_names.push(name);
    if (desc) out.piece_descriptions[name] = desc;
  }
  out.piece_names = Array.from(new Set(out.piece_names));
  return out;
}

function loadCustomCatalogFromStorage() {
  try {
    if (typeof window === "undefined" || !window.localStorage) return null;
    const raw = window.localStorage.getItem(CUSTOM_CATALOG_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return normalizeCustomCatalogPayload(parsed);
  } catch (e) {
    console.warn("custom catalog load failed", e);
    return null;
  }
}

function normalizeCustomUserTag(raw) {
  return String(raw || "")
    .trim()
    .replace(/\s+/g, " ");
}

function extractCustomUserTag(tags) {
  const arr = Array.isArray(tags) ? tags : [];
  for (const t of arr) {
    const s = String(t || "").trim();
    if (!s.startsWith(CUSTOM_USER_TAG_PREFIX)) continue;
    const tag = normalizeCustomUserTag(s.slice(CUSTOM_USER_TAG_PREFIX.length));
    if (tag) return tag;
  }
  return "";
}

function rebuildCustomPieceRuntimeMaps(catalog = null) {
  const src = catalog && typeof catalog === "object" ? catalog : loadCustomCatalogFromStorage();
  customPieceMoveLikeMap = new Map();
  customPieceDirectSpecMap = new Map();
  customPieceUserTagMap = new Map();
  const registry = Array.isArray(src?.pieces?.registry) ? src.pieces.registry : [];
  for (const item of registry) {
    if (!item || typeof item !== "object") continue;
    const name = String(item.name || "").trim();
    if (!name) continue;

    const moveSpec = normalizeCustomMoveSpec(item.move_spec);
    if (moveSpec?.type === "copy_from" && moveSpec.from) {
      customPieceMoveLikeMap.set(name, moveSpec.from);
    } else if (
      moveSpec &&
      (moveSpec.type === "step" || moveSpec.type === "slide" || moveSpec.type === "hopper")
    ) {
      customPieceDirectSpecMap.set(name, {
        type: moveSpec.type,
        vectors: Array.isArray(moveSpec.vectors) ? moveSpec.vectors.map((v) => [Number(v[0]), Number(v[1])]) : [],
      });
    }

    const userTag = extractCustomUserTag(item.tags);
    if (userTag) {
      customPieceUserTagMap.set(name, userTag);
    }
  }
}

function customUserTagForPieceName(name) {
  return customPieceUserTagMap.get(String(name || "")) || "";
}

function listUiAddedCustomPieces(catalog = null) {
  const src = catalog && typeof catalog === "object" ? catalog : loadCustomCatalogFromStorage();
  const registry = Array.isArray(src?.pieces?.registry) ? src.pieces.registry : [];
  return registry.filter((item) => {
    if (!item || typeof item !== "object") return false;
    const tags = Array.isArray(item.tags) ? item.tags : [];
    return tags.some((t) => String(t || "").trim() === CUSTOM_USER_TAG_MARK);
  });
}

function getUiAddedCustomPieceByName(name, catalog = null) {
  const nm = String(name || "").trim();
  if (!nm) return null;
  const list = listUiAddedCustomPieces(catalog);
  for (const item of list) {
    if (String(item?.name || "").trim() === nm) return item;
  }
  return null;
}

function applyCustomFairyDialogValuesFromPiece(item) {
  if (!item || typeof item !== "object") return;
  const name = String(item.name || "").trim();
  if (!name) return;

  if (ui.customFairyNameInput) ui.customFairyNameInput.value = name;
  if (ui.customFairyDisplayInput) ui.customFairyDisplayInput.value = String(item.display_name || "").trim();
  if (ui.customFairyDescInput) ui.customFairyDescInput.value = String(item.description || "").trim();
  if (ui.customFairyTagInput) ui.customFairyTagInput.value = extractCustomUserTag(item.tags) || "";

  const moveSpec = normalizeCustomMoveSpec(item.move_spec);
  let mode = "copy_from";
  if (moveSpec?.type === "step") mode = "leaper";
  else if (moveSpec?.type === "slide") mode = "rider";
  else if (moveSpec?.type === "hopper") mode = "hopper";

  if (ui.customFairyMoveModeSelect) ui.customFairyMoveModeSelect.value = mode;
  syncCustomFairyDialogMoveMode();

  if (mode === "copy_from") {
    const from = String(moveSpec?.from || "").trim();
    if (ui.customFairyMoveSelect && from) ui.customFairyMoveSelect.value = from;
    if (ui.customFairyVectorsInput) ui.customFairyVectorsInput.value = "";
    updateCustomFairyVectorPreview();
  } else {
    const vectorsText = formatCustomVectorsForLog(moveSpec?.vectors || []);
    if (ui.customFairyVectorsInput) ui.customFairyVectorsInput.value = vectorsText;
    updateCustomFairyVectorPreview();
  }
}

function buildMoveLikeCandidateNames() {
  const names = Object.keys(LOCAL_PIECE_SPECS || {});
  names.sort((a, b) => {
    const da = displayNameForName(a);
    const db = displayNameForName(b);
    const byDisplay = da.localeCompare(db, "ja");
    if (byDisplay !== 0) return byDisplay;
    return String(a).localeCompare(String(b), "ja");
  });
  return names;
}

function localBuildRuleCompositionSpecFromCatalog(catalog, validRuleKeys) {
  const out = new Map();
  const valid = validRuleKeys instanceof Set ? validRuleKeys : new Set();
  const rules = Array.isArray(catalog?.rule_composition?.rules) ? catalog.rule_composition.rules : [];
  for (const row of rules) {
    if (!row || typeof row !== "object") continue;
    const key = String(row.key || "").trim();
    if (!key || !valid.has(key)) continue;
    const priorityRaw = Number.parseInt(row.priority, 10);
    const priority = Number.isFinite(priorityRaw) ? priorityRaw : 0;
    let requires = Array.isArray(row.requires)
      ? row.requires.map((v) => String(v || "").trim()).filter((v) => v && valid.has(v) && v !== key)
      : [];
    let excludes = Array.isArray(row.excludes)
      ? row.excludes.map((v) => String(v || "").trim()).filter((v) => v && valid.has(v) && v !== key)
      : [];

    // `利き二歩無効` は安南/安北/背面/対面/点鏡の追加オプションとして扱う。
    // カタログ側に排他指定があっても、この組み合わせだけは共存を許可する。
    if (key === ANNA_NIFU_RULE_KEY) {
      excludes = excludes.filter((v) => !ANNA_NIFU_HOST_RULE_KEYS.has(v));
      requires = requires.filter((v) => !ANNA_NIFU_HOST_RULE_KEYS.has(v));
    } else if (ANNA_NIFU_HOST_RULE_KEYS.has(key)) {
      excludes = excludes.filter((v) => v !== ANNA_NIFU_RULE_KEY);
      requires = requires.filter((v) => v !== ANNA_NIFU_RULE_KEY);
    }

    out.set(key, {
      key,
      priority,
      requires: Array.from(new Set(requires)),
      excludes: Array.from(new Set(excludes)),
    });
  }
  return out;
}

function localRuleCompositionScore(specMap, changedTrueSet, key) {
  const spec = specMap.get(key);
  const p = Number.isFinite(Number(spec?.priority)) ? Number(spec.priority) : 0;
  const changed = changedTrueSet && changedTrueSet.has(key) ? 1 : 0;
  return [p, changed];
}

function localRuleCompositionKeyWins(specMap, changedTrueSet, keyA, keyB) {
  const [pa, ca] = localRuleCompositionScore(specMap, changedTrueSet, keyA);
  const [pb, cb] = localRuleCompositionScore(specMap, changedTrueSet, keyB);
  if (pa !== pb) return pa > pb;
  if (ca !== cb) return ca > cb;
  return String(keyA) <= String(keyB);
}

function localApplyCustomRuleCompositionConstraints(rules, rulesPatch, validRuleKeys) {
  if (!rules || typeof rules !== "object") return;
  const catalog = loadCustomCatalogFromStorage();
  if (!catalog) return;
  const specMap = localBuildRuleCompositionSpecFromCatalog(catalog, validRuleKeys);
  if (specMap.size <= 0) return;

  const patchObj = rulesPatch && typeof rulesPatch === "object" ? rulesPatch : {};
  const changedTrueSet = new Set(
    Object.entries(patchObj)
      .filter(([k, v]) => specMap.has(k) && v === true)
      .map(([k]) => k)
  );

  let changed = true;
  let guard = 0;
  while (changed && guard < 64) {
    guard += 1;
    changed = false;

    const enabled = [];
    for (const key of specMap.keys()) {
      if (rules[key] === true) enabled.push(key);
    }
    enabled.sort((a, b) => {
      const [pa, ca] = localRuleCompositionScore(specMap, changedTrueSet, a);
      const [pb, cb] = localRuleCompositionScore(specMap, changedTrueSet, b);
      if (pb !== pa) return pb - pa;
      if (cb !== ca) return cb - ca;
      return String(a).localeCompare(String(b));
    });

    for (const key of enabled) {
      if (rules[key] !== true) continue;
      const spec = specMap.get(key);
      if (!spec) continue;

      for (const req of spec.requires) {
        if (rules[req] !== true) {
          rules[req] = true;
          changed = true;
        }
      }

      for (const ex of spec.excludes) {
        if (rules[ex] !== true) continue;
        if (localRuleCompositionKeyWins(specMap, changedTrueSet, key, ex)) {
          rules[ex] = false;
          changed = true;
        } else {
          rules[key] = false;
          changed = true;
          break;
        }
      }
    }
  }
}

function localRuleCompositionExclusivePeers(specMap, key) {
  const out = new Set();
  const spec = specMap.get(key);
  if (Array.isArray(spec?.excludes)) {
    for (const ex of spec.excludes) out.add(String(ex || ""));
  }
  for (const [otherKey, otherSpec] of specMap.entries()) {
    if (String(otherKey) === String(key)) continue;
    if (!Array.isArray(otherSpec?.excludes)) continue;
    if (otherSpec.excludes.includes(key)) out.add(String(otherKey || ""));
  }
  out.delete(String(key || ""));
  return out;
}

function localApplyPatchedExclusiveWins(rules, patchTrueKeysOrdered, specMap, validRuleKeys) {
  if (!rules || typeof rules !== "object") return;
  if (!Array.isArray(patchTrueKeysOrdered) || patchTrueKeysOrdered.length <= 0) return;
  if (!(specMap instanceof Map) || specMap.size <= 0) return;
  const valid = validRuleKeys instanceof Set ? validRuleKeys : new Set();
  for (const keyRaw of patchTrueKeysOrdered) {
    const key = String(keyRaw || "");
    if (!key || !valid.has(key) || !specMap.has(key)) continue;
    rules[key] = true;
    const peers = localRuleCompositionExclusivePeers(specMap, key);
    for (const ex of peers) {
      if (!ex || !valid.has(ex)) continue;
      rules[ex] = false;
    }
  }
}

function saveCustomCatalogToStorage(catalog) {
  if (typeof window === "undefined" || !window.localStorage) return;
  const normalized = normalizeCustomCatalogPayload(catalog);
  if (!normalized) throw new Error("カスタムカタログ形式が不正です");
  window.localStorage.setItem(CUSTOM_CATALOG_STORAGE_KEY, JSON.stringify(normalized));
}

function clearCustomCatalogFromStorage() {
  if (typeof window === "undefined" || !window.localStorage) return;
  window.localStorage.removeItem(CUSTOM_CATALOG_STORAGE_KEY);
}

async function ensureDefaultCustomCatalogSeeded() {
  try {
    if (typeof window === "undefined" || !window.localStorage) return;
    const hasCatalog = Boolean(window.localStorage.getItem(CUSTOM_CATALOG_STORAGE_KEY));
    if (hasCatalog) return;
    const seeded = window.localStorage.getItem(CUSTOM_CATALOG_SEED_MARK_KEY) === "1";
    if (seeded) return;

    const res = await fetch("./custom_catalog.sample.json");
    if (!res.ok) return;
    const payload = await res.json();
    const normalized = normalizeCustomCatalogPayload(payload);
    if (!normalized) return;

    window.localStorage.setItem(CUSTOM_CATALOG_STORAGE_KEY, JSON.stringify(normalized));
    window.localStorage.setItem(CUSTOM_CATALOG_SEED_MARK_KEY, "1");
  } catch (_e) {
    // Ignore seed failures.
  }
}

async function enforceFixedRuleCompositionFromSample() {
  try {
    const current = loadCustomCatalogFromStorage();
    if (!current) return;
    const res = await fetch("./custom_catalog.sample.json");
    if (!res.ok) return;
    const payload = await res.json();
    const sample = normalizeCustomCatalogPayload(payload);
    if (!sample) return;
    const currentRuleComp = current?.rule_composition || null;
    const sampleRuleComp = sample?.rule_composition || null;
    if (JSON.stringify(currentRuleComp) === JSON.stringify(sampleRuleComp)) return;
    const next = normalizeCustomCatalogPayload({
      kind: "f-tsume-custom-catalog-v1",
      version: 1,
      pieces: { registry: Array.isArray(current?.pieces?.registry) ? current.pieces.registry : [] },
      rule_composition: sampleRuleComp,
    });
    if (!next) return;
    saveCustomCatalogToStorage(next);
  } catch (_e) {
    // Ignore sync failures.
  }
}

function buildCustomCatalogSummaryText() {
  const catalog = loadCustomCatalogFromStorage();
  if (!catalog) return "未設定";
  const pieceCount = Array.isArray(catalog?.pieces?.registry) ? catalog.pieces.registry.length : 0;
  const ruleCount = Array.isArray(catalog?.rule_composition?.rules) ? catalog.rule_composition.rules.length : 0;
  return `設定済み（駒${pieceCount}件 / ルール${ruleCount}件）`;
}

async function reloadMetaAfterCustomCatalogChange() {
  localMetaCache = null;
  rebuildCustomPieceRuntimeMaps();
  await fetchMeta();
  renderAll();
}

async function applyCustomCatalogFromText(text, sourceLabel = "") {
  const raw = String(text ?? "").trim();
  if (!raw) throw new Error("カスタムカタログJSONが空です");
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (_e) {
    throw new Error("カスタムカタログJSONの解析に失敗しました");
  }
  const normalized = normalizeCustomCatalogPayload(parsed);
  if (!normalized) throw new Error("カスタムカタログ形式が不正です");
  saveCustomCatalogToStorage(normalized);
  await reloadMetaAfterCustomCatalogChange();
  renderMiscSettingInputs();
  const suffix = sourceLabel ? `（${sourceLabel}）` : "";
  logLine(`カスタムカタログを読込みました${suffix}`);
}

async function clearCustomCatalogOverlay() {
  clearCustomCatalogFromStorage();
  await reloadMetaAfterCustomCatalogChange();
  renderMiscSettingInputs();
  logLine("カスタムカタログを解除しました");
}

async function ensureEditableCustomCatalogBase() {
  const existing = loadCustomCatalogFromStorage();
  if (existing) return existing;
  const res = await fetch("./custom_catalog.sample.json");
  if (!res.ok) throw new Error(`初期カタログ読込に失敗しました（${res.status}）`);
  const payload = await res.json();
  const normalized = normalizeCustomCatalogPayload(payload);
  if (!normalized) throw new Error("初期カタログ形式が不正です");
  saveCustomCatalogToStorage(normalized);
  return normalized;
}

async function addUiDefinedFairyPiece(def) {
  const base = await ensureEditableCustomCatalogBase();
  const registry = Array.isArray(base?.pieces?.registry) ? [...base.pieces.registry] : [];
  const name = String(def?.name || "").trim();
  const displayName = String(def?.display_name || "").trim();
  const moveMode = normalizeCustomMoveMode(def?.move_mode || def?.move_type);
  const copyFrom = String(def?.copy_from || "").trim();
  const vectorsTextRaw = String(def?.vectors_text ?? "").trim();
  const vectorNumCount = (vectorsTextRaw.match(/-?\d+/g) || []).length;
  const vectors = normalizeCustomMoveVectors(def?.vectors ?? def?.vectors_text ?? "");
  const tagRaw = normalizeCustomUserTag(def?.tag || "");
  const description = String(def?.description || "").trim();
  if (!name) throw new Error("内部名を入力してください");
  if (!displayName) throw new Error("表示文字を入力してください");
  if (!description) throw new Error("説明を入力してください");
  const existingIndex = registry.findIndex((r) => String(r?.name || "").trim() === name);
  if (existingIndex >= 0) {
    const existing = registry[existingIndex];
    const existingTags = Array.isArray(existing?.tags) ? existing.tags : [];
    const isUserAdded = existingTags.some((t) => String(t || "").trim() === CUSTOM_USER_TAG_MARK);
    if (!isUserAdded) {
      throw new Error(`同名の既定駒が存在します: ${name}`);
    }
  }

  let moveSpec = null;
  let moveSummary = "";
  if (moveMode === "copy_from") {
    if (!copyFrom) throw new Error("コピー元を選択してください");
    moveSpec = { type: "copy_from", from: copyFrom };
    moveSummary = `copy:${copyFrom}`;
  } else if (moveMode === "leaper" || moveMode === "rider" || moveMode === "hopper") {
    if (vectorsTextRaw && vectorNumCount % 2 !== 0) {
      throw new Error("ベクトルは dx,dy の組で入力してください（例: 1,2 -1,2）");
    }
    if (vectors.length <= 0) {
      throw new Error("ベクトルを入力してください（例: 1,0 0,1）");
    }
    const specType = moveMode === "leaper" ? "step" : moveMode === "rider" ? "slide" : "hopper";
    moveSpec = { type: specType, vectors: vectors.map(([dx, dy]) => ({ dx, dy })) };
    moveSummary = `${moveMode}:${formatCustomVectorsForLog(vectors)}`;
  } else {
    throw new Error("動き種別が不正です");
  }

  const tag = tagRaw || "未分類";
  const tags = [CUSTOM_USER_TAG_MARK, `${CUSTOM_USER_TAG_PREFIX}${tag}`];
  if (moveMode === "leaper") tags.push("leaper");
  if (moveMode === "rider") tags.push("rider");
  if (moveMode === "hopper") tags.push("hopper");
  const nextItem = {
    name,
    display_name: displayName,
    description,
    notation: displayName,
    aliases: [],
    owner_mode: "normal",
    to_hand: true,
    promote_to: null,
    tags,
    move_spec: moveSpec,
  };
  const action = existingIndex >= 0 ? "更新" : "追加";
  if (existingIndex >= 0) registry[existingIndex] = nextItem;
  else registry.push(nextItem);
  const next = normalizeCustomCatalogPayload({
    kind: "f-tsume-custom-catalog-v1",
    version: 1,
    pieces: { registry },
    rule_composition: base?.rule_composition || null,
  });
  if (!next) throw new Error("駒追加に失敗しました");
  saveCustomCatalogToStorage(next);
  await reloadMetaAfterCustomCatalogChange();
  renderMiscSettingInputs();
  logLine(`フェアリー駒を${action}：${displayName}(${name}) [${tag}] = ${moveSummary}`);
}

async function clearUiDefinedFairyPieces() {
  const base = loadCustomCatalogFromStorage();
  if (!base) return;
  const registry = Array.isArray(base?.pieces?.registry) ? base.pieces.registry : [];
  const filtered = registry.filter((item) => {
    const tags = Array.isArray(item?.tags) ? item.tags : [];
    return !tags.some((t) => String(t || "").trim() === CUSTOM_USER_TAG_MARK);
  });
  if (filtered.length === registry.length) return;
  const next = normalizeCustomCatalogPayload({
    kind: "f-tsume-custom-catalog-v1",
    version: 1,
    pieces: { registry: filtered },
    rule_composition: base?.rule_composition || null,
  });
  if (!next) throw new Error("追加駒の削除に失敗しました");
  saveCustomCatalogToStorage(next);
  await reloadMetaAfterCustomCatalogChange();
  renderMiscSettingInputs();
  logLine("追加したフェアリー駒を全削除しました");
}

async function deleteUiDefinedFairyPiece(name) {
  const nm = String(name || "").trim();
  if (!nm) throw new Error("削除する追加駒を指定してください");
  const base = loadCustomCatalogFromStorage();
  if (!base) throw new Error("追加駒カタログがありません");
  const registry = Array.isArray(base?.pieces?.registry) ? [...base.pieces.registry] : [];
  const idx = registry.findIndex((item) => String(item?.name || "").trim() === nm);
  if (idx < 0) throw new Error(`追加駒が見つかりません: ${nm}`);
  const tags = Array.isArray(registry[idx]?.tags) ? registry[idx].tags : [];
  const isUserAdded = tags.some((t) => String(t || "").trim() === CUSTOM_USER_TAG_MARK);
  if (!isUserAdded) throw new Error(`既定駒は削除できません: ${nm}`);
  registry.splice(idx, 1);
  const next = normalizeCustomCatalogPayload({
    kind: "f-tsume-custom-catalog-v1",
    version: 1,
    pieces: { registry },
    rule_composition: base?.rule_composition || null,
  });
  if (!next) throw new Error("追加駒の削除に失敗しました");
  saveCustomCatalogToStorage(next);
  if (editSelection?.source === "box" && String(editSelection?.name || "") === nm) {
    setEditSelection(null);
  }
  await reloadMetaAfterCustomCatalogChange();
  renderMiscSettingInputs();
  logLine(`追加駒を削除：${nm}`);
}

function localBuildMetaFallback() {
  const ruleLabels = {};
  for (const [key, label] of [
    ...LOCAL_RULE_LABELS_CONSTRAINT,
    ...LOCAL_RULE_LABELS_SPECIAL,
    ...LOCAL_RULE_LABELS_BASIC,
  ]) {
    ruleLabels[key] = label;
  }
  ruleLabels.isardam_type_b = "Isardam（タイプB）";
  ruleLabels.messigny_no_back = "直前戻り禁止";
  const displayMap = {
    玉: "玉",
    王: "王",
    飛: "飛",
    角: "角",
    金: "金",
    銀: "銀",
    桂: "桂",
    香: "香",
    歩: "歩",
    龍: "龍",
    馬: "馬",
    と: "と",
    成香: "成香",
    成桂: "成桂",
    成銀: "成銀",
    Friend: "響",
    Imitator: "■",
    "Teleport-Imitator": "□",
    Dabbaba: "戦",
    横行: "横",
    石: "石",
    穴: "穴",
    塔: "◆",
  };
  for (const name of Object.keys(LOCAL_PIECE_SPECS)) {
    if (!displayMap[name]) displayMap[name] = name;
  }
  const standardTop = ["玉", "飛", "角", "金", "銀", "桂", "香", "歩", "龍", "馬", "と", "成香", "成桂", "成銀"];
  const pieceNames = [...standardTop];
  for (const name of Object.keys(LOCAL_PIECE_SPECS)) {
    if (!pieceNames.includes(name)) pieceNames.push(name);
  }
  return {
    rule_keys: Object.keys(LOCAL_DEFAULT_RULES),
    rule_labels: ruleLabels,
    strategy_options: cloneJson(LOCAL_RULE_STRATEGY_FALLBACK_OPTIONS),
    objective_options: cloneJson(LOCAL_RULE_OBJECTIVE_FALLBACK_OPTIONS),
    display_names: displayMap,
    piece_names: pieceNames,
    piece_descriptions: {
      Friend:
        "本来は利きを持たないが、味方駒の利きに入るとその性能を得る。複数から利かされると合成され、Friend 同士でも再帰的に転写される。",
      Dabbaba: "(2,0)-leaper。縦横2マス跳んだ位置に利く駒。",
      横行: "中将棋の横行。横に何マスでも動け、縦に1マス動ける。飛び越えては行けない。",
      石: "不透過・不可侵の領域を表す。跳び越すことは可能。",
      穴: "着手不可の箇所を表す。走り駒は通過できる。",
      塔: "不透過・不可侵の領域を表す。跳び越すことは可能。ホッパー系の駒のジャンプ台になる。",
    },
  };
}

async function loadLocalMetaFromStatic() {
  if (localMetaCache) return localMetaCache;
  const fallbackMeta = localBuildMetaFallback();
  const customCatalog = loadCustomCatalogFromStorage();
  const customOverlay = localBuildMetaOverlayFromCustomCatalog(customCatalog);
  try {
    const res = await fetch("./local_meta.json");
    if (!res.ok) {
      throw new Error(`local_meta.json load failed (${res.status})`);
    }
    const payload = await res.json();
    const meta = normalizeMetaSourcePayload(payload);
    if (!meta) {
      throw new Error("local_meta.json parse failed (invalid schema)");
    }
    const metaPieceNames = Array.isArray(meta.piece_names)
      ? meta.piece_names.filter((v) => typeof v === "string" && v.trim() !== "")
      : [];
    const fallbackPieceNames = Array.isArray(fallbackMeta.piece_names)
      ? fallbackMeta.piece_names.filter((v) => typeof v === "string" && v.trim() !== "")
      : [];
    const pieceNames = Array.from(new Set([...metaPieceNames, ...fallbackPieceNames]));
    const mergedPieceNames = Array.from(new Set([...pieceNames, ...(customOverlay.piece_names || [])]));
    const pieceDescriptions = {
      ...(fallbackMeta.piece_descriptions && typeof fallbackMeta.piece_descriptions === "object"
        ? fallbackMeta.piece_descriptions
        : {}),
      ...(meta.piece_descriptions && typeof meta.piece_descriptions === "object" ? meta.piece_descriptions : {}),
      ...(customOverlay.piece_descriptions && typeof customOverlay.piece_descriptions === "object"
        ? customOverlay.piece_descriptions
        : {}),
    };
    localMetaCache = {
      ...fallbackMeta,
      ...meta,
      rule_keys: Array.from(
        new Set([
          ...(Array.isArray(meta.rule_keys) ? meta.rule_keys : []),
          ...(Array.isArray(fallbackMeta.rule_keys) ? fallbackMeta.rule_keys : []),
        ])
      ),
      rule_labels: { ...fallbackMeta.rule_labels, ...(meta.rule_labels || {}) },
      display_names: {
        ...fallbackMeta.display_names,
        ...(meta.display_names || {}),
        ...(customOverlay.display_names || {}),
      },
      piece_names: mergedPieceNames,
      piece_descriptions: pieceDescriptions,
    };
    return localMetaCache;
  } catch (_e) {
    const fallbackPieceNames = Array.isArray(fallbackMeta.piece_names)
      ? fallbackMeta.piece_names.filter((v) => typeof v === "string" && v.trim() !== "")
      : [];
    localMetaCache = {
      ...fallbackMeta,
      display_names: {
        ...(fallbackMeta.display_names || {}),
        ...(customOverlay.display_names || {}),
      },
      piece_names: Array.from(new Set([...fallbackPieceNames, ...(customOverlay.piece_names || [])])),
      piece_descriptions: {
        ...(fallbackMeta.piece_descriptions || {}),
        ...(customOverlay.piece_descriptions || {}),
      },
    };
  }
  return localMetaCache;
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function localDefaultRulesObject() {
  return cloneJson(LOCAL_DEFAULT_RULES);
}

function localMergeRulesWithDefaults(rules) {
  const base = localDefaultRulesObject();
  const src = rules && typeof rules === "object" ? rules : {};
  for (const key of Object.keys(base)) {
    if (Object.prototype.hasOwnProperty.call(src, key)) {
      base[key] = cloneJson(src[key]);
    }
  }
  for (const [key, value] of Object.entries(src)) {
    if (Object.prototype.hasOwnProperty.call(base, key)) continue;
    base[key] = cloneJson(value);
  }
  return base;
}

function localBuildPresetPiecesHirate() {
  const pieces = [];
  const put = (x, y, name, owner) => {
    pieces.push({ x, y, name, owner, attrs: {} });
  };
  put(4, 8, "玉", 0);
  put(4, 0, "王", 1);
  put(1, 7, "角", 0);
  put(7, 1, "角", 1);
  put(7, 7, "飛", 0);
  put(1, 1, "飛", 1);
  const order = ["香", "桂", "銀", "金", "玉", "金", "銀", "桂", "香"];
  for (let i = 0; i < order.length; i += 1) {
    const name = order[i];
    if (name === "玉") continue;
    put(8 - i, 8, name, 0);
    put(i, 0, name, 1);
  }
  for (let i = 0; i < 9; i += 1) {
    put(i, 6, "歩", 0);
    put(i, 2, "歩", 1);
  }
  return pieces;
}

function localBuildPresetState(kind) {
  const key = String(kind || "").trim();
  const rules = localDefaultRulesObject();
  const base = {
    session_id: "local_template",
    revision: 0,
    mode: "play",
    turn: 0,
    board: { width: 9, height: 9, pieces: [] },
    hands: { "0": [], "1": [] },
    rules,
    rule_name: localRuleNameFromRules(rules),
    repeat_params: { from_ply: null, to_ply: null, repeat_count: null },
  };
  if (key === "hirate") {
    base.board.pieces = localBuildPresetPiecesHirate();
  } else if (key === "tsume") {
    base.board.pieces = [{ x: 4, y: 0, name: "王", owner: 1, attrs: {} }];
    const piecesToHand = { 飛: 2, 角: 2, 金: 4, 銀: 4, 桂: 4, 香: 4, 歩: 18 };
    for (const [name, count] of Object.entries(piecesToHand)) {
      for (let i = 0; i < Number(count || 0); i += 1) {
        base.hands["1"].push(name);
      }
    }
  } else if (key === "clear") {
    base.board.pieces = [{ x: 4, y: 0, name: "王", owner: 1, attrs: {} }];
  } else {
    throw new Error(`unknown local preset: ${key}`);
  }
  return base;
}

function localApiError(code, message, details = null, httpStatus = 400) {
  const e = new Error(`${code}: ${message}`);
  e.apiCode = code;
  e.apiMessage = message;
  e.apiDetails = details || null;
  e.httpStatus = httpStatus;
  return e;
}

function localEnsureRevision(ctx, expectedRevision) {
  if (expectedRevision === undefined || expectedRevision === null) {
    throw localApiError("INVALID_REQUEST", "expected_revision is required");
  }
  if (expectedRevision !== ctx.revision) {
    throw localApiError("REVISION_CONFLICT", "revision mismatch", {
      expected_revision: expectedRevision,
      current_revision: ctx.revision,
    }, 409);
  }
}

function localAdvanceSessionSeqFromId(sessionId) {
  const m = /^local_sess_(\d+)$/.exec(String(sessionId || ""));
  if (!m) return;
  const n = Number.parseInt(m[1], 10);
  if (Number.isFinite(n) && n >= localSessionSeq) {
    localSessionSeq = n + 1;
  }
}

function localPersistContext(ctx) {
  if (!ctx?.sessionId || !ctx?.state) return;
  try {
    const payload = {
      sessionId: String(ctx.sessionId),
      revision: Number(ctx.revision || 0),
      state: cloneJson(ctx.state),
      typeAttrs: cloneJson(ctx.typeAttrs || {}),
      history: cloneJson(ctx.history || localBaseHistoryForState(ctx.state)),
    };
    window.localStorage.setItem(LOCAL_SESSION_STORAGE_KEY, JSON.stringify(payload));
  } catch (_e) {
    // Ignore storage failures.
  }
}

function localRestorePersistedContext(sessionId) {
  try {
    const raw = window.localStorage.getItem(LOCAL_SESSION_STORAGE_KEY);
    if (!raw) return null;
    const payload = JSON.parse(raw);
    if (!payload || String(payload.sessionId || "") !== String(sessionId || "")) {
      return null;
    }
    const state = cloneJson(payload.state || {});
    const revision = Number(payload.revision || state.revision || 0);
    const sid = String(payload.sessionId || sessionId || "");
    if (!sid || !state || typeof state !== "object") return null;
    state.session_id = sid;
    state.revision = revision;
    state.mode = String(state.mode || "play");
    state.rules = localMergeRulesWithDefaults(state.rules);
    if (!state.repeat_params || typeof state.repeat_params !== "object") {
      state.repeat_params = { from_ply: null, to_ply: null, repeat_count: null };
    }
    state.rule_name = localRuleNameFromRules(state.rules || {}, { typeAttrs: payload?.typeAttrs || {} });
    const ctx = {
      sessionId: sid,
      revision,
      state,
      typeAttrs: cloneJson(payload.typeAttrs || {}),
      legal: localEmptyLegal(),
      legal_cache_revision: -1,
      history: cloneJson(payload.history || localBaseHistoryForState(state)),
    };
    localAdvanceSessionSeqFromId(sid);
    localRefreshAllPieceEffectiveAttrs(ctx);
    localSyncStateFromCurrentHistoryNode(ctx);
    localSessions.set(sid, ctx);
    return ctx;
  } catch (_e) {
    return null;
  }
}

function localReadPersistedSessionId() {
  try {
    const raw = window.localStorage.getItem(LOCAL_SESSION_STORAGE_KEY);
    if (!raw) return "";
    const payload = JSON.parse(raw);
    return String(payload?.sessionId || "");
  } catch (_e) {
    return "";
  }
}

function localTouch(ctx) {
  if (ctx?.state && typeof ctx.state === "object") {
    ctx.state.rule_name = localRuleNameFromRules(ctx.state.rules || {}, { typeAttrs: ctx?.typeAttrs || {} });
  }
  ctx.revision += 1;
  ctx.state.revision = ctx.revision;
  ctx.legal_cache_revision = -1;
  localPersistContext(ctx);
}

function localRulePieceShortCode(name) {
  const n = String(name || "").trim();
  if (!n) return "";
  const codeRaw = LOCAL_SFEN_NAME_TO_CODE[n];
  if (typeof codeRaw === "string" && codeRaw.trim()) {
    const c = codeRaw.replace(/^\+/, "").trim().toUpperCase();
    if (c) return c;
  }
  const disp = String(localDisplayPieceName(n) || "").trim();
  return disp ? disp.slice(0, 1) : "";
}

function localRulePawnPromoteLabel(typeAttrsOrCtx) {
  const typeAttrs = localResolveTypeAttrsMap(typeAttrsOrCtx);
  const pawnTypePatch =
    typeAttrs && typeof typeAttrs === "object" && typeAttrs["歩"] && typeof typeAttrs["歩"] === "object"
      ? typeAttrs["歩"]
      : {};
  const pawnAttrs = localMergePieceAttrs(localDefaultPieceAttrs("歩"), pawnTypePatch);
  const promoteTo = String(pawnAttrs?.promote_to || "").trim();
  if (!promoteTo || promoteTo === "と") return "";
  const code = localRulePieceShortCode(promoteTo);
  return code ? `と${code}` : "";
}

function localBuildRuleProblemName(strategy, objective, hasRulePrefix = false) {
  const s = String(strategy || "").trim() || "詰将棋";
  const o = String(objective || "").trim() || "詰";
  if (s === "詰将棋") {
    if (o === "詰") return hasRulePrefix ? "詰" : "詰将棋";
    return o;
  }
  return `${s}${o}`;
}

function localBuildRuleNameBase(rules, options = {}) {
  const strategy = String(rules?.strategy || "詰将棋").trim() || "詰将棋";
  const objective = String(rules?.objective || "詰").trim() || "詰";
  const parts = [];
  // ルール名はカテゴリ順で連結する:
  // 性能変化 -> 取り方/所属 -> 手の選択 -> その他
  const orderedTabs = ["performance", "capture_owner", "selection", "other"];
  const allRuleLabels = [
    ...LOCAL_RULE_LABELS_SPECIAL,
    ...LOCAL_RULE_LABELS_CONSTRAINT,
    ...LOCAL_RULE_LABELS_BASIC,
  ];
  for (const tabId of orderedTabs) {
    for (const [key, label] of allRuleLabels) {
      if (ruleTabForKey(key) !== tabId) continue;
      if (key === ANNA_NIFU_RULE_KEY) {
        continue;
      }
      if (key === "isardam") {
        if (rules?.isardam_type_b) {
          parts.push("Isardam（タイプB）");
        } else if (rules?.isardam) {
          parts.push("Isardam");
        }
        continue;
      }
      if (key === "messigny") {
        if (!rules?.messigny) continue;
        if (rules?.messigny_no_back) {
          parts.push("Messigny(直前戻り禁止)");
        } else {
          parts.push(label);
        }
        continue;
      }
      if (!rules?.[key]) continue;
      if (
        localIsAnnanNifuInvalidActive(rules) &&
        ANNA_NIFU_HOST_RULE_KEYS.has(key)
      ) {
        parts.push(`${label}(利き二歩無効)`);
        continue;
      }
      parts.push(label);
    }
  }
  const pawnPromoteRule = localRulePawnPromoteLabel(options?.typeAttrs || null);
  if (pawnPromoteRule) parts.push(pawnPromoteRule);
  const problemName = localBuildRuleProblemName(strategy, objective, parts.length > 0);
  if (problemName) parts.push(problemName);
  return parts.join("");
}

function localRuleNameFromRules(rules, options = {}) {
  const base = localBuildRuleNameBase(rules, options);
  if (options?.includePly === false) return base || "-";
  const rawPly = Number.parseInt(rules?.problem_ply, 10);
  const problemPly = Number.isFinite(rawPly) && rawPly > 0 ? rawPly : 0;
  if (problemPly > 0) return `${base} ${problemPly}手`.trim();
  return base || "-";
}

function localSnapshotFromState(state) {
  const srcPieces = Array.isArray(state?.board?.pieces) ? state.board.pieces : [];
  const pieces = [];
  for (const p of srcPieces) {
    if (!p) continue;
    pieces.push({
      x: Number(p.x),
      y: Number(p.y),
      name: String(p.name || ""),
      owner: Number(p.owner),
      // 読込性能優先: snapshot では raw attrs 参照を保持（state反映時に clone する）。
      attrs: p?.attrs && typeof p.attrs === "object" ? p.attrs : null,
    });
  }
  const hand0 = Array.isArray(state?.hands?.["0"]) ? state.hands["0"].map((t) => String(t || "")) : [];
  const hand1 = Array.isArray(state?.hands?.["1"]) ? state.hands["1"].map((t) => String(t || "")) : [];
  return {
    snapshot_pieces: pieces,
    snapshot_hands: { "0": hand0, "1": hand1 },
    snapshot_turn: Number(state?.turn || 0),
  };
}

function localApplySnapshotToState(state, snapshotNode) {
  if (!state || !snapshotNode) return false;
  const cloneSnapshotAttrs = (attrs) => {
    const src = attrs && typeof attrs === "object" ? attrs : null;
    if (!src) return {};
    const out = { ...src };
    if (out.promote_attrs && typeof out.promote_attrs === "object") {
      out.promote_attrs = { ...out.promote_attrs };
    }
    return out;
  };
  const srcPieces = Array.isArray(snapshotNode.snapshot_pieces) ? snapshotNode.snapshot_pieces : null;
  const pieces = Array.isArray(srcPieces)
    ? srcPieces.map((p) => ({
        x: Number(p?.x),
        y: Number(p?.y),
        name: String(p?.name || ""),
        owner: Number(p?.owner),
        attrs: cloneSnapshotAttrs(p?.attrs),
      }))
    : null;
  const hands = snapshotNode.snapshot_hands && typeof snapshotNode.snapshot_hands === "object"
    ? snapshotNode.snapshot_hands
    : null;
  if (!pieces || !hands) return false;
  const hand0 = Array.isArray(hands["0"]) ? hands["0"].map((t) => String(t || "")) : [];
  const hand1 = Array.isArray(hands["1"]) ? hands["1"].map((t) => String(t || "")) : [];
  state.board = state.board || { width: 9, height: 9, pieces: [] };
  state.board.pieces = pieces;
  state.hands = { "0": hand0, "1": hand1 };
  state.turn = Number(snapshotNode.snapshot_turn || 0);
  return true;
}

function localSetNodeSnapshotFromState(node, state) {
  if (!node || !state) return;
  const snap = localSnapshotFromState(state);
  node.snapshot_pieces = snap.snapshot_pieces;
  node.snapshot_hands = snap.snapshot_hands;
  node.snapshot_turn = snap.snapshot_turn;
}

function localNodeHasSnapshot(node) {
  if (!node || typeof node !== "object") return false;
  if (!Array.isArray(node.snapshot_pieces)) return false;
  if (!node.snapshot_hands || typeof node.snapshot_hands !== "object") return false;
  const turn = Number(node.snapshot_turn);
  return turn === 0 || turn === 1;
}

function localFreezePositionValue(value) {
  if (Array.isArray(value)) {
    return value.map((v) => localFreezePositionValue(v));
  }
  if (value && typeof value === "object") {
    const out = {};
    const keys = Object.keys(value).sort();
    for (const k of keys) {
      out[k] = localFreezePositionValue(value[k]);
    }
    return out;
  }
  return value;
}

function localPositionKeyFromPiecesHands(pieces, hands, includeTurn = false, turn = 0, options = null) {
  const opts = options && typeof options === "object" ? options : {};
  const ignoreAttrs = Boolean(opts.ignoreAttrs);
  const pieceRows = (pieces || [])
    .filter((p) => p && localInBoard(Number(p.x), Number(p.y)))
    .map((p) => [
      Number(p.x),
      Number(p.y),
      String(p.name || ""),
      Number(p.owner),
      ignoreAttrs ? null : localFreezePositionValue(p?.attrs && typeof p.attrs === "object" ? p.attrs : {}),
    ])
    .sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      if (a[1] !== b[1]) return a[1] - b[1];
      if (a[2] !== b[2]) return a[2] < b[2] ? -1 : 1;
      return a[3] - b[3];
    });
  const countHands = (arr) => {
    const map = new Map();
    for (const name of arr || []) {
      const key = String(name || "");
      map.set(key, (map.get(key) || 0) + 1);
    }
    return Array.from(map.entries()).sort((a, b) => (a[0] < b[0] ? -1 : 1));
  };
  const hand0 = countHands(hands?.["0"]);
  const hand1 = countHands(hands?.["1"]);
  const payload = includeTurn
    ? [Number(turn) || 0, pieceRows, hand0, hand1]
    : [pieceRows, hand0, hand1];
  return JSON.stringify(payload);
}

function localIsReturnToPreviousPositionByState(ctx, nextState) {
  if (!ctx?.history || !nextState) return false;
  const byId = localHistoryNodeMap(ctx);
  const cur = localHistoryCurrentNode(ctx);
  let parentKey = null;
  if (cur?.parent_id) {
    const parent = byId.get(cur.parent_id);
    if (parent) {
      parentKey = localPositionKeyFromPiecesHands(
        parent.snapshot_pieces || [],
        parent.snapshot_hands || { "0": [], "1": [] },
        false,
        0
      );
    }
  } else if (typeof ctx?._allInPrevKey === "string" && ctx._allInPrevKey) {
    parentKey = ctx._allInPrevKey;
  }
  if (!parentKey) return false;
  const nextKey = localPositionKeyFromPiecesHands(
    nextState?.board?.pieces || [],
    nextState?.hands || { "0": [], "1": [] },
    false,
    0
  );
  return parentKey === nextKey;
}

function localPreviousPositionKeyFromContext(ctx) {
  if (!ctx?.history) return null;
  const byId = localHistoryNodeMap(ctx);
  const cur = localHistoryCurrentNode(ctx);
  if (!cur?.parent_id) return null;
  const parent = byId.get(cur.parent_id);
  if (!parent) return null;
  return localPositionKeyFromPiecesHands(
    parent.snapshot_pieces || [],
    parent.snapshot_hands || { "0": [], "1": [] },
    false,
    0
  );
}

function localSnapshotPositionKeyWithTurn(node, fallbackState = null) {
  if (!node && !fallbackState) return "";
  const pieces = Array.isArray(node?.snapshot_pieces)
    ? node.snapshot_pieces
    : Array.isArray(fallbackState?.board?.pieces)
      ? fallbackState.board.pieces
      : [];
  const hands =
    node?.snapshot_hands && typeof node.snapshot_hands === "object"
      ? node.snapshot_hands
      : fallbackState?.hands && typeof fallbackState.hands === "object"
        ? fallbackState.hands
        : { "0": [], "1": [] };
  const turnRaw =
    Number.isInteger(node?.snapshot_turn)
      ? Number(node.snapshot_turn)
      : Number.isInteger(node?.turn)
        ? Number(node.turn)
        : Number(fallbackState?.turn || 0);
  const turn = turnRaw === 1 ? 1 : 0;
  return localPositionKeyFromPiecesHands(pieces, hands, true, turn);
}

function localCurrentPositionRepeatInfoInHistory(ctx) {
  if (!ctx?.history || !Array.isArray(ctx.history.nodes)) {
    return { count: 0, matchedPly: null, matchedPlies: [] };
  }
  const byId = localHistoryNodeMap(ctx);
  const cur = localHistoryCurrentNode(ctx);
  if (!cur) return { count: 0, matchedPly: null, matchedPlies: [] };
  const countByMode = (ignoreAttrs) => {
    const targetKey = localPositionKeyFromPiecesHands(
      Array.isArray(cur?.snapshot_pieces) ? cur.snapshot_pieces : ctx?.state?.board?.pieces || [],
      cur?.snapshot_hands && typeof cur.snapshot_hands === "object" ? cur.snapshot_hands : ctx?.state?.hands || { "0": [], "1": [] },
      true,
      Number.isInteger(cur?.snapshot_turn) ? Number(cur.snapshot_turn) : Number(ctx?.state?.turn || 0),
      { ignoreAttrs }
    );
    if (!targetKey) return { count: 0, matchedPly: null, matchedPlies: [] };
    let count = 0;
    let matchedPly = null;
    const matchedPlies = [];
    let node = cur;
    let guard = 0;
    const maxSteps = Math.max(300, byId.size * 3);
    while (node && guard < maxSteps) {
      guard += 1;
      const key = localPositionKeyFromPiecesHands(
        Array.isArray(node?.snapshot_pieces) ? node.snapshot_pieces : [],
        node?.snapshot_hands && typeof node.snapshot_hands === "object" ? node.snapshot_hands : { "0": [], "1": [] },
        true,
        Number.isInteger(node?.snapshot_turn) ? Number(node.snapshot_turn) : Number(node?.turn || 0),
        { ignoreAttrs }
      );
      if (key === targetKey) {
        count += 1;
        const ply = Number.parseInt(node?.ply, 10);
        const normalizedPly = Number.isFinite(ply) && ply >= 0 ? ply : 0;
        matchedPlies.push(normalizedPly);
        if (node !== cur && matchedPly === null) {
          matchedPly = normalizedPly;
        }
      }
      if (!node.parent_id) break;
      node = byId.get(node.parent_id) || null;
    }
    return { count, matchedPly, matchedPlies };
  };
  const strict = countByMode(false);
  if (Number(strict?.count || 0) >= 2) return strict;
  return countByMode(true);
}

function localCurrentPositionRepeatCountInHistory(ctx) {
  return Number(localCurrentPositionRepeatInfoInHistory(ctx)?.count || 0);
}

function localBackfillSnapshotsToNode(ctx, targetNode) {
  if (!ctx || !targetNode) return false;
  if (localNodeHasSnapshot(targetNode)) return true;
  const byId = localHistoryNodeMap(ctx);
  const chain = [];
  let cursor = targetNode;
  let anchor = null;
  while (cursor) {
    if (localNodeHasSnapshot(cursor)) {
      anchor = cursor;
      break;
    }
    chain.push(cursor);
    if (!cursor.parent_id) break;
    cursor = byId.get(cursor.parent_id) || null;
  }
  if (!anchor || !localApplySnapshotToState(ctx.state, anchor)) return false;
  ctx.history.current_id = anchor.node_id;
  localRefreshAllPieceEffectiveAttrs(ctx);

  for (let i = chain.length - 1; i >= 0; i -= 1) {
    const node = chain[i];
    const moveStr = String(node?.move_str || "").trim();
    if (!moveStr) {
      localSetNodeSnapshotFromState(node, ctx.state);
      node.snapshot_turn = Number(ctx.state.turn || 0);
      ctx.history.current_id = node.node_id;
      continue;
    }
    if (localIsTerminalResultText(moveStr)) {
      localSetNodeSnapshotFromState(node, ctx.state);
      node.snapshot_turn = Number(ctx.state.turn || 0);
      node.last_move_info = null;
      ctx.history.current_id = node.node_id;
      continue;
    }
    let ok = localReplayMoveTextOnCurrent(ctx, moveStr, {
      noTouch: true,
      fastHintMode: true,
      allowFullFallback: false,
    });
    if (!ok) {
      ok = localReplayMoveTextOnCurrent(ctx, moveStr, {
        noTouch: true,
        fastHintMode: false,
        allowFullFallback: true,
      });
    }
    if (!ok) return false;
    const curNode = localHistoryCurrentNode(ctx);
    localSetNodeSnapshotFromState(node, ctx.state);
    node.snapshot_turn = Number(ctx.state.turn || 0);
    node.last_move_info = cloneJson(curNode?.last_move_info || null);
    ctx.history.current_id = node.node_id;
  }
  if (!localApplySnapshotToState(ctx.state, targetNode)) return false;
  ctx.history.current_id = targetNode.node_id;
  return true;
}

function localSyncStateFromCurrentHistoryNode(ctx, options = {}) {
  const node = localHistoryCurrentNode(ctx);
  if (!node) return false;
  if (!localApplySnapshotToState(ctx.state, node) && !localBackfillSnapshotsToNode(ctx, node)) {
    localHistorySyncTurnFromCurrent(ctx);
    return false;
  }
  const refreshEffectiveAttrs = options?.refreshEffectiveAttrs !== false;
  if (refreshEffectiveAttrs) {
    localRefreshAllPieceEffectiveAttrs(ctx);
  }
  return true;
}

function localBaseHistoryForState(state) {
  const snap = localSnapshotFromState(state);
  return {
    root_id: "n_root",
    current_id: "n_root",
    nodes: [
      {
        node_id: "n_root",
        parent_id: null,
        ply: 0,
        move_str: "",
        turn: Number(state?.turn || 0),
        last_move_info: null,
        children: [],
        snapshot_pieces: snap.snapshot_pieces,
        snapshot_hands: snap.snapshot_hands,
        snapshot_turn: snap.snapshot_turn,
      },
    ],
  };
}

function localEmptyLegal() {
  return { moves: [], status: { kind: "none", text: "" } };
}

function localBuildContextFromState(state) {
  const sid = `local_sess_${String(localSessionSeq++).padStart(4, "0")}`;
  const outState = cloneJson(state);
  outState.session_id = sid;
  outState.revision = 0;
  outState.mode = "play";
  outState.rules = localMergeRulesWithDefaults(outState.rules);
  if (!outState.repeat_params || typeof outState.repeat_params !== "object") {
    outState.repeat_params = { from_ply: null, to_ply: null, repeat_count: null };
  }
  outState.rule_name = localRuleNameFromRules(outState.rules || {});
  const ctx = {
    sessionId: sid,
    revision: 0,
    state: outState,
    typeAttrs: {},
    legal: localEmptyLegal(),
    legal_cache_revision: -1,
    history: localBaseHistoryForState(outState),
  };
  localRefreshAllPieceEffectiveAttrs(ctx);
  ctx.history = localBaseHistoryForState(outState);
  localPersistContext(ctx);
  return ctx;
}

function localGetSessionContextOrThrow(sessionId) {
  const ctx = localSessions.get(sessionId) || localRestorePersistedContext(sessionId);
  if (!ctx) {
    throw localApiError("SESSION_NOT_FOUND", "session not found", null, 404);
  }
  return ctx;
}

function localOk(ctx, data) {
  return { ok: true, revision: ctx.revision, data };
}

function localSerializeCoord(pos) {
  if (Array.isArray(pos) && pos.length >= 2) {
    return { x: Number(pos[0]), y: Number(pos[1]) };
  }
  if (pos && typeof pos === "object" && pos.x !== undefined && pos.y !== undefined) {
    return { x: Number(pos.x), y: Number(pos.y) };
  }
  return null;
}

function localSerializeLastMoveInfo(lastInfo) {
  const info = localExtractLastMoveInfo(lastInfo);
  if (!info) return null;
  return {
    name: String(info.name || ""),
    from: localSerializeCoord(info.from),
    to: localSerializeCoord(info.to),
    captured: Boolean(info.captured),
  };
}

function localSerializeState(ctx) {
  const state = ctx?.state || {};
  const board = state?.board && typeof state.board === "object" ? state.board : {};
  const width = Number(board.width) || 9;
  const height = Number(board.height) || 9;
  const pieces = Array.isArray(board.pieces)
    ? board.pieces
        .filter((piece) => piece && localInBoard(Number(piece.x), Number(piece.y)))
        .map((piece) => ({
          x: Number(piece.x),
          y: Number(piece.y),
          name: String(piece.name || ""),
          owner: Number(piece.owner),
          attrs: localEffectivePieceAttrs(piece, ctx),
        }))
        .sort((a, b) => {
          if (a.y !== b.y) return a.y - b.y;
          return a.x - b.x;
        })
    : [];
  return {
    session_id: String(state.session_id || ctx?.sessionId || ""),
    revision: Number(ctx?.revision ?? state.revision ?? 0),
    mode: String(state.mode || "play"),
    turn: Number(state.turn || 0),
    board: { width, height, pieces },
    hands: {
      "0": Array.isArray(state?.hands?.["0"]) ? cloneJson(state.hands["0"]) : [],
      "1": Array.isArray(state?.hands?.["1"]) ? cloneJson(state.hands["1"]) : [],
    },
    type_attrs: cloneJson(ctx?.typeAttrs || {}),
    rules: cloneJson(state.rules || {}),
    rule_name: localRuleNameFromRules(state.rules || {}, { typeAttrs: ctx?.typeAttrs || {} }),
    repeat_params: cloneJson(state.repeat_params || { from_ply: null, to_ply: null, repeat_count: null }),
  };
}

function localSerializeStateFast(ctx) {
  const state = ctx?.state || {};
  const board = state?.board && typeof state.board === "object" ? state.board : {};
  const width = Number(board.width) || 9;
  const height = Number(board.height) || 9;
  const pieces = Array.isArray(board.pieces) ? board.pieces : [];
  return {
    session_id: String(state.session_id || ctx?.sessionId || ""),
    revision: Number(ctx?.revision ?? state.revision ?? 0),
    mode: String(state.mode || "play"),
    turn: Number(state.turn || 0),
    board: { width, height, pieces },
    hands: state?.hands && typeof state.hands === "object" ? state.hands : { "0": [], "1": [] },
    type_attrs: ctx?.typeAttrs && typeof ctx.typeAttrs === "object" ? ctx.typeAttrs : {},
    rules: state?.rules && typeof state.rules === "object" ? state.rules : {},
    rule_name: localRuleNameFromRules(state.rules || {}, { typeAttrs: ctx?.typeAttrs || {} }),
    repeat_params:
      state?.repeat_params && typeof state.repeat_params === "object"
        ? state.repeat_params
        : { from_ply: null, to_ply: null, repeat_count: null },
  };
}

function localSerializeHistory(ctx) {
  const history = ctx?.history || {};
  const nodes = Array.isArray(history.nodes) ? history.nodes : [];
  const byId = new Map(nodes.map((node) => [node.node_id, node]));
  const rootId = history.root_id || "n_root";
  const queue = [rootId];
  const seen = new Set();
  const outNodes = [];
  while (queue.length > 0) {
    const nodeId = queue.shift();
    if (!nodeId || seen.has(nodeId) || !byId.has(nodeId)) continue;
    seen.add(nodeId);
    const node = byId.get(nodeId);
    const children = Array.isArray(node?.children) ? node.children.filter((id) => byId.has(id)) : [];
    outNodes.push({
      node_id: String(node.node_id || ""),
      parent_id: node.parent_id ? String(node.parent_id) : null,
      ply: Number(node.ply || 0),
      move_str: String(node.move_str || ""),
      turn: Number(node.turn || 0),
      last_move_info: localSerializeLastMoveInfo(node.last_move_info),
      children,
    });
    queue.push(...children);
  }
  return {
    root_id: String(rootId),
    current_id: String(history.current_id || rootId),
    nodes: outNodes,
  };
}

function localSerializeLegal(ctx) {
  const legal = ctx?.legal || {};
  const moves = Array.isArray(legal.moves) ? legal.moves : [];
  return {
    moves: moves.map((move, index) => ({
      id: `m_${String(index + 1).padStart(6, "0")}`,
      kind: String(move?.kind || ""),
      from: move?.kind === "move" ? localSerializeCoord(move.from) : null,
      to: localSerializeCoord(move?.to),
      owner: move?.owner ?? null,
      name: move?.name ?? null,
      promote: move?.kind === "move" ? Boolean(move?.promote) : null,
      messigny_swap: move?.kind === "move" ? Boolean(move?.messigny_swap) : null,
      rebirth: move?.kind === "move" ? localSerializeCoord(move?.rebirth) : null,
      notation: String(move?.notation || ""),
      target_node_id: null,
    })),
    status: cloneJson(legal.status || { kind: "none", text: "" }),
  };
}

function localOkState(ctx) {
  return localOk(ctx, { state: localSerializeState(ctx) });
}

function localOkLegal(ctx) {
  return localOk(ctx, localSerializeLegal(ctx));
}

function localOkHistory(ctx) {
  return localOk(ctx, localSerializeHistory(ctx));
}

function localOkStateWithViews(ctx, options = {}) {
  const includeLegal = options.includeLegal !== false;
  const includeHistory = options.includeHistory !== false;
  const extra = options.extra && typeof options.extra === "object" ? options.extra : {};
  const data = { state: localSerializeState(ctx), ...extra };
  if (includeLegal) data.legal = localSerializeLegal(ctx);
  if (includeHistory) data.history = localSerializeHistory(ctx);
  return localOk(ctx, data);
}

function localReadBoolQueryParam(queryParams, key, defaultValue = true) {
  if (!queryParams || typeof queryParams.get !== "function") return defaultValue;
  const raw = queryParams.get(key);
  if (raw === null || raw === undefined || raw === "") return defaultValue;
  const v = String(raw).toLowerCase();
  return v === "1" || v === "true" || v === "yes" || v === "on";
}

function localHistoryNodeMap(ctx) {
  const history = ctx?.history;
  const nodes = Array.isArray(history?.nodes) ? history.nodes : [];
  if (!history) return new Map();

  const cache = history._node_map_cache;
  const sameRef = cache && cache.nodes_ref === nodes;
  const cacheSize = Number(cache?.size || 0);
  const canIncrementalAppend =
    sameRef &&
    cache?.map instanceof Map &&
    Number.isFinite(cacheSize) &&
    cacheSize >= 0 &&
    cacheSize <= nodes.length;

  if (canIncrementalAppend) {
    if (cacheSize < nodes.length) {
      for (let i = cacheSize; i < nodes.length; i += 1) {
        const n = nodes[i];
        if (n && typeof n.node_id === "string" && n.node_id.length > 0) {
          cache.map.set(n.node_id, n);
        }
      }
      cache.size = nodes.length;
    }
    return cache.map;
  }

  const rebuilt = new Map();
  for (const n of nodes) {
    if (!n || typeof n.node_id !== "string" || !n.node_id) continue;
    rebuilt.set(n.node_id, n);
  }
  history._node_map_cache = { nodes_ref: nodes, size: nodes.length, map: rebuilt };
  return rebuilt;
}

function localHistoryMainlineNodes(ctx) {
  const byId = localHistoryNodeMap(ctx);
  const out = [];
  let id = ctx?.history?.root_id || null;
  const seen = new Set();
  while (id && byId.has(id) && !seen.has(id)) {
    seen.add(id);
    const n = byId.get(id);
    out.push(n);
    const children = Array.isArray(n?.children) ? n.children : [];
    id = children[0] || null;
  }
  return out;
}

function localHasInlineOpponentMarker(token) {
  const s = String(token || "").trim();
  return /^(?:▲|△)?(?:同|[0-9０-９]{2})\s*v/.test(s);
}

function localStripInlineOpponentMarker(token) {
  const s = String(token || "");
  return s.replace(/^((?:▲|△)?(?:同|[0-9０-９]{2}))\s*v/, "$1");
}

function localInsertInlineOpponentMarker(token) {
  let s = String(token || "");
  if (!s) return s;
  if (localHasInlineOpponentMarker(s)) return s;
  if (s.startsWith("v▲") || s.startsWith("v△")) {
    s = `${s.slice(1, 2)}${s.slice(2)}`;
  } else if (s[0] === "v") {
    s = s.slice(1);
  }
  const m = s.match(/^((?:▲|△)?(?:同|[0-9０-９]{2}))/);
  if (!m) return `v${s}`;
  return `${m[1]}v${s.slice(m[1].length)}`;
}

function localComposeTokenWithOwnerPrefix(prefix, token) {
  const p = String(prefix || "");
  const body = String(token || "");
  if (!p) return body;
  if (p === "v") return localInsertInlineOpponentMarker(body);
  if (p === "v▲" || p === "v△") {
    return localInsertInlineOpponentMarker(`${p.slice(1)}${body}`);
  }
  return `${p}${body}`;
}

function localStripReplayOwnerPrefix(token) {
  let s = String(token || "");
  if (s.startsWith("v▲") || s.startsWith("v△")) {
    s = s.slice(2);
  } else if (s[0] === "▲" || s[0] === "△" || s[0] === "v") {
    s = s.slice(1);
  }
  s = localStripInlineOpponentMarker(s);
  return s;
}

function localStripReplayOwnerPrefixEachSegment(token) {
  const s = String(token || "");
  if (!s.includes("/")) return localStripReplayOwnerPrefix(s);
  return s
    .split("/")
    .map((part) => localStripReplayOwnerPrefix(part.trim()))
    .join("/");
}

function localStripExportOwnerPrefixHead(token) {
  let s = String(token || "");
  if (s.startsWith("v▲") || s.startsWith("v△") || s[0] === "v") {
    s = localInsertInlineOpponentMarker(s);
  }
  if (s[0] === "▲" || s[0] === "△") s = s.slice(1);
  return s;
}

function localStripExportOwnerPrefixTail(token) {
  let s = String(token || "");
  if (s.startsWith("v▲") || s.startsWith("v△")) {
    s = s.slice(2);
  } else if (s[0] === "▲" || s[0] === "△" || s[0] === "v") {
    s = s.slice(1);
  }
  s = localStripInlineOpponentMarker(s);
  return s;
}

function localParseReplayOwnerPrefix(token, ctx) {
  let s = String(token || "");
  const turn = Number(ctx?.state?.turn || 0);
  if (s.startsWith("v▲")) return { owner: 0, body: localStripInlineOpponentMarker(s.slice(2)) };
  if (s.startsWith("v△")) return { owner: 1, body: localStripInlineOpponentMarker(s.slice(2)) };
  let owner = null;
  if (s[0] === "▲") {
    owner = 0;
    s = s.slice(1);
  } else if (s[0] === "△") {
    owner = 1;
    s = s.slice(1);
  } else if (s[0] === "v") {
    owner = 1 - turn;
    s = s.slice(1);
  }
  if (localHasInlineOpponentMarker(s)) {
    if (owner === null) owner = 1 - turn;
    s = localStripInlineOpponentMarker(s);
  }
  return { owner, body: s };
}

function localNormalizeMoveText(text) {
  let s = String(text || "").trim();
  if (!s) return "";
  s = localNormalizeDigits(s);
  s = localStripReplayOwnerPrefixEachSegment(s);
  s = localExtractNeutralPieceNotationToken(s).text;
  s = s.replace(/[。,，,]$/g, "");
  s = s.replace(/\(.*?\)/g, "");
  s = s.replace(/\[I[^\]]*\]/g, "");
  s = s.replace(/\s*-\s*/g, "-");
  return s.trim();
}

const LOCAL_REPLAY_RELATIVE_TAGS = Object.freeze([
  "右上",
  "左上",
  "右引",
  "左引",
  "右寄",
  "左寄",
  "右",
  "左",
  "直",
  "寄",
  "引",
  "上",
]);

function localNormalizeReplayMatchPieceName(name) {
  const s = String(name || "").trim();
  if (!s) return "";
  if (s === "王") return "玉";
  return s;
}

function localReplayPieceVariants(pieceText, includeBaseFallback = false, displayToName = null) {
  const variants = [];
  const seen = new Set();
  const add = (name) => {
    const normalized = localNormalizeReplayMatchPieceName(name);
    if (!normalized || seen.has(normalized)) return;
    seen.add(normalized);
    variants.push(normalized);
  };

  const raw = String(pieceText || "").trim();
  if (!raw) return variants;

  add(raw);
  const mapped = localParsePieceTokenToName(raw, displayToName || localBuildDisplayToNameMap());
  if (mapped && mapped !== "__none__" && mapped !== "__empty__") add(mapped);
  if (raw === "玉") add("王");
  if (raw === "王") add("玉");

  if (includeBaseFallback) {
    for (const name of variants.slice()) {
      add(standardBaseName(name));
    }
  }
  return variants;
}

function localReplayUsesStrictPieceMatch(pieceText, displayToName = null) {
  const raw = String(pieceText || "").trim();
  if (!raw) return false;
  const mapped = localParsePieceTokenToName(raw, displayToName || localBuildDisplayToNameMap());
  const name = String(mapped || raw);
  return PROMOTED_NAMES.has(name);
}

function localParseReplayPiecePart(piecePartRaw) {
  let s = String(piecePartRaw || "").trim();
  s = s.replace(/\[I[^\]]*\]/g, "");
  s = s.replace(/転/g, "");
  let relativeSuffix = "";
  let explicitNarazu = false;
  let promote = false;
  let isDrop = false;
  let guard = 0;
  // 末尾トークンを順に剥がす。順序は「銀左不成」「銀不成左」どちらにも対応。
  while (s && guard < 32) {
    guard += 1;
    let consumed = false;
    if (!relativeSuffix) {
      for (const tag of LOCAL_REPLAY_RELATIVE_TAGS) {
        if (s.endsWith(tag)) {
          relativeSuffix = tag;
          s = s.slice(0, -tag.length);
          consumed = true;
          break;
        }
      }
    }
    if (!consumed && s.endsWith("不成")) {
      explicitNarazu = true;
      s = s.slice(0, -2);
      consumed = true;
    }
    if (!consumed && s.endsWith("生")) {
      explicitNarazu = true;
      s = s.slice(0, -1);
      consumed = true;
    }
    if (!consumed && s.endsWith("成")) {
      if (!explicitNarazu) promote = true;
      s = s.slice(0, -1);
      consumed = true;
    }
    if (!consumed && s.endsWith("打")) {
      isDrop = true;
      s = s.slice(0, -1);
      consumed = true;
    }
    if (!consumed) break;
  }
  if (!relativeSuffix && s && /[右左直寄引上]$/.test(s)) {
    relativeSuffix = s.slice(-1);
    s = s.slice(0, -1);
  }
  while (s && /[右左直寄引上]$/.test(s)) {
    s = s.slice(0, -1);
  }
  return {
    pieceText: s.trim(),
    relativeSuffix,
    promote,
    explicitNarazu,
    isDrop,
  };
}

function localParseReplayMoveSpec(ctx, targetText) {
  const tokenRaw = String(targetText || "").trim();
  if (!tokenRaw) return null;

  const parsedOwner = localParseReplayOwnerPrefix(tokenRaw, ctx);
  let token = parsedOwner.body;
  let owner = parsedOwner.owner;
  token = localNormalizeDigits(token);
  const normalizedNeutral = localExtractNeutralPieceNotationToken(token);
  token = normalizedNeutral.text;
  let neutralPiece = Boolean(normalizedNeutral.neutral);
  token = token.replace(/[。,，,]+$/g, "");
  token = token.replace(/\(.*?\)/g, "");
  token = token.replace(/\[I[^\]]*\]/g, "");
  const sourceSuffix = localExtractReplaySourceSuffix(token);
  const sourceFrom = sourceSuffix?.from || null;
  if (sourceSuffix) token = sourceSuffix.body;

  let rebirth = null;
  if (token.includes("/")) {
    const parts = token.split("/", 2);
    token = parts[0].trim();
    rebirth = localParseRebirthCoordFromReplayText(parts[1]);
  }
  if (!token) return null;

  let toX = null;
  let toY = null;
  let takeMakeStep = null;
  let piecePart = "";
  const takeMakeMatch = token.match(/^((?:同)|(?:[1-9][1-9]))\s*-\s*([1-9])([1-9])(.*)$/);
  if (takeMakeMatch) {
    const stepToken = String(takeMakeMatch[1] || "");
    let stepX = null;
    let stepY = null;
    if (stepToken === "同") {
      const info = localExtractLastMoveInfo(localHistoryCurrentNode(ctx)?.last_move_info || null);
      const to = info?.to || null;
      if (!to) return null;
      if (Array.isArray(to)) {
        stepX = Number(to[0]);
        stepY = Number(to[1]);
      } else {
        stepX = Number(to.x);
        stepY = Number(to.y);
      }
    } else {
      stepX = localParseReplayFileChar(stepToken[0]);
      stepY = localParseReplayRankChar(stepToken[1]);
    }
    const finalX = localParseReplayFileChar(takeMakeMatch[2]);
    const finalY = localParseReplayRankChar(takeMakeMatch[3]);
    if (stepX === null || stepY === null || finalX === null || finalY === null) return null;
    takeMakeStep = { x: stepX, y: stepY };
    toX = finalX;
    toY = finalY;
    piecePart = String(takeMakeMatch[4] || "");
  } else if (token.startsWith("同")) {
    const info = localExtractLastMoveInfo(localHistoryCurrentNode(ctx)?.last_move_info || null);
    if (!info?.to) return null;
    if (Array.isArray(info.to)) {
      toX = Number(info.to[0]);
      toY = Number(info.to[1]);
    } else {
      toX = Number(info.to.x);
      toY = Number(info.to.y);
    }
    piecePart = token.slice(1);
  } else {
    if (token.length < 3) return null;
    toX = localParseReplayFileChar(token[0]);
    toY = localParseReplayRankChar(token[1]);
    if (toX === null || toY === null) return null;
    piecePart = token.slice(2);
  }

  const parsedPiece = localParseReplayPiecePart(piecePart);
  const pieceNeutralParsed = localExtractNeutralPieceNotationToken(parsedPiece.pieceText || "");
  neutralPiece = neutralPiece || Boolean(pieceNeutralParsed.neutral);
  let pieceText = String(pieceNeutralParsed.text || "").trim();
  const prefixedNeutral = pieceText.match(/^n(.+)$/i);
  if (prefixedNeutral && String(prefixedNeutral[1] || "").trim()) {
    neutralPiece = true;
    pieceText = String(prefixedNeutral[1] || "").trim();
  }
  const prefixedOpponent = pieceText.match(/^v(.+)$/i);
  if (prefixedOpponent && String(prefixedOpponent[1] || "").trim()) {
    if (owner === null) owner = 1 - Number(ctx?.state?.turn || 0);
    pieceText = String(prefixedOpponent[1] || "").trim();
  }
  if (!pieceText) return null;
  return {
    owner,
    toX,
    toY,
    rebirth,
    pieceText,
    neutralPiece: neutralPiece ? true : null,
    relativeSuffix: parsedPiece.relativeSuffix,
    promote: parsedPiece.promote,
    explicitNarazu: parsedPiece.explicitNarazu,
    isDrop: parsedPiece.isDrop,
    sourceFrom,
    takeMakeStep,
  };
}

function localExtractReplayRelativeSuffixFromNotation(targetText) {
  let token = localStripReplayOwnerPrefixEachSegment(String(targetText || "").trim());
  token = localNormalizeDigits(token);
  token = localExtractNeutralPieceNotationToken(token).text;
  token = token.replace(/[。,，,]+$/g, "");
  token = token.replace(/\(.*?\)/g, "");
  token = token.replace(/\[I[^\]]*\]/g, "");
  if (token.includes("/")) {
    const parts = token.split("/", 2);
    token = String(parts[0] || "").trim();
  }
  if (!token) return "";

  let piecePart = "";
  const takeMakeMatch = token.match(/^((?:同)|(?:[1-9][1-9]))\s*-\s*([1-9])([1-9])(.*)$/);
  if (takeMakeMatch) {
    piecePart = String(takeMakeMatch[4] || "");
  } else if (token.startsWith("同")) {
    piecePart = token.slice(1);
  } else if (token.length >= 3) {
    piecePart = token.slice(2);
  } else {
    return "";
  }
  return String(localParseReplayPiecePart(piecePart)?.relativeSuffix || "");
}

function localMatchReplayMoveRebirth(mv, rebirth) {
  const mr =
    mv?.rebirth && localInBoard(mv.rebirth.x, mv.rebirth.y)
      ? { x: Number(mv.rebirth.x), y: Number(mv.rebirth.y) }
      : null;
  if (!rebirth && !mr) return true;
  if (!rebirth || !mr) return false;
  return Number(rebirth.x) === mr.x && Number(rebirth.y) === mr.y;
}

function localReplayMoveMatchesSpec(mv, spec) {
  if (!mv || !spec) return false;
  if (spec.isDrop && mv.kind !== "drop") return false;
  if (spec.owner !== null && Number(mv.owner) !== Number(spec.owner)) return false;
  if (spec.sourceFrom) {
    if (!mv.from) return false;
    if (Number(mv.from.x) !== Number(spec.sourceFrom.x) || Number(mv.from.y) !== Number(spec.sourceFrom.y)) return false;
  }
  if (spec.neutralPiece === true && !Boolean(mv.neutral_piece)) return false;
  if (!mv.to) return false;
  if (spec.takeMakeStep) {
    const step =
      mv?.take_make?.step_to && localInBoard(mv.take_make.step_to.x, mv.take_make.step_to.y)
        ? mv.take_make.step_to
        : mv?.locust_capture && localInBoard(mv.locust_capture.x, mv.locust_capture.y)
          ? mv.locust_capture
          : null;
    if (!step) return false;
    if (Number(step.x) !== Number(spec.takeMakeStep.x) || Number(step.y) !== Number(spec.takeMakeStep.y)) {
      return false;
    }
  }
  if (Number(mv.to.x) !== Number(spec.toX) || Number(mv.to.y) !== Number(spec.toY)) return false;
  if (!localMatchReplayMoveRebirth(mv, spec.rebirth)) return false;
  if (Boolean(mv.promote) !== Boolean(spec.promote)) return false;
  return true;
}

function localReplayRelativeSuffixMatchesTag(specSuffixRaw, tagRaw) {
  const specSuffix = String(specSuffixRaw || "").trim();
  const tag = String(tagRaw || "").trim();
  if (!specSuffix) return true;
  if (!tag) return false;
  if (specSuffix === tag) return true;
  if ((specSuffix === "右" || specSuffix === "左") && tag.startsWith(specSuffix)) return true;
  if ((specSuffix === "上" || specSuffix === "寄" || specSuffix === "引") && tag.endsWith(specSuffix)) return true;
  return false;
}

function localPickReplayByRelativeGeometry(moves, spec) {
  if (!spec?.relativeSuffix) return null;
  const moveCandidates = (Array.isArray(moves) ? moves : []).filter(
    (mv) => mv?.kind === "move" && mv?.from && mv?.to
  );
  if (moveCandidates.length <= 0) return null;
  if (moveCandidates.length === 1) return moveCandidates[0];

  const owner = Number(moveCandidates[0]?.owner);
  const dest = { x: Number(moveCandidates[0].to.x), y: Number(moveCandidates[0].to.y) };
  const fromCandidates = moveCandidates.map((mv) => ({
    x: Number(mv.from.x),
    y: Number(mv.from.y),
  }));
  const matched = [];
  for (const mv of moveCandidates) {
    const tag = localResolveMoveAmbiguity(
      owner,
      { x: Number(mv.from.x), y: Number(mv.from.y) },
      dest,
      fromCandidates,
      String(mv?.name || "")
    );
    if (localReplayRelativeSuffixMatchesTag(spec.relativeSuffix, tag)) {
      matched.push(mv);
    }
  }
  if (matched.length > 0) return matched[0];
  return null;
}

function localPickReplayLegalCandidate(ctx, moves, spec) {
  if (!Array.isArray(moves) || moves.length <= 0) return null;
  let candidates = moves.slice();
  if (spec?.relativeSuffix) {
    const matched = candidates.filter((mv) => {
      return localExtractReplayRelativeSuffixFromNotation(mv?.notation || "") === spec.relativeSuffix;
    });
    if (matched.length > 0) {
      candidates = matched;
    } else {
      const byGeometry = localPickReplayByRelativeGeometry(candidates, spec);
      if (byGeometry) return byGeometry;
      return null;
    }
  }
  return candidates[0] || null;
}

function localFindLegalByReplaySpec(ctx, spec, options = {}) {
  if (!spec?.pieceText) return null;
  const moves = Array.isArray(ctx?.legal?.moves) ? ctx.legal.moves : [];
  if (moves.length <= 0) return null;
  const displayToName = options?.displayToName || null;
  const strictPiece = localReplayUsesStrictPieceMatch(spec.pieceText, displayToName);
  const exactTargets = new Set(localReplayPieceVariants(spec.pieceText, false, displayToName));
  const fallbackTargets = strictPiece
    ? null
    : new Set(localReplayPieceVariants(spec.pieceText, true, displayToName));
  const shared = moves.filter((mv) => {
    if (!mv || !mv.to) return false;
    if (spec.owner !== null && Number(mv.owner) !== Number(spec.owner)) return false;
    if (spec.sourceFrom) {
      if (!mv.from) return false;
      if (Number(mv.from.x) !== Number(spec.sourceFrom.x) || Number(mv.from.y) !== Number(spec.sourceFrom.y)) return false;
    }
    if (spec.neutralPiece === true && !Boolean(mv.neutral_piece)) return false;
    if (spec.takeMakeStep) {
      const step =
        mv?.take_make?.step_to && localInBoard(mv.take_make.step_to.x, mv.take_make.step_to.y)
          ? mv.take_make.step_to
          : mv?.locust_capture && localInBoard(mv.locust_capture.x, mv.locust_capture.y)
            ? mv.locust_capture
            : null;
      if (!step) return false;
      if (Number(step.x) !== Number(spec.takeMakeStep.x) || Number(step.y) !== Number(spec.takeMakeStep.y)) {
        return false;
      }
    }
    if (Number(mv.to.x) !== Number(spec.toX) || Number(mv.to.y) !== Number(spec.toY)) return false;
    if (!localMatchReplayMoveRebirth(mv, spec.rebirth)) return false;
    if (Boolean(mv.promote) !== Boolean(spec.promote)) return false;
    return true;
  });
  if (shared.length <= 0) return null;

  const matchesExact = (mv) => exactTargets.has(localNormalizeReplayMatchPieceName(mv?.name));
  const matchesFallback = (mv) => {
    if (!fallbackTargets) return false;
    const normalized = localNormalizeReplayMatchPieceName(mv?.name);
    return fallbackTargets.has(normalized);
  };

  const moveCandidates = shared.filter((mv) => mv.kind === "move");
  if (!spec.isDrop) {
    const exactMoves = moveCandidates.filter(matchesExact);
    const fallbackMoves = moveCandidates.filter(matchesFallback);
    const pickedMove = localPickReplayLegalCandidate(
      ctx,
      exactMoves.length > 0 ? exactMoves : fallbackMoves,
      spec
    );
    if (pickedMove) return pickedMove;
  }

  const destinationOccupied = Boolean(localFindPiece(ctx?.state, spec.toX, spec.toY));
  if (!spec.isDrop && destinationOccupied) return null;

  const dropCandidates = shared.filter((mv) => mv.kind === "drop");
  const exactDrops = dropCandidates.filter(matchesExact);
  const fallbackDrops = dropCandidates.filter(matchesFallback);
  return localPickReplayLegalCandidate(ctx, exactDrops.length > 0 ? exactDrops : fallbackDrops, spec);
}

function localFindLegalByMoveText(ctx, targetText, options = {}) {
  const spec =
    options?.replaySpec && typeof options.replaySpec === "object"
      ? options.replaySpec
      : localParseReplayMoveSpec(ctx, targetText);
  const normalizedTarget = localNormalizeMoveText(targetText);
  if (normalizedTarget) {
    const moves = Array.isArray(ctx?.legal?.moves) ? ctx.legal.moves : [];
    const direct = moves.filter((m) => localNormalizeMoveText(m?.notation || "") === normalizedTarget);
    if (direct.length > 0) {
      if (!spec) return direct[0];
      const narrowed = direct.filter((mv) => localReplayMoveMatchesSpec(mv, spec));
      const picked = localPickReplayLegalCandidate(ctx, narrowed.length > 0 ? narrowed : direct, spec);
      if (picked) return picked;
    }
  }
  if (!spec) return null;
  const bySpec = localFindLegalByReplaySpec(ctx, spec, options);
  if (bySpec) return bySpec;
  // All-in-Shogi などで move.owner の扱い差異があっても、棋譜読込は落とさない。
  // まず owner 制約のみ外して再照合する。
  if (spec.owner !== null && spec.owner !== undefined) {
    const bySpecRelaxedOwner = localFindLegalByReplaySpec(ctx, { ...spec, owner: null }, options);
    if (bySpecRelaxedOwner) return bySpecRelaxedOwner;
  }
  if (spec.rebirth) {
    return localFindLegalByReplaySpec(ctx, { ...spec, rebirth: null }, options);
  }
  if (spec.rebirth && spec.owner !== null && spec.owner !== undefined) {
    return localFindLegalByReplaySpec(ctx, { ...spec, rebirth: null, owner: null }, options);
  }
  return null;
}

function localParseReplayFileChar(ch) {
  const s = localNormalizeDigits(String(ch || ""));
  if (!/^[1-9]$/.test(s)) return null;
  const suji = Number.parseInt(s, 10);
  const x = 9 - suji;
  return x >= 0 && x <= 8 ? x : null;
}

function localParseReplayRankChar(ch) {
  const s = localNormalizeDigits(String(ch || ""));
  if (/^[1-9]$/.test(s)) {
    const y = Number.parseInt(s, 10) - 1;
    return y >= 0 && y <= 8 ? y : null;
  }
  const idx = LOCAL_KIFU_RANK_LABELS.indexOf(s);
  if (idx >= 0) return idx;
  return null;
}

function localParseRebirthCoordFromReplayText(rebirthText) {
  const text = localNormalizeDigits(localStripReplayOwnerPrefix(String(rebirthText || "").trim()));
  if (text.length < 2) return null;
  const x = localParseReplayFileChar(text[0]);
  const y = localParseReplayRankChar(text[1]);
  if (x === null || y === null) return null;
  return { x, y };
}

function localExtractReplaySourceSuffix(tokenRaw) {
  const token = String(tokenRaw || "").trim();
  if (!token) return null;
  const m = token.match(/<\s*([0-9０-９])([0-9０-９一二三四五六七八九])\s*$/);
  if (!m) return null;
  const x = localParseReplayFileChar(m[1]);
  const y = localParseReplayRankChar(m[2]);
  if (x === null || y === null) return null;
  return {
    from: { x: Number(x), y: Number(y) },
    body: token.slice(0, m.index).trim(),
  };
}

function localParseReplaySourceHint(ctx, targetText) {
  const tokenRaw = String(targetText || "").trim();
  if (!tokenRaw) return null;
  const sourceSuffix = localExtractReplaySourceSuffix(tokenRaw);
  let fromX = null;
  let fromY = null;
  if (sourceSuffix) {
    fromX = Number(sourceSuffix.from.x);
    fromY = Number(sourceSuffix.from.y);
  } else {
    const sourceMatch = tokenRaw.match(/\(([0-9０-９])([0-9０-９一二三四五六七八九])\)/);
    if (!sourceMatch) return null;
    fromX = localParseReplayFileChar(sourceMatch[1]);
    fromY = localParseReplayRankChar(sourceMatch[2]);
    if (fromX === null || fromY === null) return null;
  }

  let core = localStripReplayOwnerPrefix(tokenRaw);
  core = core.replace(/[。,，,]+$/g, "");
  core = core.replace(/\(.*?\)/g, "");
  core = core.replace(/\[I[^\]]*\]/g, "");
  if (sourceSuffix) core = sourceSuffix.body;

  let rebirth = null;
  if (core.includes("/")) {
    const parts = core.split("/", 2);
    core = parts[0].trim();
    rebirth = localParseRebirthCoordFromReplayText(parts[1]);
  }
  if (!core) return null;

  let toX = null;
  let toY = null;
  if (core.startsWith("同")) {
    const info = localExtractLastMoveInfo(localHistoryCurrentNode(ctx)?.last_move_info || null);
    if (!info?.to) return null;
    if (Array.isArray(info.to)) {
      toX = Number(info.to[0]);
      toY = Number(info.to[1]);
    } else {
      toX = Number(info.to.x);
      toY = Number(info.to.y);
    }
  } else {
    if (core.length < 2) return null;
    toX = localParseReplayFileChar(core[0]);
    toY = localParseReplayRankChar(core[1]);
    if (toX === null || toY === null) return null;
  }

  const promote = core.includes("成") && !core.includes("不成") && !core.includes("生");
  return {
    from: { x: Number(fromX), y: Number(fromY) },
    to: { x: Number(toX), y: Number(toY) },
    promote: Boolean(promote),
    rebirth,
  };
}

function localResolveReplayHintPieceName(pieceText, displayToName = null) {
  const variants = localReplayPieceVariants(pieceText, false, displayToName);
  for (const v of variants) {
    const parsed = localParsePieceTokenToName(v, displayToName || localBuildDisplayToNameMap());
    if (parsed && parsed !== "__none__" && parsed !== "__empty__") {
      return localNormalizeReplayMatchPieceName(parsed);
    }
    const raw = localNormalizeReplayMatchPieceName(v);
    if (raw) return raw;
  }
  return "";
}

function localBuildReplayMoveHintCandidates(
  ctx,
  targetText,
  parsedSpec = null,
  parsedSourceHint = null,
  options = {}
) {
  const hints = [];
  const seen = new Set();
  const pushHint = (hint) => {
    if (!hint || typeof hint !== "object") return;
    const kind = String(hint.kind || "");
    if (kind !== "move" && kind !== "drop") return;
    const to = hint.to && localInBoard(Number(hint.to.x), Number(hint.to.y))
      ? { x: Number(hint.to.x), y: Number(hint.to.y) }
      : null;
    const from = hint.from && localInBoard(Number(hint.from.x), Number(hint.from.y))
      ? { x: Number(hint.from.x), y: Number(hint.from.y) }
      : null;
    const ownerRaw = Number(hint.owner);
    const owner = ownerRaw === 0 || ownerRaw === 1 ? ownerRaw : undefined;
    const name = String(hint.name || "").trim();
    const promote = typeof hint.promote === "boolean" ? Boolean(hint.promote) : undefined;
    const normalized = {
      kind,
      owner,
      name: name || undefined,
      from,
      to,
      promote,
    };
    if (normalized.kind === "move" && !normalized.to) return;
    if (normalized.kind === "drop" && !normalized.to) return;
    const key = JSON.stringify(normalized);
    if (seen.has(key)) return;
    seen.add(key);
    hints.push(normalized);
  };

  const spec =
    parsedSpec && typeof parsedSpec === "object" ? parsedSpec : localParseReplayMoveSpec(ctx, targetText);
  const sourceHint =
    parsedSourceHint && typeof parsedSourceHint === "object"
      ? parsedSourceHint
      : localParseReplaySourceHint(ctx, targetText);
  const owner = spec && (Number(spec.owner) === 0 || Number(spec.owner) === 1) ? Number(spec.owner) : undefined;
  const displayToName = options?.displayToName || null;
  const pieceName = spec?.pieceText ? localResolveReplayHintPieceName(spec.pieceText, displayToName) : "";

  if (sourceHint) {
    const baseHint = {
      kind: "move",
      owner,
      name: pieceName || undefined,
      from: sourceHint.from,
      to: sourceHint.to,
      promote: sourceHint.promote,
    };
    pushHint(baseHint);
    if (baseHint.name) {
      const looseHint = { ...baseHint };
      delete looseHint.name;
      pushHint(looseHint);
    }
  }
  if (spec) {
    const baseHint = {
      kind: spec.isDrop ? "drop" : "move",
      owner,
      name: pieceName || undefined,
      to:
        Number.isFinite(Number(spec.toX)) && Number.isFinite(Number(spec.toY))
          ? { x: Number(spec.toX), y: Number(spec.toY) }
          : null,
      promote: spec.isDrop ? undefined : Boolean(spec.promote),
    };
    pushHint(baseHint);
    if (baseHint.name) {
      const looseHint = { ...baseHint };
      delete looseHint.name;
      pushHint(looseHint);
    }
  }
  return hints;
}

function localApplyLegalReplayCandidate(ctx, cand, options = {}) {
  if (!cand) return false;
  const noTouch = Boolean(options?.noTouch);
  const skipStateBackup = Boolean(options?.skipStateBackup);
  const revBefore = ctx.revision;
  if (cand.kind === "move") {
    try {
      const body = {
        expected_revision: ctx.revision,
        from: cand.from,
        to: cand.to,
        promote: Boolean(cand.promote),
        rebirth: cand.rebirth || null,
        no_touch: noTouch,
        skip_state_backup: skipStateBackup,
      };
      localApplyMoveCore(ctx, body);
    } catch (e) {
      throw e;
    }
    if (noTouch) {
      ctx.revision = revBefore;
      ctx.state.revision = revBefore;
    }
    return true;
  }
  if (cand.kind === "drop") {
    try {
      localApplyDropCore(ctx, {
        expected_revision: ctx.revision,
        owner: cand.owner,
        name: cand.name,
        to: cand.to,
        no_touch: noTouch,
        skip_state_backup: skipStateBackup,
      });
    } catch (e) {
      throw e;
    }
    if (noTouch) {
      ctx.revision = revBefore;
      ctx.state.revision = revBefore;
    }
    return true;
  }
  return false;
}

function localTryReplayMoveWithSourceHint(ctx, targetText, options = {}) {
  const source =
    options?.sourceHint && typeof options.sourceHint === "object"
      ? options.sourceHint
      : localParseReplaySourceHint(ctx, targetText);
  if (!source) return false;
  const fromX = Number(source.from?.x);
  const fromY = Number(source.from?.y);
  const toX = Number(source.to?.x);
  const toY = Number(source.to?.y);
  const isPromote = Boolean(source.promote);
  const rebirth = source.rebirth || null;
  const cand = (ctx?.legal?.moves || []).find((m) => {
    if (!m || m.kind !== "move") return false;
    if (Number(m?.from?.x) !== fromX || Number(m?.from?.y) !== fromY) return false;
    if (Number(m?.to?.x) !== toX || Number(m?.to?.y) !== toY) return false;
    if (Boolean(m?.promote) !== Boolean(isPromote)) return false;
    const mr = m?.rebirth && localInBoard(m.rebirth.x, m.rebirth.y)
      ? { x: Number(m.rebirth.x), y: Number(m.rebirth.y) }
      : null;
    if (!rebirth && !mr) return true;
    if (!rebirth || !mr) return false;
    return rebirth.x === mr.x && rebirth.y === mr.y;
  }) || null;
  return localApplyLegalReplayCandidate(ctx, cand, options);
}

function localReplayMoveTextOnCurrent(ctx, targetText, options = {}) {
  const replayDisplayToName = localBuildDisplayToNameMap();
  const replaySpec = localParseReplayMoveSpec(ctx, targetText);
  const sourceHint = localParseReplaySourceHint(ctx, targetText);
  const fastHintMode = Boolean(options?.fastHintMode);
  const allowStopOnFirstReplayMatch =
    !String(replaySpec?.relativeSuffix || "").trim() && !replaySpec?.rebirth;
  const allowFullFallback = options?.allowFullFallback !== false;
  const noTouch = Boolean(options?.noTouch);
  const replayApplyOptions = {
    ...options,
    // 読込/再生(noTouch)では rollback用の全盤面cloneを省いて高速化する。
    skipStateBackup: Boolean(options?.skipStateBackup) || noTouch,
  };
  const replayComputeBaseOptions = {
    // 棋譜再生時は「その手が指せるか」のみ必要で、終局状態判定は不要。
    // ただし All-in-Shogi は高速判定経路で取りこぼしが出るため通常判定を使う。
    skipStatusEvaluation: !Boolean(ctx?.state?.rules?.all_in_shogi),
    skipNoCheckStatusProbe: true,
    // 棋譜再生は1手一致判定のみなので、notationソートは不要。
    skipSort: true,
    // 再生時は state 側の注釈済み駒を再利用して前処理コストを削減する。
    reuseAnnotatedStatePieces: true,
  };
  const tryWithCurrentLegal = () => {
    if (localTryReplayMoveWithSourceHint(ctx, targetText, { ...replayApplyOptions, sourceHint })) return true;
    const cand = localFindLegalByMoveText(ctx, targetText, {
      replaySpec,
      displayToName: replayDisplayToName,
    });
    if (!cand) return false;
    return localApplyLegalReplayCandidate(ctx, cand, replayApplyOptions);
  };

  const hints = localBuildReplayMoveHintCandidates(ctx, targetText, replaySpec, sourceHint, {
    displayToName: replayDisplayToName,
  });
  // 速読込時は最有力ヒント(通常は(xx)の移動元付き)をまず1件だけ試す。
  const hintList = fastHintMode ? hints.slice(0, 1) : hints;
  for (const hint of hintList) {
    localComputeLegalAll(ctx, {
      ...replayComputeBaseOptions,
      targetMoveHint: hint,
      targetReplaySpec: replaySpec,
      displayToName: replayDisplayToName,
      stopOnFirstReplayMatch: allowStopOnFirstReplayMatch,
    });
    if (tryWithCurrentLegal()) return true;
  }

  if (!allowFullFallback) {
    return false;
  }

  localComputeLegalAll(ctx, {
    ...replayComputeBaseOptions,
    targetReplaySpec: replaySpec,
    displayToName: replayDisplayToName,
    stopOnFirstReplayMatch: allowStopOnFirstReplayMatch,
  });
  return tryWithCurrentLegal();
}

function localHistoryCurrentNode(ctx) {
  const byId = localHistoryNodeMap(ctx);
  const node = byId.get(ctx?.history?.current_id || "");
  return node || byId.get(ctx?.history?.root_id || "") || null;
}

function localHistorySyncTurnFromCurrent(ctx) {
  const node = localHistoryCurrentNode(ctx);
  if (node && Number.isInteger(node.turn)) {
    ctx.state.turn = Number(node.turn);
  }
}

function localHistorySelectNode(ctx, nodeId) {
  const byId = localHistoryNodeMap(ctx);
  const target = byId.get(nodeId);
  if (!target) {
    throw localApiError("INVALID_REQUEST", `history node not found: ${nodeId}`);
  }
  if (ctx.history.current_id === nodeId) {
    localSyncStateFromCurrentHistoryNode(ctx);
    return false;
  }
  ctx.history.current_id = nodeId;
  localSyncStateFromCurrentHistoryNode(ctx);
  localTouch(ctx);
  return true;
}

function localHistoryActionCore(ctx, kind, options = {}) {
  const byId = localHistoryNodeMap(ctx);
  const rootId = ctx?.history?.root_id || "n_root";
  const current = localHistoryCurrentNode(ctx);
  if (!current) {
    throw localApiError("INVALID_REQUEST", "history is unavailable");
  }
  let nextId = current.node_id;
  const currentMoveText = String(current?.move_str || "").trim();
  const currentIsTerminal = localIsTerminalResultText(currentMoveText);
  if (currentIsTerminal && (kind === "forward" || kind === "end")) {
    localSyncStateFromCurrentHistoryNode(ctx, options);
    return false;
  }
  if (kind === "start") {
    nextId = rootId;
  } else if (kind === "back") {
    nextId = current.parent_id || current.node_id;
  } else if (kind === "forward") {
    const childId = Array.isArray(current.children) ? current.children[0] : null;
    nextId = childId || current.node_id;
  } else if (kind === "end") {
    let node = current;
    const seen = new Set();
    while (node && !seen.has(node.node_id)) {
      seen.add(node.node_id);
      const childId = Array.isArray(node.children) ? node.children[0] : null;
      if (!childId) break;
      const child = byId.get(childId);
      if (!child) break;
      node = child;
    }
    nextId = node?.node_id || current.node_id;
  } else {
    throw localApiError("INVALID_REQUEST", `unsupported history action: ${kind}`);
  }
  if (nextId === ctx.history.current_id) {
    localSyncStateFromCurrentHistoryNode(ctx, options);
    return false;
  }
  ctx.history.current_id = nextId;
  localSyncStateFromCurrentHistoryNode(ctx, options);
  if (!options?.noTouch) {
    localTouch(ctx);
  }
  return true;
}

function localHistoryPromoteNode(ctx, nodeId) {
  const byId = localHistoryNodeMap(ctx);
  const node = byId.get(nodeId);
  if (!node || !node.parent_id) {
    throw localApiError("INVALID_REQUEST", "promote target must have a parent");
  }
  const parent = byId.get(node.parent_id);
  if (!parent || !Array.isArray(parent.children)) {
    throw localApiError("INVALID_REQUEST", "parent node not found");
  }
  const idx = parent.children.indexOf(nodeId);
  if (idx <= 0) return false;
  parent.children.splice(idx, 1);
  parent.children.unshift(nodeId);
  return true;
}

function localHistoryCollectSubtreeIds(ctx, startId) {
  const byId = localHistoryNodeMap(ctx);
  const out = new Set();
  const queue = [startId];
  while (queue.length > 0) {
    const id = queue.shift();
    if (!id || out.has(id)) continue;
    out.add(id);
    const node = byId.get(id);
    if (!node) continue;
    for (const c of Array.isArray(node.children) ? node.children : []) {
      queue.push(c);
    }
  }
  return out;
}

function localHistoryDeleteNode(ctx, nodeId) {
  const byId = localHistoryNodeMap(ctx);
  const node = byId.get(nodeId);
  if (!node || !node.parent_id) {
    throw localApiError("INVALID_REQUEST", "delete target must have a parent");
  }
  const parent = byId.get(node.parent_id);
  if (!parent || !Array.isArray(parent.children)) {
    throw localApiError("INVALID_REQUEST", "parent node not found");
  }
  const idx = parent.children.indexOf(nodeId);
  if (idx < 0) return false;
  parent.children.splice(idx, 1);

  const deleteIds = localHistoryCollectSubtreeIds(ctx, nodeId);
  ctx.history.nodes = (ctx.history.nodes || []).filter((n) => !deleteIds.has(n.node_id));
  if (deleteIds.has(ctx.history.current_id)) {
    ctx.history.current_id = parent.node_id || ctx.history.root_id;
  }
  localSyncStateFromCurrentHistoryNode(ctx);
  localTouch(ctx);
  return true;
}

function localHistoryAddTerminalNode(ctx, result, options = {}) {
  const cur = localHistoryCurrentNode(ctx);
  if (!cur) {
    throw localApiError("INVALID_REQUEST", "history is unavailable");
  }
  const now = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  const nodeId = `n_local_${now}_${rand}`;
  const node = {
    node_id: nodeId,
    parent_id: cur.node_id,
    ply: Number(cur.ply || 0) + 1,
    move_str: String(result || ""),
    turn: Number(cur.turn ?? ctx.state.turn ?? 0),
    last_move_info: null,
    children: [],
  };
  if (!Array.isArray(cur.children)) cur.children = [];
  cur.children.push(nodeId);
  if (!Array.isArray(ctx.history.nodes)) ctx.history.nodes = [];
  ctx.history.nodes.push(node);
  localSetNodeSnapshotFromState(node, ctx.state);
  ctx.history.current_id = nodeId;
  localSyncStateFromCurrentHistoryNode(ctx);
  if (!Boolean(options?.noTouch)) {
    localTouch(ctx);
  }
  return nodeId;
}

function localInBoard(x, y) {
  return Number.isInteger(x) && Number.isInteger(y) && x >= 0 && x < 9 && y >= 0 && y < 9;
}

function localCoordsEqual(a, b) {
  if (!a || !b) return false;
  return a.x === b.x && a.y === b.y;
}

function localCoordFromInput(pos, fieldName) {
  const x = Number.parseInt(pos?.x, 10);
  const y = Number.parseInt(pos?.y, 10);
  if (!localInBoard(x, y)) {
    throw localApiError("INVALID_REQUEST", `${fieldName} is invalid`);
  }
  return { x, y };
}

function localParseHandToken(rawToken) {
  const raw = String(rawToken || "").trim();
  if (!raw) return { token: "", name: "", neutral: false };
  const m = raw.match(/^n[:：](.+)$/i);
  if (m) {
    const name = String(m[1] || "").trim();
    if (!name) return { token: "", name: "", neutral: false };
    return { token: `n:${name}`, name, neutral: true };
  }
  // 互換: 旧表記「n飛」も中立持駒として扱う（内部は n:飛 に正規化）。
  const mLegacy = raw.match(/^n(.+)$/i);
  if (mLegacy) {
    const legacyNameRaw = String(mLegacy[1] || "").trim();
    if (legacyNameRaw) {
      const resolved = localParsePieceTokenToName(legacyNameRaw, null);
      if (resolved && resolved !== "__none__" && resolved !== "__empty__") {
        return { token: `n:${resolved}`, name: resolved, neutral: true };
      }
    }
  }
  return { token: raw, name: raw, neutral: false };
}

function localMakeHandToken(name, neutral = false) {
  const n = String(name || "").trim();
  if (!n) return "";
  return neutral ? `n:${n}` : n;
}

function localHandTokenName(rawToken) {
  return localParseHandToken(rawToken).name;
}

function localHandTokenNeutral(rawToken) {
  return localParseHandToken(rawToken).neutral;
}

function localHandTokenEquals(a, b) {
  const pa = localParseHandToken(a);
  const pb = localParseHandToken(b);
  if (!pa.name || !pb.name) return false;
  return pa.name === pb.name && pa.neutral === pb.neutral;
}

function localDropMoveHasNeutralMetadata(move) {
  if (!move || typeof move !== "object") return false;
  const parsed = localParseHandToken(move?.hand_token ?? move?.name);
  if (parsed.neutral) return true;
  if (localHasOwn(move, "neutral_piece")) return true;
  if (localHasOwn(move, "piece_owner")) return true;
  return false;
}

function localDropMoveHandToken(move) {
  const parsed = localParseHandToken(move?.hand_token ?? move?.name);
  const baseName = String(parsed.name || move?.name || "").trim();
  if (!baseName) return { token: "", name: "", neutral: false };
  const neutral =
    Boolean(parsed.neutral) || Boolean(move?.neutral_piece) || Number(move?.piece_owner) === -1;
  return { token: localMakeHandToken(baseName, neutral), name: baseName, neutral };
}

function localRequestedDropHandToken(body) {
  const parsed = localParseHandToken(body?.hand_token ?? body?.name);
  const baseName = String(parsed.name || body?.name || "").trim();
  if (!baseName) return { token: "", name: "", neutral: false };
  const neutral =
    Boolean(parsed.neutral) || Boolean(body?.neutral_piece) || Number(body?.piece_owner) === -1;
  return { token: localMakeHandToken(baseName, neutral), name: baseName, neutral };
}

function localDropHandTokenMatches(move, rawToken) {
  const req = localParseHandToken(rawToken);
  if (!req.name) return false;
  const mv = localDropMoveHandToken(move);
  if (!mv.name) return false;
  if (req.name !== mv.name) return false;
  if (req.neutral === mv.neutral) return true;
  // 互換: 旧フォーマット等で合法手側に中立情報が欠ける場合は、n:指定を名前一致で許容する。
  if (req.neutral && !mv.neutral && !localDropMoveHasNeutralMetadata(move)) return true;
  return false;
}

function localExtractNeutralPieceNotationToken(rawText) {
  let hasNeutral = false;
  const out = String(rawText || "").replace(/n[（(]\s*([^()（）]+?)\s*[）)]/gi, (_m, g1) => {
    hasNeutral = true;
    return String(g1 || "").trim();
  });
  return { text: out, neutral: hasNeutral };
}

function localRemoveFromHandArray(hand, name) {
  if (!Array.isArray(hand)) return false;
  let idx = hand.findIndex((token) => localHandTokenEquals(token, name));
  if (idx < 0) idx = hand.indexOf(name);
  if (idx < 0) return false;
  hand.splice(idx, 1);
  return true;
}

function localPieceDisplayNameForNotation(pieceName, pieceOwner = null) {
  return localDisplayPieceNameByOwner(pieceName, pieceOwner);
}

function localNotationPieceLabel(pieceName, options = {}) {
  const disp = localPieceDisplayNameForNotation(pieceName, options?.pieceOwner);
  return Boolean(options?.neutralPiece) ? `n${disp}` : disp;
}

function localMoveNotationText(pieceName, to, opts = {}) {
  const file = 9 - Number(to?.x || 0);
  const rank = Number(to?.y || 0) + 1;
  const disp = localNotationPieceLabel(pieceName, { ...opts, pieceOwner: opts?.pieceOwner });
  const promoteText = opts.promote ? "成" : "";
  const dropText = opts.drop ? "打" : "";
  return `${file}${rank}${disp}${promoteText}${dropText}`;
}

function localMoveCoordDigitsText(x, y) {
  return `${9 - Number(x)}${Number(y) + 1}`;
}

function localFormatSquarePieceNotation(x, y, name, owner = null) {
  const file = 9 - Number(x || 0);
  const rank = Number(y || 0) + 1;
  const disp = localPieceDisplayNameForNotation(name, owner);
  return `${file}${rank}${disp}`;
}

function localPwcWillSwapCapturedPiece(pieces, capturedPiece, fromX, fromY, toX, toY, locustCapturePos, rules = {}) {
  if (!capturedPiece || !rules?.pwc) return false;
  const capturedOwner = Number(capturedPiece.owner);
  const removeKeys = new Set([`${Number(fromX)},${Number(fromY)}`, `${Number(toX)},${Number(toY)}`]);
  if (locustCapturePos && localInBoard(locustCapturePos.x, locustCapturePos.y)) {
    removeKeys.add(`${Number(locustCapturePos.x)},${Number(locustCapturePos.y)}`);
  }
  const remaining = [];
  for (const p of Array.isArray(pieces) ? pieces : []) {
    if (!p) continue;
    const key = `${Number(p.x)},${Number(p.y)}`;
    if (removeKeys.has(key)) continue;
    remaining.push(p);
  }
  const isDead = localIsDeadZoneByRules(capturedPiece.name, capturedOwner, Number(fromY), rules);
  let isNifu = false;
  if (capturedPiece.name === "歩" && !rules.allow_double_fu) {
    isNifu = localCountFuInFile(remaining, Number(fromX), capturedOwner) > 0;
  }
  return !isDead && !isNifu;
}

function localPwcSwapNotationSuffix(ctx, owner, fromX, fromY, capturedPiece, includeOwnerPrefix = true) {
  if (!capturedPiece) return "";
  const prefix = includeOwnerPrefix ? localMovePrefixForOwner(ctx, owner) : "";
  return `/${localComposeTokenWithOwnerPrefix(prefix, localFormatSquarePieceNotation(fromX, fromY, capturedPiece.name, capturedPiece.owner))}`;
}

function localRifleReturnNotationSuffix(fromX, fromY, returnPieceName, includeOwnerPrefix = false, owner = 0, ctx = null) {
  const prefix = includeOwnerPrefix ? localMovePrefixForOwner(ctx, owner) : "";
  return `/${localComposeTokenWithOwnerPrefix(prefix, localFormatSquarePieceNotation(fromX, fromY, returnPieceName, owner))}`;
}

function localRebirthNotationSuffix(ctx, rebirthOwner, x, y, rebirthPieceName) {
  const ownerNum = Number(rebirthOwner);
  const hasOwnerPrefix = ownerNum === 0 || ownerNum === 1;
  const prefix = hasOwnerPrefix ? localMovePrefixForOwner(ctx, ownerNum) : "";
  return `/${localComposeTokenWithOwnerPrefix(prefix, localFormatSquarePieceNotation(x, y, rebirthPieceName, ownerNum))}`;
}

function localMessignySwapNotationSuffix(ctx, swapOwner, fromX, fromY, swapPieceName) {
  const ownerNum = Number(swapOwner);
  const hasOwnerPrefix = ownerNum === 0 || ownerNum === 1;
  const prefix = hasOwnerPrefix ? localMovePrefixForOwner(ctx, ownerNum) : "";
  return `/${localComposeTokenWithOwnerPrefix(prefix, localFormatSquarePieceNotation(fromX, fromY, swapPieceName, ownerNum))}`;
}

function localMakeTakeMakeNotation(
  ctx,
  owner,
  name,
  fromX,
  fromY,
  stepToX,
  stepToY,
  finalToX,
  finalToY,
  promote,
  notationOptions = {}
) {
  const prefix = localMovePrefixForOwner(ctx, owner);
  const stepCoord = localMoveCoordText(ctx, stepToX, stepToY);
  const finalCoord = localMoveCoordDigitsText(finalToX, finalToY);
  const dispName = localNotationPieceLabel(name, {
    ...notationOptions,
    pieceOwner: notationOptions?.pieceOwner ?? owner,
  });
  let suffix = "";
  if (Boolean(promote)) {
    suffix = "成";
  } else {
    const rules = ctx?.state?.rules && typeof ctx.state.rules === "object" ? ctx.state.rules : {};
    if (!rules?.narikin) {
      const pieces = Array.isArray(ctx?.state?.board?.pieces) ? ctx.state.board.pieces : [];
      let canPromotePiece = false;
      const srcPiece = localFindPieceInList(pieces, fromX, fromY);
      if (srcPiece && Number(srcPiece.owner) === Number(owner)) {
        canPromotePiece = localPiecePromoteTo(srcPiece) !== null;
      } else {
        const srcName = String(name || "");
        canPromotePiece = localPiecePromoteTo({ name: srcName, attrs: localDefaultPieceAttrs(srcName) }) !== null;
      }
      if (canPromotePiece) {
        const inZone = Number(owner) === 1 ? (y) => Number(y) >= 6 : (y) => Number(y) <= 2;
        const isZone = inZone(fromY) || inZone(stepToY) || inZone(finalToY);
        if (isZone) suffix = "生";
      }
    }
  }
  return localComposeTokenWithOwnerPrefix(prefix, `${stepCoord}-${finalCoord}${dispName}${suffix}`);
}

function localIsTakeMakeActive(rules = {}) {
  return Boolean(rules?.take_make || rules?.k_take_make);
}

function localBuildTakeMakeContinuationSquares(
  pieces,
  movingPiece,
  firstTo,
  captureAt,
  capturedPiece,
  rules = {},
  options = {}
) {
  if (!movingPiece || !capturedPiece) return [];
  if (!localInBoard(firstTo?.x, firstTo?.y) || !localInBoard(captureAt?.x, captureAt?.y)) return [];
  const movingOwner = Number(movingPiece.owner);
  if (movingOwner !== 0 && movingOwner !== 1) return [];
  const capturedOwner = Number(capturedPiece.owner);
  const orientationOwnerRaw =
    options && Object.prototype.hasOwnProperty.call(options, "orientationOwner")
      ? Number(options.orientationOwner)
      : capturedOwner;
  const orientationOwner = orientationOwnerRaw === 0 || orientationOwnerRaw === 1 ? orientationOwnerRaw : capturedOwner;
  const typeAttrsOrCtx = options?.typeAttrsOrCtx || null;
  const movingSource =
    options?.movingSource && localInBoard(options.movingSource.x, options.movingSource.y)
      ? { x: Number(options.movingSource.x), y: Number(options.movingSource.y) }
      : { x: Number(movingPiece.x), y: Number(movingPiece.y) };
  const capturedMoveName = String(
    options?.capturedMoveName || localEffectiveMoveNameByPiece(pieces, capturedPiece, rules) || capturedPiece?.name || ""
  ).trim();
  if (!capturedMoveName) return [];

  let removedMoving = false;
  let removedCaptured = false;
  const tempPieces = [];
  for (const raw of Array.isArray(pieces) ? pieces : []) {
    if (!raw) continue;
    const x = Number(raw.x);
    const y = Number(raw.y);
    if (!removedMoving && x === movingSource.x && y === movingSource.y) {
      removedMoving = true;
      continue;
    }
    if (!removedCaptured && x === Number(captureAt.x) && y === Number(captureAt.y)) {
      removedCaptured = true;
      continue;
    }
    tempPieces.push(
      localAnnotatePieceEffectiveAttrs(
        {
          ...raw,
          attrs: localCloneRawPieceAttrs(raw?.attrs),
        },
        typeAttrsOrCtx
      )
    );
  }
  if (!removedMoving || !removedCaptured) return [];
  tempPieces.push(
    localAnnotatePieceEffectiveAttrs(
      localMakeBoardPiece(
        Number(firstTo.x),
        Number(firstTo.y),
        movingPiece.name,
        movingOwner,
        localCloneRawPieceAttrs(movingPiece?.attrs),
        typeAttrsOrCtx
      ),
      typeAttrsOrCtx
    )
  );

  const tempPieceMap = localPieceMapFromList(tempPieces);
  const targets = localGenerateTargetsByEffectiveMoveNameAt(
    tempPieces,
    tempPieceMap,
    capturedMoveName,
    orientationOwner,
    Number(firstTo.x),
    Number(firstTo.y),
    rules,
    "move"
  );
  const out = [];
  const seen = new Set();
  for (const t of Array.isArray(targets) ? targets : []) {
    const tx = Number(t?.x);
    const ty = Number(t?.y);
    if (!localInBoard(tx, ty)) continue;
    if (localFindPieceInList(tempPieces, tx, ty)) continue;
    const key = `${tx},${ty}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ x: tx, y: ty });
  }
  return out;
}

function localMovePrefixForOwner(ctx, owner) {
  if (ctx?.state?.rules?.all_in_shogi && Number(owner) !== Number(ctx?.state?.turn)) {
    return "v";
  }
  return Number(owner) === 0 ? "▲" : "△";
}

function localMoveCoordText(ctx, toX, toY) {
  let isSame = false;
  const node = localHistoryCurrentNode(ctx);
  const lastInfo = node?.last_move_info || null;
  if (node?.parent_id && lastInfo) {
    const info = localExtractLastMoveInfo(lastInfo);
    if (info?.to && Number(info.to.x) === Number(toX) && Number(info.to.y) === Number(toY)) {
      isSame = true;
    } else if (Array.isArray(info?.to) && Number(info.to[0]) === Number(toX) && Number(info.to[1]) === Number(toY)) {
      isSame = true;
    }
  }
  return isSame ? "同" : `${9 - Number(toX)}${Number(toY) + 1}`;
}

function localResolveMoveAmbiguity(owner, myPos, destPos, candidates, pieceName = null) {
  if (!Array.isArray(candidates) || candidates.length <= 1) return "";
  const destX = Number(destPos?.x);
  const destY = Number(destPos?.y);

  const moveKind = (fromY) => {
    if (Number(fromY) === destY) return "S";
    if (Number(owner) === 0) {
      return Number(fromY) > destY ? "U" : "D";
    }
    return Number(fromY) < destY ? "U" : "D";
  };
  const moveLabel = (kind) => ({ U: "上", S: "寄", D: "引" }[kind] || "");
  const rightRank = (x) => (Number(owner) === 0 ? Number(x) : -Number(x));

  const infos = candidates.map((c) => {
    const cx = Number(Array.isArray(c) ? c[0] : c?.x);
    const cy = Number(Array.isArray(c) ? c[1] : c?.y);
    return {
      pos: { x: cx, y: cy },
      x: cx,
      y: cy,
      rk: rightRank(cx),
      move: moveKind(cy),
      side: "",
      direct: false,
    };
  });

  for (const info of infos) {
    const hasMoreRight = infos.some((o) => o !== info && o.rk > info.rk);
    const hasMoreLeft = infos.some((o) => o !== info && o.rk < info.rk);
    if (hasMoreRight && !hasMoreLeft) {
      info.side = "左";
    } else if (hasMoreLeft && !hasMoreRight) {
      info.side = "右";
    }
  }

  const allowDirect = pieceName !== "龍";
  const hasSideUp = infos.some((o) => o.move === "U" && o.x !== destX);
  if (allowDirect && hasSideUp) {
    for (const info of infos) {
      if (info.x === destX && info.move === "U") {
        info.direct = true;
        info.side = "直";
      }
    }
  }

  const moveCounts = new Map();
  const sideCounts = new Map();
  const comboCounts = new Map();
  for (const info of infos) {
    moveCounts.set(info.move, (moveCounts.get(info.move) || 0) + 1);
    if (info.side) sideCounts.set(info.side, (sideCounts.get(info.side) || 0) + 1);
    if (info.side === "右" || info.side === "左") {
      const key = `${info.side}:${info.move}`;
      comboCounts.set(key, (comboCounts.get(key) || 0) + 1);
    }
  }

  const mine = infos.find((i) => i.x === Number(myPos?.x) && i.y === Number(myPos?.y));
  if (!mine) return "";

  const mMove = mine.move;
  const mSide = mine.side;
  const mMoveLabel = moveLabel(mMove);

  if ((moveCounts.get(mMove) || 0) === 1) return mMoveLabel;
  if (mSide && (sideCounts.get(mSide) || 0) === 1) return mSide;
  if ((mSide === "右" || mSide === "左") && (comboCounts.get(`${mSide}:${mMove}`) || 0) === 1) {
    return `${mSide}${mMoveLabel}`;
  }
  if (mSide) return mSide;
  return mMoveLabel;
}

function localMakeMoveNotation(ctx, owner, name, toX, toY, promote, isDrop, fromX = null, fromY = null, options = null) {
  const pieces = Array.isArray(ctx?.state?.board?.pieces) ? ctx.state.board.pieces : [];
  const rules = ctx?.state?.rules && typeof ctx.state.rules === "object" ? ctx.state.rules : {};
  const prefix = localMovePrefixForOwner(ctx, owner);
  const coordStr = localMoveCoordText(ctx, toX, toY);
  const neutralPiece = Boolean(options?.neutralPiece);
  const notationPieceOwner =
    options && Object.prototype.hasOwnProperty.call(options, "pieceOwner") ? Number(options.pieceOwner) : Number(owner);
  const dispName = localNotationPieceLabel(name, { neutralPiece, pieceOwner: notationPieceOwner });
  const locustCaptureCoord =
    options?.locustCapture && localInBoard(Number(options.locustCapture.x), Number(options.locustCapture.y))
      ? { x: Number(options.locustCapture.x), y: Number(options.locustCapture.y) }
      : null;
  const locustStepNotation =
    !isDrop &&
    !!locustCaptureCoord &&
    (String(name || "") === "Locust" || String(name || "") === "Siren" || String(name || "") === "Triton");
  const suppressRelative = Boolean(options?.suppressRelative);
  const explicitMessignySwap =
    typeof options?.messignySwap === "boolean" ? Boolean(options.messignySwap) : null;

  let relativeStr = "";
  let isMessignySwapNotation = explicitMessignySwap === true;
  if (!isDrop && fromX !== null && fromY !== null && !suppressRelative) {
    const candidates = [];
    if (explicitMessignySwap === null) {
      const targetPiece = localFindPieceInList(pieces, toX, toY);
      isMessignySwapNotation =
        Boolean(rules?.messigny) &&
        !!targetPiece &&
        Number(targetPiece.owner) !== Number(owner) &&
        String(targetPiece.name || "") === String(name || "");
    }
    for (const p of pieces) {
      if (!p) continue;
      if (Number(p.owner) !== Number(owner)) continue;
      if (String(p.name || "") !== String(name || "")) continue;
      if (isMessignySwapNotation) {
        candidates.push({ x: Number(p.x), y: Number(p.y) });
        continue;
      }
      const moves = localGenerateTargetsForPiece(pieces, p, rules, { mode: "move" });
      if (moves.some((m) => Number(m.x) === Number(toX) && Number(m.y) === Number(toY))) {
        candidates.push({ x: Number(p.x), y: Number(p.y) });
      }
    }
    if (candidates.length > 1) {
      relativeStr = localResolveMoveAmbiguity(
        owner,
        { x: Number(fromX), y: Number(fromY) },
        { x: Number(toX), y: Number(toY) },
        candidates,
        name
      );
    }
  }

  let suffix = "";
  if (isDrop) {
    if (localDropNeedsSuffix(ctx, owner, name, toX, toY, coordStr)) {
      suffix = "打";
    }
  } else if (promote && !isMessignySwapNotation) {
    suffix = "成";
  } else {
    let canPromotePiece = false;
    if (fromX !== null && fromY !== null) {
      const srcPiece = localFindPieceInList(pieces, fromX, fromY);
      if (srcPiece && Number(srcPiece.owner) === Number(owner)) {
        const srcName = String(srcPiece.name || "");
        // 駒属性で promote_to が設定されていれば、成駒でも再度成れる。
        canPromotePiece = localPiecePromoteTo(srcPiece) !== null;
      }
    } else {
      const srcName = String(name || "");
      canPromotePiece = localPiecePromoteTo({ name: srcName, attrs: localDefaultPieceAttrs(srcName) }) !== null;
    }
    let isZone = false;
    if (fromY !== null) {
      if (Number(owner) === 0 && (Number(fromY) <= 2 || Number(toY) <= 2)) {
        isZone = true;
      } else if (Number(owner) === 1 && (Number(fromY) >= 6 || Number(toY) >= 6)) {
        isZone = true;
      }
    }
    if (canPromotePiece && isZone && !promote && !rules?.narikin && !isMessignySwapNotation) {
      suffix = "生";
    }
  }
  const leadCoord = locustStepNotation ? `${localMoveCoordText(ctx, locustCaptureCoord.x, locustCaptureCoord.y)}-` : "";
  return localComposeTokenWithOwnerPrefix(prefix, `${leadCoord}${coordStr}${dispName}${relativeStr}${suffix}`);
}

function localDropNeedsSuffix(ctx, owner, name, toX, toY, coordStr = null) {
  const pieces = Array.isArray(ctx?.state?.board?.pieces) ? ctx.state.board.pieces : [];
  const rules = ctx?.state?.rules && typeof ctx.state.rules === "object" ? ctx.state.rules : {};
  const coord = coordStr || localMoveCoordText(ctx, toX, toY);
  const dispName = localPieceDisplayNameForNotation(name, owner);
  const dropBody = `${coord}${dispName}`;
  for (const p of pieces) {
    if (!p) continue;
    if (Number(p.owner) !== Number(owner)) continue;
    if (localPieceDisplayNameForNotation(p.name, p.owner) !== dispName) continue;
    const moves = localGenerateTargetsForPiece(pieces, p, rules, { mode: "move" });
    if (!moves.some((m) => Number(m.x) === Number(toX) && Number(m.y) === Number(toY))) continue;
    const boardMove = localMakeMoveNotation(ctx, owner, p.name, toX, toY, false, false, p.x, p.y);
    const boardBody = boardMove ? localStripReplayOwnerPrefix(boardMove) : boardMove;
    if (boardBody === dropBody) return true;
  }
  return false;
}

function localGetCirceRebirthCandidates(
  pieces,
  pieceName,
  owner,
  capturePos,
  movingPiecePos = null,
  rules = {}
) {
  const baseName = standardBaseName(pieceName);
  const startsRaw = LOCAL_CIRCE_START_POS_SENTE[baseName];
  if (!Array.isArray(startsRaw) || startsRaw.length === 0) return [];
  let starts = startsRaw.map((v) => ({ x: Number(v[0]), y: Number(v[1]) }));
  if (Number(owner) === 1) {
    starts = starts.map((s) => ({ x: 8 - s.x, y: 8 - s.y }));
  }
  const cap = capturePos ? { x: Number(capturePos.x), y: Number(capturePos.y) } : null;
  const moving = movingPiecePos ? { x: Number(movingPiecePos.x), y: Number(movingPiecePos.y) } : null;
  if (!cap || !localInBoard(cap.x, cap.y)) return [];
  if (baseName === "歩") {
    // Circe の歩は「取られた地点」の筋の初期位置へ戻す。
    starts = starts.filter((s) => s.x === cap.x);
  }
  if (starts.length === 0) return [];
  const dists = starts.map((s) => ({
    s,
    d: Math.abs(cap.x - s.x) + Math.abs(cap.y - s.y),
  }));
  const minDist = Math.min(...dists.map((v) => v.d));
  const closest = dists.filter((v) => v.d === minDist).map((v) => v.s);
  const out = [];
  for (const s of closest) {
    const occ = localFindPieceInList(pieces, s.x, s.y);
    if (occ && !(moving && s.x === moving.x && s.y === moving.y)) continue;
    if (baseName === "歩" && !rules?.allow_double_fu) {
      let fuCount = localCountFuInFile(pieces, s.x, Number(owner));
      const capturedAt = localFindPieceInList(pieces, cap.x, cap.y);
      if (
        capturedAt &&
        String(capturedAt.name || "") === "歩" &&
        Number(capturedAt.owner) === Number(owner) &&
        Number(cap.x) === Number(s.x)
      ) {
        fuCount -= 1;
      }
      if (
        moving &&
        Number(moving.x) === Number(s.x)
      ) {
        const movingPiece = localFindPieceInList(pieces, moving.x, moving.y);
        if (
          movingPiece &&
          String(movingPiece.name || "") === "歩" &&
          Number(movingPiece.owner) === Number(owner)
        ) {
          fuCount -= 1;
        }
      }
      if (fuCount > 0) continue;
    }
    out.push({ x: s.x, y: s.y });
  }
  return out;
}

function localShouldCapturedGoToHand(piece, typeAttrsOrCtx = null) {
  if (!piece) return false;
  if (localIsNeutralImitatorName(piece.name) || piece.name === "石" || piece.name === "穴" || piece.name === "塔") {
    return false;
  }
  const attrs =
    piece.effective_attrs && typeof piece.effective_attrs === "object"
      ? piece.effective_attrs
      : localEffectivePieceAttrs(piece, typeAttrsOrCtx);
  if (attrs.is_king) return false;
  if (!Boolean(attrs.to_hand)) return false;

  // 成駒側に to_hand の明示指定がない場合は、基底駒の設定を継承する。
  const base = localBaseNameForHand(piece.name);
  if (base && base !== piece.name) {
    const rawPieceAttrs = piece?.attrs && typeof piece.attrs === "object" ? piece.attrs : {};
    const typeAttrs = localResolveTypeAttrsMap(typeAttrsOrCtx);
    const currentTypeAttrs =
      typeAttrs && typeof typeAttrs === "object" && typeAttrs[piece.name] && typeof typeAttrs[piece.name] === "object"
        ? typeAttrs[piece.name]
        : {};
    const hasExplicitCurrent = localHasOwn(rawPieceAttrs, "to_hand") || localHasOwn(currentTypeAttrs, "to_hand");
    if (!hasExplicitCurrent) {
      const baseTypeAttrs =
        typeAttrs && typeof typeAttrs === "object" && typeAttrs[base] && typeof typeAttrs[base] === "object"
          ? typeAttrs[base]
          : {};
      const baseEff = localMergePieceAttrs(localDefaultPieceAttrs(base), baseTypeAttrs);
      if (!Boolean(baseEff.to_hand)) return false;
    }
  }

  return true;
}

function localBaseNameForHand(name) {
  const tokenName = localHandTokenName(name);
  if (BASE_NAME_MAP && BASE_NAME_MAP[tokenName]) return BASE_NAME_MAP[tokenName];
  return String(tokenName || "");
}

function localCanDropFromHandName(name, owner, typeAttrsOrCtx = null) {
  const parsed = localParseHandToken(name);
  const n = String(parsed.name || "").trim();
  if (!n) return false;
  // 持駒表現は基底駒のみ（成駒は手駒として打てない）
  if (localBaseNameForHand(n) !== n) return false;
  return localShouldCapturedGoToHand(
    {
      name: n,
      owner: parsed.neutral ? -1 : Number(owner),
      attrs: {},
    },
    typeAttrsOrCtx
  );
}

function localAddCapturedPieceToHandByState(state, capturerOwner, capturedPiece, typeAttrsOrCtx = null) {
  if (!state || !capturedPiece) return false;
  const owner = Number(capturerOwner);
  if (owner !== 0 && owner !== 1) return false;
  if (!localShouldCapturedGoToHand(capturedPiece, typeAttrsOrCtx)) return false;
  const base = localBaseNameForHand(capturedPiece.name);
  if (!base || localIsKingName(base) || localIsNeutralImitatorName(base) || base === "石" || base === "穴" || base === "塔") {
    return false;
  }
  const neutral = Number(capturedPiece?.owner) === -1;
  const handToken = localMakeHandToken(base, neutral);
  state.hands[String(owner)] = state.hands[String(owner)] || [];
  state.hands[String(owner)].push(handToken);
  return true;
}

function localGenerateHistoryNodeId(ctx, prefix = "n_localm") {
  const now = Date.now().toString(36);
  const rnd = Math.random().toString(36).slice(2, 8);
  const rev = String(ctx?.revision ?? 0);
  return `${prefix}_${now}_${rev}_${rnd}`;
}

function localHistoryMoveTextCompareKey(text) {
  let s = String(text || "").trim();
  if (!s) return "";
  s = localNormalizeDigits(s);
  s = localStripReplayOwnerPrefixEachSegment(s);
  s = s.replace(/[ \t\u3000]+/g, "");
  return s;
}

function localFindMatchingLegalMove(ctx, kind, body) {
  const moves = Array.isArray(ctx?.legal?.moves) ? ctx.legal.moves : [];
  for (const mv of moves) {
    if (!mv || mv.kind !== kind) continue;
    if (kind === "move") {
      if (!localCoordsEqual(mv.from, body.from)) continue;
      if (!localCoordsEqual(mv.to, body.to)) continue;
      if (Boolean(mv.promote) !== Boolean(body.promote)) continue;
      if (typeof body?.messigny_swap === "boolean" && typeof mv?.messigny_swap === "boolean") {
        if (Boolean(mv.messigny_swap) !== Boolean(body.messigny_swap)) continue;
      }
      if (mv.rebirth || body.rebirth) {
        if (!localCoordsEqual(mv.rebirth, body.rebirth || null)) continue;
      }
      return mv;
    }
    if (kind === "drop") {
      if (!localCoordsEqual(mv.to, body.to)) continue;
      if (Number(mv.owner) !== Number(body.owner)) continue;
      const bodyToken = localRequestedDropHandToken(body);
      if (bodyToken.name) {
        if (!localDropHandTokenMatches(mv, bodyToken.token || bodyToken.name)) continue;
      }
      return mv;
    }
  }
  if (kind === "drop") {
    const bodyToken = localRequestedDropHandToken(body);
    if (!bodyToken.name) return null;
    const loose = moves.filter((mv) => {
      if (!mv || mv.kind !== "drop") return false;
      if (!localCoordsEqual(mv.to, body.to)) return false;
      if (Number(mv.owner) !== Number(body.owner)) return false;
      const mvToken = localDropMoveHandToken(mv);
      return mvToken.name === bodyToken.name;
    });
    if (loose.length === 1) return loose[0];
    if (loose.length > 1) {
      const sameNeutral = loose.filter((mv) => localDropMoveHandToken(mv).neutral === bodyToken.neutral);
      if (sameNeutral.length === 1) return sameNeutral[0];
      const reqRaw = bodyToken.token || bodyToken.name;
      const compat = loose.filter((mv) => localDropHandTokenMatches(mv, reqRaw));
      if (compat.length >= 1) return compat[0];
    }
  }
  return null;
}

function localHistoryAppendMoveNode(ctx, moveStr, nextTurn, lastMoveInfo) {
  const history = ctx.history;
  if (!history || !Array.isArray(history.nodes)) {
    ctx.history = localBaseHistoryForState(ctx.state);
  }
  const rootId = ctx.history.root_id || "n_root";
  let byId = localHistoryNodeMap(ctx);
  let p = byId.get(ctx.history.current_id || rootId) || byId.get(rootId);
  if (!p) {
    ctx.history = localBaseHistoryForState(ctx.state);
    byId = localHistoryNodeMap(ctx);
    p = byId.get(ctx.history.current_id || ctx.history.root_id || "n_root");
  }
  if (!p) {
    throw localApiError("INVALID_REQUEST", "history parent not found");
  }
  const parentMoveText = String(p?.move_str || "").trim();
  if (localIsTerminalResultText(parentMoveText)) {
    throw localApiError("INVALID_MOVE", "cannot append move after terminal result");
  }

  const moveKey = localHistoryMoveTextCompareKey(moveStr);
  const existingChildId = (Array.isArray(p.children) ? p.children : []).find((childId) => {
    const c = byId.get(childId);
    if (!c) return false;
    if (c.move_str === moveStr) return true;
    return localHistoryMoveTextCompareKey(c.move_str) === moveKey;
  });
  if (existingChildId) {
    const c = byId.get(existingChildId);
    if (c) {
      c.last_move_info = lastMoveInfo || null;
      localSetNodeSnapshotFromState(c, ctx.state);
      c.snapshot_turn = Number(nextTurn);
    }
    ctx.history.current_id = existingChildId;
    return;
  }

  const ply = Number.parseInt(p.ply, 10) + 1 || 1;
  const nodeId = localGenerateHistoryNodeId(ctx);
  const node = {
    node_id: nodeId,
    parent_id: p.node_id,
    ply,
    move_str: moveStr,
    turn: Number(nextTurn),
    last_move_info: lastMoveInfo || null,
    children: [],
  };
  if (!Array.isArray(p.children)) p.children = [];
  p.children.push(nodeId);
  localSetNodeSnapshotFromState(node, ctx.state);
  node.snapshot_turn = Number(nextTurn);
  ctx.history.nodes.push(node);
  // ノードマップ再構築を避けるため、append分だけキャッシュに反映する。
  if (ctx.history?._node_map_cache?.map instanceof Map) {
    ctx.history._node_map_cache.map.set(nodeId, node);
    ctx.history._node_map_cache.size = ctx.history.nodes.length;
  }
  ctx.history.current_id = nodeId;
}

function localApplyMoveCore(ctx, body) {
  localEnsureRevision(ctx, body?.expected_revision);
  if (ctx.state.mode !== "play") {
    throw localApiError("INVALID_EDIT", "play endpoint is not available in edit mode");
  }
  const noTouch = Boolean(body?.no_touch || body?.noTouch);
  const skipStateBackup = Boolean(body?.skip_state_backup || body?.skipStateBackup);
  const skipLegalPrecompute = Boolean(body?.skip_legal_precompute || body?.skipLegalPrecompute);

  const from = localCoordFromInput(body?.from, "from");
  const to = localCoordFromInput(body?.to, "to");
  const promote = Boolean(body?.promote);
  const rebirth = body?.rebirth ? localCoordFromInput(body.rebirth, "rebirth") : null;

  const moving = localFindPiece(ctx.state, from.x, from.y);
  if (!moving) {
    throw localApiError("INVALID_MOVE", "piece not found at from");
  }
  const allInShogi = Boolean(ctx.state?.rules?.all_in_shogi);
  let legalMv =
    body?.prevalidated_move && typeof body.prevalidated_move === "object"
      ? cloneJson(body.prevalidated_move)
      : null;
  if (!legalMv) {
    if (!skipLegalPrecompute) {
      localComputeLegalAll(ctx);
    }
    legalMv = localFindMatchingLegalMove(ctx, "move", {
      from,
      to,
      promote,
      rebirth,
      messigny_swap: body?.messigny_swap,
    });
  }
  if (!legalMv) {
    throw localApiError("INVALID_MOVE", "move is not in legal move list");
  }
  if (!allInShogi) {
    const turnNow = Number(ctx.state.turn);
    const moveOwner = Number(legalMv?.owner);
    const movingOwner = Number(moving.owner);
    const effectiveMoveOwner = Number.isFinite(moveOwner) ? moveOwner : movingOwner;
    const ownerOk =
      movingOwner === -1 ||
      movingOwner === turnNow ||
      effectiveMoveOwner === turnNow ||
      effectiveMoveOwner === -1;
    if (!ownerOk) {
      throw localApiError("INVALID_MOVE", "piece owner does not match turn");
    }
  }
  // 合法手照合済みなら from==to も許容する（Take&Make 等で成立し得る）。

  const rules = ctx.state?.rules && typeof ctx.state.rules === "object" ? ctx.state.rules : {};
  const movingOwner =
    Number(legalMv?.owner) === 0 || Number(legalMv?.owner) === 1
      ? Number(legalMv.owner)
      : Number(moving.owner) === -1
        ? Number(ctx.state.turn || 0)
        : Number.parseInt(moving.owner, 10);
  const movingNameBefore = moving.name;
  const movingAttrsBefore = localCloneRawPieceAttrs(moving?.attrs);
  if (localIsTakeMakeActive(rules) && legalMv?.take_make) {
    const simState = localSimulateStateAfterCandidate(
      ctx.state?.board?.pieces || [],
      localCloneHands(ctx.state?.hands),
      Number(ctx.state.turn || 0),
      legalMv,
      rules,
      ctx
    );
    if (!simState || !simState.board || !Array.isArray(simState.board.pieces)) {
      throw localApiError("INVALID_MOVE", "take_make simulation failed");
    }
    ctx.state.board = cloneJson(simState.board);
    ctx.state.hands = cloneJson(simState.hands || localCloneHands(ctx.state?.hands));
    ctx.state.turn = Number(simState.turn);
    if (!noTouch) {
      localRefreshAllPieceEffectiveAttrs(ctx);
    }
    const notation =
      String(legalMv?.notation || "") ||
      localMakeTakeMakeNotation(
        ctx,
        movingOwner,
        movingNameBefore,
        from.x,
        from.y,
        Number(legalMv?.take_make?.step_to?.x ?? to.x),
        Number(legalMv?.take_make?.step_to?.y ?? to.y),
        Number(legalMv?.to?.x ?? to.x),
        Number(legalMv?.to?.y ?? to.y),
        promote,
        { neutralPiece: Number(moving?.owner) === -1 }
      );
    localHistoryAppendMoveNode(ctx, notation, Number(ctx.state.turn || 0), {
      name: movingNameBefore,
      from: { x: from.x, y: from.y },
      to: { x: Number(legalMv?.to?.x ?? to.x), y: Number(legalMv?.to?.y ?? to.y) },
      captured: Boolean(legalMv?.capture),
    });
    ctx.legal = localEmptyLegal();
    if (!noTouch) localTouch(ctx);
    return localOkState(ctx);
  }
  const targetAtToRaw = localFindPiece(ctx.state, to.x, to.y);
  const locustCapturePos =
    legalMv?.locust_capture && localInBoard(legalMv.locust_capture.x, legalMv.locust_capture.y)
      ? { x: Number(legalMv.locust_capture.x), y: Number(legalMv.locust_capture.y) }
      : null;
  const locustCaptured = locustCapturePos
    ? localFindPiece(ctx.state, locustCapturePos.x, locustCapturePos.y)
    : null;
  const isSwap =
    Boolean(legalMv?.messigny_swap) &&
    targetAtToRaw &&
    Number(targetAtToRaw.owner) !== Number(moving.owner) &&
    localEquivalentMoveName(String(targetAtToRaw.name || ""), String(moving.name || ""));
  if (Boolean(legalMv?.messigny_swap) && !isSwap) {
    throw localApiError("INVALID_MOVE", "messigny swap target is invalid");
  }
  const swapSourcesExtra = isSwap ? new Set([`${to.x},${to.y}`]) : null;
  const imitatorPlan = Array.isArray(legalMv?.imitator_plan)
    ? cloneJson(legalMv.imitator_plan)
    : localCalcImitatorSyncPlan(
        ctx.state?.board?.pieces || [],
        from.x,
        from.y,
        to.x,
        to.y,
        { isDrop: false, movingSourcesExtra: swapSourcesExtra }
      );
  if (imitatorPlan === null) {
    throw localApiError("INVALID_MOVE", "imitator sync would be invalid");
  }
  const targetAtTo = localImitatorPlanUsesSourceSquare(imitatorPlan, to.x, to.y)
    ? null
    : targetAtToRaw;
  const imitatorPayload = [];
  for (const step of imitatorPlan || []) {
    const sx = Number(step?.src?.x);
    const sy = Number(step?.src?.y);
    const dx = Number(step?.dst?.x);
    const dy = Number(step?.dst?.y);
    if (!localInBoard(sx, sy) || !localInBoard(dx, dy)) {
      throw localApiError("INVALID_MOVE", "imitator sync square is invalid");
    }
    const imp = localFindPiece(ctx.state, sx, sy);
    if (!imp || !localIsImitatorPiece(imp)) {
      throw localApiError("INVALID_MOVE", "imitator sync source is invalid");
    }
    imitatorPayload.push({
      name: imp.name,
      owner: imp.owner,
      attrs: localCloneRawPieceAttrs(imp?.attrs),
      src: { x: sx, y: sy },
      dst: { x: dx, y: dy },
    });
  }
  const backupState = skipStateBackup
    ? null
    : {
        board: cloneJson(ctx.state.board),
        hands: cloneJson(ctx.state.hands),
        turn: Number(ctx.state.turn || 0),
      };
  try {
    for (const step of imitatorPayload) {
      localRemovePieceAt(ctx.state, step.src.x, step.src.y);
    }

  let captured = null;
  let pwcSwapped = false;
  let actualTo = { x: to.x, y: to.y };
  let rebirthApplied = false;

  if (isSwap && targetAtTo) {
    const targetName = targetAtTo.name;
    const targetOwner = targetAtTo.owner;
    const targetAttrs = localCloneRawPieceAttrs(targetAtTo?.attrs);
    localRemovePieceAt(ctx.state, from.x, from.y);
    localRemovePieceAt(ctx.state, to.x, to.y);
    ctx.state.board.pieces.push(localMakeBoardPiece(to.x, to.y, movingNameBefore, moving.owner, movingAttrsBefore, ctx));
    ctx.state.board.pieces.push(localMakeBoardPiece(from.x, from.y, targetName, targetOwner, targetAttrs, ctx));
  } else {
    captured =
      targetAtTo && !localIsFriendlyPieceForMove(moving, Number(targetAtTo.owner), movingOwner) ? targetAtTo : null;
    if (!captured && locustCaptured && !localIsFriendlyPieceForMove(moving, Number(locustCaptured.owner), movingOwner)) {
      captured = locustCaptured;
    }
    localRemovePieceAt(ctx.state, from.x, from.y);
    localRemovePieceAt(ctx.state, to.x, to.y);
    if (captured && locustCapturePos) {
      localRemovePieceAt(ctx.state, locustCapturePos.x, locustCapturePos.y);
    }

    let nextName = movingNameBefore;
    let nextAttrs = movingAttrsBefore;
    if (promote) {
      const pto = localPiecePromoteTo(moving);
      const pa = localPiecePromoteAttrs(moving);
      if (pto) {
        const resolved = localResolvePromotionResult(moving, pto, pa);
        nextName = resolved.name;
        nextAttrs = resolved.attrs;
      } else {
        nextAttrs = pa ? localCloneRawPieceAttrs(pa) : {};
        if (localPieceIsKing(moving)) {
          nextAttrs = localCloneRawPieceAttrs(nextAttrs);
          nextAttrs.is_king = true;
        }
      }
    }

    const movedPiece = localMakeBoardPiece(to.x, to.y, nextName, moving.owner, nextAttrs, ctx);
    ctx.state.board.pieces.push(movedPiece);

    if (captured) {
      const capturedOwner = Number(captured.owner);
      if (rules.pwc) {
        const isDead = localIsDeadZoneByRules(captured.name, capturedOwner, from.y, rules);
        let isNifu = false;
        if (captured.name === "歩" && !rules.allow_double_fu) {
          isNifu = localCountFuInFile(ctx.state.board.pieces, from.x, capturedOwner) > 0;
        }
        if (!isDead && !isNifu) {
          ctx.state.board.pieces.push(
            localMakeBoardPiece(from.x, from.y, captured.name, captured.owner, captured?.attrs, ctx)
          );
          pwcSwapped = true;
        } else {
          localAddCapturedPieceToHandByState(ctx.state, movingOwner, captured, ctx);
        }
      } else if (rules.anti_circe) {
        localAddCapturedPieceToHandByState(ctx.state, movingOwner, captured, ctx);
        if (rebirth && localInBoard(rebirth.x, rebirth.y) && !localFindPiece(ctx.state, rebirth.x, rebirth.y)) {
          localRemovePieceAt(ctx.state, to.x, to.y);
          movedPiece.x = rebirth.x;
          movedPiece.y = rebirth.y;
          ctx.state.board.pieces.push(movedPiece);
          actualTo = { x: rebirth.x, y: rebirth.y };
          rebirthApplied = true;
        }
      } else if (rules.circe) {
        let canRebirth = false;
        if (rebirth && localInBoard(rebirth.x, rebirth.y) && !localFindPiece(ctx.state, rebirth.x, rebirth.y)) {
          const base = standardBaseName(captured.name);
          let nifu = false;
          if (base === "歩" && !rules.allow_double_fu) {
            nifu = localCountFuInFile(ctx.state.board.pieces, rebirth.x, capturedOwner) > 0;
          }
          if (!nifu) {
            ctx.state.board.pieces.push(localMakeBoardPiece(rebirth.x, rebirth.y, base, capturedOwner, {}, ctx));
            canRebirth = true;
          }
        }
        if (!canRebirth) {
          localAddCapturedPieceToHandByState(ctx.state, movingOwner, captured, ctx);
        }
        rebirthApplied = canRebirth;
      } else {
        localAddCapturedPieceToHandByState(ctx.state, movingOwner, captured, ctx);
      }
      if (rules.rifle) {
        if (localFindPiece(ctx.state, from.x, from.y)) {
          throw localApiError("INVALID_MOVE", "rifle return square is occupied");
        }
        localRemovePieceAt(ctx.state, actualTo.x, actualTo.y);
        movedPiece.x = from.x;
        movedPiece.y = from.y;
        ctx.state.board.pieces.push(movedPiece);
        actualTo = { x: from.x, y: from.y };
      }
    }
  }

  for (const step of imitatorPayload) {
    if (localFindPiece(ctx.state, step.dst.x, step.dst.y)) {
      throw localApiError("INVALID_MOVE", "imitator sync destination is occupied");
    }
  }
  for (const step of imitatorPayload) {
    ctx.state.board.pieces.push(localMakeBoardPiece(step.dst.x, step.dst.y, step.name, step.owner, step.attrs, ctx));
  }

    const movedAfter = localFindPiece(ctx.state, actualTo.x, actualTo.y);
    let andernachTurned = false;
    if (movedAfter) {
      const canFlipOwner = Number(movedAfter.owner) === 0 || Number(movedAfter.owner) === 1;
      if (canFlipOwner && !localPieceIsKing(movedAfter) && rules.andernach && captured) {
        movedAfter.owner = Number(movedAfter.owner) === 0 ? 1 : 0;
        andernachTurned = true;
      } else if (canFlipOwner && !localPieceIsKing(movedAfter) && rules.anti_andernach && !captured) {
        movedAfter.owner = Number(movedAfter.owner) === 0 ? 1 : 0;
        andernachTurned = true;
      } else if (canFlipOwner && !localPieceIsKing(movedAfter) && rules.all_andernach) {
        movedAfter.owner = Number(movedAfter.owner) === 0 ? 1 : 0;
        andernachTurned = true;
      }
    }

    if (!noTouch) {
      localRefreshAllPieceEffectiveAttrs(ctx);
    }
    if (!Boolean(rules.allow_check_on_self)) {
      const selfCheckOwner = Number(ctx.state.turn) === 1 ? 1 : 0;
      const checkedMoveLike = {
        ...legalMv,
        from: { x: Number(from.x), y: Number(from.y) },
        to: { x: Number(actualTo.x), y: Number(actualTo.y) },
        promote: Boolean(promote),
      };
      const checkedSimInfo = localCandidateLastMoveInfo(checkedMoveLike);
      const checkedSimMoveStr = String(legalMv?.notation || "");
      const selfChecked = localIsSelfCheckedAfterMoveState(
        ctx.state?.board?.pieces || [],
        localCloneHands(ctx.state?.hands),
        selfCheckOwner,
        rules,
        checkedSimInfo,
        checkedSimMoveStr,
        ctx,
        checkedMoveLike,
        false
      );
      if (selfChecked) {
        throw localApiError("INVALID_MOVE", "move leaves own king in check");
      }
    }
    const suppressMismatchedRebirthNotation =
      Boolean(legalMv?.rebirth) &&
      Boolean(captured) &&
      (rules?.circe || rules?.anti_circe) &&
      !rebirthApplied;
    let notation =
      (!suppressMismatchedRebirthNotation && legalMv?.notation) ||
      `${localMakeMoveNotation(
        ctx,
        movingOwner,
        movingNameBefore,
        to.x,
        to.y,
        promote,
        false,
        from.x,
        from.y,
        {
          suppressRelative: pwcSwapped,
          neutralPiece: Number(moving.owner) === -1,
          pieceOwner: Number(moving.owner),
          locustCapture:
            legalMv?.locust_capture && localInBoard(Number(legalMv.locust_capture.x), Number(legalMv.locust_capture.y))
              ? { x: Number(legalMv.locust_capture.x), y: Number(legalMv.locust_capture.y) }
              : null,
        }
      )}${localImitatorSuffixFromPlan(
        imitatorPlan
      )}`;
    if (!legalMv?.notation && isSwap && targetAtToRaw) {
      notation += localMessignySwapNotationSuffix(
        ctx,
        Number(targetAtToRaw.owner),
        from.x,
        from.y,
        targetAtToRaw.name || movingNameBefore
      );
    }
    if (!legalMv?.notation && pwcSwapped && captured) {
      notation += localPwcSwapNotationSuffix(ctx, Number(captured.owner), from.x, from.y, captured, true);
    }
    if (!legalMv?.notation && rules.rifle && captured) {
      notation += localRifleReturnNotationSuffix(from.x, from.y, movedPiece.name, false, movingOwner, ctx);
    }
    if (andernachTurned && !notation.includes("転")) {
      notation += "転";
    }
    const nextTurn = Number(ctx.state.turn) === 0 ? 1 : 0;
    const historyTo =
      rules.rifle && captured
        ? { x: to.x, y: to.y }
        : { x: actualTo.x, y: actualTo.y };
    ctx.state.turn = nextTurn;
    localHistoryAppendMoveNode(ctx, notation, nextTurn, {
      name: movingNameBefore,
      from: { x: from.x, y: from.y },
      to: historyTo,
      captured: Boolean(captured),
    });
    ctx.legal = localEmptyLegal();
    if (!noTouch) localTouch(ctx);
    return localOkState(ctx);
  } catch (e) {
    if (backupState) {
      ctx.state.board = backupState.board;
      ctx.state.hands = backupState.hands;
      ctx.state.turn = backupState.turn;
    }
    throw e;
  }
}

function localApplyDropCore(ctx, body) {
  localEnsureRevision(ctx, body?.expected_revision);
  if (ctx.state.mode !== "play") {
    throw localApiError("INVALID_EDIT", "play endpoint is not available in edit mode");
  }
  const noTouch = Boolean(body?.no_touch || body?.noTouch);

  const owner = Number.parseInt(body?.owner, 10);
  const handToken = String(body?.hand_token ?? body?.name ?? "").trim();
  const handInfo = localParseHandToken(handToken);
  const name = String(handInfo.name || "").trim();
  const to = localCoordFromInput(body?.to, "to");
  if ((owner !== 0 && owner !== 1) || !name) {
    throw localApiError("INVALID_DROP", "invalid drop args");
  }
  const allInShogi = Boolean(ctx.state?.rules?.all_in_shogi);
  if (!allInShogi && owner !== Number(ctx.state.turn)) {
    throw localApiError("INVALID_DROP", "owner does not match turn");
  }
  if (localFindPiece(ctx.state, to.x, to.y)) {
    throw localApiError("INVALID_DROP", "destination is occupied");
  }
  localComputeLegalAll(ctx);
  const legalMv = localFindMatchingLegalMove(ctx, "drop", {
    owner,
    name,
    hand_token: handToken,
    to,
  });
  if (!legalMv) {
    throw localApiError("INVALID_DROP", "drop is not in legal move list");
  }

  const hand = ctx.state.hands[String(owner)] || [];
  const handTokenToRemove = String(legalMv?.hand_token || handToken || "");
  if (!localRemoveFromHandArray(hand, handTokenToRemove)) {
    throw localApiError("INVALID_DROP", "piece is not in hand");
  }
  ctx.state.hands[String(owner)] = hand;

  const pieceOwner =
    Number(legalMv?.piece_owner) === -1 ? -1 : handInfo.neutral || Boolean(legalMv?.neutral_piece) ? -1 : owner;
  ctx.state.board.pieces.push(localMakeBoardPiece(to.x, to.y, name, pieceOwner, {}, ctx));
  if (!noTouch) {
    localRefreshAllPieceEffectiveAttrs(ctx);
  }

  const notation =
    legalMv?.notation ||
    localMakeMoveNotation(ctx, owner, name, to.x, to.y, false, true, null, null, {
      neutralPiece: pieceOwner === -1,
      pieceOwner,
    });
  const nextTurn = Number(ctx.state.turn) === 0 ? 1 : 0;
  ctx.state.turn = nextTurn;
  localHistoryAppendMoveNode(ctx, notation, nextTurn, {
    name,
    from: null,
    to: { x: to.x, y: to.y },
    captured: false,
  });
  ctx.legal = localEmptyLegal();
  if (!noTouch) localTouch(ctx);
  return localOkState(ctx);
}

function localApplyRulePatch(ctx, rulesPatch, meta) {
  if (!rulesPatch || typeof rulesPatch !== "object") return;
  ctx.state.rules = localMergeRulesWithDefaults(ctx.state.rules);
  const validRuleKeys = new Set(Object.keys(ctx.state.rules || {}));
  for (const [key, value] of Object.entries(rulesPatch)) {
    if (!validRuleKeys.has(key)) {
      throw localApiError("INVALID_RULE", `unknown rule key: ${key}`);
    }
    ctx.state.rules[key] = value;
  }
  localApplyCustomRuleCompositionConstraints(ctx.state.rules, rulesPatch, validRuleKeys);
  if (ctx.state.rules.uchifu_simple) {
    ctx.state.rules.uchifu_complete = false;
  } else if (ctx.state.rules.uchifu_complete) {
    ctx.state.rules.uchifu_simple = false;
  }
  if (ctx.state.rules.isardam_type_b) {
    ctx.state.rules.isardam = false;
  }
  if (ctx.state.rules.messigny_no_back) {
    ctx.state.rules.messigny = true;
  } else if (!ctx.state.rules.messigny) {
    ctx.state.rules.messigny_no_back = false;
  }
  if (ctx.state.rules.k_madrasi) {
    ctx.state.rules.madrasi = false;
  }
  if (ctx.state.rules.k_take_make) {
    ctx.state.rules.take_make = false;
  }

  const strategyOptions = Array.isArray(meta?.strategy_options) ? meta.strategy_options : [];
  const objectiveOptions = Array.isArray(meta?.objective_options) ? meta.objective_options : [];
  if (strategyOptions.length > 0 && !strategyOptions.includes(ctx.state.rules.strategy)) {
    ctx.state.rules.strategy = strategyOptions[0];
  }
  if (objectiveOptions.length > 0 && !objectiveOptions.includes(ctx.state.rules.objective)) {
    ctx.state.rules.objective = objectiveOptions[0];
  }
  const n = Number.parseInt(ctx.state.rules.problem_ply, 10);
  ctx.state.rules.problem_ply = Number.isFinite(n) && n > 0 ? n : 0;
  ctx.state.rule_name = localRuleNameFromRules(ctx.state.rules, { typeAttrs: ctx?.typeAttrs || {} });
}

function localExtractSessionIdFromPath(path) {
  const m = String(path || "").match(/\/api\/v1\/sessions\/([^/?]+)/);
  return m ? m[1] : null;
}

function localFindPiece(state, x, y) {
  const pieces = state?.board?.pieces;
  if (!Array.isArray(pieces)) return null;
  return pieces.find((p) => p && p.x === x && p.y === y) || null;
}

function localRemovePieceAt(state, x, y) {
  const pieces = state?.board?.pieces;
  if (!Array.isArray(pieces)) return;
  const idx = pieces.findIndex((p) => p && p.x === x && p.y === y);
  if (idx >= 0) pieces.splice(idx, 1);
}

function localNormalizeRawPieceAttrs(attrs, options = {}) {
  const allowPromoteAttrs = options?.allowPromoteAttrs !== false;
  const a = attrs && typeof attrs === "object" ? attrs : {};
  const out = {};
  if (localHasOwn(a, "display_name")) {
    if (a.display_name === null || a.display_name === undefined) {
      out.display_name = null;
    } else {
      const s = String(a.display_name).trim();
      out.display_name = s || null;
    }
  }
  if (localHasOwn(a, "to_hand")) {
    out.to_hand = Boolean(a.to_hand);
  }
  if (localHasOwn(a, "promote_to")) {
    let promoteTo = a.promote_to;
    if (promoteTo === "" || promoteTo === "None") promoteTo = null;
    out.promote_to = promoteTo ?? null;
  }
  if (localHasOwn(a, "is_king")) {
    out.is_king = Boolean(a.is_king);
  }
  if (localHasOwn(a, "immortal")) {
    out.immortal = Boolean(a.immortal);
  }
  if (allowPromoteAttrs && localHasOwn(a, "promote_attrs")) {
    const pAttrs = a.promote_attrs;
    if (pAttrs && typeof pAttrs === "object" && !Array.isArray(pAttrs) && Object.keys(pAttrs).length > 0) {
      out.promote_attrs = localNormalizeRawPieceAttrs(pAttrs, { allowPromoteAttrs: false });
    } else {
      out.promote_attrs = null;
    }
  }
  if (out.is_king && out.immortal) {
    out.immortal = false;
  }
  return out;
}

function localNormalizePieceAttrs(attrs) {
  const a = attrs && typeof attrs === "object" ? attrs : {};
  return {
    display_name: a.display_name ?? null,
    to_hand: typeof a.to_hand === "boolean" ? a.to_hand : true,
    promote_to: a.promote_to ?? null,
    is_king: Boolean(a.is_king),
    immortal: Boolean(a.immortal),
    promote_attrs: a.promote_attrs ?? null,
  };
}

const LOCAL_ATTR_KEYS = Object.freeze([
  "display_name",
  "to_hand",
  "promote_to",
  "is_king",
  "immortal",
  "promote_attrs",
]);

function localHasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj || {}, key);
}

const LOCAL_SFEN_NAME_TO_CODE = Object.freeze({
  歩: "P",
  香: "L",
  桂: "N",
  銀: "S",
  金: "G",
  角: "B",
  飛: "R",
  王: "K",
  玉: "K",
  と: "+P",
  成香: "+L",
  成桂: "+N",
  成銀: "+S",
  馬: "+B",
  龍: "+R",
  Queen: "Q",
  Zero: "0",
  Dummy: "D",
  Friend: "!",
  Imitator: "@",
  "Teleport-Imitator": "$",
  Knight: "n",
  Camel: "c",
  Zebra: "z",
  Dabbaba: "d",
  NightRider: "Y",
  Locust: "o",
  Siren: "i",
  Triton: "t",
  "Bishop-Grasshopper": "b",
  "Rook-Grasshopper": "r",
  Grasshopper: "g",
  NightRiderHopper: "h",
  Eagle: "e",
  Moose: "m",
  Sparrow: "s",
  Lion: "F",
  "Bishop-Lion": "l",
  RoseLion: "u",
  Rose: "W",
  Kangaroo: "k",
  Equihopper: "E",
  Pao: "p",
  Wazir: "V",
  横行: "j",
  獅子: "X",
  塔: "#",
});

const LOCAL_SFEN_CODE_TO_NAME = (() => {
  const m = {};
  for (const [name, code] of Object.entries(LOCAL_SFEN_NAME_TO_CODE)) {
    m[String(code).toUpperCase()] = name;
  }
  // Python 側の SFEN_TO_NAME と同様に K は 玉 に寄せる。
  m.K = "玉";
  return Object.freeze(m);
})();

const LOCAL_FALLBACK_DISPLAY_TO_NAME = Object.freeze({
  玉: "玉",
  王: "王",
  飛: "飛",
  角: "角",
  金: "金",
  銀: "銀",
  桂: "桂",
  香: "香",
  歩: "歩",
  龍: "龍",
  竜: "龍",
  馬: "馬",
  と: "と",
  成香: "成香",
  成桂: "成桂",
  成銀: "成銀",
  全: "成銀",
  圭: "成桂",
  杏: "成香",
  戦: "Dabbaba",
  横: "横行",
  横行: "横行",
  響: "Friend",
  Friend: "Friend",
  "■": "Imitator",
  "□": "Teleport-Imitator",
  "■(I)": "Imitator",
  "□(I)": "Teleport-Imitator",
  "◆": "塔",
  塔: "塔",
  なし: "__none__",
  "・": "__empty__",
});

const LOCAL_KIFU_RANK_LABELS = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
const LOCAL_HAND_NAME_ORDER = ["飛", "角", "金", "銀", "桂", "香", "歩"];
const FULLWIDTH_DIGIT_TO_ASCII = Object.freeze({
  "０": "0",
  "１": "1",
  "２": "2",
  "３": "3",
  "４": "4",
  "５": "5",
  "６": "6",
  "７": "7",
  "８": "8",
  "９": "9",
});

function localIsKingName(name) {
  return name === "玉" || name === "王";
}

function localNormalizeDigits(text) {
  return String(text || "").replace(/[０-９]/g, (ch) => FULLWIDTH_DIGIT_TO_ASCII[ch] || ch);
}

function localDefaultPieceAttrs(name) {
  const isKing = localIsKingName(name);
  return {
    display_name: null,
    to_hand: !isKing && !localIsNeutralImitatorName(name) && name !== "石" && name !== "穴" && name !== "塔",
    promote_to: DEFAULT_CAN_PROMOTE_NAMES.has(String(name || "")) ? PROMOTION_TOGGLE_MAP[name] || null : null,
    is_king: isKing,
    immortal: false,
    promote_attrs: null,
  };
}

function localDefaultPromoteTo(name) {
  return localDefaultPieceAttrs(name).promote_to ?? null;
}

function localMergePieceAttrs(baseAttrs, patchAttrs) {
  const base = localNormalizePieceAttrs(baseAttrs);
  const patch = patchAttrs && typeof patchAttrs === "object" ? patchAttrs : {};
  const out = { ...base };
  for (const key of LOCAL_ATTR_KEYS) {
    if (localHasOwn(patch, key)) out[key] = patch[key];
  }
  if (out.is_king) {
    out.immortal = false;
  }
  return localNormalizePieceAttrs(out);
}

function localEnsureTypeAttrsMap(ctx) {
  if (!ctx || typeof ctx !== "object") return {};
  if (!ctx.typeAttrs || typeof ctx.typeAttrs !== "object" || Array.isArray(ctx.typeAttrs)) {
    ctx.typeAttrs = {};
  }
  return ctx.typeAttrs;
}

function localTypeAttrsForName(ctx, name) {
  const base = localDefaultPieceAttrs(name);
  const map = localEnsureTypeAttrsMap(ctx);
  const attrs = map[name];
  return localMergePieceAttrs(base, attrs || {});
}

function localResolveTypeAttrsMap(typeAttrsOrCtx) {
  if (!typeAttrsOrCtx || typeof typeAttrsOrCtx !== "object") return null;
  if (typeAttrsOrCtx.typeAttrs && typeof typeAttrsOrCtx.typeAttrs === "object") {
    return typeAttrsOrCtx.typeAttrs;
  }
  return typeAttrsOrCtx;
}

function localEffectivePieceAttrs(piece, typeAttrsOrCtx = null) {
  if (!piece) return localDefaultPieceAttrs("");
  const typeAttrs = localResolveTypeAttrsMap(typeAttrsOrCtx);
  const base = localDefaultPieceAttrs(piece.name);
  const typePatch = typeAttrs && typeof typeAttrs === "object" ? typeAttrs[piece.name] || {} : {};
  const raw = piece.attrs && typeof piece.attrs === "object" ? piece.attrs : {};
  return localMergePieceAttrs(localMergePieceAttrs(base, typePatch), raw);
}

function localAnnotatePieceEffectiveAttrs(piece, typeAttrsOrCtx = null) {
  if (!piece || typeof piece !== "object") return piece;
  piece.effective_attrs = localEffectivePieceAttrs(piece, typeAttrsOrCtx);
  return piece;
}

function localRefreshAllPieceEffectiveAttrs(ctx) {
  const pieces = ctx?.state?.board?.pieces;
  if (!Array.isArray(pieces)) return;
  for (const piece of pieces) {
    localAnnotatePieceEffectiveAttrs(piece, ctx);
  }
}

function localCloneRawPieceAttrs(attrs) {
  return localNormalizeRawPieceAttrs(attrs && typeof attrs === "object" ? attrs : {});
}

function localMakeBoardPiece(x, y, name, owner, attrs = {}, typeAttrsOrCtx = null) {
  const piece = {
    x: Number(x),
    y: Number(y),
    name: String(name || ""),
    owner: Number(owner),
    attrs: localCloneRawPieceAttrs(attrs),
  };
  return localAnnotatePieceEffectiveAttrs(piece, typeAttrsOrCtx);
}

function localDeepEqualSimple(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return a === b;
  if (typeof a !== typeof b) return false;
  if (typeof a !== "object") return false;
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    for (let i = 0; i < a.length; i += 1) {
      if (!localDeepEqualSimple(a[i], b[i])) return false;
    }
    return true;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!localHasOwn(b, key)) return false;
    if (!localDeepEqualSimple(a[key], b[key])) return false;
  }
  return true;
}

function localCurrentBaseCounts(state) {
  const counts = new Map();
  for (const p of state?.board?.pieces || []) {
    if (!p) continue;
    const base = standardBaseName(p.name);
    counts.set(base, (counts.get(base) || 0) + 1);
  }
  for (const owner of [0, 1]) {
    for (const token of state?.hands?.[String(owner)] || []) {
      const name = localHandTokenName(token);
      const base = standardBaseName(name);
      counts.set(base, (counts.get(base) || 0) + 1);
    }
  }
  return counts;
}

function localRemoveHandByBase(hand, base) {
  if (!Array.isArray(hand) || !base) return false;
  const idx = hand.findIndex((token) => standardBaseName(localHandTokenName(token)) === base);
  if (idx < 0) return false;
  hand.splice(idx, 1);
  return true;
}

function localAdjustToStandardCount(state) {
  const curr = localCurrentBaseCounts(state);
  for (const [name, limit] of Object.entries(STANDARD_COUNTS)) {
    const base = standardBaseName(name);
    let diff = (curr.get(base) || 0) - Number(limit || 0);
    if (diff <= 0) continue;
    const gote = state?.hands?.["1"] || [];
    const sente = state?.hands?.["0"] || [];
    while (diff > 0 && localRemoveHandByBase(gote, base)) diff -= 1;
    while (diff > 0 && localRemoveHandByBase(sente, base)) diff -= 1;
  }
}

const LOCAL_VEC_ORTHO = Object.freeze([
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
]);
const LOCAL_VEC_DIAG = Object.freeze([
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
]);
const LOCAL_VEC_KING = Object.freeze([...LOCAL_VEC_ORTHO, ...LOCAL_VEC_DIAG]);
const LOCAL_VEC_KNIGHT = Object.freeze([
  [-1, -2],
  [1, -2],
]);
const LOCAL_VEC_KNIGHT8 = Object.freeze([
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
]);
const LOCAL_VEC_CAMEL = Object.freeze([
  [-1, -3],
  [1, -3],
  [3, -1],
  [3, 1],
  [1, 3],
  [-1, 3],
  [-3, 1],
  [-3, -1],
]);
const LOCAL_VEC_ZEBRA = Object.freeze([
  [-2, -3],
  [2, -3],
  [3, -2],
  [3, 2],
  [2, 3],
  [-2, 3],
  [-3, 2],
  [-3, -2],
]);
const LOCAL_VEC_DABBABA = Object.freeze([
  [0, -2],
  [0, 2],
  [-2, 0],
  [2, 0],
]);
const LOCAL_VEC_GOLD = Object.freeze([
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
  [-1, -1],
  [1, -1],
]);
const LOCAL_VEC_SILVER = Object.freeze([
  [0, -1],
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
]);
const LOCAL_VEC_AREA2 = (() => {
  const out = [];
  for (let dy = -2; dy <= 2; dy += 1) {
    for (let dx = -2; dx <= 2; dx += 1) {
      if (dx === 0 && dy === 0) continue;
      out.push([dx, dy]);
    }
  }
  return Object.freeze(out);
})();

const LOCAL_PIECE_SPECS = Object.freeze({
  玉: { type: "step", vectors: LOCAL_VEC_KING },
  王: { type: "step", vectors: LOCAL_VEC_KING },
  歩: { type: "step", vectors: [[0, -1]] },
  香: { type: "slide", vectors: [[0, -1]] },
  桂: { type: "step", vectors: LOCAL_VEC_KNIGHT },
  銀: { type: "step", vectors: LOCAL_VEC_SILVER },
  金: { type: "step", vectors: LOCAL_VEC_GOLD },
  角: { type: "slide", vectors: LOCAL_VEC_DIAG },
  飛: { type: "slide", vectors: LOCAL_VEC_ORTHO },
  と: { type: "step", vectors: LOCAL_VEC_GOLD },
  成香: { type: "step", vectors: LOCAL_VEC_GOLD },
  成桂: { type: "step", vectors: LOCAL_VEC_GOLD },
  成銀: { type: "step", vectors: LOCAL_VEC_GOLD },
  馬: {
    type: "mixed",
    parts: [
      { type: "slide", vectors: LOCAL_VEC_DIAG },
      { type: "step", vectors: LOCAL_VEC_ORTHO },
    ],
  },
  龍: {
    type: "mixed",
    parts: [
      { type: "slide", vectors: LOCAL_VEC_ORTHO },
      { type: "step", vectors: LOCAL_VEC_DIAG },
    ],
  },
  Queen: { type: "slide", vectors: LOCAL_VEC_KING },
  Zero: { type: "zero" },
  Dummy: { type: "none" },
  Friend: { type: "none" },
  Imitator: { type: "none" },
  "Teleport-Imitator": { type: "none" },
  Knight: { type: "step", vectors: LOCAL_VEC_KNIGHT8 },
  Camel: { type: "step", vectors: LOCAL_VEC_CAMEL },
  Zebra: { type: "step", vectors: LOCAL_VEC_ZEBRA },
  Dabbaba: { type: "step", vectors: LOCAL_VEC_DABBABA },
  NightRider: { type: "slide", vectors: LOCAL_VEC_KNIGHT8 },
  Grasshopper: { type: "hopper", vectors: LOCAL_VEC_KING },
  "Bishop-Grasshopper": { type: "hopper", vectors: LOCAL_VEC_DIAG },
  "Rook-Grasshopper": { type: "hopper", vectors: LOCAL_VEC_ORTHO },
  NightRiderHopper: { type: "hopper", vectors: LOCAL_VEC_KNIGHT8 },
  Pao: { type: "pao", vectors: LOCAL_VEC_ORTHO },
  Wazir: { type: "step", vectors: LOCAL_VEC_ORTHO },
  Locust: { type: "locust", vectors: LOCAL_VEC_KING },
  Siren: {
    type: "mixed",
    parts: [
      { type: "slide", vectors: LOCAL_VEC_KING, no_capture: true, no_attack: true },
      { type: "locust", vectors: LOCAL_VEC_KING },
    ],
  },
  Triton: {
    type: "mixed",
    parts: [
      { type: "slide", vectors: LOCAL_VEC_ORTHO, no_capture: true, no_attack: true },
      { type: "locust", vectors: LOCAL_VEC_ORTHO },
    ],
  },
  Lion: { type: "lion", vectors: LOCAL_VEC_KING },
  "Bishop-Lion": { type: "lion", vectors: LOCAL_VEC_DIAG },
  RoseLion: { type: "lion", vectors: LOCAL_VEC_KNIGHT8 },
  Rose: { type: "rose", vectors: LOCAL_VEC_KNIGHT8 },
  Kangaroo: { type: "kangaroo", vectors: LOCAL_VEC_KING },
  Equihopper: { type: "equi", vectors: [] },
  Eagle: { type: "eagle", vectors: LOCAL_VEC_KING },
  Moose: { type: "bent", vectors: LOCAL_VEC_KING, angle: 45 },
  Sparrow: { type: "none" },
  横行: {
    type: "mixed",
    parts: [
      { type: "slide", vectors: [[-1, 0], [1, 0]] },
      { type: "step", vectors: [[0, -1], [0, 1]] },
    ],
  },
  獅子: { type: "area2", vectors: LOCAL_VEC_AREA2 },
  石: { type: "stone" },
  穴: { type: "none" },
  塔: { type: "stone" },
});

function localResolvePieceSpecByName(name, trail = null) {
  const nm = String(name || "");
  const spec = LOCAL_PIECE_SPECS[nm];
  if (spec) return spec;
  const customSpec = customPieceDirectSpecMap.get(nm);
  if (customSpec) return customSpec;
  const visited = trail instanceof Set ? trail : new Set();
  if (visited.has(nm)) return null;
  visited.add(nm);
  const copyFrom = customPieceMoveLikeMap.get(nm);
  if (!copyFrom) return null;
  return localResolvePieceSpecByName(copyFrom, visited);
}

function localPieceSpec(name) {
  const spec = localResolvePieceSpecByName(name, new Set());
  if (spec) return spec;
  // Backend fairy_core.get_moves_for_piece() returns no moves for unknown names.
  return { type: "none" };
}

function localPieceIsKing(piece) {
  if (!piece) return false;
  const attrs =
    piece.effective_attrs && typeof piece.effective_attrs === "object"
      ? piece.effective_attrs
      : localEffectivePieceAttrs(piece);
  return Boolean(attrs.is_king);
}

function localIsStonePiece(piece) {
  return String(piece?.name || "") === "石";
}

function localIsHolePiece(piece) {
  return String(piece?.name || "") === "穴";
}

function localIsPyramidPiece(piece) {
  return String(piece?.name || "") === "塔";
}

function localIsOpaqueBarrierPiece(piece) {
  return localIsStonePiece(piece) || localIsPyramidPiece(piece);
}

function localIsUnenterableBoardPiece(piece) {
  return localIsStonePiece(piece) || localIsHolePiece(piece) || localIsPyramidPiece(piece);
}

function localPieceIsImmortal(piece) {
  if (!piece) return false;
  const attrs =
    piece.effective_attrs && typeof piece.effective_attrs === "object"
      ? piece.effective_attrs
      : localEffectivePieceAttrs(piece);
  return Boolean(attrs.immortal);
}

function localPiecePromoteTo(piece) {
  if (!piece) return null;
  const attrs =
    piece.effective_attrs && typeof piece.effective_attrs === "object"
      ? piece.effective_attrs
      : localEffectivePieceAttrs(piece);
  const p = attrs.promote_to;
  if (typeof p === "string" && p.trim()) return p.trim();
  return null;
}

function localPiecePromoteAttrs(piece) {
  if (!piece) return null;
  const attrs =
    piece.effective_attrs && typeof piece.effective_attrs === "object"
      ? piece.effective_attrs
      : localEffectivePieceAttrs(piece);
  return attrs.promote_attrs && typeof attrs.promote_attrs === "object" ? attrs.promote_attrs : null;
}

function localResolvePromotionResult(piece, promoteToName, promoteAttrs) {
  const baseName = String(piece?.name || "");
  const pto = String(promoteToName || "").trim();
  let nextName = pto || baseName;
  let nextAttrs = promoteAttrs ? localCloneRawPieceAttrs(promoteAttrs) : {};

  // 歩の成り先をカスタムしても、駒名は「と」のまま扱う。
  // 実際の利きは attrs.promote_to を通じて localEffectiveMoveNameByPiece() 側で参照する。
  if (baseName === "歩" && pto && pto !== "と") {
    nextName = "と";
    nextAttrs = localCloneRawPieceAttrs(nextAttrs);
    nextAttrs.promote_to = pto;
  }

  // 玉属性を持つ駒は、成り後も玉属性を保持する。
  if (localPieceIsKing(piece)) {
    nextAttrs = localCloneRawPieceAttrs(nextAttrs);
    nextAttrs.is_king = true;
  }

  return {
    name: nextName,
    attrs: nextAttrs,
  };
}

function localMoveVecForOwner(owner, vec) {
  const dx = Number(vec?.[0] || 0);
  const dy = Number(vec?.[1] || 0);
  if (owner === 1) return [-dx, -dy];
  return [dx, dy];
}

function localBentTurnVectors(dxRaw, dyRaw, angleRaw = 90) {
  const dx = Number(dxRaw);
  const dy = Number(dyRaw);
  if (!Number.isFinite(dx) || !Number.isFinite(dy) || (dx === 0 && dy === 0)) return [];
  const angle = Math.trunc(Number(angleRaw));
  const out = [];
  const seen = new Set();
  const gcd = (aRaw, bRaw) => {
    let a = Math.abs(Math.trunc(Number(aRaw) || 0));
    let b = Math.abs(Math.trunc(Number(bRaw) || 0));
    if (a === 0) return b || 1;
    if (b === 0) return a || 1;
    while (b !== 0) {
      const r = a % b;
      a = b;
      b = r;
    }
    return a || 1;
  };
  const add = (txRaw, tyRaw) => {
    const baseTx = Number(txRaw);
    const baseTy = Number(tyRaw);
    if (!Number.isFinite(baseTx) || !Number.isFinite(baseTy)) return;
    const g = gcd(baseTx, baseTy);
    const tx = Math.trunc(baseTx / g);
    const ty = Math.trunc(baseTy / g);
    if (!Number.isFinite(tx) || !Number.isFinite(ty) || (tx === 0 && ty === 0)) return;
    const key = `${tx},${ty}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push([tx, ty]);
  };
  if (angle === 45) {
    add(dx - dy, dx + dy);
    add(dx + dy, dy - dx);
    return out;
  }
  if (angle === 135) {
    add(-dx - dy, dx - dy);
    add(dy - dx, -dx - dy);
    return out;
  }
  add(-dy, dx);
  add(dy, -dx);
  return out;
}

function localResolveNeutralOrientationOwner(piece, fallbackOwner = 0) {
  const pieceOwner = Number(piece?.owner);
  if (pieceOwner !== -1) return pieceOwner;
  const explicit = Number(piece?.neutral_orientation_owner);
  if (explicit === 0 || explicit === 1) return explicit;
  return Number(fallbackOwner) === 1 ? 1 : 0;
}

function localPieceFriendlyOwner(piece, fallbackOwner = 0) {
  const pieceOwner = Number(piece?.owner);
  if (pieceOwner === -1) {
    const orient = localResolveNeutralOrientationOwner(piece, fallbackOwner);
    return orient === 1 ? 1 : 0;
  }
  return pieceOwner;
}

function localIsFriendlyPieceForMove(piece, targetOwner, fallbackOwner = 0) {
  return Number(targetOwner) === localPieceFriendlyOwner(piece, fallbackOwner);
}

function localPieceMapFromList(pieces) {
  const m = new Map();
  for (const p of pieces || []) {
    if (!p || !localInBoard(p.x, p.y)) continue;
    m.set(`${p.x},${p.y}`, p);
  }
  return m;
}

function localFindPieceInList(pieces, x, y) {
  for (const p of pieces || []) {
    if (!p) continue;
    if (Number(p.x) === Number(x) && Number(p.y) === Number(y)) return p;
  }
  return null;
}

function localIsNeutralImitatorName(name) {
  const n = String(name || "");
  return n === "Imitator" || n === "Teleport-Imitator";
}

function localIsFixedNeutralBoardPieceName(name) {
  const n = String(name || "");
  return localIsNeutralImitatorName(n) || n === "塔" || n === "石" || n === "穴";
}

function localIsFriendMoveName(name) {
  return String(name || "") === "Friend";
}

function localIsImitatorPiece(piece) {
  return localIsNeutralImitatorName(piece?.name);
}

function localSkipBoardMoveGenerationForPiece(piece) {
  return !piece || localIsStonePiece(piece) || localIsHolePiece(piece) || localIsPyramidPiece(piece) || localIsImitatorPiece(piece);
}

function localIsMessignySwapTarget(pieces, piece, toX, toY, rules = {}) {
  if (!rules?.messigny || !piece) return false;
  const owner = Number(piece.owner);
  if (owner !== 0 && owner !== 1) return false;
  const target = localFindPieceInList(pieces, toX, toY);
  if (!target) return false;
  const targetOwner = Number(target.owner);
  if (targetOwner !== 0 && targetOwner !== 1) return false;
  if (targetOwner === owner) return false;
  return localEquivalentMoveName(String(target.name || ""), String(piece.name || ""));
}

function localGetMessignySwapTargets(pieces, piece, rules = {}) {
  if (!rules?.messigny || !piece) return [];
  const owner = Number(piece.owner);
  if (owner !== 0 && owner !== 1) return [];
  const out = [];
  for (const p of pieces || []) {
    if (!p) continue;
    const o = Number(p.owner);
    if (o !== 0 && o !== 1) continue;
    if (o === owner) continue;
    if (!localEquivalentMoveName(String(p.name || ""), String(piece.name || ""))) continue;
    out.push({ x: Number(p.x), y: Number(p.y) });
  }
  return out;
}

function localEffectiveMoveNameByPiece(
  pieces,
  piece,
  rules,
  applyHaimen = true,
  applyTaimen = true,
  applyTenkyo = true,
  applyNekoneko = true
) {
  if (!piece) return null;
  if (localIsImitatorPiece(piece)) return piece.name;
  const x = Number(piece.x);
  const y = Number(piece.y);
  const selfAttrs =
    piece.effective_attrs && typeof piece.effective_attrs === "object"
      ? piece.effective_attrs
      : localEffectivePieceAttrs(piece);
  const customPromoteMove = String(selfAttrs?.promote_to || "").trim();
  let moveName =
    String(piece?.name || "") === "と" && customPromoteMove && customPromoteMove !== "と" && customPromoteMove !== "歩"
      ? customPromoteMove
      : piece.name;

  if (rules?.annan) {
    const dy = Number(piece.owner) === 0 ? 1 : -1;
    const lower = localFindPieceInList(pieces, x, y + dy);
    if (lower && Number(lower.owner) === Number(piece.owner)) {
      moveName = lower.name;
    }
  }

  if (rules?.anpoku) {
    const dy = Number(piece.owner) === 0 ? -1 : 1;
    const upper = localFindPieceInList(pieces, x, y + dy);
    if (upper && Number(upper.owner) === Number(piece.owner)) {
      moveName = upper.name;
    }
  }

  if (applyHaimen && rules?.haimen) {
    const backDy = Number(piece.owner) === 0 ? 1 : -1;
    const enemy = localFindPieceInList(pieces, x, y + backDy);
    if (enemy && Number(enemy.owner) !== Number(piece.owner)) {
      const enemyMoveName = localEffectiveMoveNameByPiece(
        pieces,
        enemy,
        rules,
        false,
        applyTaimen,
        applyTenkyo,
        applyNekoneko
      );
      if (enemyMoveName) return enemyMoveName;
    }
  }

  if (applyTaimen && rules?.taimen) {
    const frontDy = Number(piece.owner) === 0 ? -1 : 1;
    const enemy = localFindPieceInList(pieces, x, y + frontDy);
    if (enemy && Number(enemy.owner) !== Number(piece.owner)) {
      const enemyMoveName = localEffectiveMoveNameByPiece(
        pieces,
        enemy,
        rules,
        applyHaimen,
        false,
        applyTenkyo,
        applyNekoneko
      );
      if (enemyMoveName) return enemyMoveName;
    }
  }

  if (applyTenkyo && rules?.tenkyo) {
    const sx = 8 - x;
    const sy = 8 - y;
    if (sx !== x || sy !== y) {
      const mirror = localFindPieceInList(pieces, sx, sy);
      if (mirror && !localIsImitatorPiece(mirror)) {
        const mirrorMoveName = localEffectiveMoveNameByPiece(
          pieces,
          mirror,
          rules,
          applyHaimen,
          applyTaimen,
          false,
          applyNekoneko
        );
        if (mirrorMoveName) return mirrorMoveName;
      }
    }
  }

  if (applyNekoneko && rules?.nekoneko) {
    let top = y;
    while (top - 1 >= 0 && localFindPieceInList(pieces, x, top - 1)) {
      top -= 1;
    }
    let bottom = y;
    while (bottom + 1 <= 8 && localFindPieceInList(pieces, x, bottom + 1)) {
      bottom += 1;
    }
    if (bottom > top) {
      const mirrorY = top + (bottom - y);
      if (mirrorY !== y) {
        const mirror = localFindPieceInList(pieces, x, mirrorY);
        if (mirror && !localIsImitatorPiece(mirror)) {
          const mirrorMoveName = localEffectiveMoveNameByPiece(
            pieces,
            mirror,
            rules,
            applyHaimen,
            applyTaimen,
            applyTenkyo,
            false
          );
          if (mirrorMoveName) return mirrorMoveName;
        }
      }
    }
  }

  return moveName;
}

function localEquivalentMoveName(a, b) {
  const na = String(a || "").trim();
  const nb = String(b || "").trim();
  if (na === nb) return true;
  if ((na === "玉" && nb === "王") || (na === "王" && nb === "玉")) return true;
  return false;
}

function localBuildFriendMoveNameMap(pieces, rules = {}) {
  const pieceList = Array.isArray(pieces) ? pieces : [];
  if (pieceList.length <= 0) return new Map();
  const pieceMap = localPieceMapFromList(pieceList);
  const result = new Map();

  for (const owner of [0, 1]) {
    const friendly = [];
    for (const p of pieceList) {
      if (!p || Number(p.owner) !== owner) continue;
      if (!localInBoard(Number(p.x), Number(p.y))) continue;
      friendly.push(p);
    }
    if (friendly.length <= 0) continue;

    const effectiveByKey = new Map();
    const dynamicFriends = [];
    const staticSources = [];
    for (const p of friendly) {
      const key = `${Number(p.x)},${Number(p.y)}`;
      const moveName = localEffectiveMoveNameByPiece(pieceList, p, rules);
      effectiveByKey.set(key, moveName);
      if (localIsFriendMoveName(moveName)) {
        dynamicFriends.push(p);
      } else {
        staticSources.push(p);
      }
    }
    if (dynamicFriends.length <= 0) continue;

    const dynamicKeySet = new Set();
    const friendMoves = new Map();
    for (const p of dynamicFriends) {
      const key = `${Number(p.x)},${Number(p.y)}`;
      dynamicKeySet.add(key);
      friendMoves.set(key, new Set());
    }

    // Seed from non-Friend friendly attackers.
    for (const src of staticSources) {
      if (localSkipBoardMoveGenerationForPiece(src)) continue;
      const srcKey = `${Number(src.x)},${Number(src.y)}`;
      const srcMoveName = effectiveByKey.get(srcKey) || localEffectiveMoveNameByPiece(pieceList, src, rules);
      if (!srcMoveName || localIsFriendMoveName(srcMoveName)) continue;
      const attacks = localGenerateTargetsForPiece(pieceList, src, rules, {
        mode: "attack",
        skipFriendExpansion: true,
      });
      for (const t of attacks) {
        const dstKey = `${Number(t.x)},${Number(t.y)}`;
        if (!dynamicKeySet.has(dstKey)) continue;
        const set = friendMoves.get(dstKey);
        if (set) set.add(srcMoveName);
      }
    }

    // Propagate Friend -> Friend until fixed point.
    let changed = true;
    let guard = 0;
    const maxIter = Math.max(4, dynamicFriends.length * dynamicFriends.length + 4);
    while (changed && guard < maxIter) {
      guard += 1;
      changed = false;
      const friendAttackKeys = new Map();

      for (const src of dynamicFriends) {
        const srcKey = `${Number(src.x)},${Number(src.y)}`;
        const srcMoves = friendMoves.get(srcKey);
        if (!srcMoves || srcMoves.size <= 0) continue;
        const attacked = new Set();
        for (const mv of srcMoves) {
          if (!mv || localIsFriendMoveName(mv)) continue;
          const targets = localGenerateTargetsByMoveNameAt(
            pieceMap,
            mv,
            owner,
            Number(src.x),
            Number(src.y),
            "attack"
          );
          for (const t of targets) {
            attacked.add(`${Number(t.x)},${Number(t.y)}`);
          }
        }
        friendAttackKeys.set(srcKey, attacked);
      }

      for (const dst of dynamicFriends) {
        const dstKey = `${Number(dst.x)},${Number(dst.y)}`;
        const dstSet = friendMoves.get(dstKey);
        if (!dstSet) continue;
        for (const src of dynamicFriends) {
          const srcKey = `${Number(src.x)},${Number(src.y)}`;
          if (srcKey === dstKey) continue;
          const attacked = friendAttackKeys.get(srcKey);
          if (!attacked || !attacked.has(dstKey)) continue;
          const srcSet = friendMoves.get(srcKey);
          if (!srcSet || srcSet.size <= 0) continue;
          for (const mv of srcSet) {
            if (!mv || localIsFriendMoveName(mv) || dstSet.has(mv)) continue;
            dstSet.add(mv);
            changed = true;
          }
        }
      }
    }

    for (const [k, set] of friendMoves.entries()) {
      result.set(k, new Set(set));
    }
  }

  return result;
}

function localCountFuInFile(pieces, x, owner) {
  let cnt = 0;
  for (const p of pieces || []) {
    if (!p) continue;
    if (Number(p.owner) !== Number(owner)) continue;
    if (Number(p.x) !== Number(x)) continue;
    if (String(p.name || "") === "歩") cnt += 1;
  }
  return cnt;
}

function localIsSameTypeForMadrasi(piece1, piece2) {
  if (!piece1 || !piece2) return false;
  if (localPieceIsKing(piece1) && localPieceIsKing(piece2)) return true;
  return String(piece1.name || "") === String(piece2.name || "");
}

function localPushTarget(out, seen, x, y, capture) {
  const k = `${x},${y}`;
  if (seen.has(k)) return;
  seen.add(k);
  out.push({ x, y, capture: Boolean(capture) });
}

function localGenerateTargetsBySpec(spec, piece, pieceMap, x, y, out, seen, mode = "move") {
  const attackMode = mode === "attack";
  const sourceOwner = Number(piece?.owner);
  const moveOwner = localResolveNeutralOrientationOwner(piece, sourceOwner);
  const isFriendlyTarget = (targetPiece) =>
    Boolean(targetPiece) && localIsFriendlyPieceForMove(piece, Number(targetPiece.owner), moveOwner);
  const isCapturableTarget = (targetPiece) => Boolean(targetPiece) && !isFriendlyTarget(targetPiece);
  if (!spec || spec.type === "none" || spec.type === "stone") return;
  if (spec.type === "zero") {
    // Zero: pass move (stay on the same square). It has no attack range.
    if (!attackMode) {
      localPushTarget(out, seen, Number(x), Number(y), false);
    }
    return;
  }
  if (spec.type === "mixed") {
    for (const part of spec.parts || []) {
      localGenerateTargetsBySpec(part, piece, pieceMap, x, y, out, seen, mode);
    }
    return;
  }
  const vectors = Array.isArray(spec.vectors) ? spec.vectors : [];
  if (spec.type === "step") {
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(moveOwner, vec);
      const tx = x + dx;
      const ty = y + dy;
      if (!localInBoard(tx, ty)) continue;
      const t = pieceMap.get(`${tx},${ty}`) || null;
      if (t && localIsUnenterableBoardPiece(t)) continue;
      if (t && isFriendlyTarget(t) && !attackMode) continue;
      localPushTarget(out, seen, tx, ty, isCapturableTarget(t));
    }
    return;
  }
  if (spec.type === "slide") {
    const slideNoCapture = Boolean(spec?.no_capture);
    const slideNoAttack = Boolean(spec?.no_attack);
    if (attackMode && slideNoAttack) return;
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(moveOwner, vec);
      let tx = x + dx;
      let ty = y + dy;
      while (localInBoard(tx, ty)) {
        const t = pieceMap.get(`${tx},${ty}`) || null;
        if (!t) {
          localPushTarget(out, seen, tx, ty, false);
          tx += dx;
          ty += dy;
          continue;
        }
        if (localIsOpaqueBarrierPiece(t)) break;
        if (localIsHolePiece(t)) {
          tx += dx;
          ty += dy;
          continue;
        }
        if (slideNoCapture) break;
        if (!isFriendlyTarget(t) || attackMode) {
          localPushTarget(out, seen, tx, ty, isCapturableTarget(t));
        }
        break;
      }
    }
    return;
  }
  if (spec.type === "hopper") {
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(moveOwner, vec);
      let tx = x;
      let ty = y;
      let hurdle = false;
      while (true) {
        tx += dx;
        ty += dy;
        if (!localInBoard(tx, ty)) break;
        const t = pieceMap.get(`${tx},${ty}`) || null;
        if (!hurdle) {
          if (t) {
            if (localIsStonePiece(t)) break;
            if (localIsHolePiece(t)) continue;
            hurdle = true;
          }
        } else {
          if (t) {
            if (localIsStonePiece(t)) break;
            if (localIsHolePiece(t) || localIsPyramidPiece(t)) break;
          }
          if (attackMode || !t || !isFriendlyTarget(t)) {
            localPushTarget(out, seen, tx, ty, isCapturableTarget(t));
          }
          break;
        }
      }
    }
    return;
  }
  if (spec.type === "bent") {
    const bentAngle = Number(spec?.angle || 90);
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(moveOwner, vec);
      let hx = x;
      let hy = y;
      while (true) {
        hx += dx;
        hy += dy;
        if (!localInBoard(hx, hy)) break;
        const hurdle = pieceMap.get(`${hx},${hy}`) || null;
        if (!hurdle) continue;
        if (localIsStonePiece(hurdle)) break;
        if (localIsHolePiece(hurdle)) continue;
        const turns = localBentTurnVectors(dx, dy, bentAngle);
        for (const [txv, tyv] of turns) {
          const tx = hx + txv;
          const ty = hy + tyv;
          if (!localInBoard(tx, ty)) continue;
          const t = pieceMap.get(`${tx},${ty}`) || null;
          if (t && (localIsStonePiece(t) || localIsHolePiece(t) || localIsPyramidPiece(t))) continue;
          if (attackMode || !t || !isFriendlyTarget(t)) {
            localPushTarget(out, seen, tx, ty, isCapturableTarget(t));
          }
        }
        break;
      }
    }
    return;
  }
  if (spec.type === "eagle") {
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(moveOwner, vec);
      let hx = x;
      let hy = y;
      while (true) {
        hx += dx;
        hy += dy;
        if (!localInBoard(hx, hy)) break;
        const hurdle = pieceMap.get(`${hx},${hy}`) || null;
        if (!hurdle) continue;
        if (localIsStonePiece(hurdle)) break;
        if (localIsHolePiece(hurdle)) continue;

        // Eagle: 到達した駒を支点に進行方向へ90度曲がった2地点へ着地候補。
        const turns = [
          [-dy, dx],
          [dy, -dx],
        ];
        for (const [txv, tyv] of turns) {
          const tx = hx + txv;
          const ty = hy + tyv;
          if (!localInBoard(tx, ty)) continue;
          const t = pieceMap.get(`${tx},${ty}`) || null;
          if (t && (localIsStonePiece(t) || localIsHolePiece(t) || localIsPyramidPiece(t))) continue;
          if (attackMode || !t || !isFriendlyTarget(t)) {
            localPushTarget(out, seen, tx, ty, isCapturableTarget(t));
          }
        }
        break;
      }
    }
    return;
  }
  if (spec.type === "pao") {
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(moveOwner, vec);
      let tx = x;
      let ty = y;
      let hurdle = false;
      while (true) {
        tx += dx;
        ty += dy;
        if (!localInBoard(tx, ty)) break;
        const t = pieceMap.get(`${tx},${ty}`) || null;
        if (!hurdle) {
          if (t) {
            if (localIsStonePiece(t)) break;
            if (localIsHolePiece(t)) continue;
            hurdle = true;
          } else {
            localPushTarget(out, seen, tx, ty, false);
          }
        } else if (t) {
          if (localIsStonePiece(t)) break;
          if (localIsHolePiece(t) || localIsPyramidPiece(t)) continue;
          if (attackMode || !isFriendlyTarget(t)) {
            localPushTarget(out, seen, tx, ty, isCapturableTarget(t));
          }
          break;
        }
      }
    }
    return;
  }
  if (spec.type === "locust") {
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(moveOwner, vec);
      let hx = x;
      let hy = y;
      while (true) {
        hx += dx;
        hy += dy;
        if (!localInBoard(hx, hy)) break;
        const hurdle = pieceMap.get(`${hx},${hy}`) || null;
        if (!hurdle) continue;
        // 障害物/味方/不滅駒は跳び越せない。
        if (localIsOpaqueBarrierPiece(hurdle)) break;
        if (localIsHolePiece(hurdle)) continue;
        if (isFriendlyTarget(hurdle)) break;
        if (localPieceIsImmortal(hurdle)) break;
        const lx = hx + dx;
        const ly = hy + dy;
        if (!localInBoard(lx, ly)) break;
        const landing = pieceMap.get(`${lx},${ly}`) || null;
        if (!landing) {
          // move モードでは着地マス、attack モードでは飛び越える駒マス(捕獲対象)を利きとして扱う。
          if (attackMode) localPushTarget(out, seen, hx, hy, true);
          else localPushTarget(out, seen, lx, ly, true);
        }
        break;
      }
    }
    return;
  }
  if (spec.type === "rose") {
    const vecCount = vectors.length;
    for (let startIdx = 0; startIdx < vecCount; startIdx += 1) {
      for (const turnDir of [1, -1]) {
        let cx = x;
        let cy = y;
        const visited = new Set([`${cx},${cy}`]);
        for (let stepI = 0; stepI < 256; stepI += 1) {
          const idx = (startIdx + turnDir * stepI + vecCount * 10) % vecCount;
          const [vx, vy] = localMoveVecForOwner(moveOwner, vectors[idx]);
          const nx = cx + vx;
          const ny = cy + vy;
          if (!localInBoard(nx, ny)) break;
          const nkey = `${nx},${ny}`;
          if (nx === x && ny === y) {
            localPushTarget(out, seen, nx, ny, false);
            break;
          }
          const t = pieceMap.get(`${nx},${ny}`) || null;
          if (t) {
            if (localIsOpaqueBarrierPiece(t)) break;
            if (localIsHolePiece(t)) {
              if (visited.has(nkey)) break;
              visited.add(nkey);
              cx = nx;
              cy = ny;
              continue;
            }
            if (attackMode || !isFriendlyTarget(t)) {
              localPushTarget(out, seen, nx, ny, isCapturableTarget(t));
            }
            break;
          }
          if (visited.has(nkey)) break;
          localPushTarget(out, seen, nx, ny, false);
          visited.add(nkey);
          cx = nx;
          cy = ny;
        }
      }
    }
    return;
  }
  if (spec.type === "lion") {
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(moveOwner, vec);
      let tx = x;
      let ty = y;
      let hurdle = false;
      while (true) {
        tx += dx;
        ty += dy;
        if (!localInBoard(tx, ty)) break;
        const t = pieceMap.get(`${tx},${ty}`) || null;
        if (!hurdle) {
          if (t) {
            if (localIsStonePiece(t)) break;
            if (localIsHolePiece(t)) continue;
            hurdle = true;
          }
          continue;
        }
        if (t && localIsStonePiece(t)) break;
        if (t && (localIsHolePiece(t) || localIsPyramidPiece(t))) continue;
        if (attackMode || !t || !isFriendlyTarget(t)) {
          localPushTarget(out, seen, tx, ty, isCapturableTarget(t));
        }
        if (t) break;
      }
    }
    return;
  }
  if (spec.type === "kangaroo") {
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(moveOwner, vec);
      let tx = x;
      let ty = y;
      let hurdles = 0;
      while (true) {
        tx += dx;
        ty += dy;
        if (!localInBoard(tx, ty)) break;
        const t = pieceMap.get(`${tx},${ty}`) || null;
        if (t) {
          if (localIsStonePiece(t)) break;
          if (localIsHolePiece(t) || localIsPyramidPiece(t)) continue;
          hurdles += 1;
          if (hurdles > 2) break;
          if (hurdles < 2) continue;
          const lx = tx + dx;
          const ly = ty + dy;
          if (!localInBoard(lx, ly)) break;
          const landing = pieceMap.get(`${lx},${ly}`) || null;
          if (landing && (localIsStonePiece(landing) || localIsHolePiece(landing) || localIsPyramidPiece(landing))) {
            break;
          }
          if (attackMode || !landing || !isFriendlyTarget(landing)) {
            localPushTarget(out, seen, lx, ly, isCapturableTarget(landing));
          }
          break;
        }
      }
    }
    return;
  }
  if (spec.type === "equi") {
    for (let py = 0; py < 9; py += 1) {
      for (let px = 0; px < 9; px += 1) {
        const pivot = pieceMap.get(`${px},${py}`) || null;
        if (!pivot) continue;
        if (localIsStonePiece(pivot) || localIsHolePiece(pivot)) continue;
        const vx = px - x;
        const vy = py - y;
        if (vx === 0 && vy === 0) continue;
        const tx = x + vx * 2;
        const ty = y + vy * 2;
        if (!localInBoard(tx, ty)) continue;
        const t = pieceMap.get(`${tx},${ty}`) || null;
        if (t && (localIsStonePiece(t) || localIsHolePiece(t) || localIsPyramidPiece(t))) continue;
        if (attackMode || !t || !isFriendlyTarget(t)) {
          localPushTarget(out, seen, tx, ty, isCapturableTarget(t));
        }
      }
    }
    return;
  }
  if (spec.type === "area2") {
    for (let dy = -2; dy <= 2; dy += 1) {
      for (let dx = -2; dx <= 2; dx += 1) {
        if (dx === 0 && dy === 0) continue;
        const tx = x + dx;
        const ty = y + dy;
        if (!localInBoard(tx, ty)) continue;
        const t = pieceMap.get(`${tx},${ty}`) || null;
        if (t && (localIsStonePiece(t) || localIsHolePiece(t) || localIsPyramidPiece(t))) continue;
        if (!t || attackMode || !isFriendlyTarget(t)) {
          localPushTarget(out, seen, tx, ty, isCapturableTarget(t));
        }
      }
    }
  }
}

function localGenerateTargetsByMoveNameAt(pieceMap, moveName, owner, x, y, mode = "attack", pieceOwner = owner) {
  const out = [];
  const seen = new Set();
  const spec = localPieceSpec(moveName || "");
  localGenerateTargetsBySpec(
    spec,
    { owner: Number(pieceOwner), neutral_orientation_owner: Number(owner) },
    pieceMap,
    x,
    y,
    out,
    seen,
    mode
  );
  return out;
}

function localGenerateTargetsByEffectiveMoveNameAt(
  pieces,
  pieceMap,
  moveName,
  owner,
  x,
  y,
  rules = {},
  mode = "attack"
) {
  if (!localIsFriendMoveName(moveName)) {
    return localGenerateTargetsByMoveNameAt(pieceMap, moveName, owner, x, y, mode);
  }
  const friendMap = localBuildFriendMoveNameMap(pieces, rules);
  const srcKey = `${Number(x)},${Number(y)}`;
  const moveNames = friendMap.get(srcKey);
  if (!moveNames || moveNames.size <= 0) return [];
  const out = [];
  const seen = new Set();
  for (const mv of moveNames) {
    if (!mv || localIsFriendMoveName(mv)) continue;
    const targets = localGenerateTargetsByMoveNameAt(pieceMap, mv, owner, x, y, mode);
    for (const t of targets) {
      localPushTarget(out, seen, Number(t.x), Number(t.y), Boolean(t.capture));
    }
  }
  return out;
}

function localLocustHurdleForMove(pieces, piece, toX, toY, rules = {}) {
  if (!piece) return null;
  const orientationOwner = localResolveNeutralOrientationOwner(piece, Number(piece?.owner));
  const moveName = localEffectiveMoveNameByPiece(pieces, piece, rules);
  const moveNames = localIsFriendMoveName(moveName)
    ? Array.from(localBuildFriendMoveNameMap(pieces, rules).get(`${Number(piece.x)},${Number(piece.y)}`) || [])
    : [moveName || piece.name];
  const typeList = [];
  for (const mv of moveNames) {
    if (!mv || localIsFriendMoveName(mv)) continue;
    const spec = localPieceSpec(mv || piece.name);
    if (!spec) continue;
    if (spec.type === "mixed") {
      for (const part of spec.parts || []) typeList.push(part);
    } else {
      typeList.push(spec);
    }
  }
  for (const part of typeList) {
    if (!part || part.type !== "locust") continue;
    const vectors = Array.isArray(part.vectors) ? part.vectors : [];
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(orientationOwner, vec);
      let hx = Number(piece.x);
      let hy = Number(piece.y);
      while (true) {
        hx += dx;
        hy += dy;
        if (!localInBoard(hx, hy)) break;
        const hurdle = localFindPieceInList(pieces, hx, hy);
        if (!hurdle) continue;
        if (localIsOpaqueBarrierPiece(hurdle)) break;
        if (localIsHolePiece(hurdle)) continue;
        if (localIsFriendlyPieceForMove(piece, Number(hurdle.owner), orientationOwner)) break;
        if (localPieceIsImmortal(hurdle)) break;
        const lx = hx + dx;
        const ly = hy + dy;
        if (lx !== Number(toX) || ly !== Number(toY)) break;
        if (!localInBoard(lx, ly)) break;
        const landing = localFindPieceInList(pieces, lx, ly);
        if (landing) break;
        return { piece: hurdle, pos: { x: hx, y: hy } };
      }
    }
  }
  return null;
}

function localGcd(a, b) {
  let x = Math.abs(Number(a) || 0);
  let y = Math.abs(Number(b) || 0);
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x || 1;
}

function localCalcImitatorSyncPlan(
  pieces,
  fromX,
  fromY,
  toX,
  toY,
  options = {}
) {
  const isDrop = Boolean(options?.isDrop);
  const movingSourcesExtra = options?.movingSourcesExtra || null;
  if (isDrop) return [];
  const dx = Number(toX) - Number(fromX);
  const dy = Number(toY) - Number(fromY);
  if (dx === 0 && dy === 0) return [];

  const imitators = [];
  for (const p of pieces || []) {
    if (!p) continue;
    if (localIsImitatorPiece(p)) {
      imitators.push({ x: Number(p.x), y: Number(p.y), name: String(p.name || "") });
    }
  }
  if (imitators.length === 0) return [];
  if (imitators.some((p) => p.x === Number(fromX) && p.y === Number(fromY))) {
    return null;
  }

  const pieceMap = localPieceMapFromList(pieces);
  const srcSet = new Set([`${Number(fromX)},${Number(fromY)}`]);
  for (const p of imitators) srcSet.add(`${p.x},${p.y}`);
  if (movingSourcesExtra instanceof Set) {
    for (const k of movingSourcesExtra) srcSet.add(String(k));
  } else if (Array.isArray(movingSourcesExtra)) {
    for (const c of movingSourcesExtra) {
      if (c && localInBoard(Number(c.x), Number(c.y))) srcSet.add(`${Number(c.x)},${Number(c.y)}`);
    }
  }

  const stepCount = localGcd(dx, dy);
  const stepX = dx / stepCount;
  const stepY = dy / stepCount;
  const dstSet = new Set();
  const plan = [];

  for (const src of imitators) {
    const tx = src.x + dx;
    const ty = src.y + dy;
    if (!localInBoard(tx, ty)) return null;

    const isTeleportImitator = src.name === "Teleport-Imitator";
    if (!isTeleportImitator && stepCount > 1) {
      for (let i = 1; i < stepCount; i += 1) {
        const px = src.x + stepX * i;
        const py = src.y + stepY * i;
        const k = `${px},${py}`;
        if (pieceMap.has(k) && !srcSet.has(k)) return null;
      }
    }

    const tk = `${tx},${ty}`;
    if (pieceMap.has(tk) && !srcSet.has(tk)) return null;
    if (dstSet.has(tk)) return null;
    dstSet.add(tk);
    plan.push({ src: { x: src.x, y: src.y }, dst: { x: tx, y: ty } });
  }

  if (dstSet.has(`${Number(toX)},${Number(toY)}`)) return null;
  return plan;
}

function localImitatorSuffixFromPlan(plan) {
  if (!Array.isArray(plan) || plan.length === 0) return "";
  const dsts = plan.map((v) => ({ x: Number(v.dst.x), y: Number(v.dst.y) }));
  dsts.sort((a, b) => (a.y !== b.y ? a.y - b.y : a.x - b.x));
  const parts = dsts.map((p) => `I${9 - p.x}${p.y + 1}`);
  return `[${parts.join(",")}]`;
}

function localImitatorPlanUsesSourceSquare(plan, x, y) {
  if (!Array.isArray(plan) || plan.length <= 0) return false;
  const tx = Number(x);
  const ty = Number(y);
  return plan.some((step) => Number(step?.src?.x) === tx && Number(step?.src?.y) === ty);
}

function localIsMadrasiParalyzed(pieces, piece, rules = {}) {
  if (!piece) return false;
  if (!(rules?.madrasi || rules?.k_madrasi)) return false;
  const owner = Number(piece.owner);
  if (owner !== 0 && owner !== 1) return false;
  if (localPieceIsKing(piece) && !rules?.k_madrasi) return false;
  const enemy = 1 - owner;
  for (const enemyPiece of pieces || []) {
    if (!enemyPiece || Number(enemyPiece.owner) !== enemy) continue;
    if (!localIsSameTypeForMadrasi(piece, enemyPiece)) continue;
    if (
      localPieceAttacksSquareWithRules(
        pieces,
        enemyPiece,
        piece.x,
        piece.y,
        rules,
        { ignoreMadrasi: true, applyKoko: false, ignoreTenjiku: true }
      )
    ) {
      return true;
    }
  }
  return false;
}

function localGenerateTargetsForPiece(pieces, piece, rules = {}, options = {}) {
  if (!piece || !localInBoard(piece.x, piece.y)) return [];
  if (localIsImitatorPiece(piece)) return [];
  const mode = options?.mode === "attack" ? "attack" : "move";
  const ignoreMadrasi = Boolean(options?.ignoreMadrasi);
  const skipFriendExpansion = Boolean(options?.skipFriendExpansion);
  const pieceOwner = Number(piece?.owner);
  const explicitOrientationOwner = Number(options?.orientationOwner);
  const fallbackOrientationOwner = Number(options?.neutralTurnOwner);
  const neutralOrientationOwner =
    explicitOrientationOwner === 0 || explicitOrientationOwner === 1
      ? explicitOrientationOwner
      : fallbackOrientationOwner === 0 || fallbackOrientationOwner === 1
        ? fallbackOrientationOwner
        : 0;
  if (!ignoreMadrasi && localIsMadrasiParalyzed(pieces, piece, rules)) {
    return [];
  }
  const pieceMap = localPieceMapFromList(pieces);
  const occupied = pieceMap.get(`${piece.x},${piece.y}`);
  if (occupied !== piece) {
    // Simulated arrays may contain duplicate-square remnants; trust coordinate identity over object identity.
    piece = occupied || piece;
  }
  const pieceForMoveGenResolved =
    Number(piece?.owner) === -1
      ? {
          ...piece,
          neutral_orientation_owner: neutralOrientationOwner,
        }
      : piece;

  if (mode === "move" && rules?.tenjiku && localPieceIsKing(piece)) {
    const checkingPositions = localGetCheckingPiecePositionsWithRules(
      pieces,
      Number(piece.owner),
      rules,
      { ignoreTenjikuForKings: true }
    );
    if (checkingPositions.length > 0) {
      const out = [];
      const seen = new Set();
      for (const chk of checkingPositions) {
        const checker = localFindPieceInList(pieces, chk.x, chk.y);
        if (!checker) continue;
        const checkerMoveName = localEffectiveMoveNameByPiece(pieces, checker, rules);
        if (!checkerMoveName) continue;
        const targets = skipFriendExpansion
          ? localGenerateTargetsByMoveNameAt(
              pieceMap,
              checkerMoveName,
              localResolveNeutralOrientationOwner(pieceForMoveGenResolved, Number(piece.owner)),
              Number(piece.x),
              Number(piece.y),
              "attack",
              Number(piece.owner)
            )
          : localGenerateTargetsByEffectiveMoveNameAt(
              pieces,
              pieceMap,
              checkerMoveName,
              localResolveNeutralOrientationOwner(pieceForMoveGenResolved, Number(piece.owner)),
              Number(piece.x),
              Number(piece.y),
              rules,
              "attack"
            );
        for (const t of targets) {
          const tp = pieceMap.get(`${t.x},${t.y}`) || null;
          if (tp && localIsFriendlyPieceForMove(pieceForMoveGenResolved, Number(tp.owner), neutralOrientationOwner)) continue;
          const k = `${t.x},${t.y}`;
          if (seen.has(k)) continue;
          seen.add(k);
          out.push({
            x: t.x,
            y: t.y,
            capture: Boolean(tp) && !localIsFriendlyPieceForMove(pieceForMoveGenResolved, Number(tp.owner), neutralOrientationOwner),
          });
        }
      }
      return out;
    }
  }

  const out = [];
  const seen = new Set();
  const moveName = localEffectiveMoveNameByPiece(pieces, piece, rules);
  if (localIsFriendMoveName(moveName)) {
    if (skipFriendExpansion) return out;
    const friendMoves = localBuildFriendMoveNameMap(pieces, rules).get(`${Number(piece.x)},${Number(piece.y)}`) || null;
    if (!friendMoves || friendMoves.size <= 0) return out;
    for (const mv of friendMoves) {
      if (!mv || localIsFriendMoveName(mv)) continue;
      const spec = localPieceSpec(mv);
      localGenerateTargetsBySpec(spec, pieceForMoveGenResolved, pieceMap, piece.x, piece.y, out, seen, mode);
    }
    return out;
  }
  const spec = localPieceSpec(moveName || piece.name);
  localGenerateTargetsBySpec(spec, pieceForMoveGenResolved, pieceMap, piece.x, piece.y, out, seen, mode);
  return out;
}

function localSimulatePiecesAfterCandidate(pieces, cand, rules = {}, typeAttrsOrCtx = null) {
  const next = (pieces || []).map((p) =>
    localAnnotatePieceEffectiveAttrs(
      {
        ...p,
        attrs: localCloneRawPieceAttrs(p?.attrs),
      },
      typeAttrsOrCtx
    )
  );
  const removeAt = (x, y) => {
    const idx = next.findIndex((p) => p && p.x === x && p.y === y);
    if (idx >= 0) next.splice(idx, 1);
    return idx;
  };
  const findAt = (x, y) => next.find((p) => p && p.x === x && p.y === y) || null;
  const maybeFlipAndernachOwner = (toPos, capturedName) => {
    const cur = findAt(toPos.x, toPos.y);
    if (!cur) return;
    if (!localPieceIsKing(cur) && rules?.andernach && capturedName) {
      cur.owner = Number(cur.owner) === 0 ? 1 : 0;
    } else if (!localPieceIsKing(cur) && rules?.anti_andernach && !capturedName) {
      cur.owner = Number(cur.owner) === 0 ? 1 : 0;
    } else if (!localPieceIsKing(cur) && rules?.all_andernach) {
      cur.owner = Number(cur.owner) === 0 ? 1 : 0;
    }
  };
  if (cand.kind === "move") {
    const idx = next.findIndex((p) => p && p.x === cand.from.x && p.y === cand.from.y);
    if (idx < 0) return null;
    const moving = next[idx];
    const takeMakeInfo = cand?.take_make && typeof cand.take_make === "object" ? cand.take_make : null;
    const firstTo =
      takeMakeInfo?.step_to && localInBoard(takeMakeInfo.step_to.x, takeMakeInfo.step_to.y)
        ? { x: Number(takeMakeInfo.step_to.x), y: Number(takeMakeInfo.step_to.y) }
        : { x: Number(cand.to.x), y: Number(cand.to.y) };
    const takeMakeCaptureAt =
      takeMakeInfo?.capture_at && localInBoard(takeMakeInfo.capture_at.x, takeMakeInfo.capture_at.y)
        ? { x: Number(takeMakeInfo.capture_at.x), y: Number(takeMakeInfo.capture_at.y) }
        : null;
    const target = findAt(firstTo.x, firstTo.y);
    const locustPos =
      cand?.locust_capture && localInBoard(cand.locust_capture.x, cand.locust_capture.y)
        ? { x: Number(cand.locust_capture.x), y: Number(cand.locust_capture.y) }
        : null;
    const capturePos = takeMakeCaptureAt || locustPos || { x: Number(firstTo.x), y: Number(firstTo.y) };
    const inferredSwap = localIsMessignySwapTarget(next, moving, firstTo.x, firstTo.y, rules);
    const isSwap =
      typeof cand?.messigny_swap === "boolean"
        ? Boolean(cand.messigny_swap)
        : inferredSwap;
    const swapSourcesExtra = isSwap ? new Set([`${Number(firstTo.x)},${Number(firstTo.y)}`]) : null;
    const imitatorPlan = Array.isArray(cand?.imitator_plan)
      ? cloneJson(cand.imitator_plan)
      : localCalcImitatorSyncPlan(
          next,
          cand.from.x,
          cand.from.y,
          firstTo.x,
          firstTo.y,
        { isDrop: false, movingSourcesExtra: swapSourcesExtra }
        );
    if (imitatorPlan === null) return null;

    const imitatorPayload = [];
    for (const step of imitatorPlan || []) {
      const sx = Number(step?.src?.x);
      const sy = Number(step?.src?.y);
      const dx = Number(step?.dst?.x);
      const dy = Number(step?.dst?.y);
      if (!localInBoard(sx, sy) || !localInBoard(dx, dy)) return null;
      const imp = findAt(sx, sy);
      if (!imp || !localIsImitatorPiece(imp)) return null;
      imitatorPayload.push({
        name: imp.name,
        owner: imp.owner,
        attrs: localCloneRawPieceAttrs(imp?.attrs),
        src: { x: sx, y: sy },
        dst: { x: dx, y: dy },
      });
    }
    for (const step of imitatorPayload) {
      removeAt(step.src.x, step.src.y);
    }
    const placeImitators = () => {
      for (const step of imitatorPayload) {
        if (findAt(step.dst.x, step.dst.y)) return false;
      }
      for (const step of imitatorPayload) {
        next.push(localMakeBoardPiece(step.dst.x, step.dst.y, step.name, step.owner, step.attrs, typeAttrsOrCtx));
      }
      return true;
    };

    if (isSwap && target) {
      const fromPos = { x: moving.x, y: moving.y };
      const targetName = target.name;
      const targetOwner = target.owner;
      const targetAttrs = localCloneRawPieceAttrs(target?.attrs);
      const moveName = moving.name;
      const moveOwner = moving.owner;
      const moveAttrs = localCloneRawPieceAttrs(moving?.attrs);
      removeAt(fromPos.x, fromPos.y);
      removeAt(firstTo.x, firstTo.y);
      next.push(localMakeBoardPiece(firstTo.x, firstTo.y, moveName, moveOwner, moveAttrs, typeAttrsOrCtx));
      next.push(localMakeBoardPiece(fromPos.x, fromPos.y, targetName, targetOwner, targetAttrs, typeAttrsOrCtx));
      if (!placeImitators()) return null;
      maybeFlipAndernachOwner({ x: firstTo.x, y: firstTo.y }, null);
      return next;
    }

    next.splice(idx, 1);
    let captured = null;
    const moveFriendlyOwnerRaw = Number(cand?.owner);
    const moveFriendlyOwner =
      moveFriendlyOwnerRaw === 0 || moveFriendlyOwnerRaw === 1
        ? moveFriendlyOwnerRaw
        : localPieceFriendlyOwner(moving, 0);
    if (locustPos) {
      const locustTarget = findAt(locustPos.x, locustPos.y);
      if (locustTarget && !localIsFriendlyPieceForMove(moving, Number(locustTarget.owner), moveFriendlyOwner)) {
        removeAt(locustPos.x, locustPos.y);
        captured = locustTarget;
      }
    } else {
      const captureTarget = findAt(capturePos.x, capturePos.y);
      const capturedIdx = removeAt(capturePos.x, capturePos.y);
      captured = capturedIdx >= 0 ? captureTarget : null;
    }
    if (cand.promote) {
      const pto = localPiecePromoteTo(moving);
      const pa = localPiecePromoteAttrs(moving);
      if (pto) {
        const resolved = localResolvePromotionResult(moving, pto, pa);
        moving.name = resolved.name;
        moving.attrs = resolved.attrs;
      } else {
        moving.attrs = pa ? localCloneRawPieceAttrs(pa) : {};
        if (localPieceIsKing(moving)) {
          moving.attrs = localCloneRawPieceAttrs(moving.attrs);
          moving.attrs.is_king = true;
        }
      }
      localAnnotatePieceEffectiveAttrs(moving, typeAttrsOrCtx);
    }
    let actualTo = { x: cand.to.x, y: cand.to.y };
    const capturedName = captured ? String(captured.name || "") : null;
    if (captured && localIsTakeMakeActive(rules)) {
      const capturedIsKing = localPieceIsKing(captured);
      if (capturedIsKing && !rules?.k_take_make) {
        actualTo = { x: Number(firstTo.x), y: Number(firstTo.y) };
      } else {
        if (!takeMakeInfo) return null;
        const continuations = localBuildTakeMakeContinuationSquares(
          pieces,
          moving,
          firstTo,
          capturePos,
          captured,
          rules,
          {
            movingSource: { x: Number(cand.from.x), y: Number(cand.from.y) },
            capturedMoveName: String(takeMakeInfo?.captured_move_name || ""),
            typeAttrsOrCtx,
          }
        );
        const finalX = Number(cand.to.x);
        const finalY = Number(cand.to.y);
        if (!continuations.some((sq) => Number(sq.x) === finalX && Number(sq.y) === finalY)) {
          return null;
        }
        actualTo = { x: finalX, y: finalY };
      }
    }
    if (captured) {
      const capturedOwner = Number(captured.owner);
      if (rules?.pwc) {
        const isDead = localIsDeadZoneByRules(capturedName, capturedOwner, cand.from.y, rules);
        let isNifu = false;
        if (capturedName === "歩" && !rules?.allow_double_fu) {
          isNifu = localCountFuInFile(next, cand.from.x, capturedOwner) > 0;
        }
        if (!isDead && !isNifu) {
          next.push(
            localMakeBoardPiece(cand.from.x, cand.from.y, captured.name, captured.owner, captured?.attrs, typeAttrsOrCtx)
          );
        }
      } else if (rules?.anti_circe) {
        const rb = cand.rebirth && localInBoard(cand.rebirth.x, cand.rebirth.y) ? cand.rebirth : null;
        if (rb && !findAt(rb.x, rb.y)) {
          actualTo = { x: rb.x, y: rb.y };
        }
      } else if (rules?.circe) {
        const rb = cand.rebirth && localInBoard(cand.rebirth.x, cand.rebirth.y) ? cand.rebirth : null;
        if (rb && !findAt(rb.x, rb.y)) {
          const base = standardBaseName(captured.name);
          let nifu = false;
          if (base === "歩" && !rules?.allow_double_fu) {
            let fuCount = localCountFuInFile(next, rb.x, capturedOwner);
            if (
              String(moving?.name || "") === "歩" &&
              Number(moving?.owner) === Number(capturedOwner) &&
              Number(actualTo?.x) === Number(rb.x)
            ) {
              fuCount += 1;
            }
            nifu = fuCount > 0;
          }
          if (!nifu) {
            next.push(localMakeBoardPiece(rb.x, rb.y, base, capturedOwner, {}, typeAttrsOrCtx));
          }
        }
      }
    }
    if (rules?.rifle && captured) {
      if (findAt(cand.from.x, cand.from.y)) return null;
      actualTo = { x: Number(cand.from.x), y: Number(cand.from.y) };
    }
    moving.x = actualTo.x;
    moving.y = actualTo.y;
    next.push(moving);
    if (!placeImitators()) return null;
    maybeFlipAndernachOwner(actualTo, capturedName);
    return next;
  }
  if (cand.kind === "drop") {
    removeAt(cand.to.x, cand.to.y);
    const dropPieceOwner =
      Number(cand?.piece_owner) === -1 || Boolean(cand?.neutral_piece) ? -1 : Number(cand.owner);
    next.push(localMakeBoardPiece(cand.to.x, cand.to.y, cand.name, dropPieceOwner, {}, typeAttrsOrCtx));
  }
  return next;
}

function localCloneHands(hands) {
  const normalizeList = (arr) =>
    (Array.isArray(arr) ? arr : []).map((tok) => {
      const parsed = localParseHandToken(tok);
      if (!parsed.name) return String(tok || "");
      return localMakeHandToken(parsed.name, parsed.neutral);
    });
  return {
    "0": normalizeList(hands?.["0"]),
    "1": normalizeList(hands?.["1"]),
  };
}

function localSimulateHandsAfterCandidate(pieces, hands, cand, rules = {}, options = {}) {
  const nextPieces = Array.isArray(options?.nextPieces) ? options.nextPieces : null;
  const nextHands = localCloneHands(hands);
  if (!cand) return nextHands;
  if (cand.kind === "drop") {
    const dropHandToken = String(
      cand?.hand_token ||
        localMakeHandToken(
          String(cand?.name || ""),
          Number(cand?.piece_owner) === -1 || Boolean(cand?.neutral_piece)
        )
    );
    if (!localRemoveFromHandArray(nextHands[String(cand.owner)] || [], dropHandToken)) {
      localRemoveFromHandArray(nextHands[String(cand.owner)] || [], String(cand.name || ""));
    }
    return nextHands;
  }
  if (cand.kind !== "move") return nextHands;
  if (cand.messigny_swap) return nextHands;
  if (!cand.capture) return nextHands;
  const fromPiece = localFindPieceInList(pieces, cand.from?.x, cand.from?.y);
  const takeMakeCapturePos =
    cand?.take_make?.capture_at && localInBoard(cand.take_make.capture_at.x, cand.take_make.capture_at.y)
      ? { x: Number(cand.take_make.capture_at.x), y: Number(cand.take_make.capture_at.y) }
      : null;
  let target = null;
  if (takeMakeCapturePos) {
    target = localFindPieceInList(pieces, takeMakeCapturePos.x, takeMakeCapturePos.y);
  } else if (cand?.locust_capture && localInBoard(cand.locust_capture.x, cand.locust_capture.y)) {
    target = localFindPieceInList(pieces, cand.locust_capture.x, cand.locust_capture.y);
  } else {
    if (localImitatorPlanUsesSourceSquare(cand?.imitator_plan, cand?.to?.x, cand?.to?.y)) {
      return nextHands;
    }
    target = localFindPieceInList(pieces, cand.to?.x, cand.to?.y);
  }
  if (!fromPiece || !target) return nextHands;
  const candOwner = Number(cand?.owner);
  const movingOwner = candOwner === 0 || candOwner === 1 ? candOwner : Number(fromPiece.owner);
  if (localIsFriendlyPieceForMove(fromPiece, Number(target.owner), movingOwner)) return nextHands;
  if (localPieceIsImmortal(target)) return nextHands;
  const capturedOwner = Number(target.owner);
  const capturedName = String(target.name || "");
  const capturedBaseName = standardBaseName(capturedName);
  const addToHand = () => {
    localAddCapturedPieceToHandByState(
      { hands: nextHands },
      movingOwner,
      target,
      options?.typeAttrsOrCtx || null
    );
  };

  if (rules?.pwc) {
    const rp = nextPieces
      ? localFindPieceInList(nextPieces, Number(cand.from?.x), Number(cand.from?.y))
      : null;
    const restoredOnBoard =
      !!rp && Number(rp.owner) === capturedOwner && String(rp.name || "") === capturedName;
    if (!restoredOnBoard) addToHand();
    return nextHands;
  }
  if (rules?.anti_circe) {
    addToHand();
    return nextHands;
  }
  if (rules?.circe) {
    const rb = cand.rebirth && localInBoard(cand.rebirth.x, cand.rebirth.y) ? cand.rebirth : null;
    const rp = rb && nextPieces ? localFindPieceInList(nextPieces, rb.x, rb.y) : null;
    const rebornOnBoard =
      !!rp && Number(rp.owner) === capturedOwner && String(rp.name || "") === capturedBaseName;
    if (!rebornOnBoard) addToHand();
    return nextHands;
  }
  addToHand();
  return nextHands;
}

function localSimulateStateAfterCandidate(pieces, hands, turn, cand, rules = {}, typeAttrsOrCtx = null) {
  const nextPieces = localSimulatePiecesAfterCandidate(pieces, cand, rules, typeAttrsOrCtx);
  if (!nextPieces) return null;
  return {
    mode: "play",
    turn: Number(turn) === 0 ? 1 : 0,
    board: {
      width: 9,
      height: 9,
      pieces: nextPieces,
    },
    hands: localSimulateHandsAfterCandidate(pieces, hands, cand, rules, { nextPieces, typeAttrsOrCtx }),
    rules: cloneJson(rules || {}),
  };
}

function localGetUchifuModeFromRules(rules = {}) {
  if (rules?.uchifu_complete) return "complete";
  if (rules?.uchifu_simple) return "simple";
  return "off";
}

function localLastMoveIsPawnDrop(lastMoveInfo) {
  const info = localExtractLastMoveInfo(lastMoveInfo);
  if (!info) return false;
  return String(info.name || "") === "歩" && !info.from;
}

function localBuildAnalysisContext(state, lastMoveInfo = null, lastMoveStr = "", allInPrevKey = null, typeAttrsOrCtx = null) {
  const tempState = cloneJson(state || {});
  const ctx = {
    revision: 0,
    state: tempState,
    typeAttrs: cloneJson(localResolveTypeAttrsMap(typeAttrsOrCtx) || {}),
    history: localBaseHistoryForState(tempState),
    legal: localEmptyLegal(),
    _allInPrevKey: typeof allInPrevKey === "string" ? allInPrevKey : null,
  };
  localRefreshAllPieceEffectiveAttrs(ctx);
  ctx.history = localBaseHistoryForState(tempState);
  const node = localHistoryCurrentNode(ctx);
  if (node) {
    node.last_move_info = lastMoveInfo ? cloneJson(lastMoveInfo) : null;
    node.move_str = String(lastMoveStr || "");
  }
  return ctx;
}

function localIsMatedByRulesForAnalysis(
  pieces,
  hands,
  owner,
  rules = {},
  options = {}
) {
  const lastMoveInfo = options?.lastMoveInfo || null;
  const lastMoveStr = String(options?.lastMoveStr || "");
  const respectUchifuRule = options?.respectUchifuRule !== false;
  const respectKomaAmariRule = options?.respectKomaAmariRule !== false;
  const allInPrevKey = typeof options?.allInPrevKey === "string" ? options.allInPrevKey : null;
  const analysisIgnoreTorikin = Boolean(options?.analysisIgnoreTorikin);
  const enforceRecursiveUchifu = Boolean(options?.enforceRecursiveUchifu);
  const recursionDepthRaw = Number.parseInt(options?.uchifuRecursionDepth, 10);
  const recursionMaxRaw = Number.parseInt(options?.uchifuRecursionMax, 10);
  const uchifuRecursionDepth = Number.isFinite(recursionDepthRaw) ? Math.max(0, recursionDepthRaw) : 0;
  const uchifuRecursionMax = Number.isFinite(recursionMaxRaw) ? Math.max(0, recursionMaxRaw) : 3;
  const enableRecursiveUchifu = enforceRecursiveUchifu && uchifuRecursionDepth < uchifuRecursionMax;
  const typeAttrsOrCtx = options?.typeAttrsOrCtx || null;
  const checkCtx =
    typeAttrsOrCtx && typeof typeAttrsOrCtx === "object" && typeAttrsOrCtx.state
      ? typeAttrsOrCtx
      : null;

  if (
    !localIsInCheckWithRules(pieces, owner, rules, {
      lastMoveInfo,
      lastMoveStr,
      ctx: checkCtx,
      typeAttrsOrCtx,
    })
  ) {
    return false;
  }

  const simState = {
    mode: "play",
    turn: Number(owner),
    board: { width: 9, height: 9, pieces: cloneJson(pieces || []) },
    hands: localCloneHands(hands),
    rules: cloneJson(rules || {}),
  };
  const simCtx = localBuildAnalysisContext(simState, lastMoveInfo, lastMoveStr, allInPrevKey, typeAttrsOrCtx);
  localComputeLegalAll(simCtx, {
    analysisNoUchifu: !enableRecursiveUchifu,
    analysisIgnoreTorikin,
    skipGlobalRuleFilter: true,
    uchifuRecursionDepth: uchifuRecursionDepth + 1,
    uchifuRecursionMax,
  });
  if (Array.isArray(simCtx?.legal?.moves) && simCtx.legal.moves.length > 0) {
    return false;
  }
  // 「王手義務で指し手なし」は詰み判定に含めない（打歩詰再帰判定でも同様）。
  if (String(simCtx?.legal?.status?.kind || "") === "sente_obligation_no_moves") {
    return false;
  }

  if (respectUchifuRule && localGetUchifuModeFromRules(rules) === "simple") {
    if (!localLastMoveIsPawnDrop(lastMoveInfo)) return false;
  }
  if (respectKomaAmariRule && rules?.koma_amari_kin) {
    const senteHand = Array.isArray(hands?.["0"]) ? hands["0"] : [];
    if (senteHand.length > 0) return false;
  }
  return true;
}

function localNormalizeMoveStrForRepeatRules(moveStr) {
  let s = String(moveStr || "").trim();
  if (!s) return "";
  const slash = s.indexOf("/");
  if (slash >= 0) s = s.slice(0, slash);
  s = s.replace(/\[I[^\]]*\]/g, "");
  s = s.replace(/転/g, "");
  s = localStripReplayOwnerPrefix(s);
  return s.trim();
}

function localExtractLastMoveInfo(lastInfo) {
  if (Array.isArray(lastInfo)) {
    return {
      name: String(lastInfo[0] || ""),
      from: lastInfo[1] || null,
      to: lastInfo[2] || null,
      captured: Boolean(lastInfo[3]),
    };
  }
  if (lastInfo && typeof lastInfo === "object") {
    return {
      name: String(lastInfo.name || ""),
      from: lastInfo.from || null,
      to: lastInfo.to || null,
      captured: Boolean(lastInfo.captured),
    };
  }
  return null;
}

function localRepeatRuleLastNamesFrom(lastInfo, moveStr) {
  const info = localExtractLastMoveInfo(lastInfo);
  if (!info || !info.name) {
    return { lastNameRepeat: null, lastNameBase: null };
  }
  let lastNameRepeat = info.name;
  const lastNameBase = standardBaseName(info.name);
  const moveMain = localNormalizeMoveStrForRepeatRules(moveStr);
  if (moveMain.endsWith("成") && !moveMain.endsWith("不成") && !moveMain.endsWith("生")) {
    lastNameRepeat = standardBaseName(lastNameRepeat);
  }
  return { lastNameRepeat, lastNameBase };
}

function localLastCaptureBaseForOwnerFromContext(ctx, owner) {
  const byId = localHistoryNodeMap(ctx);
  let node = localHistoryCurrentNode(ctx);
  const targetOwner = Number(owner);
  const seen = new Set();
  while (node && !seen.has(node.node_id)) {
    seen.add(node.node_id);
    const info = localExtractLastMoveInfo(node?.last_move_info || null);
    if (info && info.name) {
      const mover = 1 - Number(node?.turn);
      if (mover === targetOwner) {
        if (!Boolean(info.captured)) return null;
        return standardBaseName(info.name);
      }
    }
    const parentId = node?.parent_id || null;
    node = parentId ? byId.get(parentId) || null : null;
  }
  return null;
}

function localRepeatRuleLastNamesFromContext(ctx) {
  const node = localHistoryCurrentNode(ctx);
  return localRepeatRuleLastNamesFrom(node?.last_move_info, node?.move_str);
}

function localAttackPiecesWithoutNeutralImitators(pieces) {
  const src = Array.isArray(pieces) ? pieces : [];
  let changed = false;
  const out = [];
  for (const p of src) {
    if (p && localIsImitatorPiece(p) && Number(p.owner) !== 0 && Number(p.owner) !== 1) {
      changed = true;
      continue;
    }
    out.push(p);
  }
  return changed ? out : src;
}

function localHasAdjacentPiece(pieces, centerX, centerY, movingSources = null, movingDests = null) {
  const pieceMap = localPieceMapFromList(pieces);
  const src = movingSources instanceof Set ? movingSources : new Set(movingSources || []);
  const dst = movingDests instanceof Set ? movingDests : new Set(movingDests || []);
  for (let ny = Math.max(0, centerY - 1); ny <= Math.min(8, centerY + 1); ny += 1) {
    for (let nx = Math.max(0, centerX - 1); nx <= Math.min(8, centerX + 1); nx += 1) {
      if (nx === centerX && ny === centerY) continue;
      const key = `${nx},${ny}`;
      if (dst.has(key)) return true;
      if (src.has(key)) continue;
      if (pieceMap.has(key)) return true;
    }
  }
  return false;
}

function localIsAnnanNifuHostActive(rules = {}) {
  const r = rules && typeof rules === "object" ? rules : {};
  for (const key of ANNA_NIFU_HOST_RULE_KEYS) {
    if (Boolean(r[key])) return true;
  }
  return false;
}

function localIsAnnanNifuInvalidActive(rules = {}) {
  const r = rules && typeof rules === "object" ? rules : {};
  return Boolean(r.annan_nifu_invalid) && localIsAnnanNifuHostActive(r);
}

function localIsKingCaptureBlockedByAnnanNifu(pieces, piece, tx, ty, rules = {}) {
  if (!localIsAnnanNifuInvalidActive(rules)) return false;
  if (!piece) return false;
  if (String(piece.name || "") !== "歩") return false;
  const owner = Number(piece.owner);
  if (owner !== 0 && owner !== 1) return false;
  const target = localFindPieceInList(pieces, tx, ty);
  if (!target) return false;
  if (Number(target.owner) === owner) return false;
  if (!localPieceIsKing(target)) return false;
  let fuCountAfter = localCountFuInFile(pieces, tx, owner);
  if (Number(piece.x) === Number(tx)) fuCountAfter -= 1;
  fuCountAfter += 1;
  return fuCountAfter > 1;
}

function localPieceAttacksSquareWithRules(
  pieces,
  piece,
  tx,
  ty,
  rules = {},
  options = {}
) {
  if (!piece) return false;
  if (localIsImitatorPiece(piece)) return false;
  const optNeutralTurnOwner = Number(options?.neutralTurnOwner);
  const optNeutralOrientationOwner = Number(options?.neutralOrientationOwner);
  const neutralTurnOwner =
    optNeutralOrientationOwner === 0 || optNeutralOrientationOwner === 1
      ? optNeutralOrientationOwner
      : optNeutralTurnOwner === 0 || optNeutralTurnOwner === 1
        ? optNeutralTurnOwner
        : 0;
  const pieceAttackOwner = Number(piece.owner) === -1 ? neutralTurnOwner : Number(piece.owner);
  const attackPieces = localAttackPiecesWithoutNeutralImitators(pieces);
  const attackPieceMap = localPieceMapFromList(attackPieces);
  const ignoreMadrasi = Boolean(options?.ignoreMadrasi);
  const applyKoko = options?.applyKoko === undefined ? true : Boolean(options.applyKoko);
  const ignoreTenjiku = Boolean(options?.ignoreTenjiku);
  if (!ignoreMadrasi && localIsMadrasiParalyzed(attackPieces, piece, rules)) {
    return false;
  }
  if (!ignoreTenjiku && rules?.tenjiku && localPieceIsKing(piece)) {
    const checkingPositions = localGetCheckingPiecePositionsWithRules(
      attackPieces,
      pieceAttackOwner,
      rules,
      { ignoreTenjikuForKings: true, neutralTurnOwner }
    );
    if (checkingPositions.length > 0) {
      const tenjikuAttackKeys = new Set();
      for (const chk of checkingPositions) {
        const checker = localFindPieceInList(attackPieces, chk.x, chk.y);
        if (!checker) continue;
        const checkerMoveName = localEffectiveMoveNameByPiece(attackPieces, checker, rules);
        if (!checkerMoveName) continue;
        const attacks = localGenerateTargetsByEffectiveMoveNameAt(
          attackPieces,
          attackPieceMap,
          checkerMoveName,
          pieceAttackOwner,
          Number(piece.x),
          Number(piece.y),
          rules,
          "attack"
        );
        for (const a of attacks) tenjikuAttackKeys.add(`${a.x},${a.y}`);
      }
      if (!tenjikuAttackKeys.has(`${tx},${ty}`)) {
        return false;
      }
      const imitatorPlan = localCalcImitatorSyncPlan(pieces, piece.x, piece.y, tx, ty, { isDrop: false });
      if (imitatorPlan === null) return false;
      if (localIsKingCaptureBlockedByAnnanNifu(pieces, piece, tx, ty, rules)) return false;
      if (!rules?.koko || !applyKoko) return true;
      const movingSources = new Set([`${piece.x},${piece.y}`]);
      const movingDests = new Set([`${tx},${ty}`]);
      for (const step of imitatorPlan || []) {
        movingSources.add(`${Number(step.src.x)},${Number(step.src.y)}`);
        movingDests.add(`${Number(step.dst.x)},${Number(step.dst.y)}`);
      }
      return localHasAdjacentPiece(
        pieces,
        tx,
        ty,
        movingSources,
        movingDests
      );
    }
  }

  const targets = localGenerateTargetsForPiece(attackPieces, piece, rules, {
    mode: "attack",
    ignoreMadrasi,
    orientationOwner: pieceAttackOwner,
    neutralTurnOwner,
  });
  const hit = targets.some((t) => t.x === tx && t.y === ty);
  if (!hit) return false;
  const imitatorPlan = localCalcImitatorSyncPlan(pieces, piece.x, piece.y, tx, ty, { isDrop: false });
  if (imitatorPlan === null) return false;
  if (localIsKingCaptureBlockedByAnnanNifu(pieces, piece, tx, ty, rules)) return false;
  if (!rules?.koko || !applyKoko) return true;
  const movingSources = new Set([`${piece.x},${piece.y}`]);
  const movingDests = new Set([`${tx},${ty}`]);
  for (const step of imitatorPlan || []) {
    movingSources.add(`${Number(step.src.x)},${Number(step.src.y)}`);
    movingDests.add(`${Number(step.dst.x)},${Number(step.dst.y)}`);
  }
  return localHasAdjacentPiece(
    pieces,
    tx,
    ty,
    movingSources,
    movingDests
  );
}

function localIsSquareAttackedBySameNameOwnerWithRules(
  pieces,
  x,
  y,
  owner,
  pieceName,
  rules = {},
  options = {}
) {
  const excludePos = options?.excludePos || null;
  for (const p of pieces || []) {
    if (!p || Number(p.owner) !== Number(owner)) continue;
    if (String(p.name || "") !== String(pieceName || "")) continue;
    if (excludePos && p.x === excludePos.x && p.y === excludePos.y) continue;
    if (localPieceAttacksSquareWithRules(pieces, p, x, y, rules, options)) return true;
  }
  return false;
}

function localIsIsardamActive(rules) {
  return Boolean(rules?.isardam || rules?.isardam_type_b);
}

function localHasIsardamConflict(pieces, rules = {}) {
  if (!localIsIsardamActive(rules)) return false;
  for (const p of pieces || []) {
    if (!p) continue;
    const owner = Number(p.owner);
    if (owner !== 0 && owner !== 1) continue;
    const enemy = 1 - owner;
    if (
      localIsSquareAttackedBySameNameOwnerWithRules(
        pieces,
        p.x,
        p.y,
        enemy,
        p.name,
        rules,
        { ignoreMadrasi: false, applyKoko: true }
      )
    ) {
      return true;
    }
  }
  return false;
}

function localIsIsardamKingCaptureLegal(
  pieces,
  checker,
  kingPos,
  rules = {},
  typeAttrsOrCtx = null
) {
  if (!checker || !kingPos) return false;
  if (Number(checker.owner) !== 0 && Number(checker.owner) !== 1) return false;
  const promoteFlags = [];
  const deadZoneBlocked = (
    localHasDeadZoneRestriction(rules) &&
    localIsDeadZoneByRules(String(checker.name || ""), Number(checker.owner), Number(kingPos.y), rules)
  );
  const validUnpromoted =
    !deadZoneBlocked ||
    localWillAndernachTurn(checker, rules, true);
  if (validUnpromoted) promoteFlags.push(false);
  if (!rules?.narikin && localCanPromoteMove(checker, Number(kingPos.y))) {
    promoteFlags.push(true);
  }
  if (promoteFlags.length <= 0) return false;

  for (const promote of promoteFlags) {
    const cand = {
      kind: "move",
      owner: Number(checker.owner),
      name: String(checker.name || ""),
      from: { x: Number(checker.x), y: Number(checker.y) },
      to: { x: Number(kingPos.x), y: Number(kingPos.y) },
      promote: Boolean(promote),
      messigny_swap: false,
      capture: true,
    };
    const sim = localSimulateStateAfterCandidate(
      pieces,
      { "0": [], "1": [] },
      Number(checker.owner),
      cand,
      rules,
      typeAttrsOrCtx
    );
    if (!sim || !sim.board || !Array.isArray(sim.board.pieces)) continue;
    // Isardam Type A: 玉取り後に同種利き衝突が発生する筋は王手として無効。
    if (!Boolean(rules?.isardam_type_b) && localHasIsardamConflict(sim.board.pieces, rules)) {
      continue;
    }
    return true;
  }
  return false;
}

function localIsSquareAttackedByWithRules(
  pieces,
  x,
  y,
  byOwner,
  rules = {},
  options = {}
) {
  const excludePos = options?.excludePos || null;
  const ignoreAttackerFilters = Boolean(options?.ignoreAttackerFilters);
  const ignoreCaptureRepeatType = Boolean(options?.ignoreCaptureRepeatType);
  const optNeutralTurnOwner = Number(options?.neutralTurnOwner);
  const neutralTurnOwner = optNeutralTurnOwner === 0 || optNeutralTurnOwner === 1 ? optNeutralTurnOwner : null;
  const repeat = options?.repeatLastNames || { lastNameRepeat: null, lastNameBase: null };
  for (const p of pieces || []) {
    if (!p) continue;
    const po = Number(p.owner);
    if (po !== byOwner && !(po === -1 && neutralTurnOwner === byOwner)) continue;
    if (excludePos && p.x === excludePos.x && p.y === excludePos.y) continue;
    if (!ignoreAttackerFilters) {
      if (rules?.cant_repeat_type && repeat.lastNameRepeat && p.name === repeat.lastNameRepeat) continue;
      if (!ignoreCaptureRepeatType && rules?.cant_capture_repeat_type && repeat.lastNameBase) {
        if (standardBaseName(p.name) === repeat.lastNameBase) continue;
      }
      if (rules?.patrol || rules?.lortap) {
        const supported = localIsSquareAttackedByWithRules(
          pieces,
          p.x,
          p.y,
          byOwner,
          rules,
          {
            excludePos: { x: p.x, y: p.y },
            ignoreAttackerFilters: true,
            repeatLastNames: null,
            neutralTurnOwner,
          }
        );
        if (rules?.patrol && !supported) continue;
        if (rules?.lortap && supported) continue;
      }
    }
    if (localPieceAttacksSquareWithRules(pieces, p, x, y, rules, options)) return true;
  }
  return false;
}

function localIsSquareAttackedBy(pieces, x, y, byOwner) {
  return localIsSquareAttackedByWithRules(pieces, x, y, byOwner, {}, {});
}

function localIsInCheckWithRules(pieces, owner, rules = {}, options = {}) {
  const opt = options && typeof options === "object" ? { ...options } : {};
  const neutralTurnOwner = Number(opt?.neutralTurnOwner);
  if (neutralTurnOwner !== 0 && neutralTurnOwner !== 1) {
    opt.neutralTurnOwner = Number(owner) === 0 ? 1 : 0;
  }
  return localGetCheckingPiecePositionsWithRules(pieces, owner, rules, opt).length > 0;
}

function localSelectCheckTargetKings(pieces, owner) {
  const list = Array.isArray(pieces) ? pieces : [];
  const own = list.filter((p) => p && Number(p.owner) === Number(owner) && localPieceIsKing(p));
  if (Number(owner) === -1) return own;
  const neutral = list.filter((p) => p && Number(p.owner) === -1 && localPieceIsKing(p));
  if (own.length <= 0 && neutral.length <= 0) return [];
  if (neutral.length <= 0) return own;
  if (own.length <= 0) return neutral;
  const seen = new Set();
  const out = [];
  for (const k of own.concat(neutral)) {
    const key = `${Number(k?.x)},${Number(k?.y)},${Number(k?.owner)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(k);
  }
  return out;
}

function localIsInCheckViaNeutralFallbackStrict(pieces, owner, rules = {}, options = {}) {
  const list = Array.isArray(pieces) ? pieces : [];
  const neutralKings = list.filter((p) => p && Number(p.owner) === -1 && localPieceIsKing(p));
  if (neutralKings.length <= 0) return false;
  const opp = Number(owner) === 0 ? 1 : 0;
  const opt = options && typeof options === "object" ? { ...options } : {};
  const rawNeutralTurnOwner = Number(opt?.neutralTurnOwner);
  const neutralTurnOwner =
    rawNeutralTurnOwner === 0 || rawNeutralTurnOwner === 1 ? rawNeutralTurnOwner : opp;
  for (const k of neutralKings) {
    if (
      localIsSquareAttackedByWithRules(list, Number(k.x), Number(k.y), opp, rules, {
        ...opt,
        neutralTurnOwner,
      })
    ) {
      return true;
    }
  }
  return false;
}

function localMoveCapturesKingFromPosition(piecesBeforeMove, mv, rules = {}) {
  if (!mv || mv.kind !== "move") return false;
  const movingPiece = localFindPieceInList(piecesBeforeMove, mv.from?.x, mv.from?.y);
  if (!movingPiece) return false;
  const movingFriendlyOwner = Number(mv?.owner);
  if (Boolean(mv?.take_make?.captured_is_king)) return true;
  if (mv?.locust_capture && localInBoard(mv.locust_capture.x, mv.locust_capture.y)) {
    const locustTarget = localFindPieceInList(piecesBeforeMove, mv.locust_capture.x, mv.locust_capture.y);
    if (
      locustTarget &&
      !localIsFriendlyPieceForMove(movingPiece, Number(locustTarget.owner), movingFriendlyOwner) &&
      localPieceIsKing(locustTarget)
    ) {
      return true;
    }
  }
  if (mv.messigny_swap) return false;
  if (localImitatorPlanUsesSourceSquare(mv.imitator_plan, mv.to?.x, mv.to?.y)) return false;
  const targetPiece = localFindPieceInList(piecesBeforeMove, mv.to?.x, mv.to?.y);
  return Boolean(
    targetPiece &&
      !localIsFriendlyPieceForMove(movingPiece, Number(targetPiece.owner), movingFriendlyOwner) &&
      localPieceIsKing(targetPiece)
  );
}

function localMoveCapturedKingFromPosition(piecesBeforeMove, mv, rules = {}) {
  if (!mv || mv.kind !== "move") return null;
  const movingPiece = localFindPieceInList(piecesBeforeMove, mv.from?.x, mv.from?.y);
  if (!movingPiece) return null;
  const movingFriendlyOwner = Number(mv?.owner);
  const takeMakeCaptureAt =
    mv?.take_make?.capture_at && localInBoard(mv.take_make.capture_at.x, mv.take_make.capture_at.y)
      ? { x: Number(mv.take_make.capture_at.x), y: Number(mv.take_make.capture_at.y) }
      : null;
  if (takeMakeCaptureAt) {
    const captured = localFindPieceInList(piecesBeforeMove, takeMakeCaptureAt.x, takeMakeCaptureAt.y);
    if (
      captured &&
      !localIsFriendlyPieceForMove(movingPiece, Number(captured.owner), movingFriendlyOwner) &&
      localPieceIsKing(captured)
    ) {
      return captured;
    }
  }
  if (mv?.locust_capture && localInBoard(mv.locust_capture.x, mv.locust_capture.y)) {
    const locustTarget = localFindPieceInList(piecesBeforeMove, mv.locust_capture.x, mv.locust_capture.y);
    if (
      locustTarget &&
      !localIsFriendlyPieceForMove(movingPiece, Number(locustTarget.owner), movingFriendlyOwner) &&
      localPieceIsKing(locustTarget)
    ) {
      return locustTarget;
    }
  }
  if (mv.messigny_swap) return null;
  if (localImitatorPlanUsesSourceSquare(mv.imitator_plan, mv.to?.x, mv.to?.y)) return null;
  const targetPiece = localFindPieceInList(piecesBeforeMove, mv.to?.x, mv.to?.y);
  if (
    targetPiece &&
    !localIsFriendlyPieceForMove(movingPiece, Number(targetPiece.owner), movingFriendlyOwner) &&
    localPieceIsKing(targetPiece)
  ) {
    return targetPiece;
  }
  return null;
}

function localHasOpponentKingCaptureMoveByLegalScan(
  nextPieces,
  nextHands,
  selfCheckOwner,
  rules,
  simInfo,
  simMoveStr,
  ctx
) {
  const opp = Number(selfCheckOwner) === 0 ? 1 : 0;
  const simRules = localMergeRulesWithDefaults(rules || {});
  // 「玉取り可能手があるか」の確認は王手義務判定とは独立に行う。
  // ここで王手義務を残すと、Imitator 等で合法手が過剰に0件化し、
  // 王手成立手を誤って非王手扱いする。
  simRules.allow_sente_non_check = true;
  const simState = {
    mode: "play",
    turn: opp,
    board: { width: 9, height: 9, pieces: cloneJson(nextPieces || []) },
    hands: localCloneHands(nextHands),
    rules: simRules,
  };
  const simCtx = localBuildAnalysisContext(
    simState,
    simInfo || null,
    String(simMoveStr || ""),
    localPreviousPositionKeyFromContext(ctx),
    ctx
  );
  localComputeLegalAll(simCtx, {
    skipStatusEvaluation: true,
    skipNoCheckStatusProbe: true,
    skipGlobalRuleFilter: true,
    filterCheckGreedy: false,
    analysisNoUchifu: true,
    skipSort: true,
    skipNeutralSelfCheckLegalScan: true,
    skipSenteRuntimeObligationFilter: true,
  });
  const protectedKingOwners = new Set([Number(selfCheckOwner), -1]);
  const protectedKingCountBefore = (nextPieces || []).filter(
    (p) => p && protectedKingOwners.has(Number(p.owner)) && localPieceIsKing(p)
  ).length;
  const moves = Array.isArray(simCtx?.legal?.moves) ? simCtx.legal.moves : [];
  for (const mv of moves) {
    if (!mv || mv.kind !== "move") continue;
    const capturedKing = localMoveCapturedKingFromPosition(nextPieces, mv, rules);
    if (capturedKing && protectedKingOwners.has(Number(capturedKing.owner))) return true;
    // 捕獲位置の推定が難しい合成手(フェアリールール/同時移動)向けの保険:
    // 1手シミュレーション後に対象側(手番側+中立)の玉枚数が減っていれば玉取りありとみなす。
    const hasImitatorSync = Array.isArray(mv?.imitator_plan) && mv.imitator_plan.length > 0;
    const simAfter = hasImitatorSync
      ? localRuntimeSimulateMoveState(ctx, nextPieces, nextHands, opp, rules, mv) ||
        localSimulateStateAfterCandidate(nextPieces, nextHands, opp, mv, rules, ctx)
      : localSimulateStateAfterCandidate(nextPieces, nextHands, opp, mv, rules, ctx);
    if (!simAfter || !simAfter.board || !Array.isArray(simAfter.board.pieces)) continue;
    const protectedKingCountAfter = simAfter.board.pieces.filter(
      (p) => p && protectedKingOwners.has(Number(p.owner)) && localPieceIsKing(p)
    ).length;
    if (protectedKingCountAfter < protectedKingCountBefore) return true;
  }
  return false;
}

function localIsInCheckByDirectAttackFallback(pieces, owner, rules = {}, options = {}) {
  const kings = localSelectCheckTargetKings(pieces, owner);
  if (!Array.isArray(kings) || kings.length <= 0) return false;
  const opp = Number(owner) === 0 ? 1 : 0;
  const turnHints = [opp, Number(owner)];
  for (const neutralTurnOwner of turnHints) {
    for (const k of kings) {
      if (
        localIsSquareAttackedByWithRules(pieces, Number(k.x), Number(k.y), opp, rules, {
          ...options,
          neutralTurnOwner,
          ignoreCaptureRepeatType: true,
        })
      ) {
        return true;
      }
    }
  }
  return false;
}

function localIsSelfCheckedAfterMoveState(
  nextPieces,
  nextHands,
  selfCheckOwner,
  rules = {},
  lastMoveInfo = null,
  lastMoveStr = "",
  ctx = null,
  moveLike = null,
  skipNeutralSelfCheckLegalScan = false
) {
  const baseSelfCheckOpts = {
    lastMoveInfo: lastMoveInfo || null,
    lastMoveStr: String(lastMoveStr || ""),
    ctx,
  };
  let selfChecked = localIsInCheckWithRules(nextPieces, selfCheckOwner, rules, {
    ...baseSelfCheckOpts,
    neutralTurnOwner: Number(selfCheckOwner) === 0 ? 1 : 0,
  });
  if (!selfChecked) {
    selfChecked = localIsInCheckWithRules(nextPieces, selfCheckOwner, rules, {
      ...baseSelfCheckOpts,
      neutralTurnOwner: Number(selfCheckOwner),
    });
  }
  if (!selfChecked) {
    selfChecked = localIsInCheckViaNeutralFallbackStrict(nextPieces, selfCheckOwner, rules, {
      ...baseSelfCheckOpts,
      neutralTurnOwner: Number(selfCheckOwner) === 0 ? 1 : 0,
    });
  }
  if (!selfChecked) {
    selfChecked = localIsInCheckViaNeutralFallbackStrict(nextPieces, selfCheckOwner, rules, {
      ...baseSelfCheckOpts,
      neutralTurnOwner: Number(selfCheckOwner),
    });
  }
  const neutralKings = (nextPieces || []).filter((p) => p && Number(p.owner) === -1 && localPieceIsKing(p));
  const hasImitatorSync = Array.isArray(moveLike?.imitator_plan) && moveLike.imitator_plan.length > 0;
  if (!selfChecked && (neutralKings.length > 0 || hasImitatorSync)) {
    selfChecked = localIsInCheckByDirectAttackFallback(nextPieces, selfCheckOwner, rules, {
      ...baseSelfCheckOpts,
    });
  }
  const enableExpensiveNeutralKingCaptureScan = false;
  if (
    !selfChecked &&
    enableExpensiveNeutralKingCaptureScan &&
    !skipNeutralSelfCheckLegalScan &&
    (neutralKings.length > 0 || hasImitatorSync)
  ) {
    selfChecked = localHasOpponentKingCaptureMoveByLegalScan(
      nextPieces,
      nextHands,
      selfCheckOwner,
      rules,
      lastMoveInfo,
      lastMoveStr,
      ctx
    );
  }
  return Boolean(selfChecked);
}

function localHasKTakeMakeKingCheckPath(pieces, attacker, kingPos, rules = {}, options = {}) {
  if (!rules?.k_take_make) return true;
  if (!attacker || !localInBoard(attacker.x, attacker.y)) return false;
  if (!kingPos || !localInBoard(kingPos.x, kingPos.y)) return false;
  const pieceMap = localPieceMapFromList(pieces);
  const typeAttrsOrCtx = options?.ctx || options?.typeAttrsOrCtx || null;
  const targets = localGenerateTargetsForPiece(pieces, attacker, rules, { mode: "move" });
  for (const t of Array.isArray(targets) ? targets : []) {
    if (!localInBoard(t?.x, t?.y)) continue;
    const firstTo = { x: Number(t.x), y: Number(t.y) };
    let captureAt = null;
    let capturedPiece = null;
    const directTarget = pieceMap.get(`${firstTo.x},${firstTo.y}`) || null;
    if (
      directTarget &&
      Number(directTarget.owner) !== Number(attacker.owner) &&
      localPieceIsKing(directTarget) &&
      Number(directTarget.x) === Number(kingPos.x) &&
      Number(directTarget.y) === Number(kingPos.y)
    ) {
      captureAt = { x: Number(directTarget.x), y: Number(directTarget.y) };
      capturedPiece = directTarget;
    } else {
      const locust = localLocustHurdleForMove(pieces, attacker, firstTo.x, firstTo.y, rules);
      const locustPiece = locust?.piece || null;
      if (
        locustPiece &&
        Number(locustPiece.owner) !== Number(attacker.owner) &&
        localPieceIsKing(locustPiece) &&
        Number(locustPiece.x) === Number(kingPos.x) &&
        Number(locustPiece.y) === Number(kingPos.y)
      ) {
        captureAt = { x: Number(locust.pos.x), y: Number(locust.pos.y) };
        capturedPiece = locustPiece;
      }
    }
    if (!captureAt || !capturedPiece) continue;
    const cont = localBuildTakeMakeContinuationSquares(
      pieces,
      attacker,
      firstTo,
      captureAt,
      capturedPiece,
      rules,
      {
        movingSource: { x: Number(attacker.x), y: Number(attacker.y) },
        typeAttrsOrCtx,
      }
    );
    if (cont.length > 0) return true;
  }
  return false;
}

function localGetCheckingPiecePositionsWithRules(pieces, owner, rules = {}, options = {}) {
  const kings = localSelectCheckTargetKings(pieces, owner);
  if (kings.length === 0) return [];
  const opp = Number(owner) === 0 ? 1 : 0;
  const optNeutralTurnOwner = Number(options?.neutralTurnOwner);
  const neutralTurnOwner =
    optNeutralTurnOwner === 0 || optNeutralTurnOwner === 1 ? optNeutralTurnOwner : Number(owner) === 0 ? 1 : 0;
  let repeat = { lastNameRepeat: null, lastNameBase: null };
  if (options && (localHasOwn(options, "lastMoveInfo") || localHasOwn(options, "lastMoveStr"))) {
    repeat = localRepeatRuleLastNamesFrom(options.lastMoveInfo, options.lastMoveStr);
  } else if (options?.ctx) {
    repeat = localRepeatRuleLastNamesFromContext(options.ctx);
  }
  const out = [];
  const seen = new Set();
  const ignoreTenjikuForKings = Boolean(options?.ignoreTenjikuForKings);
  const ignoreCaptureRepeatType = Boolean(options?.ignoreCaptureRepeatType);
  for (const k of kings) {
    for (const p of pieces || []) {
      if (!p) continue;
      const po = Number(p.owner);
      if (po !== opp && !(po === -1 && neutralTurnOwner === opp)) continue;
      if (rules?.cant_repeat_type && repeat.lastNameRepeat && p.name === repeat.lastNameRepeat) continue;
      if (!ignoreCaptureRepeatType && rules?.cant_capture_repeat_type && repeat.lastNameBase) {
        if (standardBaseName(p.name) === repeat.lastNameBase) continue;
      }
      if (rules?.patrol || rules?.lortap) {
        const supported = localIsSquareAttackedByWithRules(
          pieces,
          p.x,
          p.y,
          opp,
          rules,
          {
            excludePos: { x: p.x, y: p.y },
            ignoreAttackerFilters: true,
            repeatLastNames: null,
            neutralTurnOwner,
          }
        );
        if (rules?.patrol && !supported) continue;
        if (rules?.lortap && supported) continue;
      }
      if (
        !localPieceAttacksSquareWithRules(
          pieces,
          p,
          k.x,
          k.y,
          rules,
          { ...options, neutralTurnOwner, ignoreTenjiku: ignoreTenjikuForKings }
        )
      ) {
        continue;
      }
      if (localIsIsardamActive(rules) && !rules?.isardam_type_b) {
        // Isardam Type A: 玉取り後局面をシミュレーションで判定する。
        // 成って取ることで同種衝突を回避できるため、玉位置同種利きの早期除外はしない。
        if (
          !localIsIsardamKingCaptureLegal(
            pieces,
            p,
            { x: k.x, y: k.y },
            rules,
            options?.ctx || options?.typeAttrsOrCtx || null
          )
        ) {
          continue;
        }
      }
      if (rules?.k_take_make) {
        if (
          !localHasKTakeMakeKingCheckPath(
            pieces,
            p,
            { x: Number(k.x), y: Number(k.y) },
            rules,
            options
          )
        ) {
          continue;
        }
      }
      const key = `${p.x},${p.y}`;
      if (!seen.has(key)) {
        seen.add(key);
        out.push({ x: Number(p.x), y: Number(p.y) });
      }
    }
  }
  return out;
}

function localIsInCheck(pieces, owner) {
  return localIsInCheckWithRules(pieces, owner, {}, {});
}

function localBoolFromQueryParams(queryParams, key, fallback = false) {
  if (!queryParams || typeof queryParams.get !== "function") return fallback;
  const raw = queryParams.get(key);
  if (raw === null || raw === undefined || raw === "") return fallback;
  const v = String(raw).toLowerCase();
  return v === "1" || v === "true" || v === "yes" || v === "on";
}

function localCoordKeyXY(x, y) {
  return `${x},${y}`;
}

function localCoordFromKey(key) {
  const [xRaw, yRaw] = String(key || "").split(",");
  const x = Number.parseInt(xRaw, 10);
  const y = Number.parseInt(yRaw, 10);
  if (!localInBoard(x, y)) return null;
  return { x, y };
}

function localCoordSortAsc(a, b) {
  const ay = Number(a?.y || 0);
  const by = Number(b?.y || 0);
  if (ay !== by) return ay - by;
  const ax = Number(a?.x || 0);
  const bx = Number(b?.x || 0);
  return ax - bx;
}

function localCollectAttackMap(pieces, owner, kingOnly, rules = {}) {
  const map = new Map();
  for (const p of pieces || []) {
    if (!p || Number(p.owner) !== owner) continue;
    const isKing = localPieceIsKing(p);
    if (Boolean(kingOnly) !== isKing) continue;
    const fromKey = localCoordKeyXY(p.x, p.y);
    const targetSet = new Set();
    for (let ty = 0; ty < 9; ty += 1) {
      for (let tx = 0; tx < 9; tx += 1) {
        if (localPieceAttacksSquareWithRules(pieces, p, tx, ty, rules)) {
          targetSet.add(localCoordKeyXY(tx, ty));
        }
      }
    }
    if (targetSet.size > 0) {
      map.set(fromKey, {
        from: { x: p.x, y: p.y },
        targets: targetSet,
      });
    }
  }
  return map;
}

function localMergeAttackMaps(baseMap, addMap) {
  const out = new Map();
  for (const [k, v] of baseMap.entries()) {
    out.set(k, {
      from: { x: v.from.x, y: v.from.y },
      targets: new Set(v.targets),
    });
  }
  for (const [k, v] of addMap.entries()) {
    if (!out.has(k)) {
      out.set(k, {
        from: { x: v.from.x, y: v.from.y },
        targets: new Set(v.targets),
      });
      continue;
    }
    const cur = out.get(k);
    for (const tk of v.targets) cur.targets.add(tk);
  }
  return out;
}

function localAttackSquaresFromMap(attackMap) {
  const s = new Set();
  for (const v of attackMap.values()) {
    for (const tk of v.targets) s.add(tk);
  }
  const out = [];
  for (const k of s) {
    const c = localCoordFromKey(k);
    if (c) out.push(c);
  }
  out.sort(localCoordSortAsc);
  return out;
}

function localAllAttackSquaresByOwner(pieces, owner, rules = {}) {
  const s = new Set();
  for (const p of pieces || []) {
    if (!p || Number(p.owner) !== owner) continue;
    for (let ty = 0; ty < 9; ty += 1) {
      for (let tx = 0; tx < 9; tx += 1) {
        if (localPieceAttacksSquareWithRules(pieces, p, tx, ty, rules)) {
          s.add(localCoordKeyXY(tx, ty));
        }
      }
    }
  }
  const out = [];
  for (const k of s) {
    const c = localCoordFromKey(k);
    if (c) out.push(c);
  }
  out.sort(localCoordSortAsc);
  return out;
}

function localBuildAttackPathsForPiece(pieces, fromX, fromY, owner, targetSet, rules = {}) {
  const paths = new Map();
  const piece = localFindPieceInList(pieces, fromX, fromY);
  const moveName = piece ? localEffectiveMoveNameByPiece(pieces, piece, rules) : null;
  const moveNames = localIsFriendMoveName(moveName)
    ? Array.from(localBuildFriendMoveNameMap(pieces, rules).get(`${Number(fromX)},${Number(fromY)}`) || [])
    : [moveName || piece?.name || ""];
  const typeList = [];
  for (const mv of moveNames) {
    if (!mv || localIsFriendMoveName(mv)) continue;
    const spec = localPieceSpec(mv);
    if (!spec) continue;
    if (spec.type === "mixed") {
      for (const part of spec.parts || []) typeList.push(part);
    } else {
      typeList.push(spec);
    }
  }
  const pieceMap = localPieceMapFromList(pieces);
  const addPath = (x, y, chain) => {
    const key = localCoordKeyXY(x, y);
    if (!targetSet.has(key) || paths.has(key)) return;
    paths.set(
      key,
      [{ x: Number(fromX), y: Number(fromY) }].concat(
        (chain || []).map((c) => ({ x: Number(c.x), y: Number(c.y) }))
      )
    );
  };
  const moveDyOnly = (vec) => {
    const dx = Number(vec?.[0] || 0);
    const dy = Number(vec?.[1] || 0);
    return [dx, Number(owner) === 1 ? -dy : dy];
  };

  for (const part of typeList) {
    if (!part) continue;
    const vectors = Array.isArray(part.vectors) ? part.vectors : [];
    if (part.type === "step") {
      for (const vec of vectors) {
        const [dx, dy] = moveDyOnly(vec);
        const tx = Number(fromX) + dx;
        const ty = Number(fromY) + dy;
        if (!localInBoard(tx, ty)) continue;
        addPath(tx, ty, [{ x: tx, y: ty }]);
      }
      continue;
    }
    if (part.type === "slide") {
      for (const vec of vectors) {
        const [dx, dy] = moveDyOnly(vec);
        let cx = Number(fromX);
        let cy = Number(fromY);
        const chain = [];
        while (true) {
          cx += dx;
          cy += dy;
          if (!localInBoard(cx, cy)) break;
          const targetPiece = pieceMap.get(localCoordKeyXY(cx, cy)) || null;
          if (targetPiece && localIsOpaqueBarrierPiece(targetPiece)) break;
          chain.push({ x: cx, y: cy });
          addPath(cx, cy, chain);
          if (targetPiece && !localIsHolePiece(targetPiece)) break;
        }
      }
      continue;
    }
    if (part.type === "eagle" || part.type === "bent") {
      const bentAngle = part.type === "bent" ? Number(part?.angle || 90) : 90;
      for (const vec of vectors) {
        const [dx, dy] = moveDyOnly(vec);
        let hx = Number(fromX);
        let hy = Number(fromY);
        while (true) {
          hx += dx;
          hy += dy;
          if (!localInBoard(hx, hy)) break;
          const hurdle = pieceMap.get(localCoordKeyXY(hx, hy)) || null;
          if (!hurdle) continue;
          if (localIsStonePiece(hurdle)) break;
          if (localIsHolePiece(hurdle)) continue;
          const turns =
            part.type === "eagle"
              ? [
                  [-dy, dx],
                  [dy, -dx],
                ]
              : localBentTurnVectors(dx, dy, bentAngle);
          for (const [txv, tyv] of turns) {
            const tx = hx + Number(txv || 0);
            const ty = hy + Number(tyv || 0);
            if (!localInBoard(tx, ty)) continue;
            addPath(tx, ty, [
              { x: hx, y: hy },
              { x: tx, y: ty },
            ]);
          }
          break;
        }
      }
      continue;
    }
    if (part.type === "rose") {
      const vecCount = vectors.length;
      for (let startIdx = 0; startIdx < vecCount; startIdx += 1) {
        for (const turnDir of [1, -1]) {
          let cx = Number(fromX);
          let cy = Number(fromY);
          const chain = [];
          const visited = new Set([`${cx},${cy}`]);
          for (let stepI = 0; stepI < 256; stepI += 1) {
            const idx = (startIdx + turnDir * stepI + vecCount * 10) % vecCount;
            const [vxRaw, vyRaw] = moveDyOnly(vectors[idx]);
            const vx = Number(vxRaw || 0);
            const vy = Number(vyRaw || 0);
            const nx = cx + vx;
            const ny = cy + vy;
            if (!localInBoard(nx, ny)) break;
            const nkey = `${nx},${ny}`;
            chain.push({ x: nx, y: ny });
            addPath(nx, ny, chain);
            if (nx === Number(fromX) && ny === Number(fromY)) break;
            const targetPiece = pieceMap.get(localCoordKeyXY(nx, ny)) || null;
            if (targetPiece && localIsOpaqueBarrierPiece(targetPiece)) break;
            if (visited.has(nkey)) break;
            visited.add(nkey);
            cx = nx;
            cy = ny;
            if (targetPiece && !localIsHolePiece(targetPiece)) break;
          }
        }
      }
    }
  }

  const out = [];
  const targets = Array.from(targetSet)
    .map(localCoordFromKey)
    .filter((v) => !!v)
    .sort(localCoordSortAsc);
  for (const to of targets) {
    const key = localCoordKeyXY(to.x, to.y);
    const path = paths.get(key) || [
      { x: Number(fromX), y: Number(fromY) },
      { x: Number(to.x), y: Number(to.y) },
    ];
    out.push({
      from: { x: Number(fromX), y: Number(fromY) },
      to: { x: Number(to.x), y: Number(to.y) },
      path,
    });
  }
  return out;
}

function localAttackPathsFromMap(pieces, attackMap, rules = {}) {
  const out = [];
  const entries = Array.from(attackMap.values()).sort((a, b) => localCoordSortAsc(a.from, b.from));
  for (const ent of entries) {
    out.push(
      ...localBuildAttackPathsForPiece(
        pieces,
        Number(ent.from.x),
        Number(ent.from.y),
        localFindPieceInList(pieces, ent.from.x, ent.from.y)?.owner ?? 0,
        ent.targets || new Set(),
        rules
      )
    );
  }
  return out;
}

function localCanPromoteMove(piece, toY, orientationOwner = null) {
  if (!piece) return false;
  const pto = localPiecePromoteTo(piece);
  if (!pto) return false;
  const fromY = Number(piece.y);
  const owner =
    orientationOwner === 0 || orientationOwner === 1
      ? orientationOwner
      : localResolveNeutralOrientationOwner(piece, Number(piece.owner));
  const inZone = owner === 1 ? (y) => y >= 6 : (y) => y <= 2;
  return inZone(fromY) || inZone(toY);
}

function localHasDeadZoneRestriction(rules) {
  return !(
    Boolean(rules?.annan) ||
    Boolean(rules?.haimen) ||
    Boolean(rules?.tenkyo) ||
    Boolean(rules?.nekoneko)
  );
}

function localIsDeadZoneByRules(name, owner, y, rules) {
  if (Number(owner) === -1) {
    // 中立駒は、先後いずれかで行き所があるなら許容。
    const deadAsSente = localIsDeadZoneByRules(name, 0, y, rules);
    const deadAsGote = localIsDeadZoneByRules(name, 1, y, rules);
    return deadAsSente && deadAsGote;
  }
  const n = String(name || "");
  if (rules?.taimen || rules?.anpoku) {
    if (owner === 0) {
      return (n === "歩" || n === "香" || n === "桂") && y === 0;
    }
    return (n === "歩" || n === "香" || n === "桂") && y === 8;
  }
  if (owner === 0) {
    if ((n === "歩" || n === "香") && y === 0) return true;
    if (n === "桂" && y <= 1) return true;
  } else {
    if ((n === "歩" || n === "香") && y === 8) return true;
    if (n === "桂" && y >= 7) return true;
  }
  return false;
}

function localDropDeadSquare(name, owner, y, rules) {
  if (!localHasDeadZoneRestriction(rules)) return false;
  return localIsDeadZoneByRules(name, owner, y, rules);
}

function localWillAndernachTurn(piece, rules, captureLike) {
  if (!piece || localPieceIsKing(piece)) return false;
  const owner = Number(piece.owner);
  if (owner !== 0 && owner !== 1) return false;
  if (rules?.all_andernach) return true;
  if (rules?.andernach && captureLike) return true;
  if (rules?.anti_andernach && !captureLike) return true;
  return false;
}

function localHasFuOnFile(pieces, owner, x) {
  return (pieces || []).some(
    (p) => p && p.x === x && p.name === "歩" && (Number(p.owner) === owner || Number(p.owner) === -1)
  );
}

function localCandidateDistance(cand) {
  if (!cand) return 1;
  if (cand.kind === "drop") return 1;
  if (cand.kind !== "move") return 1;
  const fx = Number(cand.from?.x || 0);
  const fy = Number(cand.from?.y || 0);
  const tx = Number(cand.to?.x || 0);
  const ty = Number(cand.to?.y || 0);
  return Math.sqrt((tx - fx) ** 2 + (ty - fy) ** 2);
}

function localApplyMaxiMiniFilter(moves, rules, turn) {
  const src = Array.isArray(moves) ? moves : [];
  const applyMaxi = Boolean(rules?.maxi) && Number(turn) === 1;
  const applyMini = Boolean(rules?.mini) && Number(turn) === 1;
  if ((!applyMaxi && !applyMini) || src.length <= 0) return src;
  const scored = src.map((m) => ({ m, dist: localCandidateDistance(m) }));
  const target = applyMaxi
    ? Math.max(...scored.map((s) => s.dist))
    : Math.min(...scored.map((s) => s.dist));
  return scored
    .filter((s) => Math.abs(s.dist - target) <= 1e-9)
    .map((s) => s.m);
}

function localCandidateLastMoveInfo(cand) {
  if (!cand) return null;
  if (cand.kind === "move") {
    return {
      name: String(cand.name || ""),
      from: cand.from ? { x: cand.from.x, y: cand.from.y } : null,
      to: cand.to ? { x: cand.to.x, y: cand.to.y } : null,
      captured: Boolean(cand.capture),
    };
  }
  if (cand.kind === "drop") {
    return {
      name: String(cand.name || ""),
      from: null,
      to: cand.to ? { x: cand.to.x, y: cand.to.y } : null,
      captured: false,
    };
  }
  return null;
}

function localCandidateLandingSquare(cand, rules = {}) {
  if (!cand || cand.kind !== "move") return cand?.to || null;
  if (cand.messigny_swap) return cand.to || null;
  if (rules?.anti_circe && cand.capture && cand.rebirth && localInBoard(cand.rebirth.x, cand.rebirth.y)) {
    return { x: Number(cand.rebirth.x), y: Number(cand.rebirth.y) };
  }
  return cand.to || null;
}

function localHasLegalCaptureOnBoard(ctx, turn, rules = {}, options = {}) {
  if (!ctx?.state) return false;
  const currentNode = localHistoryCurrentNode(ctx);
  const prevPosKey = localPreviousPositionKeyFromContext(ctx);
  const simState = cloneJson(ctx.state);
  simState.turn = Number(turn);
  const simCtx = localBuildAnalysisContext(
    simState,
    currentNode?.last_move_info || null,
    String(currentNode?.move_str || ""),
    prevPosKey,
    ctx
  );
  localComputeLegalAll(simCtx, {
    analysisNoUchifu: true,
    analysisIgnoreTorikin: Boolean(options?.analysisIgnoreTorikin),
    filterCheckGreedy: false,
    skipGlobalRuleFilter: true,
  });
  for (const m of simCtx?.legal?.moves || []) {
    if (!m || m.kind !== "move") continue;
    if (Number(m.owner) !== Number(turn)) continue;
    if (Boolean(m.capture)) return true;
  }
  return false;
}

function localHasLegalDropWithRuleFiltersFromComputed(ctx, owner, options = {}) {
  if (!ctx?.state) return false;
  const turn = Number(ctx.state.turn || 0);
  const rules = ctx.state.rules && typeof ctx.state.rules === "object" ? ctx.state.rules : {};
  const drops = Array.isArray(ctx?.legal?.moves)
    ? ctx.legal.moves.filter((m) => m && m.kind === "drop" && Number(m.owner) === Number(owner))
    : [];
  if (drops.length <= 0) return false;
  const filtered = localFilterMovesByRules(ctx, drops, turn, rules, {
    checkGreedy: true,
    analysisIgnoreTorikin: Boolean(options?.analysisIgnoreTorikin),
  });
  return filtered.length > 0;
}

function localHasMovesWithNonCheckAllowed(ctx, owner, options = {}) {
  if (!ctx?.state) return false;
  if (Number(owner) !== 0) return false;
  if (ctx.state?.rules?.allow_sente_non_check) return false;

  const currentNode = localHistoryCurrentNode(ctx);
  const prevPosKey = localPreviousPositionKeyFromContext(ctx);
  const simState = cloneJson(ctx.state);
  simState.turn = Number(owner);
  simState.rules = {
    ...(simState.rules || {}),
    allow_sente_non_check: true,
  };
  const simCtx = localBuildAnalysisContext(
    simState,
    currentNode?.last_move_info || null,
    String(currentNode?.move_str || ""),
    prevPosKey,
    ctx
  );
  localComputeLegalAll(simCtx, {
    analysisNoUchifu: Boolean(options?.analysisNoUchifu),
    analysisIgnoreTorikin: Boolean(options?.analysisIgnoreTorikin),
    skipNoCheckStatusProbe: true,
    skipGlobalRuleFilter: true,
  });
  const allInShogi = Boolean(simCtx.state?.rules?.all_in_shogi);
  const pieceOwners = allInShogi ? new Set([0, 1]) : new Set([Number(owner)]);
  const handOwners = allInShogi ? [0, 1] : [Number(owner)];
  const boardMoves = Array.isArray(simCtx?.legal?.moves)
    ? simCtx.legal.moves.filter((m) => m && m.kind === "move" && pieceOwners.has(Number(m.owner)))
    : [];
  if (boardMoves.length > 0) return true;
  for (const handOwner of handOwners) {
    if (localHasLegalDropWithRuleFiltersFromComputed(simCtx, handOwner, options)) {
      return true;
    }
  }
  return false;
}

function localIsImmediateStalemateForOwnerAfterMove(
  nextPieces,
  nextHands,
  owner,
  rules = {},
  lastMoveInfo = null,
  lastMoveStr = "",
  ctx = null,
  options = {}
) {
  const side = Number(owner);
  if (side !== 0 && side !== 1) return false;
  if (
    localIsInCheckWithRules(nextPieces, side, rules, {
      lastMoveInfo,
      lastMoveStr,
      neutralTurnOwner: 1 - side,
      ctx,
    })
  ) {
    return false;
  }
  const simState = {
    mode: "play",
    turn: side,
    board: { width: 9, height: 9, pieces: cloneJson(nextPieces || []) },
    hands: localCloneHands(nextHands),
    rules: cloneJson(rules || {}),
  };
  const allInPrevKey = typeof options?.allInPrevKey === "string" ? options.allInPrevKey : null;
  const simCtx = localBuildAnalysisContext(
    simState,
    lastMoveInfo || null,
    String(lastMoveStr || ""),
    allInPrevKey,
    ctx
  );
  localComputeLegalAll(simCtx, {
    analysisNoUchifu: Boolean(options?.analysisNoUchifu),
    analysisIgnoreTorikin: Boolean(options?.analysisIgnoreTorikin),
    skipStatusEvaluation: true,
    skipNoCheckStatusProbe: true,
    skipSort: true,
  });
  const legal = Array.isArray(simCtx?.legal?.moves) ? simCtx.legal.moves : [];
  return legal.length === 0;
}

function localImitatorMoveRejectedByRuntimeSelfCheckProbe(ctx, mv) {
  if (!ctx || !mv || mv.kind !== "move") return false;
  if (!Array.isArray(mv?.imitator_plan) || mv.imitator_plan.length <= 0) return false;
  if (!mv?.from || !mv?.to) return false;
  try {
    const currentNode = localHistoryCurrentNode(ctx);
    const prevPosKey = localPreviousPositionKeyFromContext(ctx);
    const simState = {
      mode: "play",
      turn: Number(ctx?.state?.turn || 0),
      board: {
        width: 9,
        height: 9,
        pieces: cloneJson(ctx?.state?.board?.pieces || []),
      },
      hands: localCloneHands(ctx?.state?.hands),
      rules: cloneJson(ctx?.state?.rules || {}),
    };
    const simCtx = localBuildAnalysisContext(
      simState,
      currentNode?.last_move_info || null,
      String(currentNode?.move_str || ""),
      prevPosKey,
      ctx
    );
    const body = {
      expected_revision: Number(simCtx?.revision || 0),
      from: { x: Number(mv.from.x), y: Number(mv.from.y) },
      to: { x: Number(mv.to.x), y: Number(mv.to.y) },
      promote: Boolean(mv.promote),
      no_touch: true,
      skip_state_backup: true,
      skip_legal_precompute: true,
      prevalidated_move: mv,
    };
    if (mv?.rebirth && localInBoard(Number(mv.rebirth.x), Number(mv.rebirth.y))) {
      body.rebirth = { x: Number(mv.rebirth.x), y: Number(mv.rebirth.y) };
    }
    if (typeof mv?.messigny_swap === "boolean") {
      body.messigny_swap = Boolean(mv.messigny_swap);
    }
    localApplyMoveCore(simCtx, body);
    return false;
  } catch (e) {
    const code = String(e?.apiCode || "");
    const msg = String(e?.apiMessage || e?.message || "");
    return code === "INVALID_MOVE" && msg.includes("move leaves own king in check");
  }
}

function localRuntimeSimulateMoveState(ctx, pieces, hands, turn, rules, mv) {
  if (!mv || mv.kind !== "move") return null;
  if (!mv?.from || !mv?.to) return null;
  try {
    const currentNode = localHistoryCurrentNode(ctx);
    const prevPosKey = localPreviousPositionKeyFromContext(ctx);
    const simState = {
      mode: "play",
      turn: Number(turn),
      board: {
        width: 9,
        height: 9,
        pieces: cloneJson(pieces || []),
      },
      hands: localCloneHands(hands),
      rules: cloneJson(rules || {}),
    };
    const simCtx = localBuildAnalysisContext(
      simState,
      currentNode?.last_move_info || null,
      String(currentNode?.move_str || ""),
      prevPosKey,
      ctx
    );
    const body = {
      expected_revision: Number(simCtx?.revision || 0),
      from: { x: Number(mv.from.x), y: Number(mv.from.y) },
      to: { x: Number(mv.to.x), y: Number(mv.to.y) },
      promote: Boolean(mv.promote),
      no_touch: true,
      skip_state_backup: true,
      skip_legal_precompute: true,
      prevalidated_move: mv,
    };
    if (mv?.rebirth && localInBoard(Number(mv.rebirth.x), Number(mv.rebirth.y))) {
      body.rebirth = { x: Number(mv.rebirth.x), y: Number(mv.rebirth.y) };
    }
    if (typeof mv?.messigny_swap === "boolean") {
      body.messigny_swap = Boolean(mv.messigny_swap);
    }
    localApplyMoveCore(simCtx, body);
    return simCtx?.state && typeof simCtx.state === "object" ? simCtx.state : null;
  } catch (_e) {
    return null;
  }
}

function localSenteCheckObligationSatisfiedByRuntime(
  ctx,
  pieces,
  hands,
  turn,
  rules,
  mv,
  options = {}
) {
  if (!mv) return false;
  const hasImitatorSync = Array.isArray(mv?.imitator_plan) && mv.imitator_plan.length > 0;
  const simState = hasImitatorSync
    ? localRuntimeSimulateMoveState(ctx, pieces, hands, turn, rules, mv) ||
      localSimulateStateAfterCandidate(pieces, hands, turn, mv, rules, ctx)
    : localSimulateStateAfterCandidate(pieces, hands, turn, mv, rules, ctx);
  if (!simState) return false;
  const nextPieces = simState.board?.pieces;
  const nextHands = simState.hands;
  if (!Array.isArray(nextPieces)) return false;
  const hasImitatorOnBoard = nextPieces.some((p) => p && localIsImitatorPiece(p));
  const simInfo = localCandidateLastMoveInfo(mv);
  const simMoveStr = String(mv?.notation || "");
  const defender = Number(turn) === 0 ? 1 : 0;

  if (localMoveCapturesKingFromPosition(pieces, mv, rules)) return true;

  const givesCheck = localIsInCheckWithRules(nextPieces, defender, rules, {
    lastMoveInfo: simInfo,
    lastMoveStr: simMoveStr,
    ignoreCaptureRepeatType: true,
    neutralTurnOwner: Number(turn),
    ctx,
  });

  // Imitator 合成手では高速王手判定が過検出/過小検出しやすいため、
  // 玉取り可能性の合法手走査を優先して王手成立を判定する。
  const givesCheckByLegal = localHasOpponentKingCaptureMoveByLegalScan(
    nextPieces,
    nextHands,
    defender,
    rules,
    simInfo,
    simMoveStr,
    ctx
  );
  if (hasImitatorOnBoard) {
    // Imitator がいても、直接王手判定で成立している手は落とさない。
    if (givesCheck || givesCheckByLegal) return true;
  } else {
    if (givesCheck || givesCheckByLegal) return true;
  }

  if (Boolean(options?.allowStalemateFinishWithoutCheck)) {
    return localIsImmediateStalemateForOwnerAfterMove(
      nextPieces,
      nextHands,
      defender,
      rules,
      simInfo,
      simMoveStr,
      ctx,
      {
        allInPrevKey: typeof options?.allInPrevKey === "string" ? options.allInPrevKey : null,
        analysisNoUchifu: Boolean(options?.analysisNoUchifu),
        analysisIgnoreTorikin: Boolean(options?.analysisIgnoreTorikin),
      }
    );
  }
  return false;
}

function localFilterMovesByRules(ctx, candidates, turn, rules, options = {}) {
  let working = Array.isArray(candidates) ? candidates.slice() : [];
  if (working.length === 0) return [];
  const checkGreedy = options?.checkGreedy !== false;
  const analysisIgnoreTorikin = Boolean(options?.analysisIgnoreTorikin);
  const piecesNow = Array.isArray(ctx?.state?.board?.pieces) ? ctx.state.board.pieces : [];
  const isCaptureByBoard = (m) => {
    if (!m) return false;
    if (m.kind !== "move") return false;
    const toPiece = localFindPieceInList(piecesNow, Number(m?.to?.x), Number(m?.to?.y));
    return Boolean(toPiece);
  };
  const isCaptureLike = (m) => {
    if (!m || m.kind !== "move") return false;
    if (Boolean(m.capture)) return true;
    if (m?.take_make?.capture_at && localInBoard(Number(m.take_make.capture_at.x), Number(m.take_make.capture_at.y))) {
      return true;
    }
    if (m?.locust_capture && localInBoard(Number(m.locust_capture.x), Number(m.locust_capture.y))) {
      return true;
    }
    return isCaptureByBoard(m);
  };

  if (rules?.cant_repeat_type || rules?.cant_capture_repeat_type) {
    const repeat = localRepeatRuleLastNamesFromContext(ctx);
    const captureBaseByOwner = new Map();
    const resolveOwnerForMove = (m) => {
      let moveOwner = Number.parseInt(m?.owner, 10);
      if (Number.isFinite(moveOwner)) return moveOwner;
      if (m?.kind === "move" && m?.from) {
        const p = localFindPieceInList(piecesNow, Number(m.from.x), Number(m.from.y));
        if (p && Number.isFinite(Number(p.owner))) return Number(p.owner);
      }
      return Number(turn);
    };
    const captureBaseForOwner = (owner) => {
      const key = Number(owner);
      if (captureBaseByOwner.has(key)) return captureBaseByOwner.get(key);
      const base = localLastCaptureBaseForOwnerFromContext(ctx, key);
      captureBaseByOwner.set(key, base || null);
      return base || null;
    };
    working = working.filter((m) => {
      const pname = String(m?.name || "");
      const isCap = isCaptureByBoard(m);
      if (rules?.cant_repeat_type && repeat.lastNameRepeat && pname === repeat.lastNameRepeat) {
        return false;
      }
      if (rules?.cant_capture_repeat_type && isCap) {
        const moveOwner = resolveOwnerForMove(m);
        const ownerBase = captureBaseForOwner(moveOwner);
        if (ownerBase && standardBaseName(pname) === ownerBase) return false;
      }
      return true;
    });
  }

  if (rules?.attacker_no_capture && Number(turn) === 0) {
    working = working.filter((m) => !isCaptureLike(m));
  }

  if (rules?.greedy || rules?.abstinence) {
    const captures = working.filter((m) => isCaptureByBoard(m));
    const nonCaptures = working.filter((m) => !isCaptureByBoard(m));
    if (rules?.greedy) {
      if (captures.length > 0) {
        working = captures;
      } else if (
        checkGreedy &&
        (() => {
          const cacheKey = `_hasLegalCaptureOnBoard_t${Number(turn)}_${analysisIgnoreTorikin ? 1 : 0}`;
          if (Object.prototype.hasOwnProperty.call(options, cacheKey)) {
            return Boolean(options[cacheKey]);
          }
          const v = localHasLegalCaptureOnBoard(ctx, turn, rules, { analysisIgnoreTorikin });
          options[cacheKey] = Boolean(v);
          return Boolean(v);
        })()
      ) {
        working = [];
      } else {
        working = nonCaptures;
      }
    } else if (rules?.abstinence && nonCaptures.length > 0) {
      working = nonCaptures;
    }
  }

  const applyMaxi = Boolean(rules?.maxi) && turn === 1;
  const applyMini = Boolean(rules?.mini) && turn === 1;
  if ((applyMaxi || applyMini) && working.length > 0) {
    const scored = working.map((m) => ({ m, dist: localCandidateDistance(m) }));
    const target = applyMaxi
      ? Math.max(...scored.map((s) => s.dist))
      : Math.min(...scored.map((s) => s.dist));
    working = scored
      .filter((s) => Math.abs(s.dist - target) <= 1e-9)
      .map((s) => s.m);
  }

  return working;
}

function localFilterBoardMovesByPiece(ctx, candidates, turn, rules, options = {}) {
  const moves = Array.isArray(candidates) ? candidates : [];
  if (moves.length <= 0) return [];
  // マキシ/ミニは「駒ごと」ではなく「手番全体の候補」から距離最長/最短を選ぶ。
  if (rules?.maxi || rules?.mini) {
    return localFilterMovesByRules(ctx, moves, turn, rules, options);
  }
  const grouped = new Map();
  for (const mv of moves) {
    if (!mv || mv.kind !== "move" || !mv.from) continue;
    const key = `${Number(mv.from.x)},${Number(mv.from.y)}`;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(mv);
  }
  const out = [];
  for (const group of grouped.values()) {
    out.push(...localFilterMovesByRules(ctx, group, turn, rules, options));
  }
  return out;
}

function localComputeLegalAll(ctx, options = {}) {
  const hasDefaultOptions = !options || Object.keys(options).length === 0;
  const canUseCache =
    hasDefaultOptions &&
    Boolean(ctx) &&
    typeof ctx.sessionId === "string" &&
    Number.isFinite(Number(ctx.revision)) &&
    Number(ctx.legal_cache_revision) === Number(ctx.revision) &&
    ctx.legal &&
    Array.isArray(ctx.legal.moves) &&
    ctx.legal.status &&
    typeof ctx.legal.status === "object";
  if (canUseCache) {
    return ctx.legal;
  }
  if (!ctx?.state || ctx.state.mode !== "play") {
    ctx.legal = localEmptyLegal();
    if (hasDefaultOptions && ctx && Number.isFinite(Number(ctx.revision))) {
      ctx.legal_cache_revision = Number(ctx.revision);
    } else if (ctx) {
      ctx.legal_cache_revision = -1;
    }
    return ctx.legal;
  }
  const currentNode = localHistoryCurrentNode(ctx);
  const currentMoveText = String(currentNode?.move_str || "").trim();
  if (localIsTerminalResultText(currentMoveText) && currentNode?.parent_id) {
    ctx.legal = { moves: [], status: { kind: "terminal", text: currentMoveText } };
    if (hasDefaultOptions && ctx && Number.isFinite(Number(ctx.revision))) {
      ctx.legal_cache_revision = Number(ctx.revision);
    } else if (ctx) {
      ctx.legal_cache_revision = -1;
    }
    return ctx.legal;
  }
  const turn = Number(ctx.state.turn || 0);
  const rules = ctx.state.rules && typeof ctx.state.rules === "object" ? ctx.state.rules : {};
  const analysisNoUchifu = Boolean(options?.analysisNoUchifu);
  const analysisIgnoreTorikin = Boolean(options?.analysisIgnoreTorikin);
  const filterCheckGreedy = options?.filterCheckGreedy !== false;
  const skipNoCheckStatusProbe = Boolean(options?.skipNoCheckStatusProbe);
  const skipGlobalRuleFilter = Boolean(options?.skipGlobalRuleFilter);
  const skipStatusEvaluation = Boolean(options?.skipStatusEvaluation);
  const skipSort = Boolean(options?.skipSort);
  const skipNeutralSelfCheckLegalScan = Boolean(options?.skipNeutralSelfCheckLegalScan);
  const skipSenteRuntimeObligationFilter = Boolean(options?.skipSenteRuntimeObligationFilter);
  const reuseAnnotatedStatePieces = Boolean(options?.reuseAnnotatedStatePieces);
  const recursionDepthRaw = Number.parseInt(options?.uchifuRecursionDepth, 10);
  const recursionMaxRaw = Number.parseInt(options?.uchifuRecursionMax, 10);
  const uchifuRecursionDepth = Number.isFinite(recursionDepthRaw) ? Math.max(0, recursionDepthRaw) : 0;
  const uchifuRecursionMax = Number.isFinite(recursionMaxRaw) ? Math.max(0, recursionMaxRaw) : 3;
  const rawTargetMoveHint = options?.targetMoveHint && typeof options.targetMoveHint === "object" ? options.targetMoveHint : null;
  const targetMoveHint = rawTargetMoveHint
    ? {
        kind: String(rawTargetMoveHint.kind || ""),
        owner: Number(rawTargetMoveHint.owner),
        name: rawTargetMoveHint.name == null ? "" : String(rawTargetMoveHint.name),
        from: rawTargetMoveHint.from
          ? { x: Number(rawTargetMoveHint.from.x), y: Number(rawTargetMoveHint.from.y) }
          : null,
        to: rawTargetMoveHint.to
          ? { x: Number(rawTargetMoveHint.to.x), y: Number(rawTargetMoveHint.to.y) }
          : null,
        promote:
          typeof rawTargetMoveHint.promote === "boolean" ? Boolean(rawTargetMoveHint.promote) : null,
      }
    : null;
  const hasTargetMoveHint =
    Boolean(targetMoveHint) && (targetMoveHint.kind === "move" || targetMoveHint.kind === "drop");
  const allowSelfCheck = Boolean(rules.allow_check_on_self);
  const allowSenteNonCheck = Boolean(rules.allow_sente_non_check);
  const objective = String(rules.objective || "詰").trim() || "詰";
  const allowStalemateFinishWithoutCheck = objective === "ステイルメイト";
  const allowDoubleFu = Boolean(rules.allow_double_fu);
  const uchifuMode = localGetUchifuModeFromRules(rules);
  const uchifuEnabled = uchifuMode !== "off";

  const pieces = reuseAnnotatedStatePieces
    ? Array.isArray(ctx.state?.board?.pieces)
      ? ctx.state.board.pieces
      : []
    : Array.isArray(ctx.state?.board?.pieces)
      ? ctx.state.board.pieces.map((p) =>
          localAnnotatePieceEffectiveAttrs(
            {
              ...p,
              attrs: localCloneRawPieceAttrs(p?.attrs),
            },
            ctx
          )
        )
      : [];
  if (reuseAnnotatedStatePieces) {
    for (const p of pieces) {
      if (!p || typeof p !== "object") continue;
      if (!p.effective_attrs || typeof p.effective_attrs !== "object") {
        localAnnotatePieceEffectiveAttrs(p, ctx);
      }
    }
  }
  const hands = localCloneHands(ctx.state?.hands);
  let currentPositionKeyNoTurnCache = null;
  const getCurrentPositionKeyNoTurn = () => {
    if (currentPositionKeyNoTurnCache === null) {
      currentPositionKeyNoTurnCache = localPositionKeyFromPiecesHands(pieces, hands, false, 0);
    }
    return currentPositionKeyNoTurnCache;
  };
  let previousPositionKeyNoTurnCache = null;
  const getPreviousPositionKeyNoTurn = () => {
    if (previousPositionKeyNoTurnCache === null) {
      previousPositionKeyNoTurnCache = localPreviousPositionKeyFromContext(ctx);
    }
    return previousPositionKeyNoTurnCache;
  };
  const pieceMap = localPieceMapFromList(pieces);
  const cands = [];
  const allInShogi = Boolean(rules.all_in_shogi);
  const pieceOwners = allInShogi ? new Set([0, 1, -1]) : new Set([turn, -1]);

  for (const p of pieces) {
    if (!p || !pieceOwners.has(Number(p.owner))) continue;
    const pieceOwner = Number(p.owner);
    const moveOwner = pieceOwner === -1 ? turn : pieceOwner;
    if (localSkipBoardMoveGenerationForPiece(p)) continue;
    if (hasTargetMoveHint && targetMoveHint.kind === "drop") continue;
    if (hasTargetMoveHint && targetMoveHint.kind === "move") {
      if (Number.isFinite(targetMoveHint.owner) && Number(moveOwner) !== Number(targetMoveHint.owner)) continue;
      if (targetMoveHint.name && String(p.name || "") !== targetMoveHint.name) continue;
      if (
        targetMoveHint.from &&
        (Number(p.x) !== Number(targetMoveHint.from.x) || Number(p.y) !== Number(targetMoveHint.from.y))
      ) {
        continue;
      }
    }
    const normalTargets = localGenerateTargetsForPiece(pieces, p, rules, {
      mode: "move",
      orientationOwner: moveOwner,
      neutralTurnOwner: moveOwner,
    });
    const normalTargetKeySet = new Set(normalTargets.map((t) => `${t.x},${t.y}`));
    const mergedTargets = [];
    const mergedKeys = new Set();
    for (const t of normalTargets) {
      const key = `${t.x},${t.y}`;
      if (mergedKeys.has(key)) continue;
      mergedKeys.add(key);
      mergedTargets.push({ x: t.x, y: t.y });
    }
    if (rules?.messigny) {
      for (const t of localGetMessignySwapTargets(pieces, p, rules)) {
        const key = `${t.x},${t.y}`;
        if (mergedKeys.has(key)) continue;
        mergedKeys.add(key);
        mergedTargets.push({ x: t.x, y: t.y });
      }
    }

    for (const t of mergedTargets) {
      if (hasTargetMoveHint && targetMoveHint.kind === "move" && targetMoveHint.to) {
        if (Number(t.x) !== Number(targetMoveHint.to.x) || Number(t.y) !== Number(targetMoveHint.to.y)) {
          // Take&Make は「1段目(step_to) -> 2段目(final to)」で終点が決まるため、
          // ここで t(=1段目候補) と final to を直接比較して弾くと取りこぼす。
          if (!localIsTakeMakeActive(rules)) continue;
        }
      }
      const target = pieceMap.get(`${t.x},${t.y}`) || null;
      const isSwapTarget = localIsMessignySwapTarget(pieces, p, t.x, t.y, rules);
      const targetKey = `${t.x},${t.y}`;
      const normalReachable = normalTargetKeySet.has(targetKey);
      const swapModes = isSwapTarget ? (normalReachable ? [true, false] : [true]) : [false];
      for (const isSwap of swapModes) {
      const swapSourcesExtra = isSwap ? new Set([`${t.x},${t.y}`]) : null;
      const imitatorPlan = localCalcImitatorSyncPlan(
        pieces,
        p.x,
        p.y,
        t.x,
        t.y,
        { isDrop: false, movingSourcesExtra: swapSourcesExtra }
      );
      if (imitatorPlan === null) continue;
      const imitatorSuffix = localImitatorSuffixFromPlan(imitatorPlan);
      const effectiveTarget = localImitatorPlanUsesSourceSquare(imitatorPlan, t.x, t.y) ? null : target;
      const locustCapture = !isSwap ? localLocustHurdleForMove(pieces, p, t.x, t.y, rules) : null;
      const promoteable = !isSwap && localCanPromoteMove(p, t.y, moveOwner);
      const capturedForMove =
        !isSwap &&
        effectiveTarget &&
        !localIsFriendlyPieceForMove(p, Number(effectiveTarget.owner), moveOwner)
          ? effectiveTarget
          : !isSwap &&
              locustCapture &&
              locustCapture.piece &&
              !localIsFriendlyPieceForMove(p, Number(locustCapture.piece.owner), moveOwner)
            ? locustCapture.piece
            : null;
      const captureLikeForAndernach =
        !isSwap && Boolean(capturedForMove);
      const andernachTurnsOnMove = localWillAndernachTurn(p, rules, captureLikeForAndernach);
      const takeMakeEnabled = localIsTakeMakeActive(rules);
      const deadZoneTargetY =
        rules?.rifle && captureLikeForAndernach ? Number(p.y) : Number(t.y);
      const validUnpromoted =
        isSwap ||
        !(
          localHasDeadZoneRestriction(rules) &&
          localIsDeadZoneByRules(p.name, Number(moveOwner), deadZoneTargetY, rules) &&
          !andernachTurnsOnMove
        );
      const promoteFlags = [];
      if (isSwap) {
        promoteFlags.push(false);
      } else {
        if (validUnpromoted) promoteFlags.push(false);
        if (promoteable) promoteFlags.push(true);
      }
      if (!promoteFlags.length && !(takeMakeEnabled && captureLikeForAndernach)) continue;
      const effectivePromoteFlags =
        hasTargetMoveHint &&
        targetMoveHint.kind === "move" &&
        typeof targetMoveHint.promote === "boolean"
          ? promoteFlags.filter((pf) => Boolean(pf) === Boolean(targetMoveHint.promote))
          : promoteFlags;
      if (!effectivePromoteFlags.length && !(takeMakeEnabled && captureLikeForAndernach)) continue;

      let rebirthCandidates = [null];
      if (
        !isSwap &&
        effectiveTarget &&
        !localIsFriendlyPieceForMove(p, Number(effectiveTarget.owner), moveOwner) &&
        (rules?.circe || rules?.anti_circe)
      ) {
        const pName = rules?.circe ? effectiveTarget.name : p.name;
        const pOwner = rules?.circe ? Number(effectiveTarget.owner) : Number(p.owner);
        const movingPiecePos = { x: p.x, y: p.y };
        const rb = localGetCirceRebirthCandidates(
          pieces,
          pName,
          pOwner,
          { x: t.x, y: t.y },
          movingPiecePos,
          rules
        );
        if (rb.length > 0) rebirthCandidates = rb;
      }

      const captureAt =
        !isSwap && effectiveTarget && !localIsFriendlyPieceForMove(p, Number(effectiveTarget.owner), moveOwner)
          ? { x: Number(t.x), y: Number(t.y) }
          : !isSwap &&
              locustCapture &&
              locustCapture.piece &&
              !localIsFriendlyPieceForMove(p, Number(locustCapture.piece.owner), moveOwner)
            ? { x: Number(locustCapture.pos.x), y: Number(locustCapture.pos.y) }
            : null;
      const capturedIsKing = Boolean(capturedForMove && localPieceIsKing(capturedForMove));
      const capturedMoveName = capturedForMove
        ? String(localEffectiveMoveNameByPiece(pieces, capturedForMove, rules) || capturedForMove.name || "")
        : "";

      if (takeMakeEnabled && captureLikeForAndernach && capturedForMove && !(capturedIsKing && !rules?.k_take_make)) {
        const firstTo = { x: Number(t.x), y: Number(t.y) };
        if (!captureAt) continue;
        const makeTargets = localBuildTakeMakeContinuationSquares(
          pieces,
          p,
          firstTo,
          captureAt,
          capturedForMove,
          rules,
          {
            movingSource: { x: Number(p.x), y: Number(p.y) },
            capturedMoveName,
            typeAttrsOrCtx: ctx,
          }
        );
        if (makeTargets.length <= 0) continue;
        for (const makeTo of makeTargets) {
          const canStayUnpromoted =
            !localHasDeadZoneRestriction(rules) ||
            !localIsDeadZoneByRules(p.name, Number(p.owner), Number(makeTo.y), rules) ||
            andernachTurnsOnMove;
          const canPromoteTakeMake =
            localCanPromoteMove(p, Number(t.y), moveOwner) || localCanPromoteMove(p, Number(makeTo.y), moveOwner);
          const takePromoteFlags = [];
          if (canStayUnpromoted) takePromoteFlags.push(false);
          if (canPromoteTakeMake) takePromoteFlags.push(true);
          const effectiveTakePromoteFlags =
            hasTargetMoveHint &&
            targetMoveHint.kind === "move" &&
            typeof targetMoveHint.promote === "boolean"
              ? takePromoteFlags.filter((pf) => Boolean(pf) === Boolean(targetMoveHint.promote))
              : takePromoteFlags;
          for (const promote of effectiveTakePromoteFlags) {
            let notation = localMakeTakeMakeNotation(
              ctx,
              Number(moveOwner),
              p.name,
              Number(p.x),
              Number(p.y),
              Number(firstTo.x),
              Number(firstTo.y),
              Number(makeTo.x),
              Number(makeTo.y),
              Boolean(promote),
              { neutralPiece: pieceOwner === -1, pieceOwner }
            );
            if (imitatorSuffix) notation += imitatorSuffix;
            cands.push({
              kind: "move",
              owner: Number(moveOwner),
              piece_owner: pieceOwner,
              name: p.name,
              neutral_piece: pieceOwner === -1,
              from: { x: p.x, y: p.y },
              to: { x: Number(makeTo.x), y: Number(makeTo.y) },
              promote,
              messigny_swap: false,
              capture: true,
              locust_capture: locustCapture ? { x: locustCapture.pos.x, y: locustCapture.pos.y } : null,
              imitator_plan: cloneJson(imitatorPlan),
              rebirth: null,
              take_make: {
                step_to: firstTo,
                capture_at: { x: captureAt.x, y: captureAt.y },
                captured_name: String(capturedForMove.name || ""),
                captured_owner: Number(capturedForMove.owner),
                captured_is_king: capturedIsKing,
                captured_move_name: capturedMoveName,
              },
              notation,
            });
          }
        }
        continue;
      }

      for (const promote of effectivePromoteFlags) {
        for (const rb of rebirthCandidates) {
          const isPwcSwapNotation =
            Boolean(capturedForMove) &&
            localPwcWillSwapCapturedPiece(
              pieces,
              capturedForMove,
              p.x,
              p.y,
              t.x,
              t.y,
              locustCapture ? { x: locustCapture.pos.x, y: locustCapture.pos.y } : null,
              rules
            );
          let notation = localMakeMoveNotation(
              ctx,
              Number(moveOwner),
              p.name,
              t.x,
              t.y,
              promote,
              false,
              p.x,
              p.y,
              {
                suppressRelative: isPwcSwapNotation,
                neutralPiece: pieceOwner === -1,
                pieceOwner,
                messignySwap: isSwap,
                locustCapture: locustCapture ? { x: Number(locustCapture.pos.x), y: Number(locustCapture.pos.y) } : null,
              }
            );
          if (isSwap) {
            notation += localMessignySwapNotationSuffix(
              ctx,
              Number(target?.owner),
              p.x,
              p.y,
              target?.name || p.name
            );
          }
          if (imitatorSuffix) notation += imitatorSuffix;
          if (isPwcSwapNotation && capturedForMove) {
            notation += localPwcSwapNotationSuffix(ctx, Number(capturedForMove.owner), p.x, p.y, capturedForMove, true);
          }
          if (rules?.rifle && captureLikeForAndernach) {
            const promotedName = promote ? localPiecePromoteTo(p) || p.name : p.name;
            notation += localRifleReturnNotationSuffix(p.x, p.y, promotedName, false, Number(p.owner), ctx);
          }
          if (rb) {
            let rbName = effectiveTarget ? effectiveTarget.name : p.name;
            let rbOwner = null;
            if (rules?.circe && effectiveTarget) {
              // キルケでは取られた駒は生駒で復活する（成駒は成る前の駒名で表記）。
              rbName = standardBaseName(effectiveTarget.name);
              rbOwner = Number(effectiveTarget.owner);
            } else if (rules?.anti_circe) {
              rbName = promote ? localPiecePromoteTo(p) || p.name : p.name;
              rbOwner = Number(moveOwner);
            }
            notation += localRebirthNotationSuffix(ctx, rbOwner, rb.x, rb.y, rbName);
          }
            cands.push({
              kind: "move",
              owner: Number(moveOwner),
              piece_owner: pieceOwner,
              name: p.name,
            neutral_piece: pieceOwner === -1,
            from: { x: p.x, y: p.y },
            to: { x: t.x, y: t.y },
            promote,
            messigny_swap: isSwap,
            capture:
              !isSwap &&
              Boolean(
                (effectiveTarget && !localIsFriendlyPieceForMove(p, Number(effectiveTarget.owner), moveOwner)) ||
                  (locustCapture &&
                    locustCapture.piece &&
                    !localIsFriendlyPieceForMove(p, Number(locustCapture.piece.owner), moveOwner))
              ),
            locust_capture: locustCapture ? { x: locustCapture.pos.x, y: locustCapture.pos.y } : null,
            imitator_plan: cloneJson(imitatorPlan),
            rebirth: rb ? { x: rb.x, y: rb.y } : null,
            notation,
          });
        }
      }
      }
    }
  }

  const handOwners = allInShogi ? [0, 1] : [turn];
  for (const handOwner of handOwners) {
    if (hasTargetMoveHint && targetMoveHint.kind === "move") continue;
    if (hasTargetMoveHint && targetMoveHint.kind === "drop") {
      if (Number.isFinite(targetMoveHint.owner) && Number(handOwner) !== Number(targetMoveHint.owner)) continue;
    }
    const hand = Array.isArray(hands[String(handOwner)]) ? hands[String(handOwner)] : [];
    const uniqueHand = Array.from(new Set(hand.map((token) => localParseHandToken(token).token || String(token || ""))));
    for (const handToken of uniqueHand) {
      const handInfo = localParseHandToken(handToken);
      const name = String(handInfo.name || "").trim();
      if (!name) continue;
      if (hasTargetMoveHint && targetMoveHint.kind === "drop" && targetMoveHint.name) {
        if (String(name || "") !== String(targetMoveHint.name || "")) continue;
      }
      if (!localCanDropFromHandName(handToken, handOwner, ctx)) continue;
      for (let y = 0; y < 9; y += 1) {
        for (let x = 0; x < 9; x += 1) {
          if (hasTargetMoveHint && targetMoveHint.kind === "drop" && targetMoveHint.to) {
            if (Number(x) !== Number(targetMoveHint.to.x) || Number(y) !== Number(targetMoveHint.to.y)) continue;
          }
          if (pieceMap.get(`${x},${y}`)) continue;
          const dropPieceOwner = handInfo.neutral ? -1 : handOwner;
          const dropOwnerForDirection = handInfo.neutral ? handOwner : dropPieceOwner;
          if (localDropDeadSquare(name, dropOwnerForDirection, y, rules)) continue;
          if (name === "歩" && !allowDoubleFu && localHasFuOnFile(pieces, handOwner, x)) continue;
          cands.push({
            kind: "drop",
            owner: handOwner,
            name,
            hand_token: handToken,
            neutral_piece: handInfo.neutral,
            piece_owner: dropPieceOwner,
            to: { x, y },
            capture: false,
            notation: localMakeMoveNotation(ctx, handOwner, name, x, y, false, true, null, null, {
              neutralPiece: handInfo.neutral,
              pieceOwner: dropPieceOwner,
            }),
          });
        }
      }
    }
  }

  const filterOpts = {
    checkGreedy: filterCheckGreedy,
    analysisIgnoreTorikin,
  };
  const requiresSenteCheck = turn === 0 && !allowSenteNonCheck;

  const splitByKind = (list) => {
    const src = Array.isArray(list) ? list : [];
    const boardMoves = [];
    const drops = [];
    for (const mv of src) {
      if (!mv) continue;
      if (mv.kind === "move") boardMoves.push(mv);
      else if (mv.kind === "drop") drops.push(mv);
    }
    return { boardMoves, drops };
  };

  const applyRuleFilterNoGlobalGreedyToBoard = (list) => {
    const { boardMoves, drops } = splitByKind(list);
    const hasDistanceRule = Boolean(rules?.maxi) || Boolean(rules?.mini);
    const baseRules = hasDistanceRule ? { ...rules, maxi: false, mini: false } : rules;
    const boardFiltered = localFilterBoardMovesByPiece(ctx, boardMoves, turn, baseRules, filterOpts);
    const dropFiltered = skipGlobalRuleFilter
      ? drops.slice()
      : localFilterMovesByRules(ctx, drops, turn, baseRules, filterOpts);
    const merged = boardFiltered.concat(dropFiltered);
    return hasDistanceRule ? localApplyMaxiMiniFilter(merged, rules, turn) : merged;
  };

  const targetReplaySpec =
    options?.targetReplaySpec && typeof options.targetReplaySpec === "object"
      ? options.targetReplaySpec
      : null;
  const replayDisplayToName = options?.displayToName || null;
  const stopOnFirstReplayMatch =
    Boolean(options?.stopOnFirstReplayMatch) && Boolean(targetReplaySpec);
  const replayStrictPiece =
    targetReplaySpec?.pieceText ? localReplayUsesStrictPieceMatch(targetReplaySpec.pieceText, replayDisplayToName) : false;
  const replayPieceExact = targetReplaySpec?.pieceText
    ? new Set(localReplayPieceVariants(targetReplaySpec.pieceText, false, replayDisplayToName))
    : null;
  const replayPieceFallback = targetReplaySpec?.pieceText
    ? replayStrictPiece
      ? null
      : new Set(localReplayPieceVariants(targetReplaySpec.pieceText, true, replayDisplayToName))
    : null;
  const matchesReplayTargetRaw = (mv) => {
    if (!targetReplaySpec) return false;
    if (!localReplayMoveMatchesSpec(mv, targetReplaySpec)) return false;
    if (!replayPieceExact) return true;
    const nm = localNormalizeReplayMatchPieceName(mv?.name);
    if (!nm) return false;
    if (replayPieceExact.has(nm)) return true;
    if (!replayPieceFallback) return false;
    if (replayPieceFallback.has(nm)) return true;
    return false;
  };
  const matchesReplayTarget = (mv) => {
    return matchesReplayTargetRaw(mv);
  };

  const preObligationSource = stopOnFirstReplayMatch ? cands.filter((mv) => matchesReplayTargetRaw(mv)) : cands;
  const preObligation = [];
  for (const mv of preObligationSource) {
    const postMoveNeutralTurnOwner = Number(turn) === 0 ? 1 : 0;
    let isTakingKing = false;
    if (mv.kind === "move" && mv.promote && rules.narikin) continue;
    if (
      mv.kind === "move" &&
      mv.capture &&
      (rules.zentorikin || (rules.torikin && !analysisIgnoreTorikin))
    ) {
      continue;
    }
    if (mv.kind === "move") {
      const movingPiece = localFindPieceInList(pieces, mv.from.x, mv.from.y);
      const rawTargetPiece = localFindPieceInList(pieces, mv.to.x, mv.to.y);
      const targetPiece = localImitatorPlanUsesSourceSquare(mv.imitator_plan, mv.to.x, mv.to.y)
        ? null
        : rawTargetPiece;
      const locustTargetPiece = mv.locust_capture
        ? localFindPieceInList(pieces, mv.locust_capture.x, mv.locust_capture.y)
        : null;
      if (!movingPiece) continue;
      const movingFriendlyOwner = Number(mv.owner);
      const kingCaptureByTakeMake = Boolean(mv?.take_make?.captured_is_king);
      const kingCaptureByLocust = Boolean(
        !mv.messigny_swap &&
          locustTargetPiece &&
          !localIsFriendlyPieceForMove(movingPiece, Number(locustTargetPiece.owner), movingFriendlyOwner) &&
          localPieceIsKing(locustTargetPiece)
      );
      isTakingKing = Boolean(
        kingCaptureByTakeMake ||
          kingCaptureByLocust ||
          (!mv.messigny_swap &&
            targetPiece &&
            !localIsFriendlyPieceForMove(movingPiece, Number(targetPiece.owner), movingFriendlyOwner) &&
            localPieceIsKing(targetPiece))
      );
      if (
        allInShogi &&
        !mv.messigny_swap &&
        targetPiece &&
        localPieceIsKing(targetPiece) &&
        Number(targetPiece.owner) === Number(turn)
      ) {
        continue;
      }
      if (
        !mv.messigny_swap &&
        targetPiece &&
        !localIsFriendlyPieceForMove(movingPiece, Number(targetPiece.owner), movingFriendlyOwner)
      ) {
        if (localPieceIsImmortal(targetPiece)) continue;
      }
      if (
        !mv.messigny_swap &&
        locustTargetPiece &&
        !localIsFriendlyPieceForMove(movingPiece, Number(locustTargetPiece.owner), movingFriendlyOwner)
      ) {
        if (localPieceIsImmortal(locustTargetPiece)) continue;
      }
      if (mv.messigny_swap) {
        if (localHasDeadZoneRestriction(rules)) {
          const swapAndernachTurn = localWillAndernachTurn(movingPiece, rules, false);
          if (
            localIsDeadZoneByRules(movingPiece.name, movingPiece.owner, mv.to.y, rules) &&
            !swapAndernachTurn
          ) {
            continue;
          }
          if (
            targetPiece &&
            localIsDeadZoneByRules(targetPiece.name, targetPiece.owner, mv.from.y, rules)
          ) {
            continue;
          }
        }
      }
    }
    if (mv.kind === "move" && mv.capture && (rules.patrol || rules.lortap)) {
      const supported = localIsSquareAttackedByWithRules(
        pieces,
        mv.from.x,
        mv.from.y,
        mv.owner,
        rules,
        {
          excludePos: { x: mv.from.x, y: mv.from.y },
          ignoreAttackerFilters: true,
          repeatLastNames: null,
        }
      );
      if (rules.patrol && !supported) continue;
      if (rules.lortap && supported) continue;
    }

    const simState = localSimulateStateAfterCandidate(pieces, hands, turn, mv, rules, ctx);
    if (!simState) continue;
    const nextPieces = simState.board.pieces;
    const nextHands = simState.hands;
    if (mv.messigny_swap) {
      const swappedToPiece = localFindPieceInList(nextPieces, mv.to.x, mv.to.y);
      const swappedFromPiece = localFindPieceInList(nextPieces, mv.from.x, mv.from.y);
      if (
        String(swappedToPiece?.name || "") === "歩" &&
        localCountFuInFile(nextPieces, mv.to.x, Number(swappedToPiece?.owner)) > 1
      ) {
        continue;
      }
      if (
        String(swappedFromPiece?.name || "") === "歩" &&
        localCountFuInFile(nextPieces, mv.from.x, Number(swappedFromPiece?.owner)) > 1
      ) {
        continue;
      }
    }
    if (rules.koko) {
      const landing = localCandidateLandingSquare(mv, rules);
      if (!landing || !localHasAdjacentPiece(nextPieces, landing.x, landing.y)) continue;
    }

    const simInfo = localCandidateLastMoveInfo(mv);
    const simMoveStr = String(mv.notation || "");

    if (!allowSelfCheck) {
      // 自己王手判定は「手番側」を基準にする。
      // All-in-Shogi などで相手駒を動かす場合も、判定対象は移動駒ownerではなく現在手番側。
      const selfCheckOwner = Number(turn);
      const baseSelfCheckOpts = {
        lastMoveInfo: simInfo,
        lastMoveStr: simMoveStr,
        ctx,
      };
      const selfChecked = localIsSelfCheckedAfterMoveState(
        nextPieces,
        nextHands,
        selfCheckOwner,
        rules,
        simInfo,
        simMoveStr,
        ctx,
        mv,
        skipNeutralSelfCheckLegalScan
      );
      if (selfChecked) continue;
    }
    if (!allowSelfCheck && localImitatorMoveRejectedByRuntimeSelfCheckProbe(ctx, mv)) {
      continue;
    }
    if (localIsAnnanNifuHostActive(rules) && mv.kind === "move") {
      const movingPiece = localFindPieceInList(pieces, mv.from.x, mv.from.y);
      const targetPiece = localFindPieceInList(pieces, mv.to.x, mv.to.y);
      const isTakingKing =
        !mv.messigny_swap &&
        Boolean(
          targetPiece &&
            Number(targetPiece.owner) !== Number(movingPiece?.owner) &&
            localPieceIsKing(targetPiece)
      );
      // 利き二歩(有効/無効)の差は「玉取り時のみ」に適用する。
      if (
        isTakingKing &&
        localIsAnnanNifuInvalidActive(rules) &&
        String(movingPiece?.name || "") === "歩" &&
        localCountFuInFile(nextPieces, mv.to.x, Number(movingPiece?.owner)) > 1
      ) {
        continue;
      }
    }
    if (
      allInShogi &&
      turn === 1 &&
      localIsInCheckWithRules(nextPieces, 1, rules, {
        lastMoveInfo: simInfo,
        lastMoveStr: simMoveStr,
        neutralTurnOwner: postMoveNeutralTurnOwner,
        ctx,
      })
    ) {
      continue;
    }
    if (
      mv.messigny_swap &&
      Boolean(rules?.[MESSIGNY_NO_BACK_RULE_KEY]) &&
      localIsReturnToPreviousPositionByState(ctx, simState)
    ) {
      continue;
    }
    if (allInShogi && localIsReturnToPreviousPositionByState(ctx, simState)) {
      continue;
    }
    if (localHasIsardamConflict(nextPieces, rules)) continue;

    const fastReplaySingleCheck = stopOnFirstReplayMatch && skipStatusEvaluation;
    let givesCheck = false;
    let givesCheckByOwner = false;
    let givesCheckForObligation = false;
    if (fastReplaySingleCheck) {
      const needSenteObligationCheck = requiresSenteCheck;
      const needUchifuCheck =
        !analysisNoUchifu &&
        ((mv.kind === "drop" &&
          String(mv.name || "") === "歩" &&
          !rules.allow_drop_fu_into_check &&
          !uchifuEnabled) ||
          (uchifuMode === "complete" && (mv.kind === "move" || standardBaseName(mv.name) !== "歩")));
      if (needUchifuCheck) {
        givesCheckByOwner = localIsInCheckWithRules(nextPieces, 1 - Number(mv.owner), rules, {
          lastMoveInfo: simInfo,
          lastMoveStr: simMoveStr,
          neutralTurnOwner: Number(mv.owner),
          ctx,
        });
      }
      if (needSenteObligationCheck) {
        givesCheckForObligation = localIsInCheckWithRules(nextPieces, 1 - Number(mv.owner), rules, {
          lastMoveInfo: simInfo,
          lastMoveStr: simMoveStr,
          ignoreCaptureRepeatType: true,
          neutralTurnOwner: Number(mv.owner),
          ctx,
        });
        givesCheck = givesCheckForObligation;
      } else {
        givesCheckForObligation = givesCheckByOwner;
      }
    } else {
      givesCheck = localIsInCheckWithRules(nextPieces, 1 - turn, rules, {
        lastMoveInfo: simInfo,
        lastMoveStr: simMoveStr,
        neutralTurnOwner: Number(mv.owner),
        ctx,
      });
      givesCheckByOwner = localIsInCheckWithRules(nextPieces, 1 - Number(mv.owner), rules, {
        lastMoveInfo: simInfo,
        lastMoveStr: simMoveStr,
        neutralTurnOwner: Number(mv.owner),
        ctx,
      });
      givesCheckForObligation = localIsInCheckWithRules(nextPieces, 1 - Number(mv.owner), rules, {
        lastMoveInfo: simInfo,
        lastMoveStr: simMoveStr,
        ignoreCaptureRepeatType: true,
        neutralTurnOwner: Number(mv.owner),
        ctx,
      });
    }

    if (!analysisNoUchifu) {
      if (
        mv.kind === "drop" &&
        String(mv.name || "") === "歩" &&
        !rules.allow_drop_fu_into_check &&
        !uchifuEnabled &&
        givesCheckByOwner
      ) {
        if (
          localIsMatedByRulesForAnalysis(nextPieces, nextHands, 1 - Number(mv.owner), rules, {
            respectUchifuRule: false,
            respectKomaAmariRule: false,
            lastMoveInfo: simInfo,
            lastMoveStr: simMoveStr,
            allInPrevKey: getCurrentPositionKeyNoTurn(),
            typeAttrsOrCtx: ctx,
            analysisIgnoreTorikin: Boolean(rules?.torikin) && !Boolean(rules?.zentorikin),
            enforceRecursiveUchifu: true,
            uchifuRecursionDepth,
            uchifuRecursionMax,
          })
        ) {
          continue;
        }
      }
      if (uchifuMode === "complete") {
        const applyComplete =
          mv.kind === "move" || (mv.kind === "drop" && standardBaseName(mv.name) !== "歩");
        if (applyComplete && givesCheckByOwner) {
          if (
            localIsMatedByRulesForAnalysis(nextPieces, nextHands, 1 - Number(mv.owner), rules, {
              respectUchifuRule: false,
              respectKomaAmariRule: false,
              lastMoveInfo: simInfo,
              lastMoveStr: simMoveStr,
              allInPrevKey: getCurrentPositionKeyNoTurn(),
              typeAttrsOrCtx: ctx,
              analysisIgnoreTorikin: Boolean(rules?.torikin) && !Boolean(rules?.zentorikin),
              enforceRecursiveUchifu: true,
              uchifuRecursionDepth,
              uchifuRecursionMax,
            })
          ) {
            continue;
          }
        }
      }
    }

    // ステイルメイト課題では、最終手のみ非王手手での詰め上がりを許可する。
    let allowsStalemateFinish = false;
    if (
      requiresSenteCheck &&
      allowStalemateFinishWithoutCheck &&
      !Boolean(givesCheckForObligation || isTakingKing)
    ) {
      allowsStalemateFinish = localIsImmediateStalemateForOwnerAfterMove(
        nextPieces,
        nextHands,
        1,
        rules,
        simInfo,
        simMoveStr,
        ctx,
        {
          allInPrevKey: getCurrentPositionKeyNoTurn(),
          analysisNoUchifu,
          analysisIgnoreTorikin: Boolean(rules?.torikin) && !Boolean(rules?.zentorikin),
        }
      );
    }

    // owner基準の王手判定を優先し、特殊所有権ケースでも王手義務判定を安定化する。
    const prepared = {
      ...mv,
      _gives_check: Boolean(givesCheckForObligation || givesCheck),
      _takes_king: isTakingKing,
      _stalemate_finish: allowsStalemateFinish,
    };

    if (stopOnFirstReplayMatch && matchesReplayTarget(prepared)) {
      let one = [prepared];
      if (requiresSenteCheck) {
        one = one.filter(
          (m) => Boolean(m?._gives_check) || Boolean(m?._takes_king) || Boolean(m?._stalemate_finish)
        );
      }
      const filteredOne = applyRuleFilterNoGlobalGreedyToBoard(one);
      if (filteredOne.length > 0) {
        const legalOne = filteredOne.map((m) => {
          const out = { ...m };
          delete out._gives_check;
          delete out._takes_king;
          delete out._stalemate_finish;
          return out;
        });
        ctx.legal = { moves: legalOne, status: { kind: "none", text: "" } };
        if (hasDefaultOptions && ctx && Number.isFinite(Number(ctx.revision))) {
          ctx.legal_cache_revision = Number(ctx.revision);
        } else if (ctx) {
          ctx.legal_cache_revision = -1;
        }
        return ctx.legal;
      }
    }

    preObligation.push(prepared);
  }

  let legalNoObligation = null;
  let legalFiltered = [];
  const hasImitatorOnBoard = pieces.some((p) => p && localIsImitatorPiece(p));
  if (requiresSenteCheck) {
    legalNoObligation = applyRuleFilterNoGlobalGreedyToBoard(preObligation);
    const obligationApplied = preObligation.filter(
      (mv) => Boolean(mv._gives_check) || Boolean(mv._takes_king) || Boolean(mv._stalemate_finish)
    );
    legalFiltered = applyRuleFilterNoGlobalGreedyToBoard(obligationApplied);
    if (
      hasImitatorOnBoard &&
      !skipSenteRuntimeObligationFilter &&
      Array.isArray(legalNoObligation) &&
      legalNoObligation.length > 0
    ) {
      // Imitator 合成手は高速王手判定の取りこぼしがあるため、
      // 王手義務前の候補を一度通し、後段のランタイム判定で絞り込む。
      legalFiltered = legalNoObligation.slice();
    }
    if (hasImitatorOnBoard && legalFiltered.length === 0 && Array.isArray(legalNoObligation) && legalNoObligation.length > 0) {
      // Imitator 合成手で高速王手判定が取りこぼす場合は、候補を残してランタイム検証に委ねる。
      legalFiltered = legalNoObligation.slice();
    }
  } else {
    legalFiltered = applyRuleFilterNoGlobalGreedyToBoard(preObligation);
    legalNoObligation = legalFiltered;
  }
  if (!skipSort) {
    legalFiltered.sort((a, b) => String(a?.notation || "").localeCompare(String(b?.notation || ""), "ja"));
  }
  let legalSource = legalFiltered;
  if (
    requiresSenteCheck &&
    hasImitatorOnBoard &&
    legalSource.length > 0 &&
    !skipSenteRuntimeObligationFilter
  ) {
    legalSource = legalSource.filter((mv) =>
      localSenteCheckObligationSatisfiedByRuntime(ctx, pieces, hands, turn, rules, mv, {
        allowStalemateFinishWithoutCheck,
        allInPrevKey: getCurrentPositionKeyNoTurn(),
        analysisNoUchifu,
        analysisIgnoreTorikin: Boolean(rules?.torikin) && !Boolean(rules?.zentorikin),
      })
    );
  }
  let legal = legalSource.map((mv) => {
    const out = { ...mv };
    delete out._gives_check;
    delete out._takes_king;
    delete out._stalemate_finish;
    return out;
  });
  const enableStrictNeutralSelfCheckPostFilter = false;
  if (enableStrictNeutralSelfCheckPostFilter && !allowSelfCheck && !skipNeutralSelfCheckLegalScan && legal.length > 0) {
    const hasNeutralKing = pieces.some((p) => p && Number(p.owner) === -1 && localPieceIsKing(p));
    const hasImitator = pieces.some((p) => p && localIsImitatorPiece(p));
    if (hasNeutralKing || hasImitator) {
      const strictLegal = [];
      for (const mv of legal) {
        const simState = localSimulateStateAfterCandidate(pieces, hands, turn, mv, rules, ctx);
        if (!simState) continue;
        const simInfo = localCandidateLastMoveInfo(mv);
        const simMoveStr = String(mv?.notation || "");
        const selfChecked = localIsSelfCheckedAfterMoveState(
          simState.board.pieces,
          simState.hands,
          Number(turn),
          rules,
          simInfo,
          simMoveStr,
          ctx,
          mv,
          false
        );
        if (!selfChecked) strictLegal.push(mv);
      }
      legal = strictLegal;
    }
  }

  let status = { kind: "none", text: "" };
  if (skipStatusEvaluation) {
    status = { kind: "none", text: "" };
  } else if (legal.length === 0) {
    const selfInCheckNow = localIsInCheckWithRules(pieces, turn, rules, { ctx });
    if (turn === 0 && !allowSenteNonCheck && !selfInCheckNow) {
      // 先手王手義務が有効で、かつ自玉は王手でない局面で0手のとき:
      // 王手義務を外しても0手ならステイルメイトを優先し、
      // 王手義務を外せば指せる手がある場合のみ「王手義務で指し手なし」。
      const hasNoObligationMove = Array.isArray(legalNoObligation) && legalNoObligation.length > 0;
      if (!hasNoObligationMove) {
        status = { kind: "stalemate", text: "ステイルメイト" };
      } else {
        status = { kind: "sente_obligation_no_moves", text: "王手義務で指し手なし" };
      }
    } else {
      const cur = localHistoryCurrentNode(ctx);
      const curInfo = cur?.last_move_info || null;
      const curMoveStr = String(cur?.move_str || "");
      if (
        !analysisNoUchifu &&
        localIsMatedByRulesForAnalysis(pieces, hands, turn, rules, {
          respectUchifuRule: true,
          respectKomaAmariRule: true,
          lastMoveInfo: curInfo,
          lastMoveStr: curMoveStr,
          allInPrevKey: getPreviousPositionKeyNoTurn(),
          typeAttrsOrCtx: ctx,
          analysisIgnoreTorikin: Boolean(rules?.torikin) && !Boolean(rules?.zentorikin),
          enforceRecursiveUchifu: true,
          uchifuRecursionDepth,
          uchifuRecursionMax,
        })
      ) {
        status = { kind: "checkmate", text: "詰み" };
      } else if (localIsInCheckWithRules(pieces, turn, rules, { ctx })) {
        status = { kind: "check", text: "王手" };
      } else {
        status = { kind: "stalemate", text: "ステイルメイト" };
      }
    }
  } else if (localIsInCheckWithRules(pieces, turn, rules, { neutralTurnOwner: 1 - turn, ctx })) {
    status = { kind: "check", text: "王手" };
  }
  if (!skipStatusEvaluation && Boolean(rules.detect_sennichite)) {
    const repeatInfo = localCurrentPositionRepeatInfoInHistory(ctx);
    if (Number(repeatInfo?.count || 0) >= 2) {
      const matchedPlyRaw = Number.parseInt(repeatInfo?.matchedPly, 10);
      const detail =
        Number.isFinite(matchedPlyRaw) && matchedPlyRaw >= 0
          ? `${matchedPlyRaw}手目の局面と同一`
          : "同一局面";
      status = { kind: "sennichite", text: `千日手（${detail}）` };
    }
  }

  ctx.legal = { moves: legal, status };
  if (hasDefaultOptions && ctx && Number.isFinite(Number(ctx.revision))) {
    ctx.legal_cache_revision = Number(ctx.revision);
  } else if (ctx) {
    // Hint付き計算結果を通常計算キャッシュとして使わない。
    ctx.legal_cache_revision = -1;
  }
  return ctx.legal;
}

function localSfenCodeForPiece(name) {
  if (localIsKingName(name)) return "K";
  return LOCAL_SFEN_NAME_TO_CODE[name] || "?";
}

function localPieceToSfenChar(piece) {
  const name = String(piece?.name || "");
  let code = localSfenCodeForPiece(name);
  if (code === "?") return "?";
  if (name === "Friend") {
    const owner = Number(piece?.owner);
    return owner === 0 ? "!" : "~";
  }
  if (localIsFixedNeutralBoardPieceName(name)) return LOCAL_SFEN_NAME_TO_CODE[name] || "@";
  const owner = Number(piece?.owner);
  return owner === 0 ? code.toUpperCase() : code.toLowerCase();
}

function localParseSfenString(sfenText) {
  const normalized = String(sfenText || "").trim().replace(/^sfen\s+/i, "");
  if (!normalized) {
    throw localApiError("INVALID_REQUEST", "SFENテキストが空です");
  }
  const parts = normalized.split(/\s+/);
  if (parts.length < 4) {
    throw localApiError("INVALID_REQUEST", "SFEN形式が不正です");
  }
  const boardPart = parts[0];
  const turnPart = parts[1];
  const handPart = parts[2];
  const rows = boardPart.split("/");
  if (rows.length !== 9) {
    throw localApiError("INVALID_REQUEST", "SFEN盤面行数が不正です");
  }

  const pieces = [];
  for (let y = 0; y < 9; y += 1) {
    const row = rows[y];
    let x = 0;
    for (let i = 0; i < row.length; i += 1) {
      const ch = row[i];
      if (/\d/.test(ch)) {
        x += Number.parseInt(ch, 10);
        continue;
      }
      let promoted = false;
      let baseChar = ch;
      if (ch === "+") {
        promoted = true;
        i += 1;
        if (i >= row.length) {
          throw localApiError("INVALID_REQUEST", "SFEN成り駒表記が不正です");
        }
        baseChar = row[i];
      }
      if (x < 0 || x >= 9) {
        throw localApiError("INVALID_REQUEST", "SFEN盤面座標が不正です");
      }
      const owner = baseChar === "!" ? 0 : baseChar === "~" ? 1 : /[A-Z]/.test(baseChar) ? 0 : 1;
      const key = (promoted ? `+${baseChar.toUpperCase()}` : baseChar.toUpperCase());
      const name = baseChar === "!" || baseChar === "~" ? "Friend" : LOCAL_SFEN_CODE_TO_NAME[key];
      if (!name || name === "?") {
        throw localApiError("INVALID_REQUEST", `SFEN駒コードが不正です: ${key}`);
      }
      const pieceOwner = localIsFixedNeutralBoardPieceName(name) ? -1 : owner;
      pieces.push({
        x,
        y,
        name,
        owner: pieceOwner,
        attrs: {},
      });
      x += 1;
    }
    if (x !== 9) {
      throw localApiError("INVALID_REQUEST", `SFEN盤面列数が不正です: row=${y + 1}`);
    }
  }

  const hands = { "0": [], "1": [] };
  if (handPart !== "-") {
    let i = 0;
    const s = localNormalizeDigits(handPart);
    while (i < s.length) {
      let countText = "";
      while (i < s.length && /\d/.test(s[i])) {
        countText += s[i];
        i += 1;
      }
      const count = countText ? Number.parseInt(countText, 10) : 1;
      if (i >= s.length) break;
      const char = s[i];
      i += 1;
      const owner = char === "!" ? 0 : char === "~" ? 1 : /[A-Z]/.test(char) ? 0 : 1;
      const key = char.toUpperCase();
      const name = char === "!" || char === "~" ? "Friend" : LOCAL_SFEN_CODE_TO_NAME[key];
      if (!name || name === "?" || localIsNeutralImitatorName(name) || localIsKingName(name) || name === "塔" || name === "石" || name === "穴") {
        continue;
      }
      const hand = hands[String(owner)];
      for (let k = 0; k < count; k += 1) hand.push(name);
    }
  }

  const turn = turnPart === "w" ? 1 : 0;
  return { pieces, hands, turn };
}

function localBuildDisplayToNameMap(typeAttrs = null) {
  const out = new Map();
  const src = displayNames && typeof displayNames === "object" ? displayNames : {};
  for (const [name, disp] of Object.entries(src)) {
    if (!name) continue;
    out.set(name, name);
    if (disp !== undefined && disp !== null && String(disp).trim()) {
      out.set(String(disp).trim(), name);
    }
  }
  for (const [disp, name] of Object.entries(LOCAL_FALLBACK_DISPLAY_TO_NAME)) {
    out.set(disp, name);
  }
  if (typeAttrs && typeof typeAttrs === "object") {
    for (const [name, attrsRaw] of Object.entries(typeAttrs)) {
      if (!name) continue;
      out.set(name, name);
      const attrs = localNormalizeRawPieceAttrs(attrsRaw);
      const dn = typeof attrs?.display_name === "string" ? attrs.display_name.trim() : "";
      if (dn) out.set(dn, name);
    }
  }
  for (const name of editPieceNames || []) {
    if (name) out.set(name, name);
  }
  return out;
}

function localBuildDisplayToNameMapWithAttrOverrides(lines, baseMap) {
  const displayToName = new Map(baseMap || []);
  const typeAttrs = {};
  const all = Array.isArray(lines) ? lines : [];
  const applyTypeAttrs = (name, patch) => {
    const prev = localHasOwn(typeAttrs, name) ? typeAttrs[name] : {};
    const next = { ...prev, ...localNormalizeRawPieceAttrs(patch) };
    if (Object.keys(next).length > 0) typeAttrs[name] = next;
    else delete typeAttrs[name];
    const eff = localMergePieceAttrs(localDefaultPieceAttrs(name), next);
    const dn = typeof eff.display_name === "string" ? eff.display_name.trim() : "";
    if (dn) displayToName.set(dn, name);
  };
  for (const raw of all) {
    const s = String(raw || "").trim();
    if (!s) continue;
    const parsed = localParseAttrInfoLine(s, displayToName);
    if (!parsed || parsed.kind !== "type") continue;
    applyTypeAttrs(parsed.name, parsed.attrs);
  }
  return displayToName;
}

function localSplitBoardRowTokens(rowBody) {
  const rough = String(rowBody || "")
    .trim()
    .split(/\s+/)
    .filter((v) => v.length > 0);
  const tokens = [];
  for (const tok0 of rough) {
    let tok = tok0;
    while (true) {
      const idxV = tok.indexOf("v", 1);
      const idxU = tok.indexOf("u", 1);
      const idxN = tok.indexOf("n", 1);
      const splits = [idxV, idxU, idxN].filter((n) => n > 0);
      const idx = splits.length > 0 ? Math.min(...splits) : -1;
      if (idx <= 0) break;
      const left = tok.slice(0, idx);
      const right = tok.slice(idx);
      if (left) tokens.push(left);
      tok = right;
    }
    if (tok) tokens.push(tok);
  }
  return tokens;
}

function localFormatBoardRowBodyForKifu(cells) {
  if (!Array.isArray(cells) || cells.length <= 0) return "";
  let out = "";
  for (const raw of cells) {
    const tok = String(raw || "");
    if (tok.startsWith("v") || tok.startsWith("u") || tok.startsWith("n")) {
      out += tok;
    } else {
      out += ` ${tok}`;
    }
  }
  return out;
}

function localParsePieceTokenToName(rawToken, displayToName) {
  const token = String(rawToken || "").trim();
  if (!token) return null;
  const name = displayToName?.get?.(token);
  if (name === "__none__" || name === "__empty__") return name;
  if (name) return name;
  const tokenLower = token.toLowerCase();
  if (displayToName?.entries) {
    for (const [k, v] of displayToName.entries()) {
      if (String(k || "").toLowerCase() === tokenLower) {
        return v;
      }
    }
  }
  if (localHasOwn(LOCAL_PIECE_SPECS, token)) return token;
  for (const n of Object.keys(LOCAL_PIECE_SPECS)) {
    if (String(n || "").toLowerCase() === tokenLower) return n;
  }
  return null;
}

function localParseCompactAttrBody(rawBody, displayToName) {
  const body = String(rawBody || "").trim();
  if (!body) return null;
  let s = body;
  const attrs = {};

  const consumePrefix = (prefix, onMatch) => {
    if (s.startsWith(prefix)) {
      s = s.slice(prefix.length).trim();
      onMatch();
      return true;
    }
    return false;
  };
  const consumeSuffix = (suffix, onMatch) => {
    if (s.endsWith(suffix)) {
      s = s.slice(0, s.length - suffix.length).trim();
      onMatch();
      return true;
    }
    return false;
  };

  let loopGuard = 0;
  while (loopGuard < 8) {
    loopGuard += 1;
    let consumed = false;
    consumed = consumePrefix("取捨", () => {
      attrs.to_hand = false;
    }) || consumed;
    consumed = consumePrefix("持駒", () => {
      attrs.to_hand = true;
    }) || consumed;
    consumed = consumePrefix("不滅", () => {
      attrs.immortal = true;
    }) || consumed;
    consumed = consumePrefix("非不滅", () => {
      attrs.immortal = false;
    }) || consumed;
    if (!consumed) break;
  }

  const withKingSuffix = (() => {
    if (!s.endsWith("王")) return null;
    const cand = s.slice(0, s.length - 1).trim();
    if (!cand) return null;
    const candName = localParsePieceTokenToName(cand, displayToName);
    if (!candName || candName === "__none__" || candName === "__empty__") return null;
    return { name: candName, is_king: true };
  })();
  if (withKingSuffix) {
    s = withKingSuffix.name;
    attrs.is_king = true;
  } else if (consumeSuffix("非王", () => {
    attrs.is_king = false;
  })) {
    // already consumed
  }

  const pieceName = localParsePieceTokenToName(s, displayToName);
  if (!pieceName || pieceName === "__none__" || pieceName === "__empty__") return null;
  return { name: pieceName, attrs };
}

function localBuildHandPieceTokenCandidates(displayToName) {
  const set = new Set();
  if (displayToName?.entries) {
    for (const [rawToken, mappedName] of displayToName.entries()) {
      const token = String(rawToken || "").trim();
      if (!token) continue;
      if (mappedName === "__none__" || mappedName === "__empty__") continue;
      if (token === "なし") continue;
      if (/^\d+$/.test(token)) continue;
      set.add(token);
    }
  }
  for (const pieceName of Object.keys(LOCAL_PIECE_SPECS || {})) {
    const token = String(pieceName || "").trim();
    if (!token) continue;
    set.add(token);
  }
  return Array.from(set).sort((a, b) => b.length - a.length);
}

function localFindLongestHandPieceTokenAt(text, start, candidates) {
  const src = String(text || "");
  const st = Number.isInteger(start) ? start : 0;
  if (st < 0 || st >= src.length) return null;
  for (const cand of candidates || []) {
    const token = String(cand || "");
    if (!token) continue;
    const seg = src.slice(st, st + token.length);
    if (!seg) continue;
    if (seg === token) return token;
    if (seg.toLowerCase() === token.toLowerCase()) return token;
  }
  return null;
}

function localSplitHandBodyParts(body, displayToName) {
  const src = localNormalizeDigits(String(body || "").trim());
  if (!src) return [];
  const simpleParts = src.split(/\s+/).filter((v) => v.length > 0);
  if (simpleParts.length > 1) return simpleParts;

  const candidates = localBuildHandPieceTokenCandidates(displayToName);
  const out = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    while (i < n && /\s/.test(src[i])) i += 1;
    if (i >= n) break;

    let tokenText = "";
    let consumed = 0;
    const ch = src[i];
    if (ch === "n" || ch === "N") {
      const next = src[i + 1] || "";
      if (next === "(" || next === "（") {
        let j = i + 2;
        while (j < n && src[j] !== ")" && src[j] !== "）") j += 1;
        if (j < n) {
          const inside = src.slice(i + 2, j).trim();
          const mapped = localParsePieceTokenToName(inside, displayToName);
          if (mapped && mapped !== "__none__" && mapped !== "__empty__") {
            tokenText = src.slice(i, j + 1);
            consumed = j + 1 - i;
          }
        }
      }
      if (!consumed) {
        const neutralBase = localFindLongestHandPieceTokenAt(src, i + 1, candidates);
        if (neutralBase) {
          tokenText = `${src[i]}${src.slice(i + 1, i + 1 + neutralBase.length)}`;
          consumed = neutralBase.length + 1;
        }
      }
    }

    if (!consumed) {
      const base = localFindLongestHandPieceTokenAt(src, i, candidates);
      if (base) {
        tokenText = src.slice(i, i + base.length);
        consumed = base.length;
      }
    }

    if (!consumed) {
      const fallback = src.slice(i).trim();
      if (fallback) out.push(fallback);
      break;
    }

    let j = i + consumed;
    while (j < n && /\d/.test(src[j])) j += 1;
    if (j > i + consumed) tokenText += src.slice(i + consumed, j);
    out.push(tokenText);
    i = j;
  }
  return out.length > 0 ? out : simpleParts;
}

function localParseHandLineToPieces(line, displayToName) {
  const m = String(line || "").match(/^\s*(?:先手の持駒|後手の持駒|持駒)\s*[:：]\s*(.*?)\s*$/);
  if (!m) return null;
  const body = m[1] || "";
  if (!body || body === "なし") return [];
  const out = [];
  const parts = localSplitHandBodyParts(body, displayToName);
  for (const partRaw of parts) {
    const part = localNormalizeDigits(partRaw);
    const mm = part.match(/^(.*?)(\d+)?$/);
    if (!mm) continue;
    let pieceText = String(mm[1] || "").trim();
    if (!pieceText) continue;
    const count = mm[2] ? Number.parseInt(mm[2], 10) : 1;
    let neutral = false;
    const parenNeutral = pieceText.match(/^n\((.+)\)$/i);
    if (parenNeutral) {
      neutral = true;
      pieceText = String(parenNeutral[1] || "").trim();
    } else if (/^n.+/i.test(pieceText)) {
      const rawCandidate = String(pieceText || "").slice(1);
      const candidate = localParsePieceTokenToName(rawCandidate, displayToName);
      if (candidate && candidate !== "__none__" && candidate !== "__empty__") {
        neutral = true;
        pieceText = rawCandidate;
      }
    }
    const name = localParsePieceTokenToName(pieceText, displayToName);
    if (!name || name === "__none__" || name === "__empty__") continue;
    if (
      localIsNeutralImitatorName(name) ||
      localIsKingName(name) ||
      name === "石" ||
      name === "穴" ||
      name === "塔"
    ) {
      continue;
    }
    const token = localMakeHandToken(name, neutral);
    for (let i = 0; i < count; i += 1) out.push(token);
  }
  return out;
}

function localIsHandLineText(line) {
  return /^\s*(?:先手の持駒|後手の持駒|持駒)\s*[:：]/.test(String(line || ""));
}

function localIsGoteHandLineText(line) {
  return /^\s*後手の持駒\s*[:：]/.test(String(line || ""));
}

function localIsSenteHandLineText(line) {
  return /^\s*先手の持駒\s*[:：]/.test(String(line || ""));
}

function localFormatProblemNameForRuleName(strategy, objective) {
  const s = String(strategy || "");
  const o = String(objective || "");
  if (s === "詰将棋") {
    return o === "詰" ? "詰将棋" : o;
  }
  if (o === "詰" && s.endsWith("詰")) {
    return s;
  }
  return `${s}${o}`;
}

function localRuleLabelDefsFromMeta(meta) {
  const labels = meta?.rule_labels && typeof meta.rule_labels === "object" ? meta.rule_labels : {};
  const out = [];
  const seen = new Set();
  for (const key of LOCAL_RULE_LABEL_PARSE_ORDER) {
    const label = labels[key];
    if (typeof label !== "string" || !label.trim()) continue;
    out.push([key, label]);
    seen.add(key);
  }
  for (const [key, label] of Object.entries(labels)) {
    if (seen.has(key)) continue;
    if (typeof label !== "string" || !label.trim()) continue;
    out.push([key, label]);
  }
  return out;
}

function localParseRuleNameText(ruleText, meta) {
  const defs = localRuleLabelDefsFromMeta(meta);
  const parsed = {};
  for (const [key] of defs) parsed[key] = false;
  if (!localHasOwn(parsed, "isardam_type_b")) parsed.isardam_type_b = false;
  if (!localHasOwn(parsed, "messigny_no_back")) parsed.messigny_no_back = false;
  parsed.detect_sennichite = true;

  let text = String(ruleText || "").trim();
  const annaNifuParenPattern = /(?:\(|（)\s*利き二歩無効\s*(?:\)|）)/g;
  if (annaNifuParenPattern.test(text)) {
    parsed.annan_nifu_invalid = true;
    text = text.replace(annaNifuParenPattern, "");
  }
  const messignyNoBackPattern = /Messigny\s*(?:\(|（)\s*直前戻り禁止\s*(?:\)|）)/g;
  if (messignyNoBackPattern.test(text)) {
    parsed.messigny_no_back = true;
    text = text.replace(messignyNoBackPattern, "Messigny");
  }
  const strategyOptions =
    Array.isArray(meta?.strategy_options) && meta.strategy_options.length > 0
      ? meta.strategy_options
      : LOCAL_RULE_STRATEGY_FALLBACK_OPTIONS;
  const objectiveOptions =
    Array.isArray(meta?.objective_options) && meta.objective_options.length > 0
      ? meta.objective_options
      : LOCAL_RULE_OBJECTIVE_FALLBACK_OPTIONS;
  let strategy = String(strategyOptions[0] || "詰将棋");
  let objective = String(objectiveOptions[0] || "詰");

  const candidates = [];
  for (const s of strategyOptions) {
    for (const o of objectiveOptions) {
      candidates.push([localFormatProblemNameForRuleName(s, o), s, o]);
    }
  }
  for (const o of objectiveOptions) {
    candidates.push([o, "詰将棋", o]);
  }
  candidates.sort((a, b) => String(b[0]).length - String(a[0]).length);
  for (const [problemName, s, o] of candidates) {
    const pn = String(problemName || "");
    if (!pn) continue;
    if (text.endsWith(pn)) {
      strategy = String(s || strategy);
      objective = String(o || objective);
      text = text.slice(0, text.length - pn.length);
      break;
    }
  }

  parsed.strategy = strategy;
  parsed.objective = objective;

  // ルール接頭辞を先頭から繰り返し消費する。
  // 解析順に依存せず「天竺PWCマキシ成禁...」のような複合表記を復元できるようにする。
  for (let guard = 0; guard < 128 && text.length > 0; guard += 1) {
    let consumed = false;
    if (text.startsWith("Isardam（タイプB）")) {
      parsed.isardam_type_b = true;
      text = text.slice("Isardam（タイプB）".length);
      consumed = true;
    } else if (text.startsWith("Isardam")) {
      parsed.isardam = true;
      text = text.slice("Isardam".length);
      consumed = true;
    } else {
      let best = null;
      for (const [key, label] of defs) {
        if (key === "isardam") continue;
        if (!label || !text.startsWith(label)) continue;
        if (!best || String(label).length > String(best.label).length) {
          best = { key, label };
        }
      }
      if (best) {
        parsed[best.key] = true;
        text = text.slice(String(best.label).length);
        consumed = true;
      }
    }
    if (!consumed) break;
  }
  if (parsed.messigny_no_back) parsed.messigny = true;
  return parsed;
}

function localParseTitleLine(line, meta) {
  const raw = String(line || "").replace(/^\uFEFF/, "").trim();
  const m = raw.match(/^(.*?)(?:\s+([0-9０-９]+)\s*手)?$/);
  let ruleText = m ? String(m[1] || "").trim() : raw;
  const plyText = m ? localNormalizeDigits(m[2] || "") : "";
  const problemPly = /^\d+$/.test(plyText) ? Number.parseInt(plyText, 10) : 0;
  const receiverFirstPattern = /(?:\(|（)\s*受先\s*(?:\)|）)\s*$/;
  let startTurn = null;
  if (receiverFirstPattern.test(ruleText)) {
    startTurn = 1;
    ruleText = ruleText.replace(receiverFirstPattern, "").trim();
  }
  const parsed = localParseRuleNameText(ruleText, meta);
  parsed.problem_ply = Number.isFinite(problemPly) && problemPly > 0 ? problemPly : 0;
  if (startTurn === 1) parsed.__start_turn = 1;
  return parsed;
}

function localSplitAttrTokens(text) {
  const parts = [];
  let buf = "";
  let depth = 0;
  const src = String(text || "");
  for (const ch of src) {
    if (ch === "（") {
      depth += 1;
      buf += ch;
      continue;
    }
    if (ch === "）") {
      depth = Math.max(0, depth - 1);
      buf += ch;
      continue;
    }
    if (ch === "、" && depth === 0) {
      const token = buf.trim();
      if (token) parts.push(token);
      buf = "";
      continue;
    }
    buf += ch;
  }
  const tail = buf.trim();
  if (tail) parts.push(tail);
  return parts;
}

function localParseAttrTokens(body, displayToName) {
  const attrs = {};
  for (const tokenRaw of localSplitAttrTokens(body)) {
    const token = String(tokenRaw || "").trim();
    if (!token) continue;
    if (token === "表示文字なし") {
      attrs.display_name = null;
      continue;
    }
    if (token.startsWith("表示文字（") && token.endsWith("）")) {
      attrs.display_name = token.slice("表示文字（".length, -1);
      continue;
    }
    if (token === "持ち駒属性") {
      attrs.to_hand = true;
      continue;
    }
    if (token === "取り捨て") {
      attrs.to_hand = false;
      continue;
    }
    if (token === "王属性") {
      attrs.is_king = true;
      continue;
    }
    if (token === "非王属性") {
      attrs.is_king = false;
      continue;
    }
    if (token === "不滅属性") {
      attrs.immortal = true;
      continue;
    }
    if (token === "非不滅属性") {
      attrs.immortal = false;
      continue;
    }
    if (token === "成れない") {
      attrs.promote_to = null;
      continue;
    }
    if (token.startsWith("成り先")) {
      const raw = token.slice("成り先".length).trim();
      const parsed = localParsePieceTokenToName(raw, displayToName);
      if (parsed) attrs.promote_to = parsed;
      continue;
    }
    if (token === "成先属性なし") {
      attrs.promote_attrs = null;
      continue;
    }
    if (token.startsWith("成先属性（") && token.endsWith("）")) {
      const inner = token.slice("成先属性（".length, -1).trim();
      const innerAttrs = localParseAttrTokens(inner, displayToName);
      attrs.promote_attrs = Object.keys(innerAttrs).length > 0 ? innerAttrs : null;
      continue;
    }
  }
  return attrs;
}

function localParseAttrInfoLine(line, displayToName) {
  const s = String(line || "").trim();
  if (!s) return null;
  const idxAscii = s.indexOf(":");
  const idxFw = s.indexOf("：");
  const splitIdx =
    idxAscii < 0 ? idxFw : idxFw < 0 ? idxAscii : Math.min(idxAscii, idxFw);
  if (splitIdx < 0) return null;
  const left = s.slice(0, splitIdx).trim();
  const right = s.slice(splitIdx + 1).trim();
  if (!left || !right) return null;
  const legacyAttrs = localParseAttrTokens(right, displayToName);
  const compact = localParseCompactAttrBody(right, displayToName);

  const leftNorm = localNormalizeDigits(left);
  const pm = leftNorm.match(/^([1-9])([1-9])(.*)$/);
  const leftPieceToken = String(pm ? pm[3] : left).trim();
  const leftName = localParsePieceTokenToName(leftPieceToken, displayToName);
  const targetName = leftName || compact?.name || null;
  const buildDisplayPatch = () => {
    if (!targetName || !leftPieceToken) return {};
    const defaultDisp = localDisplayPieceName(targetName);
    if (leftPieceToken === defaultDisp) return {};
    return { display_name: leftPieceToken };
  };

  if (Object.keys(legacyAttrs).length <= 0) {
    if (!compact || !targetName) return null;
    const attrs = { ...localNormalizeRawPieceAttrs(compact.attrs), ...buildDisplayPatch() };
    if (Object.keys(attrs).length <= 0) return null;
    if (pm) {
      const suji = Number.parseInt(pm[1], 10);
      const dan = Number.parseInt(pm[2], 10);
      const x = 9 - suji;
      const y = dan - 1;
      if (localInBoard(x, y)) {
        return { kind: "piece", x, y, attrs };
      }
    }
    return { kind: "type", name: targetName, attrs };
  }

  if (pm) {
    const suji = Number.parseInt(pm[1], 10);
    const dan = Number.parseInt(pm[2], 10);
    const x = 9 - suji;
    const y = dan - 1;
    if (localInBoard(x, y)) {
      return { kind: "piece", x, y, attrs: legacyAttrs };
    }
  }

  const pieceName = localParsePieceTokenToName(left, displayToName);
  if (pieceName && pieceName !== "__none__" && pieceName !== "__empty__") {
    return { kind: "type", name: pieceName, attrs: legacyAttrs };
  }
  return null;
}

function localParseFairyUsageInfoLine(line, displayToName) {
  const s = String(line || "").trim();
  if (!s) return null;
  const idxAscii = s.indexOf(":");
  const idxFw = s.indexOf("：");
  const splitIdx =
    idxAscii < 0 ? idxFw : idxFw < 0 ? idxAscii : Math.min(idxAscii, idxFw);
  if (splitIdx < 0) return null;
  const left = s.slice(0, splitIdx).trim();
  const right = s.slice(splitIdx + 1).trim();
  if (!right) return null;
  let pieceName = null;
  let attrs = {};
  const compact = localParseCompactAttrBody(right, displayToName);
  if (compact) {
    pieceName = compact.name;
    attrs = localNormalizeRawPieceAttrs(compact.attrs);
  } else {
    const rightNameToken = right.replace(/[（(].*$/, "").trim();
    if (!rightNameToken) return null;
    pieceName = localParsePieceTokenToName(rightNameToken, displayToName);
    if (!pieceName || pieceName === "__none__" || pieceName === "__empty__") return null;
    const m = right.match(/^[^（(]+[（(](.*)[）)]\s*$/);
    if (m) {
      const body = String(m[1] || "").trim();
      if (body) attrs = localParseAttrTokens(body, displayToName);
    }
  }
  if (!pieceName || pieceName === "__none__" || pieceName === "__empty__") return null;
  if (LOCAL_STANDARD_PIECE_NAMES.has(pieceName)) return null;
  const leftDisplay = left.replace(/[（(].*$/, "").trim();
  if (leftDisplay) {
    const defaultDisp = localDisplayPieceName(pieceName);
    if (leftDisplay !== defaultDisp) {
      attrs.display_name = leftDisplay;
    }
  }
  return { name: pieceName, attrs };
}

function localIsFairyUsageInfoLine(line, displayToName) {
  const s = String(line || "").trim();
  if (!s) return false;
  if (s.startsWith("使用フェアリー駒:") || s.startsWith("使用フェアリー駒：")) {
    return true;
  }
  return localParseFairyUsageInfoLine(s, displayToName) !== null;
}

function localSplitAttrAndKifuLines(pieces, lines, displayToNameBase) {
  const typeAttrs = {};
  const displayToName = new Map(displayToNameBase || []);
  const pieceByCoord = new Map();
  for (const p of Array.isArray(pieces) ? pieces : []) {
    pieceByCoord.set(`${p.x},${p.y}`, p);
  }

  let started = false;
  let attrSeen = false;
  let kifuStart = 0;
  const all = Array.isArray(lines) ? lines : [];

  const applyTypeAttrs = (name, patch) => {
    const prev = localHasOwn(typeAttrs, name) ? typeAttrs[name] : {};
    const next = { ...prev, ...localNormalizeRawPieceAttrs(patch) };
    if (Object.keys(next).length > 0) typeAttrs[name] = next;
    else delete typeAttrs[name];
    const nextEffective = localMergePieceAttrs(localDefaultPieceAttrs(name), next);
    const dn = typeof nextEffective.display_name === "string" ? nextEffective.display_name.trim() : "";
    if (dn) displayToName.set(dn, name);
  };

  for (let i = 0; i < all.length; i += 1) {
    const s = String(all[i] || "").trim();
    if (!s) {
      if (!started) continue;
      kifuStart = attrSeen ? i + 1 : i;
      break;
    }
    started = true;
    const parsed = localParseAttrInfoLine(s, displayToName);
    if (!parsed) {
      const fairyUsage = localParseFairyUsageInfoLine(s, displayToName);
      if (fairyUsage || localIsFairyUsageInfoLine(s, displayToName)) {
        attrSeen = true;
        if (fairyUsage && fairyUsage.attrs && Object.keys(fairyUsage.attrs).length > 0) {
          applyTypeAttrs(fairyUsage.name, fairyUsage.attrs);
        }
        continue;
      }
      kifuStart = i;
      break;
    }
    attrSeen = true;
    if (parsed.kind === "type") {
      applyTypeAttrs(parsed.name, parsed.attrs);
      continue;
    }
    if (parsed.kind === "piece") {
      const key = `${parsed.x},${parsed.y}`;
      const piece = pieceByCoord.get(key);
      if (!piece) continue;
      piece.attrs = { ...(piece.attrs || {}), ...localNormalizeRawPieceAttrs(parsed.attrs) };
      continue;
    }
  }
  if (!started) kifuStart = all.length;
  if (started && kifuStart === 0 && attrSeen) {
    kifuStart = all.length;
  }
  return { typeAttrs, moveLines: all.slice(kifuStart) };
}

function localParseKifuText(kifuText, meta = null, options = {}) {
  const text = String(kifuText || "").replace(/^\uFEFF/, "");
  if (!text.trim()) {
    throw localApiError("INVALID_REQUEST", "棋譜テキストが空です");
  }
  const lines = text.split(/\r?\n/);
  const titleRules = localParseTitleLine(lines[0] || "", meta);
  const startTurnFromTitle = Number(titleRules?.__start_turn) === 1 ? 1 : null;
  const fallbackTypeAttrs =
    options?.typeAttrs && typeof options.typeAttrs === "object" ? options.typeAttrs : null;
  const displayToName = localBuildDisplayToNameMapWithAttrOverrides(
    lines,
    localBuildDisplayToNameMap(fallbackTypeAttrs)
  );

  const sfenLineIdx = lines.findIndex((ln) => /^\s*sfen\s+/i.test(ln));
  if (sfenLineIdx >= 0) {
    const parsedSfen = localParseSfenString(lines[sfenLineIdx].replace(/^\s*sfen\s+/i, ""));
    const sfenTurn = Number(parsedSfen?.turn) === 1 ? 1 : 0;
    return {
      ...parsedSfen,
      turn: startTurnFromTitle === 1 ? 1 : sfenTurn,
      titleRules,
      typeAttrs: {},
      moveLines: lines.slice(sfenLineIdx + 1),
    };
  }

  const handLineIndices = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (localIsHandLineText(lines[i])) {
      handLineIndices.push(i);
    }
  }
  if (handLineIndices.length < 2) {
    throw localApiError("INVALID_REQUEST", "棋譜形式が不明です（持駒行が不足）");
  }

  let topHandIdx = handLineIndices[0];
  const goteHandIdx = lines.findIndex((ln) => localIsGoteHandLineText(ln));
  if (goteHandIdx >= 0) topHandIdx = goteHandIdx;
  const borderTopIdx = (() => {
    for (let i = topHandIdx + 1; i < lines.length; i += 1) {
      if (/^\s*\+[-]+\+\s*$/.test(lines[i])) return i;
    }
    return -1;
  })();
  if (borderTopIdx < 0) {
    throw localApiError("INVALID_REQUEST", "棋譜形式が不正です（盤面上枠なし）");
  }
  const rowStart = borderTopIdx + 1;
  if (rowStart + 9 > lines.length) {
    throw localApiError("INVALID_REQUEST", "棋譜形式が不正です（盤面行不足）");
  }
  const boardRows = lines.slice(rowStart, rowStart + 9);
  const borderBottomIdx = (() => {
    for (let i = rowStart + 9; i < lines.length; i += 1) {
      if (/^\s*\+[-]+\+\s*$/.test(lines[i])) return i;
    }
    return -1;
  })();
  if (borderBottomIdx < 0) {
    throw localApiError("INVALID_REQUEST", "棋譜形式が不正です（盤面下枠なし）");
  }
  const bottomHandIdx = (() => {
    const senteHandIdx = lines.findIndex((ln) => localIsSenteHandLineText(ln));
    if (senteHandIdx >= 0 && senteHandIdx > borderBottomIdx) return senteHandIdx;
    for (let i = borderBottomIdx + 1; i < lines.length; i += 1) {
      if (localIsHandLineText(lines[i])) return i;
    }
    return -1;
  })();
  if (bottomHandIdx < 0) {
    throw localApiError("INVALID_REQUEST", "棋譜形式が不正です（下段持駒なし）");
  }

  const pieces = [];
  for (let y = 0; y < 9; y += 1) {
    const ln = boardRows[y];
    const m = String(ln).match(/^\|\s*(.*?)\s*\|/);
    if (!m) {
      throw localApiError("INVALID_REQUEST", `棋譜形式が不正です（盤面行）: ${ln}`);
    }
    const tokens = localSplitBoardRowTokens(m[1]);
    if (tokens.length !== 9) {
      throw localApiError("INVALID_REQUEST", `棋譜形式が不正です（盤面列数）: ${ln}`);
    }
    for (let x = 0; x < 9; x += 1) {
      const tk = tokens[x];
      if (tk === "・") continue;
      let owner = 0;
      let body = tk;
      if (tk.startsWith("v")) {
        owner = 1;
        body = tk.slice(1);
      } else if (tk.startsWith("u")) {
        owner = -1;
        body = tk.slice(1);
      } else if (tk.startsWith("n")) {
        const candidateBody = tk.slice(1);
        const candidateName = localParsePieceTokenToName(candidateBody, displayToName);
        if (candidateName && candidateName !== "__none__" && candidateName !== "__empty__") {
          owner = -1;
          body = candidateBody;
        }
      }
      const name = localParsePieceTokenToName(body, displayToName);
      if (!name || name === "__none__" || name === "__empty__") {
        throw localApiError("INVALID_REQUEST", `未知の盤上駒です: ${body}`);
      }
      const pieceOwner = localIsFixedNeutralBoardPieceName(name) ? -1 : owner;
      pieces.push({
        x,
        y,
        name,
        owner: pieceOwner,
        attrs: {},
      });
    }
  }

  const topHand = localParseHandLineToPieces(lines[topHandIdx], displayToName);
  const bottomHand = localParseHandLineToPieces(lines[bottomHandIdx], displayToName);
  if (!Array.isArray(topHand) || !Array.isArray(bottomHand)) {
    throw localApiError("INVALID_REQUEST", "持駒行の解析に失敗しました");
  }

  const postLines = lines.slice(bottomHandIdx + 1);
  const split = localSplitAttrAndKifuLines(pieces, postLines, displayToName);

  return {
    pieces,
    hands: { "0": bottomHand, "1": topHand },
    turn: startTurnFromTitle === 1 ? 1 : 0,
    titleRules,
    typeAttrs: split.typeAttrs,
    moveLines: split.moveLines,
  };
}

function localParseKifuMovesOnlyText(kifuText) {
  const text = String(kifuText || "").replace(/^\uFEFF/, "");
  if (!text.trim()) {
    throw localApiError("INVALID_REQUEST", "棋譜テキストが空です");
  }
  return {
    pieces: [],
    hands: { "0": [], "1": [] },
    turn: 0,
    titleRules: {},
    typeAttrs: {},
    moveLines: text.split(/\r?\n/),
  };
}

function localExtractMovesAndTerminalFromKifuLines(lines) {
  const moves = localExtractMoveTokens(lines);
  const terminal = localExtractTerminalResult(lines);
  return { moves, terminal };
}

function localLooksLikeReplayMoveTokenStart(tokenRaw) {
  let token = localNormalizeDigits(localStripReplayOwnerPrefix(String(tokenRaw || "").trim()));
  if (!token) return false;
  token = localExtractNeutralPieceNotationToken(token).text;
  token = token.replace(/[。,，,]+$/g, "");
  return /^(同|[1-9][1-9](?:-[1-9][1-9])?)/.test(token);
}

function localNeedsReplayPieceContinuation(tokenRaw) {
  let token = localNormalizeDigits(localStripReplayOwnerPrefix(String(tokenRaw || "").trim()));
  if (!token) return false;
  token = localExtractNeutralPieceNotationToken(token).text;
  token = token.replace(/[。,，,]+$/g, "");
  // 例: "44" / "44n" / "同" / "同n" / "43-21" までで終わっている断片は、
  // 次トークンの駒名・修飾子を連結して1手記法へ復元する。
  // 「同-37」(Siren/Triton の飛越マス付き表記) も未完成断片として扱う。
  return /^(?:同(?:-[1-9][1-9])?|[1-9][1-9](?:-[1-9][1-9])?)(?:[nuv])?$/i.test(token);
}

function localNormalizeMoveTokenSpacing(partsRaw) {
  const parts = (Array.isArray(partsRaw) ? partsRaw : [])
    .map((v) => String(v || "").trim())
    .filter((v) => v.length > 0);
  const out = [];
  for (let i = 0; i < parts.length; ) {
    const token = parts[i];
    if (!localNeedsReplayPieceContinuation(token)) {
      out.push(token);
      i += 1;
      continue;
    }
    let merged = token;
    let j = i + 1;
    for (; j < parts.length; j += 1) {
      const next = String(parts[j] || "").trim();
      if (!next) continue;
      const nextNorm = localNormalizeDigits(next);
      if (!nextNorm) continue;
      if (nextNorm === "まで") break;
      if (/^\d+$/.test(nextNorm)) break;
      if (/^手$/.test(nextNorm)) break;
      if (localIsTerminalResultText(nextNorm)) break;
      if (localLooksLikeReplayMoveTokenStart(next)) break;
      merged += next;
    }
    out.push(merged);
    i = j;
  }
  return out;
}

function localExtractMoveTokens(lines) {
  const out = [];
  const all = Array.isArray(lines) ? lines : [];
  for (const lineRaw of all) {
    const line = String(lineRaw || "").trim();
    if (!line) continue;
    if (/^変化[：:]/.test(line)) continue;
    if (/^手数[-]/.test(line)) continue;
    if (/^まで\s+/.test(line)) continue;
    const partsRaw = line.split(/\s+/).filter((v) => v.length > 0);
    const parts = localNormalizeMoveTokenSpacing(partsRaw);
    for (let p0 of parts) {
      let p = String(p0 || "").trim();
      if (!p) continue;
      if (localIsTerminalResultText(p)) continue;
      if (/^\d+$/.test(p)) continue;
      p = p.replace(/^\d+[:：]/, "");
      if (!p) continue;
      if (p.startsWith("消費時間")) continue;
      const body = localStripReplayOwnerPrefix(p);
      if (/^(同|[1-9１-９])/.test(body)) out.push(p);
    }
  }
  return out;
}

function localExtractTerminalResult(lines) {
  let terminal = null;
  const all = Array.isArray(lines) ? lines : [];
  for (const lineRaw of all) {
    const line = String(lineRaw || "").trim();
    if (!line) continue;
    const m = line.match(/(?:^|\s)まで\s+[0-9０-９]+\s*手(?:\s*で(詰み|逃れ|ステイルメイト|千日手))?/);
    if (m) {
      if (m[1]) terminal = m[1];
      continue;
    }
    if (localIsTerminalResultText(line)) {
      terminal = line;
    }
  }
  return terminal;
}

function localSplitKifuAndVariationLines(lines) {
  const mainLines = [];
  const variationLines = [];
  let inVariation = false;
  for (const raw of Array.isArray(lines) ? lines : []) {
    const s = String(raw || "").trim();
    if (!inVariation && s === "変化:") {
      inVariation = true;
      continue;
    }
    if (!inVariation && /^変化[：:]\s*[0-9０-９]+\s*手/.test(s)) {
      inVariation = true;
      variationLines.push(s);
      continue;
    }
    if (inVariation && /^変化[：:]\s*[0-9０-９]+\s*手/.test(s)) {
      variationLines.push(s);
      continue;
    }
    if (inVariation) {
      if (s) variationLines.push(s);
    } else {
      mainLines.push(raw);
    }
  }
  return { mainLines, variationLines };
}

function localParseVariationLine(line) {
  const s = String(line || "").trim();
  if (!s) return null;
  const m = s.match(/^(V\d+):\s*(.*)$/);
  if (!m) return null;
  const id = m[1];
  let rest = m[2].trim();

  let parent = null;
  const pm = rest.match(/^親=(V\d+)\s+(.*)$/);
  if (pm) {
    parent = pm[1];
    rest = pm[2].trim();
  }

  const core = rest.match(/^起点=(\d+)手局面\s+手順=(.*)$/);
  if (!core) return null;
  const startPly = Number.parseInt(core[1], 10);
  let tail = core[2].trim();

  let result = null;
  const rm = tail.match(/\s+終局=(詰み|逃れ|ステイルメイト|千日手)\s*$/);
  if (rm) {
    result = rm[1];
    tail = tail.slice(0, rm.index).trim();
  }
  const moves = tail && tail !== "-" ? tail.split(/\s+/).filter((v) => v.length > 0) : [];
  return { id, parent, start_ply: startPly, moves, result };
}

function localParseKifVariationStartPly(line) {
  const s = String(line || "").trim();
  const m = s.match(/^変化[：:]\s*([0-9０-９]+)\s*手/);
  if (!m) return null;
  const raw = localNormalizeDigits(m[1]);
  if (!/^\d+$/.test(raw)) return null;
  return Number.parseInt(raw, 10);
}

function localParseKifVariationSections(lines) {
  const sections = [];
  let currentStart = null;
  let currentLines = [];

  const flush = () => {
    if (currentStart === null) {
      currentLines = [];
      return;
    }
    const moves = localExtractMoveTokens(currentLines);
    const result = localExtractTerminalResult(currentLines);
    if (moves.length === 0 && !localIsTerminalResultText(result)) {
      currentStart = null;
      currentLines = [];
      return;
    }
    sections.push({
      id: `KIFV${sections.length + 1}`,
      parent: null,
      start_ply: Math.max(0, currentStart - 1),
      moves,
      result,
    });
    currentStart = null;
    currentLines = [];
  };

  for (const raw of Array.isArray(lines) ? lines : []) {
    const s = String(raw || "").trim();
    if (!s) continue;
    const start = localParseKifVariationStartPly(s);
    if (start !== null) {
      flush();
      currentStart = start;
      currentLines = [];
      continue;
    }
    if (currentStart !== null) currentLines.push(raw);
  }
  flush();
  return sections;
}

function localParseVariationEntries(lines) {
  const parsed = [];
  for (const ln of Array.isArray(lines) ? lines : []) {
    const info = localParseVariationLine(ln);
    if (info) parsed.push(info);
  }
  parsed.push(...localParseKifVariationSections(lines));
  return parsed;
}

function localHistoryAppendNode(history, parentId, moveStr, turn, ply) {
  const nodeId = localGenerateHistoryNodeId({ revision: `${ply}_${parentId}` }, "n_kifu");
  const node = {
    node_id: nodeId,
    parent_id: parentId,
    ply,
    move_str: moveStr,
    turn,
    last_move_info: null,
    children: [],
  };
  const byId = new Map((history.nodes || []).map((n) => [n.node_id, n]));
  const parent = byId.get(parentId);
  if (!parent) return null;
  if (!Array.isArray(parent.children)) parent.children = [];
  parent.children.push(nodeId);
  history.nodes.push(node);
  return nodeId;
}

function localBuildPlyMapAlongFirstChild(history, rootId) {
  const byId = new Map((history.nodes || []).map((n) => [n.node_id, n]));
  const map = new Map();
  let id = rootId;
  const seen = new Set();
  while (id && byId.has(id) && !seen.has(id)) {
    seen.add(id);
    const node = byId.get(id);
    map.set(Number(node.ply || 0), id);
    const children = Array.isArray(node.children) ? node.children : [];
    id = children[0] || null;
  }
  return map;
}

async function localApplyVariationsToHistory(ctx, variationLines, options = {}) {
  const history = ctx?.history;
  if (!history || !Array.isArray(history.nodes)) return { applied: 0, failed: 0 };
  const noTouch = Boolean(options?.noTouch);
  const onProgress = typeof options?.onProgress === "function" ? options.onProgress : null;
  const entries = localParseVariationEntries(variationLines);
  if (entries.length === 0) return { applied: 0, failed: 0 };
  const outerChunk = entries.length >= 400 ? 128 : entries.length >= 100 ? 64 : 32;

  const mainMap = localBuildPlyMapAlongFirstChild(history, history.root_id);
  const varMaps = new Map();
  let pending = entries.slice();
  let applied = 0;
  let resolvedCount = 0;
  const totalEntries = entries.length;

  while (pending.length > 0) {
    let progressed = false;
    const nextPending = [];
    let pendingIndex = 0;
    for (const ent of pending) {
      pendingIndex += 1;
      if ((pendingIndex % outerChunk) === 0) {
        await localYieldToUiOnce();
      }
      const baseMap = ent.parent ? varMaps.get(ent.parent) : mainMap;
      if (!baseMap) {
        nextPending.push(ent);
        continue;
      }
      const anchorId = baseMap.get(Number(ent.start_ply || 0));
      if (!anchorId) {
        nextPending.push(ent);
        continue;
      }
      const byId = localHistoryNodeMap(ctx);
      const anchor = byId.get(anchorId);
      if (!anchor) {
        nextPending.push(ent);
        continue;
      }
      history.current_id = anchorId;
      if (!localSyncStateFromCurrentHistoryNode(ctx)) {
        nextPending.push(ent);
        continue;
      }
      const lineMap = new Map(baseMap);
      let ok = true;
      const innerChunk =
        (Array.isArray(ent.moves) ? ent.moves.length : 0) >= 400
          ? 128
          : (Array.isArray(ent.moves) ? ent.moves.length : 0) >= 100
            ? 64
            : 32;
      for (let i = 0; i < (ent.moves || []).length; i += 1) {
        const mv = ent.moves[i];
        const moveStr = String(mv || "").trim();
        if (!moveStr) continue;
        const moveOk = localReplayMoveTextOnCurrent(ctx, moveStr, {
          noTouch,
          fastHintMode: Boolean(noTouch),
          allowFullFallback: true,
        });
        if (!moveOk) {
          ok = false;
          break;
        }
        const currentNode = localHistoryCurrentNode(ctx);
        if (currentNode?.node_id) {
          lineMap.set(Number(currentNode.ply || 0), currentNode.node_id);
        }
        if (((i + 1) % innerChunk) === 0) {
          await localYieldToUiOnce();
        }
      }
      if (ok && localIsTerminalResultText(ent.result)) {
        localHistoryAddTerminalNode(ctx, ent.result, { noTouch });
        const currentNode = localHistoryCurrentNode(ctx);
        if (currentNode?.node_id) {
          lineMap.set(Number(currentNode.ply || 0), currentNode.node_id);
        }
      }
      if (ok) {
        varMaps.set(ent.id, lineMap);
        applied += 1;
        progressed = true;
      } else {
        progressed = true;
      }
      resolvedCount += 1;
      if (onProgress) onProgress(resolvedCount, totalEntries);
    }
    if (!progressed) break;
    pending = nextPending;
  }
  if (history.root_id) {
    history.current_id = history.root_id;
    localSyncStateFromCurrentHistoryNode(ctx);
  }
  return { applied, failed: entries.length - applied };
}

function localBuildHistoryFromMoves(initialTurn, moves, terminal, rootState = null, options = {}) {
  const rootId = "n_root";
  const rootSnap = rootState ? localSnapshotFromState(rootState) : null;
  const nodes = [
    {
      node_id: rootId,
      parent_id: null,
      ply: 0,
      move_str: "",
      turn: Number(initialTurn || 0),
      last_move_info: null,
      children: [],
      snapshot_pieces: rootSnap ? rootSnap.snapshot_pieces : undefined,
      snapshot_hands: rootSnap ? rootSnap.snapshot_hands : undefined,
      snapshot_turn: rootSnap ? rootSnap.snapshot_turn : undefined,
    },
  ];
  let parentNode = nodes[0];
  let turn = Number(initialTurn || 0);
  let ply = 0;
  let seq = 0;
  for (let i = 0; i < moves.length; i += 1) {
    const moveStr = String(moves[i] || "").trim();
    if (!moveStr) continue;
    ply += 1;
    seq += 1;
    turn = turn === 0 ? 1 : 0;
    const nodeId = `n_m${String(seq).padStart(6, "0")}`;
    const node = {
      node_id: nodeId,
      parent_id: parentNode.node_id,
      ply,
      move_str: moveStr,
      turn,
      last_move_info: null,
      children: [],
    };
    nodes.push(node);
    if (!Array.isArray(parentNode.children)) parentNode.children = [];
    parentNode.children.push(nodeId);
    parentNode = node;
  }
  const t = String(terminal || "").trim();
  if (localIsTerminalResultText(t)) {
    ply += 1;
    seq += 1;
    const nodeId = `n_m${String(seq).padStart(6, "0")}`;
    const node = {
      node_id: nodeId,
      parent_id: parentNode.node_id,
      ply,
      move_str: t,
      turn,
      last_move_info: null,
      children: [],
    };
    nodes.push(node);
    if (!Array.isArray(parentNode.children)) parentNode.children = [];
    parentNode.children.push(nodeId);
  }
  return {
    root_id: rootId,
    current_id: rootId,
    nodes,
  };
}

function localApplyVariationsTextOnlyToHistory(history, variationLines) {
  if (!history || !Array.isArray(history.nodes)) return { applied: 0, failed: 0 };
  const entries = localParseVariationEntries(variationLines);
  if (entries.length <= 0) return { applied: 0, failed: 0 };
  const byId = new Map(history.nodes.map((n) => [String(n.node_id || ""), n]));
  const mainMap = localBuildPlyMapAlongFirstChild(history, history.root_id);
  const varMaps = new Map();
  let pending = entries.slice();
  let applied = 0;
  while (pending.length > 0) {
    let progressed = false;
    const nextPending = [];
    for (const ent of pending) {
      const baseMap = ent.parent ? varMaps.get(ent.parent) : mainMap;
      if (!baseMap) {
        nextPending.push(ent);
        continue;
      }
      const anchorId = baseMap.get(Number(ent.start_ply || 0));
      const anchor = byId.get(String(anchorId || ""));
      if (!anchor) {
        nextPending.push(ent);
        continue;
      }
      const lineMap = new Map(baseMap);
      let parent = anchor;
      let ply = Number(anchor.ply || 0);
      let turn = Number(anchor.turn || 0);
      for (const mv of Array.isArray(ent.moves) ? ent.moves : []) {
        const moveStr = String(mv || "").trim();
        if (!moveStr) continue;
        ply += 1;
        turn = turn === 0 ? 1 : 0;
        const nodeId = localGenerateHistoryNodeId({ revision: `var_${ent.id}_${ply}` }, "n_var");
        const node = {
          node_id: nodeId,
          parent_id: parent.node_id,
          ply,
          move_str: moveStr,
          turn,
          last_move_info: null,
          children: [],
        };
        if (!Array.isArray(parent.children)) parent.children = [];
        parent.children.push(nodeId);
        history.nodes.push(node);
        byId.set(nodeId, node);
        parent = node;
        lineMap.set(ply, nodeId);
      }
      if (localIsTerminalResultText(ent.result)) {
        ply += 1;
        const nodeId = localGenerateHistoryNodeId({ revision: `var_${ent.id}_${ply}` }, "n_var");
        const node = {
          node_id: nodeId,
          parent_id: parent.node_id,
          ply,
          move_str: String(ent.result),
          turn,
          last_move_info: null,
          children: [],
        };
        if (!Array.isArray(parent.children)) parent.children = [];
        parent.children.push(nodeId);
        history.nodes.push(node);
        byId.set(nodeId, node);
        parent = node;
        lineMap.set(ply, nodeId);
      }
      varMaps.set(ent.id, lineMap);
      applied += 1;
      progressed = true;
    }
    if (!progressed) break;
    pending = nextPending;
  }
  return { applied, failed: entries.length - applied };
}

function localMainlineNodeIds(history) {
  const out = [];
  if (!history || !Array.isArray(history.nodes)) return out;
  const byId = new Map(history.nodes.map((n) => [n.node_id, n]));
  let id = history.root_id;
  const seen = new Set();
  while (id && byId.has(id) && !seen.has(id)) {
    seen.add(id);
    out.push(id);
    const node = byId.get(id);
    const children = Array.isArray(node?.children) ? node.children : [];
    id = children[0] || null;
  }
  return out;
}

function localIsTerminalResultText(text) {
  const s = String(text || "").trim();
  return s === "詰み" || s === "逃れ" || s === "ステイルメイト" || s === "千日手";
}

function localSplitHistoryTerminal(moveTexts) {
  const seq = Array.isArray(moveTexts) ? moveTexts.filter((v) => String(v || "").trim().length > 0) : [];
  if (seq.length <= 0) return { moves: [], terminal: null };
  const last = String(seq[seq.length - 1] || "").trim();
  if (localIsTerminalResultText(last)) {
    return { moves: seq.slice(0, -1), terminal: last };
  }
  return { moves: seq, terminal: null };
}

function localNormalizeMoveForExport(moveText) {
  const token = String(moveText || "").trim();
  if (!token) return "";
  if (!token.includes("/")) {
    return localStripExportOwnerPrefixHead(token).trim();
  }
  const parts = token.split("/");
  if (parts.length <= 0) return token;
  parts[0] = localStripExportOwnerPrefixHead(String(parts[0] || "").trim());
  for (let i = 1; i < parts.length; i += 1) {
    parts[i] = localStripExportOwnerPrefixTail(String(parts[i] || "").trim());
  }
  return parts.join("/").trim();
}

function localRepeatTokenWithExplicitToIfSame(node) {
  const token = String(node?.move_str || "").trim();
  if (!token) return token;
  let prefix = "";
  let body = token;
  if (body.startsWith("v▲") || body.startsWith("v△")) {
    prefix = body.slice(0, 2);
    body = body.slice(2);
  } else if (body[0] === "▲" || body[0] === "△" || body[0] === "v") {
    prefix = body[0];
    body = body.slice(1);
  }
  if (!body.startsWith("同")) return token;
  const info = localExtractLastMoveInfo(node?.last_move_info || null);
  const to = info?.to || null;
  if (!to) {
    throw localApiError("INVALID_REQUEST", "cannot expand same-square move in repeat segment");
  }
  const tx = Array.isArray(to) ? Number(to[0]) : Number(to.x);
  const ty = Array.isArray(to) ? Number(to[1]) : Number(to.y);
  if (!localInBoard(tx, ty)) {
    throw localApiError("INVALID_REQUEST", "repeat segment move target is invalid");
  }
  return `${prefix}${9 - tx}${ty + 1}${body.slice(1)}`;
}

function localBuildRepeatSegmentTokens(ctx, fromPly, toPly) {
  const nodes = localHistoryMainlineNodes(ctx).filter((n) => Number(n?.ply || 0) > 0);
  const total = nodes.length;
  if (total <= 0) {
    throw localApiError("INVALID_REQUEST", "no history available");
  }
  if (fromPly < 1 || toPly < 1 || fromPly > toPly) {
    throw localApiError("INVALID_REQUEST", "invalid repeat range/count");
  }
  if (toPly > total) {
    throw localApiError("INVALID_REQUEST", `repeat end ply exceeds mainline length: ${total}`);
  }
  const targetNodes = nodes.slice(fromPly - 1, toPly);
  const moveTokens = [];
  for (let i = 0; i < targetNodes.length; i += 1) {
    const node = targetNodes[i];
    let token = String(node?.move_str || "").trim();
    if (!token) continue;
    if (localIsTerminalResultText(token)) {
      throw localApiError("INVALID_REQUEST", "terminal result cannot be included in repeat segment");
    }
    if (i === 0) token = localRepeatTokenWithExplicitToIfSame(node);
    moveTokens.push(token);
  }
  if (moveTokens.length <= 0) {
    throw localApiError("INVALID_REQUEST", "repeat segment has no applicable moves");
  }
  return moveTokens;
}

function localCollectLineNodesFromStart(byId, startId) {
  const out = [];
  let id = startId;
  const seen = new Set();
  while (id && byId.has(id) && !seen.has(id)) {
    seen.add(id);
    const node = byId.get(id);
    out.push(node);
    const children = Array.isArray(node?.children) ? node.children : [];
    id = children[0] || null;
  }
  return out;
}

function localUniqueChildIds(children) {
  const out = [];
  const seen = new Set();
  for (const raw of Array.isArray(children) ? children : []) {
    const id = String(raw || "");
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push(id);
  }
  return out;
}

function localCollectVariationEntriesFromHistory(history) {
  if (!history || !Array.isArray(history.nodes)) return [];
  const byId = new Map(history.nodes.map((n) => [n.node_id, n]));
  const entries = [];
  let nextId = 1;

  const registerVariation = (anchorNode, startChildId, parentVarId) => {
    const lineNodes = localCollectLineNodesFromStart(byId, startChildId);
    if (lineNodes.length <= 0) return;
    const varId = `V${nextId}`;
    nextId += 1;
    entries.push({
      id: varId,
      parent: parentVarId || null,
      start_ply: Number(anchorNode?.ply || 0),
      line_nodes: lineNodes,
    });
    for (const lineNode of lineNodes) {
      const children = localUniqueChildIds(lineNode?.children);
      for (let i = 1; i < children.length; i += 1) {
        registerVariation(lineNode, children[i], varId);
      }
    }
  };

  const topIds = localMainlineNodeIds(history);
  for (const nodeId of topIds) {
    const node = byId.get(nodeId);
    if (!node) continue;
    const children = localUniqueChildIds(node?.children);
    for (let i = 1; i < children.length; i += 1) {
      registerVariation(node, children[i], null);
    }
  }
  return entries;
}

function localFormatVariationLinesFromHistory(history) {
  const entries = localCollectVariationEntriesFromHistory(history);
  if (entries.length <= 0) return [];
  const lines = ["変化:"];
  for (const entry of entries) {
    const seq = entry.line_nodes
      .map((n) => {
        const nextTurn = Number(n?.state?.turn) === 1 ? 1 : 0;
        const moveOwner = 1 - nextTurn;
        return localApplyKingGlyphToNotation(localNormalizeMoveForExport(n?.move_str), moveOwner);
      })
      .filter((s) => s.length > 0);
    const split = localSplitHistoryTerminal(seq);
    const moveText = split.moves.length > 0 ? split.moves.join(" ") : "-";
    const parts = [`${entry.id}:`];
    if (entry.parent) parts.push(`親=${entry.parent}`);
    parts.push(`起点=${Number(entry.start_ply || 0)}手局面`);
    parts.push(`手順=${moveText}`);
    if (split.terminal) parts.push(`終局=${split.terminal}`);
    lines.push(parts.join(" "));
  }
  return lines;
}

function localDisplayPieceName(name) {
  const pieceName = localCanonicalPieceName(name);
  const mapped = displayNames?.[pieceName];
  if (mapped !== undefined && mapped !== null && String(mapped).trim() !== "") {
    const ms = String(mapped);
    if (pieceName === "Zero" && ms.trim().toLowerCase() === "zero") {
      return "零";
    }
    if (localIsNeutralImitatorName(pieceName)) {
      return localNormalizeNeutralImitatorDisplay(pieceName, ms);
    }
    return ms;
  }
  if (pieceName === "Zero") return "零";
  if (localIsNeutralImitatorName(pieceName)) {
    return localNormalizeNeutralImitatorDisplay(pieceName, pieceName === "Teleport-Imitator" ? "□" : "■");
  }
  return pieceName;
}

function localUiKingGlyphByOwner(owner = null) {
  const n = Number(owner);
  if (n === 1) return getUiSettingSelect("defender_king_glyph", "玉");
  if (n === 0) return getUiSettingSelect("attacker_king_glyph", "玉");
  if (n === -1) return getUiSettingSelect("defender_king_glyph", "玉");
  return getUiSettingSelect("attacker_king_glyph", "玉");
}

function localDisplayPieceNameByOwner(name, owner = null) {
  const pieceName = localCanonicalPieceName(name);
  if (pieceName === "玉" || pieceName === "王") {
    return localUiKingGlyphByOwner(owner);
  }
  return localDisplayPieceName(pieceName);
}

function localKifuPieceNameForUsage(name) {
  if (localHasOwn(LOCAL_KIFU_USAGE_NAME_MAP, name)) {
    return LOCAL_KIFU_USAGE_NAME_MAP[name];
  }
  return localDisplayPieceName(name);
}

function localNormalizeNeutralImitatorDisplay(name, text) {
  const raw = String(text || "").trim();
  if (!raw) {
    return String(name || "") === "Teleport-Imitator" ? "□" : "■";
  }
  if (!localIsNeutralImitatorName(name)) return raw;
  const stripped = raw.replace(/\(I\)/gi, "").trim();
  if (stripped) return stripped;
  return String(name || "") === "Teleport-Imitator" ? "□" : "■";
}

function localFormatFairyUsageLeftLabel(name, displayOverride = null) {
  const boardText = String(displayOverride || localDisplayPieceName(name) || "").trim();
  if (localIsNeutralImitatorName(name)) {
    return boardText;
  }
  const kifuText = localKifuPieceNameForUsage(name);
  if (kifuText && boardText.endsWith(`(${kifuText})`)) {
    return boardText;
  }
  if (kifuText && kifuText !== boardText) {
    return `${boardText}(${kifuText})`;
  }
  return boardText;
}

const LOCAL_COMPACT_ATTR_KEYS = Object.freeze(["display_name", "to_hand", "is_king", "immortal"]);

function localCollectChangedAttrsByEffective(effectiveAttrs, baseAttrs) {
  const effective = localNormalizePieceAttrs(effectiveAttrs || {});
  const base = localNormalizePieceAttrs(baseAttrs || {});
  const changed = {};
  for (const key of LOCAL_ATTR_KEYS) {
    if (!localDeepEqualSimple(effective[key], base[key])) {
      changed[key] = effective[key];
    }
  }
  return changed;
}

function localCollectChangedAttrsFromRaw(rawAttrs, baseAttrs) {
  const raw = rawAttrs && typeof rawAttrs === "object" ? rawAttrs : {};
  const base = localNormalizePieceAttrs(baseAttrs || {});
  const changed = {};
  for (const key of LOCAL_ATTR_KEYS) {
    if (!localHasOwn(raw, key)) continue;
    if (!localDeepEqualSimple(raw[key], base[key])) {
      changed[key] = raw[key];
    }
  }
  return changed;
}

function localEffectiveDisplayLabel(name, effectiveAttrs) {
  const dn = typeof effectiveAttrs?.display_name === "string" ? effectiveAttrs.display_name.trim() : "";
  if (dn) return localNormalizeNeutralImitatorDisplay(name, dn);
  return localDisplayPieceName(name);
}

function localBuildCompactAttrBody(name, changedAttrs) {
  const changed = changedAttrs && typeof changedAttrs === "object" ? changedAttrs : {};
  const keys = Object.keys(changed);
  if (keys.some((k) => !LOCAL_COMPACT_ATTR_KEYS.includes(k))) return null;
  let prefix = "";
  if (localHasOwn(changed, "to_hand")) {
    if (changed.to_hand === false) prefix += "取捨";
    else if (changed.to_hand === true) prefix += "持駒";
    else return null;
  }
  if (localHasOwn(changed, "immortal")) {
    if (changed.immortal === true) prefix += "不滅";
    else if (changed.immortal === false) prefix += "非不滅";
    else return null;
  }
  let suffix = "";
  if (localHasOwn(changed, "is_king")) {
    if (changed.is_king === true) suffix += "王";
    else if (changed.is_king === false) suffix += "非王";
    else return null;
  }
  return `${prefix}${name}${suffix}`;
}

function localBuildCompactAttrLine(name, changedAttrs, leftLabel) {
  const body = localBuildCompactAttrBody(name, changedAttrs);
  if (!body) return null;
  const left = String(leftLabel || "").trim();
  if (!left) return null;
  return `${left}:${body}`;
}

function localFormatSingleAttrToken(key, value) {
  if (key === "display_name") {
    if (value === null || String(value || "").trim() === "") return "表示文字なし";
    return `表示文字（${value}）`;
  }
  if (key === "to_hand") return value ? "持ち駒属性" : "取り捨て";
  if (key === "is_king") return value ? "王属性" : "非王属性";
  if (key === "immortal") return value ? "不滅属性" : "非不滅属性";
  if (key === "promote_to") {
    if (!value) return "成れない";
    return `成り先${localDisplayPieceName(value)}`;
  }
  if (key === "promote_attrs") {
    if (!value || typeof value !== "object") return "成先属性なし";
    const innerTokens = [];
    for (const subKey of ["display_name", "to_hand", "is_king", "immortal", "promote_to"]) {
      if (localHasOwn(value, subKey)) {
        innerTokens.push(localFormatSingleAttrToken(subKey, value[subKey]));
      }
    }
    if (localHasOwn(value, "promote_attrs") && value.promote_attrs && typeof value.promote_attrs === "object") {
      innerTokens.push("成先属性(...)");
    }
    const inner = innerTokens.length > 0 ? innerTokens.join("、") : "設定";
    return `成先属性（${inner}）`;
  }
  return `${key}=${String(value)}`;
}

function localFormatAttrTokensFromDict(attrs) {
  const out = [];
  const a = attrs && typeof attrs === "object" ? attrs : {};
  for (const key of LOCAL_ATTR_KEYS) {
    if (!localHasOwn(a, key)) continue;
    out.push(localFormatSingleAttrToken(key, a[key]));
  }
  return out;
}

function localCollectUsedFairyPieceNames(ctx, pieces) {
  const used = new Set();
  for (const p of Array.isArray(pieces) ? pieces : []) {
    const name = String(p?.name || "").trim();
    if (!name || LOCAL_STANDARD_PIECE_NAMES.has(name)) continue;
    if (localHasOwn(LOCAL_PIECE_SPECS, name)) used.add(name);
  }
  const hands = ctx?.state?.hands && typeof ctx.state.hands === "object" ? ctx.state.hands : {};
  for (const owner of ["0", "1"]) {
    const arr = Array.isArray(hands[owner]) ? hands[owner] : [];
    for (const raw of arr) {
      const name = localHandTokenName(raw);
      if (!name || LOCAL_STANDARD_PIECE_NAMES.has(name)) continue;
      if (localHasOwn(LOCAL_PIECE_SPECS, name)) used.add(name);
    }
  }
  const orderMap = new Map();
  const names = Array.isArray(editPieceNames) ? editPieceNames : [];
  for (let i = 0; i < names.length; i += 1) {
    orderMap.set(String(names[i] || ""), i);
  }
  return Array.from(used).sort((a, b) => {
    const ai = orderMap.has(a) ? Number(orderMap.get(a)) : Number.MAX_SAFE_INTEGER;
    const bi = orderMap.has(b) ? Number(orderMap.get(b)) : Number.MAX_SAFE_INTEGER;
    if (ai !== bi) return ai - bi;
    const ad = localDisplayPieceName(a);
    const bd = localDisplayPieceName(b);
    const dc = String(ad).localeCompare(String(bd), "ja");
    if (dc !== 0) return dc;
    return String(a).localeCompare(String(b), "ja");
  });
}

function localCollectAttrInfoLines(ctx, pieces) {
  const lines = [];
  const usedFairyNames = localCollectUsedFairyPieceNames(ctx, pieces);
  const usedFairySet = new Set(usedFairyNames);
  const typeAttrs = ctx?.typeAttrs && typeof ctx.typeAttrs === "object" ? ctx.typeAttrs : {};
  const typeNames = Object.keys(typeAttrs).sort((a, b) => String(a).localeCompare(String(b), "ja"));
  for (const name of typeNames) {
    if (usedFairySet.has(name)) {
      // 使用フェアリー駒行で属性を併記するため、重複出力を避ける。
      continue;
    }
    const attrs = localNormalizeRawPieceAttrs(typeAttrs[name]);
    const defaults = localDefaultPieceAttrs(name);
    const changed = localCollectChangedAttrsFromRaw(attrs, defaults);
    if (Object.keys(changed).length <= 0) continue;
    const effective = localMergePieceAttrs(defaults, attrs);
    const leftLabel = localEffectiveDisplayLabel(name, effective);
    const compactLine = localBuildCompactAttrLine(name, changed, leftLabel);
    if (compactLine) {
      lines.push(compactLine);
      continue;
    }
    const tokens = localFormatAttrTokensFromDict(changed);
    if (tokens.length > 0) {
      lines.push(`${leftLabel}:${tokens.join("、")}`);
    }
  }

  const items = Array.isArray(pieces) ? pieces.slice() : [];
  items.sort((a, b) => {
    const ay = Number(a?.y || 0);
    const by = Number(b?.y || 0);
    if (ay !== by) return ay - by;
    return Number(a?.x || 0) - Number(b?.x || 0);
  });
  for (const p of items) {
    if (!p) continue;
    const attrs = localNormalizeRawPieceAttrs(p.attrs);
    if (Object.keys(attrs).length <= 0) continue;
    const base = localTypeAttrsForName(ctx, p.name);
    const changed = localCollectChangedAttrsFromRaw(attrs, base);
    if (Object.keys(changed).length <= 0) continue;
    const effective = localMergePieceAttrs(base, attrs);
    const suji = 9 - Number(p.x || 0);
    const dan = Number(p.y || 0) + 1;
    const leftLabel = `${suji}${dan}${localEffectiveDisplayLabel(p.name, effective)}`;
    const compactLine = localBuildCompactAttrLine(p.name, changed, leftLabel);
    if (compactLine) {
      lines.push(compactLine);
      continue;
    }
    const tokens = localFormatAttrTokensFromDict(changed);
    if (tokens.length > 0) {
      lines.push(`${leftLabel}:${tokens.join("、")}`);
    }
  }

  for (const name of usedFairyNames) {
    const attrs = localNormalizeRawPieceAttrs(typeAttrs?.[name] || {});
    const defaults = localDefaultPieceAttrs(name);
    const changed = localCollectChangedAttrsFromRaw(attrs, defaults);
    const effective = localMergePieceAttrs(defaults, attrs);
    const leftLabel = localFormatFairyUsageLeftLabel(name, localEffectiveDisplayLabel(name, effective));
    if (Object.keys(changed).length <= 0) {
      lines.push(`${leftLabel}:${name}`);
      continue;
    }
    const compactLine = localBuildCompactAttrLine(name, changed, leftLabel);
    if (compactLine) {
      lines.push(compactLine);
      continue;
    }
    const tokens = localFormatAttrTokensFromDict(changed);
    if (tokens.length > 0) {
      lines.push(`${leftLabel}:${name}（${tokens.join("、")}）`);
    } else {
      lines.push(`${leftLabel}:${name}`);
    }
  }
  return lines;
}

function localBuildKifuText(ctx) {
  const st = ctx?.state || {};
  const mainlineIds = localMainlineNodeIds(ctx.history);
  const byId = new Map((ctx.history?.nodes || []).map((n) => [n.node_id, n]));
  const rootNode = byId.get(ctx?.history?.root_id || "") || null;
  const currentPieces = Array.isArray(st?.board?.pieces) ? st.board.pieces : [];
  const rootPieces = Array.isArray(rootNode?.snapshot_pieces) ? rootNode.snapshot_pieces : null;
  const rootHands =
    rootNode?.snapshot_hands && typeof rootNode.snapshot_hands === "object" ? rootNode.snapshot_hands : null;
  const pieces = rootPieces || currentPieces;
  const hands = {
    "0": Array.isArray(rootHands?.["0"])
      ? rootHands["0"]
      : Array.isArray(st?.hands?.["0"])
        ? st.hands["0"]
        : [],
    "1": Array.isArray(rootHands?.["1"])
      ? rootHands["1"]
      : Array.isArray(st?.hands?.["1"])
        ? st.hands["1"]
        : [],
  };
  const pieceMap = new Map(pieces.map((p) => [`${p.x},${p.y}`, p]));
  const rootTurnRaw = Number(rootNode?.snapshot_turn);
  const fallbackTurn = Number(st?.turn || 0) === 1 ? 1 : 0;
  const overrideTurnRaw = Number(ctx?.initial_turn_override);
  const initialTurn = Number.isFinite(overrideTurnRaw)
    ? overrideTurnRaw === 1
      ? 1
      : 0
    : Number.isFinite(rootTurnRaw)
      ? rootTurnRaw === 1
        ? 1
        : 0
      : fallbackTurn;
  const moveStrings = [];
  let terminal = null;
  for (let i = 1; i < mainlineIds.length; i += 1) {
    const n = byId.get(mainlineIds[i]);
    if (!n) continue;
    const nextTurn = Number(n?.state?.turn) === 1 ? 1 : 0;
    const moveOwner = 1 - nextTurn;
    const mv = localApplyKingGlyphToNotation(localNormalizeMoveForExport(n.move_str), moveOwner);
    if (!mv) continue;
    if (localIsTerminalResultText(mv)) {
      terminal = mv;
      continue;
    }
    moveStrings.push(mv);
  }
  const actualPly = moveStrings.length;

  const lines = [];
  const ruleNameBase = localRuleNameFromRules(st?.rules || {}, { includePly: false, typeAttrs: ctx?.typeAttrs || {} });
  const configuredPly = Number.parseInt(st?.rules?.problem_ply, 10);
  const titlePly = Number.isFinite(configuredPly) && configuredPly > 0 ? configuredPly : actualPly;
  const turnSuffix = initialTurn === 1 ? "(受先)" : "";
  const ruleName = `${ruleNameBase}${turnSuffix} ${titlePly}手`.trim();
  lines.push(ruleName);
  lines.push("");

  const disp = (name, owner = null) => localDisplayPieceNameByOwner(name, owner);
  const shouldPrefixNeutralForExport = (name) => !localIsFixedNeutralBoardPieceName(name);
  const handLine = (owner) => {
    const arr = Array.isArray(hands?.[String(owner)]) ? hands[String(owner)] : [];
    if (arr.length === 0) return "持駒：なし";
    const counts = new Map();
    for (const raw of arr) {
      const token = localParseHandToken(raw).token || String(raw || "");
      counts.set(token, (counts.get(token) || 0) + 1);
    }
    const tokenBaseName = (token) => localHandTokenName(token);
    const ordered = [
      ...LOCAL_HAND_NAME_ORDER.flatMap((base) =>
        Array.from(counts.keys()).filter((token) => tokenBaseName(token) === base)
      ),
      ...Array.from(counts.keys())
        .filter((token) => !LOCAL_HAND_NAME_ORDER.includes(tokenBaseName(token)))
        .sort((a, b) => tokenBaseName(a).localeCompare(tokenBaseName(b), "ja")),
    ];
    const body = ordered
      .map((token) => {
        const c = counts.get(token) || 0;
        const info = localParseHandToken(token);
        const baseName = String(info.name || "");
        const shown = `${info.neutral && shouldPrefixNeutralForExport(baseName) ? "n" : ""}${disp(baseName, info.neutral ? -1 : owner)}`;
        return c > 1 ? `${shown}${c}` : shown;
      })
      .join("");
    return `持駒：${body}`;
  };

  lines.push(handLine(1));
  lines.push("  ９ ８ ７ ６ ５ ４ ３ ２ １ ");
  lines.push("+---------------------------+");
  for (let y = 0; y < 9; y += 1) {
    const cells = [];
    for (let x = 0; x < 9; x += 1) {
      const p = pieceMap.get(`${x},${y}`);
      if (!p) {
        cells.push("・");
        continue;
      }
      const base = disp(p.name, p.owner);
      if (p.owner === 1) {
        cells.push(`v${base}`);
      } else if (Number(p.owner) === -1) {
        cells.push(`${shouldPrefixNeutralForExport(p.name) ? "n" : ""}${base}`);
      } else {
        cells.push(base);
      }
    }
    lines.push(`|${localFormatBoardRowBodyForKifu(cells)}|${LOCAL_KIFU_RANK_LABELS[y]}`);
  }
  lines.push("+---------------------------+");
  lines.push(handLine(0));
  lines.push("");
  const attrLines = localCollectAttrInfoLines(ctx, pieces);
  if (attrLines.length > 0) {
    lines.push(...attrLines);
    lines.push("");
  }

  if (moveStrings.length > 0) {
    const chunk = 10;
    for (let i = 0; i < moveStrings.length; i += chunk) {
      lines.push(moveStrings.slice(i, i + chunk).join(" "));
    }
  }
  if (moveStrings.length > 0 || terminal) {
    let endLine = `まで ${actualPly}手`;
    if (terminal) endLine += ` で${terminal}`;
    lines.push(endLine);
  }
  const variationLines = localFormatVariationLinesFromHistory(ctx?.history);
  if (variationLines.length > 0) {
    lines.push("");
    lines.push(...variationLines);
  }

  return `${lines.join("\n")}\n`;
}

async function localHandleEditPost(path, expectedRevision, body) {
  const sid = localExtractSessionIdFromPath(path);
  if (!sid) throw localApiError("INVALID_REQUEST", "invalid session path");
  const ctx = localGetSessionContextOrThrow(sid);
  localEnsureRevision(ctx, expectedRevision);
  if (ctx.state.mode !== "edit") {
    throw localApiError("INVALID_EDIT", "edit endpoint is available only in edit mode");
  }
  const base = `/api/v1/sessions/${sid}/edit/`;
  const action = String(path || "").startsWith(base) ? String(path).slice(base.length) : "";
  const state = ctx.state;

  if (action === "put-piece") {
    const x = Number.parseInt(body?.x, 10);
    const y = Number.parseInt(body?.y, 10);
    const name = String(body?.name || "").trim();
    const owner = Number.parseInt(body?.owner, 10);
    if (!Number.isFinite(x) || !Number.isFinite(y) || !name) {
      throw localApiError("INVALID_REQUEST", "invalid put-piece args");
    }
    localRemovePieceAt(state, x, y);
    const hasAttrs = localHasOwn(body || {}, "attrs");
    const attrs = hasAttrs ? localNormalizeRawPieceAttrs(body?.attrs) : {};
    if (attrs.promote_to === name && attrs.promote_to !== localDefaultPromoteTo(name)) {
      attrs.promote_to = localDefaultPromoteTo(name);
    }
    const normalizedOwner = localIsFixedNeutralBoardPieceName(name) ? -1 : owner === 0 || owner === 1 || owner === -1 ? owner : 0;
    state.board.pieces.push({
      x,
      y,
      name,
      owner: normalizedOwner,
      attrs,
    });
  } else if (action === "remove-piece") {
    const x = Number.parseInt(body?.x, 10);
    const y = Number.parseInt(body?.y, 10);
    localRemovePieceAt(state, x, y);
  } else if (action === "add-hand") {
    const owner = Number.parseInt(body?.owner, 10);
    const parsedHand = localParseHandToken(body?.name);
    const name = String(parsedHand.name || "").trim();
    const neutral = Boolean(body?.neutral) || parsedHand.neutral;
    if ((owner !== 0 && owner !== 1) || !name) {
      throw localApiError("INVALID_REQUEST", "invalid add-hand args");
    }
    if (
      localIsNeutralImitatorName(name) ||
      name === "石" ||
      name === "穴" ||
      name === "塔" ||
      localDefaultPieceAttrs(name).is_king
    ) {
      state.repeat_params = { from_ply: null, to_ply: null, repeat_count: null };
      localRefreshAllPieceEffectiveAttrs(ctx);
      ctx.history = localBaseHistoryForState(state);
      ctx.legal = localEmptyLegal();
      localTouch(ctx);
      return localOkState(ctx);
    }
    state.hands[String(owner)] = state.hands[String(owner)] || [];
    state.hands[String(owner)].push(localMakeHandToken(name, neutral));
  } else if (action === "remove-hand") {
    const owner = Number.parseInt(body?.owner, 10);
    const name = String(body?.name || "").trim();
    const hand = state.hands[String(owner)] || [];
    localRemoveFromHandArray(hand, name);
  } else if (action === "set-piece-attrs") {
    const x = Number.parseInt(body?.x, 10);
    const y = Number.parseInt(body?.y, 10);
    const p = localFindPiece(state, x, y);
    if (!p) throw localApiError("INVALID_REQUEST", "piece not found");
    p.attrs = localNormalizeRawPieceAttrs(body?.attrs);
  } else if (action === "set-type-attrs") {
    const pieceName = String(body?.piece_name || "").trim();
    if (!pieceName) throw localApiError("INVALID_REQUEST", "piece_name is required");
    const nextAttrs = localNormalizeRawPieceAttrs(body?.attrs);
    const typeAttrs = localEnsureTypeAttrsMap(ctx);
    if (Object.keys(nextAttrs).length > 0) {
      typeAttrs[pieceName] = nextAttrs;
    } else {
      delete typeAttrs[pieceName];
    }
    for (const p of state.board.pieces || []) {
      if (String(p?.name || "") === pieceName && p && typeof p === "object") {
        p.attrs = {};
      }
    }
  } else if (action === "preset") {
    const preset = String(body?.preset || "").trim();
    if (preset === "switch_turn") {
      state.turn = state.turn === 0 ? 1 : 0;
    } else if (preset === "clear_gote_hand_to_box") {
      state.hands["1"] = [];
    } else if (preset === "adjust_standard_count") {
      localAdjustToStandardCount(state);
    } else if (preset === "hirate" || preset === "tsume" || preset === "clear") {
      const cloned = localBuildPresetState(preset);
      state.turn = cloned.turn;
      state.board = cloned.board;
      state.hands = cloned.hands;
      state.rules = cloned.rules;
      state.rule_name = cloned.rule_name;
      state.repeat_params = { from_ply: null, to_ply: null, repeat_count: null };
      ctx.typeAttrs = {};
    } else {
      throw localApiError("INVALID_REQUEST", `unknown preset: ${preset}`);
    }
  } else {
    throw localApiError("LOCAL_ENGINE_NOT_READY", `edit action not implemented: ${action}`);
  }

  state.repeat_params = { from_ply: null, to_ply: null, repeat_count: null };
  localRefreshAllPieceEffectiveAttrs(ctx);
  ctx.history = localBaseHistoryForState(state);
  ctx.legal = localEmptyLegal();
  localTouch(ctx);
  return localOkState(ctx);
}

function createLocalEngine() {
  const warned = new Set();
  const strictLocalOnly = resolveStrictLocalOnly();
  let http = null;
  const getHttpFallback = () => {
    if (!http) http = createHttpEngine();
    return http;
  };
  const localImpl = Object.create(null);
  localImpl.fetchMeta = async () => {
    const meta = await loadLocalMetaFromStatic();
    return { ok: true, revision: 0, data: { meta } };
  };
  localImpl.createSession = async (preset) => {
    const key = String(preset || "tsume").trim() || "tsume";
    if (!(key === "hirate" || key === "tsume" || key === "clear")) {
      throw localApiError("INVALID_REQUEST", `unknown preset: ${key}`);
    }
    const ctx = localBuildContextFromState(localBuildPresetState(key));
    localSessions.set(ctx.sessionId, ctx);
    return localOkState(ctx);
  };
  localImpl.getSession = async (sid) => {
    const ctx = localGetSessionContextOrThrow(sid);
    return localOkState(ctx);
  };
  localImpl.patchRules = async (sid, expectedRevision, rulesPatch) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    const meta = await loadLocalMetaFromStatic();
    localApplyRulePatch(ctx, rulesPatch, meta);
    localTouch(ctx);
    return localOkState(ctx);
  };
  localImpl.patchMode = async (sid, expectedRevision, mode) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    const nextMode = String(mode || "");
    if (nextMode !== "play" && nextMode !== "edit") {
      throw localApiError("INVALID_REQUEST", "mode must be play or edit");
    }
    const prevMode = String(ctx.state.mode || "");
    ctx.state.mode = nextMode;
    if (nextMode === "edit" && prevMode !== "edit") {
      ctx.history = localBaseHistoryForState(ctx.state);
      ctx.legal = localEmptyLegal();
    }
    localTouch(ctx);
    return localOkState(ctx);
  };
  localImpl.getLegalAll = async (sid) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localComputeLegalAll(ctx);
    return localOkLegal(ctx);
  };
  localImpl.getLegalPiece = async (sid, x, y) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localComputeLegalAll(ctx);
    const tx = Number.parseInt(x, 10);
    const ty = Number.parseInt(y, 10);
    const moves = (ctx?.legal?.moves || [])
      .filter(
        (m) =>
          m &&
          m.kind === "move" &&
          Number(m?.from?.x) === tx &&
          Number(m?.from?.y) === ty
      )
      .map((m) => localSerializeCoord(m.to));
    return localOk(ctx, { moves });
  };
  localImpl.getLegalHand = async (sid, owner, name) => {
    const ctx = localGetSessionContextOrThrow(sid);
    const handOwner = Number.parseInt(owner, 10);
    if (handOwner !== 0 && handOwner !== 1) {
      throw localApiError("INVALID_REQUEST", "owner must be 0 or 1");
    }
    const parsedHand = localParseHandToken(name);
    const handToken = String(parsedHand.token || "").trim();
    const pieceName = String(parsedHand.name || "").trim();
    const allIn = Boolean(ctx?.state?.rules?.all_in_shogi);
    const turn = Number(ctx?.state?.turn || 0);
    if (!allIn && handOwner !== turn) {
      return localOk(ctx, { moves: [] });
    }
    const hand = Array.isArray(ctx?.state?.hands?.[String(handOwner)]) ? ctx.state.hands[String(handOwner)] : [];
    if (!pieceName || !hand.some((token) => localHandTokenEquals(token, handToken || pieceName))) {
      return localOk(ctx, { moves: [] });
    }
    localComputeLegalAll(ctx);
    const moves = (ctx?.legal?.moves || [])
      .filter(
        (m) =>
          m &&
          m.kind === "drop" &&
          Number(m.owner) === handOwner &&
          localHandTokenEquals(m.hand_token || m.name, handToken || pieceName)
      )
      .map((m) => localSerializeCoord(m.to));
    return localOk(ctx, { moves });
  };
  localImpl.getHistoryTree = async (sid) => {
    const ctx = localGetSessionContextOrThrow(sid);
    return localOkHistory(ctx);
  };
  localImpl.getAttackOverlay = async (sid, _params) => {
    const ctx = localGetSessionContextOrThrow(sid);
    const params = _params && typeof _params.get === "function" ? _params : new URLSearchParams();
    const showAttackerPieces = localBoolFromQueryParams(params, "show_attacker_pieces", false);
    const showDefenderPieces = localBoolFromQueryParams(params, "show_defender_pieces", false);
    const showAttackerKing = localBoolFromQueryParams(params, "show_attacker_king", false);
    const showDefenderKing = localBoolFromQueryParams(params, "show_defender_king", false);
    const arrowAttackerPieces = localBoolFromQueryParams(params, "arrow_attacker_pieces", false);
    const arrowDefenderPieces = localBoolFromQueryParams(params, "arrow_defender_pieces", false);

    const pieces = Array.isArray(ctx?.state?.board?.pieces) ? ctx.state.board.pieces : [];
    const rules = ctx?.state?.rules && typeof ctx.state.rules === "object" ? ctx.state.rules : {};
    const attackerNonKingMap = showAttackerPieces ? localCollectAttackMap(pieces, 0, false, rules) : new Map();
    const defenderNonKingMap = showDefenderPieces ? localCollectAttackMap(pieces, 1, false, rules) : new Map();
    const attackerKingMap =
      showAttackerKing || showAttackerPieces ? localCollectAttackMap(pieces, 0, true, rules) : new Map();
    const defenderKingMap =
      showDefenderKing || showDefenderPieces ? localCollectAttackMap(pieces, 1, true, rules) : new Map();

    const attackerPieceMap = showAttackerPieces
      ? localMergeAttackMaps(attackerNonKingMap, attackerKingMap)
      : new Map();
    const defenderPieceMap = showDefenderPieces
      ? localMergeAttackMaps(defenderNonKingMap, defenderKingMap)
      : new Map();

    const attackerPieceSquares = showAttackerPieces ? localAttackSquaresFromMap(attackerPieceMap) : [];
    const defenderPieceSquares = showDefenderPieces ? localAttackSquaresFromMap(defenderPieceMap) : [];
    const attackerKingSquares = showAttackerKing ? localAttackSquaresFromMap(attackerKingMap) : [];
    const defenderKingSquares = showDefenderKing ? localAttackSquaresFromMap(defenderKingMap) : [];
    const attackerKingDanger = showAttackerKing ? localAllAttackSquaresByOwner(pieces, 1, rules) : [];
    const defenderKingDanger = showDefenderKing ? localAllAttackSquaresByOwner(pieces, 0, rules) : [];
    const attackerPiecePaths =
      showAttackerPieces && arrowAttackerPieces ? localAttackPathsFromMap(pieces, attackerPieceMap, rules) : [];
    const defenderPiecePaths =
      showDefenderPieces && arrowDefenderPieces ? localAttackPathsFromMap(pieces, defenderPieceMap, rules) : [];

    return localOk(ctx, {
      attacker_piece_paths: attackerPiecePaths,
      defender_piece_paths: defenderPiecePaths,
      attacker_piece_squares: attackerPieceSquares,
      defender_piece_squares: defenderPieceSquares,
      attacker_king_squares: attackerKingSquares,
      defender_king_squares: defenderKingSquares,
      attacker_king_danger: attackerKingDanger,
      defender_king_danger: defenderKingDanger,
    });
  };
  localImpl.applyMove = async (sid, body) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localApplyMoveCore(ctx, body || {});
    localComputeLegalAll(ctx);
    return localOkStateWithViews(ctx, { includeLegal: true, includeHistory: true });
  };
  localImpl.applyDrop = async (sid, body) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localApplyDropCore(ctx, body || {});
    localComputeLegalAll(ctx);
    return localOkStateWithViews(ctx, { includeLegal: true, includeHistory: true });
  };
  localImpl.historySelect = async (sid, expectedRevision, nodeId) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    const changed = localHistorySelectNode(ctx, nodeId);
    if (!changed) {
      localTouch(ctx);
    }
    localComputeLegalAll(ctx);
    return localOkStateWithViews(ctx, { includeLegal: true, includeHistory: true });
  };
  localImpl.historyAction = async (sid, kind, expectedRevision, queryParams = null) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    const skipLegalCompute = localReadBoolQueryParam(queryParams, "skip_legal_compute", false);
    const changed = localHistoryActionCore(ctx, kind, {
      refreshEffectiveAttrs: !skipLegalCompute,
      noTouch: skipLegalCompute,
    });
    const includeLegal = localReadBoolQueryParam(queryParams, "include_legal", true);
    const includeHistory = localReadBoolQueryParam(queryParams, "include_history", true);
    const fastState = localReadBoolQueryParam(queryParams, "fast_state", false);
    if (skipLegalCompute && changed) {
      // 高速履歴移動後に getLegalAll を呼んだとき、前局面の合法手キャッシュを返さないよう無効化する。
      ctx.legal_cache_revision = -1;
    }
    if (!skipLegalCompute && (includeLegal || changed)) {
      localComputeLegalAll(ctx);
    }
    const data = {
      moved: Boolean(changed),
      state: fastState ? localSerializeStateFast(ctx) : localSerializeState(ctx),
    };
    if (includeLegal) data.legal = localSerializeLegal(ctx);
    if (includeHistory) data.history = localSerializeHistory(ctx);
    return localOk(ctx, data);
  };
  localImpl.historyRepeatApply = async (sid, expectedRevision, payload = {}) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    if (ctx.state.mode !== "play") {
      throw localApiError("INVALID_EDIT", "play endpoint is not available in edit mode");
    }
    const fromPly = Number.parseInt(payload?.from_ply, 10);
    const toPly = Number.parseInt(payload?.to_ply, 10);
    const repeatCount = Number.parseInt(payload?.repeat_count, 10);
    if (!Number.isFinite(fromPly) || !Number.isFinite(toPly) || !Number.isFinite(repeatCount)) {
      throw localApiError("INVALID_REQUEST", "from_ply/to_ply/repeat_count must be integers");
    }
    if (fromPly <= 0 || toPly <= 0 || repeatCount <= 0 || fromPly > toPly) {
      throw localApiError("INVALID_REQUEST", "invalid repeat range/count");
    }
    const moveTexts = localBuildRepeatSegmentTokens(ctx, fromPly, toPly);

    const backupRevision = ctx.revision;
    const backupState = cloneJson(ctx.state);
    const backupHistory = cloneJson(ctx.history);
    const backupLegal = cloneJson(ctx.legal);
    const backupLegalCacheRevision = Number(ctx.legal_cache_revision);

    let applied = 0;
    try {
      for (let rep = 1; rep <= repeatCount; rep += 1) {
        for (let i = 0; i < moveTexts.length; i += 1) {
          const targetText = moveTexts[i];
          let ok = localReplayMoveTextOnCurrent(ctx, targetText, {
            noTouch: true,
            fastHintMode: true,
            allowFullFallback: false,
          });
          if (!ok) {
            ok = localReplayMoveTextOnCurrent(ctx, targetText, {
              noTouch: true,
              fastHintMode: false,
              allowFullFallback: true,
            });
          }
          if (!ok) {
            throw localApiError("INVALID_MOVE", "repeat move not found in current legal moves", {
              repeat_index: rep,
              move_index: i + 1,
              move: targetText,
            });
          }
          applied += 1;
        }
      }
    } catch (e) {
      ctx.revision = backupRevision;
      ctx.state = backupState;
      ctx.state.revision = backupRevision;
      ctx.history = backupHistory;
      ctx.legal = backupLegal;
      ctx.legal_cache_revision = Number.isFinite(backupLegalCacheRevision) ? backupLegalCacheRevision : -1;
      throw e;
    }

    ctx.state.repeat_params = {
      from_ply: fromPly,
      to_ply: toPly,
      repeat_count: repeatCount,
    };
    localTouch(ctx);
    return localOk(ctx, {
      applied,
      saved_params: cloneJson(ctx.state.repeat_params),
      state: localSerializeState(ctx),
    });
  };
  localImpl.historyPromoteBranch = async (sid, expectedRevision, nodeId) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    localHistoryPromoteNode(ctx, nodeId);
    localTouch(ctx);
    return localOkState(ctx);
  };
  localImpl.historyDeleteBranch = async (sid, expectedRevision, nodeId) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    const changed = localHistoryDeleteNode(ctx, nodeId);
    if (!changed) {
      throw localApiError("INVALID_REQUEST", "failed to delete branch");
    }
    return localOkState(ctx);
  };
  localImpl.historyAddTerminal = async (sid, expectedRevision, result) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    if (ctx.state.mode !== "play") {
      throw localApiError("INVALID_EDIT", "play endpoint is not available in edit mode");
    }
    const text = String(result || "").trim();
    if (!localIsTerminalResultText(text)) {
      throw localApiError("INVALID_REQUEST", "result must be 詰み or 逃れ or ステイルメイト or 千日手");
    }
    const cur = localHistoryCurrentNode(ctx);
    const curText = String(cur?.move_str || "").trim();
    if (localIsTerminalResultText(curText) && cur?.parent_id) {
      ctx.history.current_id = cur.parent_id;
      localSyncStateFromCurrentHistoryNode(ctx);
    }
    localHistoryAddTerminalNode(ctx, text);
    ctx.legal = localEmptyLegal();
    return localOkState(ctx);
  };
  localImpl.ioLoadSfen = async (sid, expectedRevision, sfen) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    const parsed = localParseSfenString(sfen);
    ctx.state.board = { width: 9, height: 9, pieces: parsed.pieces };
    ctx.state.hands = { "0": parsed.hands["0"], "1": parsed.hands["1"] };
    ctx.state.turn = parsed.turn;
    ctx.state.mode = "play";
    ctx.state.repeat_params = { from_ply: null, to_ply: null, repeat_count: null };
    ctx.state.rule_name = localRuleNameFromRules(ctx.state.rules, { typeAttrs: ctx?.typeAttrs || {} });
    localRefreshAllPieceEffectiveAttrs(ctx);
    ctx.history = localBaseHistoryForState(ctx.state);
    ctx.legal = localEmptyLegal();
    localTouch(ctx);
    return localOkState(ctx);
  };
  localImpl.ioLoadKifu = async (sid, expectedRevision, kifu, options = {}) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    const loadOptions = options && typeof options === "object" ? options : {};
    const fastNoValidate = Boolean(loadOptions.fast_no_validate);
    const movesOnly =
      Boolean(loadOptions.moves_only) || Boolean(loadOptions.keep_position) || Boolean(loadOptions.kifu_only);
    const appendToCurrentHistory =
      movesOnly &&
      String(ctx.state?.mode || "") === "play" &&
      ctx.history &&
      Array.isArray(ctx.history.nodes) &&
      ctx.history.nodes.length > 0;
    const meta = await loadLocalMetaFromStatic();
    let parsed;
    reportIoLoadProgress("kifu-parse-start");
    try {
      parsed = localParseKifuText(kifu, meta, { typeAttrs: ctx.typeAttrs || {} });
    } catch (e) {
      if (movesOnly) {
        parsed = localParseKifuMovesOnlyText(kifu);
      } else {
        if (e?.apiCode === "INVALID_REQUEST") throw e;
        throw localApiError("INVALID_REQUEST", `ioLoadKifu parse failed: ${e?.message || e}`);
      }
    }
    reportIoLoadProgress("kifu-parse-done");
    const nextCtx = localBuildContextFromState(localBuildPresetState("tsume"));
    const split = localSplitKifuAndVariationLines(parsed.moveLines);
    const moveInfo = localExtractMovesAndTerminalFromKifuLines(split.mainLines);
    if (movesOnly) {
      const basePieces = Array.isArray(ctx.state?.board?.pieces) ? cloneJson(ctx.state.board.pieces) : [];
      nextCtx.state.board = { width: 9, height: 9, pieces: basePieces };
      nextCtx.state.hands = localCloneHands(ctx.state?.hands);
      nextCtx.state.turn = Number(ctx.state?.turn) === 1 ? 1 : 0;
      nextCtx.state.mode = "play";
      nextCtx.state.rules = localMergeRulesWithDefaults(ctx.state?.rules || {});
      nextCtx.state.repeat_params = { from_ply: null, to_ply: null, repeat_count: null };
      nextCtx.typeAttrs = cloneJson(ctx.typeAttrs || {});
    } else {
      nextCtx.state.board = { width: 9, height: 9, pieces: parsed.pieces };
      nextCtx.state.hands = { "0": parsed.hands["0"], "1": parsed.hands["1"] };
      nextCtx.state.turn = parsed.turn;
      nextCtx.state.mode = "play";
      nextCtx.state.repeat_params = { from_ply: null, to_ply: null, repeat_count: null };
      if (parsed.titleRules && typeof parsed.titleRules === "object") {
        const safePatch = {};
        const validKeys = new Set(Object.keys(nextCtx.state.rules || {}));
        for (const [k, v] of Object.entries(parsed.titleRules)) {
          if (validKeys.has(k)) safePatch[k] = v;
        }
        localApplyRulePatch(nextCtx, safePatch, meta);
      }
      nextCtx.typeAttrs = cloneJson(parsed.typeAttrs || {});
    }
    nextCtx.state.rule_name = localRuleNameFromRules(nextCtx.state.rules, { typeAttrs: nextCtx?.typeAttrs || {} });
    localRefreshAllPieceEffectiveAttrs(nextCtx);
    nextCtx.history = appendToCurrentHistory ? cloneJson(ctx.history) : localBaseHistoryForState(nextCtx.state);
    if (!nextCtx.history || !Array.isArray(nextCtx.history.nodes) || nextCtx.history.nodes.length <= 0) {
      nextCtx.history = localBaseHistoryForState(nextCtx.state);
    }
    const appendStartNodeId = String(nextCtx.history.current_id || nextCtx.history.root_id || "");
    const mainlineTotal = moveInfo.moves.length;
    if (fastNoValidate && !appendToCurrentHistory) {
      nextCtx.history = localBuildHistoryFromMoves(
        nextCtx.state.turn,
        moveInfo.moves,
        moveInfo.terminal,
        nextCtx.state,
        { noSnapshots: true }
      );
      reportIoLoadProgress("kifu-mainline", { done: mainlineTotal, total: mainlineTotal });
      await localYieldToUiOnce();
      if (split.variationLines.length > 0) {
        const varResult = localApplyVariationsTextOnlyToHistory(nextCtx.history, split.variationLines);
        const totalVar = Math.max(0, Number(varResult.applied || 0) + Number(varResult.failed || 0));
        reportIoLoadProgress("kifu-variation", { done: totalVar, total: totalVar });
      }
    } else {
      const mainlineChunk =
        mainlineTotal >= 8000 ? 1024 : mainlineTotal >= 2000 ? 512 : mainlineTotal >= 500 ? 128 : 64;
      for (let i = 0; i < mainlineTotal; i += 1) {
        const mv = moveInfo.moves[i];
        const ok = localReplayMoveTextOnCurrent(nextCtx, mv, {
          noTouch: true,
          fastHintMode: true,
          allowFullFallback: true,
        });
        if (!ok) break;
        if (((i + 1) % mainlineChunk) === 0 || i + 1 >= mainlineTotal) {
          reportIoLoadProgress("kifu-mainline", { done: i + 1, total: mainlineTotal });
          await localYieldToUiOnce();
        }
      }
      if (mainlineTotal <= 0) {
        reportIoLoadProgress("kifu-mainline", { done: 0, total: 0 });
      }
      if (localIsTerminalResultText(moveInfo.terminal)) {
        localHistoryAddTerminalNode(nextCtx, moveInfo.terminal, { noTouch: true });
      }
      if (split.variationLines.length > 0) {
        await localApplyVariationsToHistory(nextCtx, split.variationLines, {
          noTouch: true,
          onProgress: (done, total) => {
            reportIoLoadProgress("kifu-variation", { done, total });
          },
        });
      }
    }
    nextCtx.history.current_id = appendToCurrentHistory ? appendStartNodeId : nextCtx.history.root_id;
    localSyncStateFromCurrentHistoryNode(nextCtx);
    ctx.state = cloneJson(nextCtx.state);
    ctx.state.session_id = sid;
    ctx.typeAttrs = cloneJson(nextCtx.typeAttrs || {});
    ctx.history = cloneJson(nextCtx.history);
    ctx.legal = localEmptyLegal();
    reportIoLoadProgress("kifu-finalize");
    localTouch(ctx);
    return localOkState(ctx);
  };
  localImpl.analysisLoadState = async (sid, expectedRevision, nextStatePayload = {}) => {
    const ctx = localGetSessionContextOrThrow(sid);
    localEnsureRevision(ctx, expectedRevision);
    const src = nextStatePayload && typeof nextStatePayload === "object" ? nextStatePayload : {};
    const board = src.board && typeof src.board === "object" ? src.board : {};
    const srcPieces = Array.isArray(board.pieces) ? board.pieces : [];
    const outPieces = [];
    for (const piece of srcPieces) {
      const x = Number(piece?.x);
      const y = Number(piece?.y);
      if (!localInBoard(x, y)) continue;
      outPieces.push({
        x,
        y,
        name: String(piece?.name || ""),
        owner: Number(piece?.owner),
        attrs: localCloneRawPieceAttrs(piece?.attrs),
      });
    }
    const srcHands = src.hands && typeof src.hands === "object" ? src.hands : {};
    const outHands = { "0": [], "1": [] };
    for (const owner of [0, 1]) {
      const arr = Array.isArray(srcHands[String(owner)]) ? srcHands[String(owner)] : [];
      outHands[String(owner)] = arr.map((name) => String(name || "")).filter((name) => name.length > 0);
    }

    ctx.state.board = { width: 9, height: 9, pieces: outPieces };
    ctx.state.hands = outHands;
    ctx.state.turn = Number(src.turn) === 1 ? 1 : 0;
    ctx.state.mode = "play";
    ctx.state.rules = localMergeRulesWithDefaults(src.rules);
    if (src.type_attrs && typeof src.type_attrs === "object") {
      ctx.typeAttrs = cloneJson(src.type_attrs);
    }
    ctx.state.repeat_params = { from_ply: null, to_ply: null, repeat_count: null };
    ctx.state.rule_name = localRuleNameFromRules(ctx.state.rules || {}, { typeAttrs: ctx?.typeAttrs || {} });
    localRefreshAllPieceEffectiveAttrs(ctx);
    ctx.history = localBaseHistoryForState(ctx.state);
    ctx.legal = localEmptyLegal();
    localTouch(ctx);
    return localOkState(ctx);
  };
  localImpl.ioExportSfen = async (sid) => {
    const ctx = localGetSessionContextOrThrow(sid);
    const rows = [];
    for (let y = 0; y < 9; y += 1) {
      let row = "";
      let empty = 0;
      for (let x = 0; x < 9; x += 1) {
        const p = localFindPiece(ctx.state, x, y);
        if (!p) {
          empty += 1;
          continue;
        }
        if (empty > 0) {
          row += String(empty);
          empty = 0;
        }
        row += localPieceToSfenChar(p);
      }
      if (empty > 0) row += String(empty);
      rows.push(row || "9");
    }
    const boardPart = rows.join("/");
    const turnPart = Number(ctx.state.turn) === 1 ? "w" : "b";
    let handPart = "";
    let hasHand = false;
    for (const name of LOCAL_HAND_NAME_ORDER) {
      for (const owner of [0, 1]) {
        const hand = ctx.state?.hands?.[String(owner)] || [];
        const count = hand.reduce((acc, token) => acc + (localHandTokenName(token) === name ? 1 : 0), 0);
        if (count <= 0) continue;
        hasHand = true;
        const piece = localPieceToSfenChar({ name, owner });
        if (count > 1) handPart += String(count);
        handPart += piece;
      }
    }
    if (!hasHand) handPart = "-";
    return localOk(ctx, { sfen: `${boardPart} ${turnPart} ${handPart} 1` });
  };
  localImpl.ioExportKifuText = async (sid) => {
    const ctx = localGetSessionContextOrThrow(sid);
    const kifu = localBuildKifuText(ctx);
    return localOk(ctx, { kifu });
  };
  localImpl.postWithRevision = async (path, expectedRevision, body = {}) => {
    const rawPath = String(path || "");
    if (!/^\/api\/v1\/sessions\/[^/]+\/edit\//.test(rawPath)) {
      throw localApiError("LOCAL_ENGINE_NOT_READY", `postWithRevision is not implemented for path: ${rawPath}`);
    }
    return await localHandleEditPost(rawPath, expectedRevision, body || {});
  };

  const notReady = (methodName) => {
    const e = new Error(`LOCAL_ENGINE_NOT_READY: ${methodName}`);
    e.apiCode = "LOCAL_ENGINE_NOT_READY";
    throw e;
  };
  const run = async (methodName, args) => {
    const fn = localImpl[methodName];
    if (typeof fn === "function") {
      try {
        return await fn(...args);
      } catch (e) {
        const apiCode = e?.apiCode || null;
        // Local実装の明示APIエラーは、そのまま上位に返す。
        if (apiCode && apiCode !== "LOCAL_ENGINE_NOT_READY") {
          throw e;
        }
        // Local実装の実エラー(apiCodeなし)はstrict設定に関係なく隠さない。
        if (!apiCode) {
          throw e;
        }
        // LOCAL_ENGINE_NOT_READY だけ strict=0 時に限って HTTP fallback を許可。
        if (strictLocalOnly) return notReady(methodName);
        if (!warned.has(`${methodName}:local`)) {
          warned.add(`${methodName}:local`);
          logLine(`LocalEngine local impl failed -> HttpEngine: ${methodName} (${e.message || e})`);
        }
      }
    }
    if (strictLocalOnly) return notReady(methodName);
    if (!warned.has(methodName)) {
      warned.add(methodName);
      logLine(`LocalEngine fallback -> HttpEngine: ${methodName}`);
    }
    return await getHttpFallback()[methodName](...args);
  };

  return {
    kind: "local",
    strictLocalOnly,
    postWithRevision: async (...args) => await run("postWithRevision", args),
    fetchMeta: async (...args) => await run("fetchMeta", args),
    createSession: async (...args) => await run("createSession", args),
    getSession: async (...args) => await run("getSession", args),
    patchRules: async (...args) => await run("patchRules", args),
    patchMode: async (...args) => await run("patchMode", args),
    getLegalAll: async (...args) => await run("getLegalAll", args),
    getLegalPiece: async (...args) => await run("getLegalPiece", args),
    getLegalHand: async (...args) => await run("getLegalHand", args),
    getHistoryTree: async (...args) => await run("getHistoryTree", args),
    getAttackOverlay: async (...args) => await run("getAttackOverlay", args),
    applyMove: async (...args) => await run("applyMove", args),
    applyDrop: async (...args) => await run("applyDrop", args),
    historySelect: async (...args) => await run("historySelect", args),
    historyAction: async (...args) => await run("historyAction", args),
    historyRepeatApply: async (...args) => await run("historyRepeatApply", args),
    historyPromoteBranch: async (...args) => await run("historyPromoteBranch", args),
    historyDeleteBranch: async (...args) => await run("historyDeleteBranch", args),
    historyAddTerminal: async (...args) => await run("historyAddTerminal", args),
    analysisLoadState: async (...args) => await run("analysisLoadState", args),
    ioLoadSfen: async (...args) => await run("ioLoadSfen", args),
    ioLoadKifu: async (...args) => await run("ioLoadKifu", args),
    ioExportSfen: async (...args) => await run("ioExportSfen", args),
    ioExportKifuText: async (...args) => await run("ioExportKifuText", args),
  };
}

function createEngineByKind(kind) {
  if (kind === "local") return createLocalEngine();
  return createHttpEngine();
}

function resolvePreferredEngineKind() {
  try {
    const urlKind = new URLSearchParams(window.location.search).get("engine");
    if (urlKind === "http" || urlKind === "local") return urlKind;
  } catch (_e) {
    // Ignore.
  }
  try {
    const stored = window.localStorage.getItem("ft_engine_kind");
    if (stored === "http" || stored === "local") return stored;
  } catch (_e) {
    // Ignore.
  }
  return "local";
}

function resolveStrictLocalOnly() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.has("engine_strict")) {
      return localReadBoolQueryParam(params, "engine_strict", true);
    }
  } catch (_e) {
    // Ignore.
  }
  try {
    const stored = window.localStorage.getItem("ft_engine_strict");
    if (stored !== null && stored !== undefined && String(stored).trim() !== "") {
      const v = String(stored).trim().toLowerCase();
      return v === "1" || v === "true" || v === "yes" || v === "on";
    }
  } catch (_e) {
    // Ignore.
  }
  return true;
}

function currentEngine() {
  if (!engine) {
    engine = createEngineByKind(resolvePreferredEngineKind());
  }
  return engine;
}

function installEngine(nextEngine) {
  engine = nextEngine || createEngineByKind(resolvePreferredEngineKind());
}

function canAutoRecoverSession(path) {
  const s = String(path || "");
  if (!s.includes("/api/v1/sessions/")) return false;
  // Session creation itself should not be retried by recovery.
  if (s.startsWith("/api/v1/sessions?") || s === "/api/v1/sessions") return false;
  return true;
}

function replaceSessionIdInPath(path, nextSessionId) {
  const s = String(path || "");
  if (!nextSessionId) return s;
  return s.replace(/(\/api\/v1\/sessions\/)([^\/?]+)/, `$1${nextSessionId}`);
}

function buildRetryOptions(options) {
  const next = { ...(options || {}) };
  if (next.body && typeof next.body === "object" && !Array.isArray(next.body)) {
    next.body = { ...next.body };
    if (Object.prototype.hasOwnProperty.call(next.body, "expected_revision")) {
      next.body.expected_revision = revision;
    }
  }
  return next;
}

async function registerServiceWorkerIfAvailable() {
  if (!("serviceWorker" in navigator)) return;
  const host = String(window.location.hostname || "").toLowerCase();
  const isLocalHost = host === "localhost" || host === "127.0.0.1";
  const isSecure = window.location.protocol === "https:";
  if (!isSecure && !isLocalHost) return;
  try {
    await navigator.serviceWorker.register("./sw.js?v=20260319a", { scope: "./" });
  } catch (e) {
    logLine(`ServiceWorker登録失敗：${e?.message || e}`, true);
  }
}

async function recoverSessionIfMissing() {
  if (sessionRecoveryPromise) {
    await sessionRecoveryPromise;
    return;
  }
  const prevRules = cloneCurrentRules();
  const prevMode = state?.mode === "edit" ? "edit" : "play";
  const preset = lastSessionPreset || "tsume";
  sessionRecoveryPromise = (async () => {
    await createSession(preset, prevRules);
    if (prevMode === "edit") {
      await setMode("edit");
    }
    logLine("セッション切れを検知したため自動復旧しました");
  })();
  try {
    await sessionRecoveryPromise;
  } finally {
    sessionRecoveryPromise = null;
  }
}

function isRevisionConflictError(error) {
  if (!error) return false;
  if (error.apiCode === "REVISION_CONFLICT") return true;
  const msg = String(error.message || "");
  return msg.includes("REVISION_CONFLICT");
}

function enqueueSequentialAction(actionFn) {
  const run = async () => await actionFn();
  const task = sequentialActionQueue.then(run, run);
  // Keep queue alive even if one task fails.
  sequentialActionQueue = task.catch(() => {});
  return task;
}

function clearHistoryPlayTimer() {
  if (historyPlayTimer) {
    clearTimeout(historyPlayTimer);
    historyPlayTimer = null;
  }
}

function requestPlaybackLegalListUpdate() {
  if (!historyPlayRunning) return;
  if (!sessionId || state?.mode !== "play") return;
  if (isReverseSubModeActive()) return;
  historyPlayLegalListPending = true;
  if (historyPlayLegalListInFlight) return;
  historyPlayLegalListInFlight = true;
  historyPlayLegalListPending = false;
  void refreshLegal()
    .then(() => {
      if (!historyPlayRunning) return;
      if (!sessionId || state?.mode !== "play") return;
      if (isReverseSubModeActive()) return;
      renderLegalList();
    })
    .catch((e) => {
      logLine(e.message || String(e), true);
    })
    .finally(() => {
      historyPlayLegalListInFlight = false;
      if (historyPlayLegalListPending && historyPlayRunning) {
        requestPlaybackLegalListUpdate();
      }
    });
}

function setHistoryPlayButtonState() {
  const playable = Boolean(state && state.mode === "play");
  const reverseActive = historyPlayRunning && historyPlayDirection < 0;
  const forwardActive = historyPlayRunning && historyPlayDirection > 0;
  if (ui.btnHistPlayReverse) {
    ui.btnHistPlayReverse.disabled = !playable;
    ui.btnHistPlayReverse.textContent = reverseActive ? "■" : "<<";
    ui.btnHistPlayReverse.classList.toggle("active", reverseActive);
  }
  if (ui.btnHistPlay) {
    ui.btnHistPlay.disabled = !playable;
    ui.btnHistPlay.textContent = forwardActive ? "■" : ">>";
    ui.btnHistPlay.classList.toggle("active", forwardActive);
  }
}

function stopHistoryPlayback(options = {}) {
  const silent = Boolean(options.silent);
  const refreshLegalPanel = options.refreshLegalPanel !== false;
  const refreshLegalData =
    options.refreshLegalData === undefined ? !silent : Boolean(options.refreshLegalData);
  const forceRefreshLegal = Boolean(options.forceRefreshLegal);
  if (!historyPlayRunning && !historyPlayTimer) {
    setHistoryPlayButtonState();
    return;
  }
  historyPlayRunning = false;
  historyPlayDirection = 0;
  historyPlayLegalListPending = false;
  clearHistoryPlayTimer();
  setHistoryPlayButtonState();
  if (refreshLegalData && (forceRefreshLegal || legalNeedsRefreshAfterPlayback) && sessionId && state?.mode === "play") {
    legalNeedsRefreshAfterPlayback = false;
    const sid = sessionId;
    void refreshLegal()
      .then(() => {
        if (!historyPlayRunning && sessionId === sid && refreshLegalPanel) {
          renderLegalList();
        }
      })
      .catch((e) => {
        logLine(e.message || String(e), true);
      });
  } else if (refreshLegalPanel) {
    renderLegalList();
  }
  if (!silent) {
    logLine("棋譜再生を停止");
  }
}

function scheduleHistoryPlaybackTick(delayMs = getHistoryPlayIntervalMs()) {
  clearHistoryPlayTimer();
  if (!historyPlayRunning) return;
  if (!state || state.mode !== "play") {
    stopHistoryPlayback({ silent: true });
    return;
  }
  const safeDelay = Math.max(0, Number(delayMs) || 0);
  historyPlayTimer = setTimeout(() => {
    historyPlayTimer = null;
    void historyPlaybackStep();
  }, safeDelay);
}

async function historyPlaybackStep() {
  if (!historyPlayRunning) return;
  if (!state || state.mode !== "play") {
    stopHistoryPlayback({ silent: true });
    return;
  }
  if (historyPlayStepInFlight) return;
  const startedAt = window.performance?.now ? window.performance.now() : Date.now();
  const actionKind = historyPlayDirection >= 0 ? "forward" : "back";
  historyPlayStepInFlight = true;
  try {
    const moved = await enqueueSequentialAction(() =>
      historyAction(actionKind, {
        silentLog: true,
        includeLegal: false,
        includeHistory: false,
        refreshLegalIfMissing: false,
        refreshHistoryIfMissing: false,
        skipLegalCompute: true,
        fastState: true,
        playbackFrame: true,
        syncLocalHistoryCurrent: true,
      })
    );
    if (!historyPlayRunning) return;
    if (!moved) {
      stopHistoryPlayback({ silent: true, refreshLegalData: true, forceRefreshLegal: true });
      logLine(actionKind === "forward" ? "棋譜再生：末尾に到達" : "棋譜再生：先頭に到達");
      return;
    }
    requestPlaybackLegalListUpdate();
    const finishedAt = window.performance?.now ? window.performance.now() : Date.now();
    const elapsedMs = Math.max(0, finishedAt - startedAt);
    const intervalMs = getHistoryPlayIntervalMs();
    const nextDelayMs = Math.max(0, intervalMs - elapsedMs);
    scheduleHistoryPlaybackTick(nextDelayMs);
  } catch (e) {
    stopHistoryPlayback({ silent: true });
    logLine(e.message || String(e), true);
  } finally {
    historyPlayStepInFlight = false;
    setHistoryPlayButtonState();
  }
}

function startHistoryPlayback(direction) {
  const dir = direction >= 0 ? 1 : -1;
  if (!state || state.mode !== "play") return;
  clearHistoryPlayTimer();
  legalNeedsRefreshAfterPlayback = false;
  historyPlayLegalListPending = false;
  historyPlayDirection = dir;
  historyPlayRunning = true;
  setHistoryPlayButtonState();
  logLine(`棋譜再生を開始 (${dir > 0 ? ">>" : "<<"} / ${getHistoryPlayIntervalMs()}ms)`);
  void historyPlaybackStep();
}

function toggleHistoryPlayback(direction) {
  const dir = direction >= 0 ? 1 : -1;
  if (historyPlayRunning && historyPlayDirection === dir) {
    stopHistoryPlayback({ refreshLegalData: true, forceRefreshLegal: true });
    return;
  }
  startHistoryPlayback(dir);
}

async function fetchMeta() {
  const env = await currentEngine().fetchMeta();
  const meta = env?.data?.meta || {};
  displayNames = meta.display_names || {};
  pieceDescriptions = meta.piece_descriptions && typeof meta.piece_descriptions === "object"
    ? meta.piece_descriptions
    : {};
  ruleKeys = Array.isArray(meta.rule_keys) ? meta.rule_keys.filter((v) => typeof v === "string") : [];
  ruleLabels = meta.rule_labels && typeof meta.rule_labels === "object" ? meta.rule_labels : {};
  ruleStrategyOptions = Array.isArray(meta.strategy_options)
    ? meta.strategy_options.filter((v) => typeof v === "string")
    : [];
  ruleObjectiveOptions = Array.isArray(meta.objective_options)
    ? meta.objective_options.filter((v) => typeof v === "string")
    : [];
  const metaPieceNames = Array.isArray(meta.piece_names)
    ? meta.piece_names.filter((n) => typeof n === "string" && n.trim() !== "")
    : [];
  if (metaPieceNames.length > 0) {
    // Keep API order so standard pieces stay at the top of the piece box.
    const seen = new Set();
    editPieceNames = [];
    for (const name of metaPieceNames) {
      if (seen.has(name)) continue;
      seen.add(name);
      editPieceNames.push(name);
    }
  } else {
    editPieceNames = Object.keys(displayNames).sort((a, b) => {
      const an = displayNameForName(a);
      const bn = displayNameForName(b);
      return an.localeCompare(bn, "ja");
    });
  }
  if (editPieceNames.length === 0) {
    editPieceNames = ["FU", "KY", "KE", "GI", "KI", "KA", "HI", "OU"];
  }
}

function applyStateEnvelope(env) {
  const nextState = env?.data?.state;
  if (!nextState || typeof nextState !== "object") return;
  const prevSessionId = sessionId;
  const nextSessionId = String(nextState.session_id || "");
  const nextRevisionRaw = Number(env?.revision ?? nextState?.revision ?? 0);
  const nextRevision = Number.isFinite(nextRevisionRaw) ? nextRevisionRaw : Number(revision || 0);
  const currRevision = Number(revision || 0);
  if (
    sessionId &&
    nextSessionId &&
    nextSessionId === sessionId &&
    Number.isFinite(currRevision) &&
    Number.isFinite(nextRevision) &&
    nextRevision < currRevision
  ) {
    return;
  }
  revision = nextRevision;
  state = nextState;
  sessionId = nextSessionId || sessionId;
  refreshEpoch += 1;
  if (keepReverseTrailOnNextStateApply) {
    keepReverseTrailOnNextStateApply = false;
    return;
  }
  const sessionChanged = Boolean(nextSessionId && prevSessionId && nextSessionId !== prevSessionId);
  reverseHistoryTree = null;
  reverseHistoryNodeSeq = 1;
  reverseSelectedNodeId = null;
  // セッション再生成(RECOVERY/REVISION_CONFLICT対応)時は、検討中ならサブモードは維持する。
  // ただし逆算履歴/キャッシュは別セッションへ持ち越せないためクリアする。
  if (sessionChanged) {
    rejectedLegalByPosition.clear();
    reverseMoves = [];
    reverseStatusText = "-";
    reverseCacheKey = "";
    reverseResultCache.clear();
    reversePredecessorLegalGlobalCache.clear();
    reverseClearWorkerPending();
    if (reverseWorker) {
      try {
        reverseWorker.terminate();
      } catch (_e) {
        // noop
      }
      reverseWorker = null;
    }
  }
  if (state?.mode !== "play") {
    playSubMode = "normal";
  }
}

async function refreshState() {
  if (!sessionId) return;
  const reqSessionId = sessionId;
  const reqEpoch = refreshEpoch;
  const reqSeq = ++refreshStateSeq;
  const env = await currentEngine().getSession(reqSessionId);
  if (reqSeq !== refreshStateSeq) return;
  if (reqSessionId !== sessionId) return;
  if (reqEpoch !== refreshEpoch) return;
  applyStateEnvelope(env);
}

async function refreshLegal() {
  if (!sessionId) return;
  const reqSessionId = sessionId;
  const reqEpoch = refreshEpoch;
  const reqSeq = ++refreshLegalSeq;
  const env = await currentEngine().getLegalAll(reqSessionId);
  if (reqSeq !== refreshLegalSeq) return;
  if (reqSessionId !== sessionId) return;
  if (reqEpoch !== refreshEpoch) return;
  const nextRevisionRaw = Number(env?.revision ?? revision);
  if (Number.isFinite(nextRevisionRaw)) {
    revision = Math.max(Number(revision || 0), nextRevisionRaw);
  }
  legalMoves = filterRejectedLegalMoves(env.data.moves || []);
  legalStatus = env.data.status || { kind: "none", text: "" };
}

async function refreshHistory() {
  if (!sessionId) return;
  const reqSessionId = sessionId;
  const reqEpoch = refreshEpoch;
  const reqSeq = ++refreshHistorySeq;
  const env = await currentEngine().getHistoryTree(reqSessionId);
  if (reqSeq !== refreshHistorySeq) return;
  if (reqSessionId !== sessionId) return;
  if (reqEpoch !== refreshEpoch) return;
  const nextRevisionRaw = Number(env?.revision ?? revision);
  if (Number.isFinite(nextRevisionRaw)) {
    revision = Math.max(Number(revision || 0), nextRevisionRaw);
  }
  historyTree = env.data || null;
  historyNodeMapNodesRef = null;
  historyNodeMapCache = new Map();
  historyRenderNodesRef = null;
  historyRenderRowByNodeId = new Map();
  historyRenderRowOrder = [];
  historyRenderRowIndexByNodeId = new Map();
  historyRenderCurrentNodeId = null;
  historyRenderFocusNodeId = null;
  if (!historyTree) {
    selectedHistoryNodeId = null;
    return;
  }
  const ids = new Set((historyTree.nodes || []).map((n) => n.node_id));
  if (!selectedHistoryNodeId || !ids.has(selectedHistoryNodeId)) {
    selectedHistoryNodeId = historyTree.current_id || historyTree.root_id || null;
  }
}

function applyLegalDataFromEnvelope(data) {
  if (!data || typeof data !== "object" || !data.legal || typeof data.legal !== "object") return false;
  const moves = Array.isArray(data.legal.moves) ? data.legal.moves : null;
  if (!moves) return false;
  legalMoves = filterRejectedLegalMoves(moves);
  legalStatus = data.legal.status || { kind: "none", text: "" };
  return true;
}

function applyHistoryDataFromEnvelope(data) {
  if (!data || typeof data !== "object" || !data.history || typeof data.history !== "object") return false;
  historyTree = data.history || null;
  historyNodeMapNodesRef = null;
  historyNodeMapCache = new Map();
  historyRenderNodesRef = null;
  historyRenderRowByNodeId = new Map();
  historyRenderRowOrder = [];
  historyRenderRowIndexByNodeId = new Map();
  historyRenderCurrentNodeId = null;
  historyRenderFocusNodeId = null;
  if (!historyTree) {
    selectedHistoryNodeId = null;
    return true;
  }
  const ids = new Set((historyTree.nodes || []).map((n) => n.node_id));
  if (!selectedHistoryNodeId || !ids.has(selectedHistoryNodeId)) {
    selectedHistoryNodeId = historyTree.current_id || historyTree.root_id || null;
  }
  return true;
}

function applyViewsFromEnvelope(env) {
  const data = env?.data || null;
  const hasLegal = applyLegalDataFromEnvelope(data);
  const hasHistory = applyHistoryDataFromEnvelope(data);
  return { hasLegal, hasHistory };
}

async function fetchAttackOverlayDataIfNeeded() {
  if (!sessionId || !state || state.mode !== "play" || !hasAnyAttackOverlayFlagEnabled()) {
    attackOverlayData = null;
    attackOverlayCacheKey = "";
    return;
  }
  const key = attackOverlayRequestKey();
  if (!key) return;
  if (attackOverlayCacheKey === key && attackOverlayData) return;
  if (attackOverlayInFlightKey === key) return;

  attackOverlayInFlightKey = key;
  try {
    const params = buildAttackOverlayRequestParams();
    const env = await currentEngine().getAttackOverlay(sessionId, params);
    if (attackOverlayRequestKey() !== key) return;
    attackOverlayData = env.data || null;
    attackOverlayCacheKey = key;
  } catch (e) {
    if (attackOverlayRequestKey() === key) {
      logLine(e.message || String(e), true);
    }
  } finally {
    if (attackOverlayInFlightKey === key) {
      attackOverlayInFlightKey = "";
    }
    if (attackOverlayRequestKey() === key) {
      renderBoard();
    }
  }
}

function cloneCurrentRules() {
  if (!state?.rules || typeof state.rules !== "object") return null;
  try {
    return JSON.parse(JSON.stringify(state.rules));
  } catch (_e) {
    return { ...state.rules };
  }
}

async function createSession(preset, preservedRules = null) {
  stopHistoryPlayback({ silent: true });
  closeRepeatDialog();
  clearPendingRightAction();
  selected = null;
  setEditSelection(null);
  selectedHistoryNodeId = null;
  invalidateAttackOverlayCache();
  lastSessionPreset = preset || "tsume";
  const env = await currentEngine().createSession(preset);
  applyStateEnvelope(env);
  if (preservedRules && typeof preservedRules === "object") {
    const envRules = await currentEngine().patchRules(sessionId, revision, preservedRules);
    applyStateEnvelope(envRules);
  }
  await refreshLegal();
  await refreshHistory();
  renderAll();
  logLine(`セッション作成：${sessionId} (${preset})${preservedRules ? " / ルール保持" : ""}`);
}

async function refreshAll() {
  stopHistoryPlayback({ silent: true });
  closeRepeatDialog();
  clearPendingRightAction();
  selected = null;
  setEditSelection(null);
  invalidateAttackOverlayCache();
  await refreshState();
  await refreshLegal();
  await refreshHistory();
  renderAll();
}

function ownerMark(owner) {
  if (owner === 0) return "▲";
  if (owner === 1) return "△";
  return "□";
}

function baseNameForHand(name) {
  const tokenName = localHandTokenName(name);
  return BASE_NAME_MAP[tokenName] || tokenName;
}

function standardBaseName(name) {
  const tokenName = localHandTokenName(name);
  return STANDARD_BASE_MAP[tokenName] || tokenName;
}

function currentBaseCounts() {
  const counts = new Map();
  for (const p of state?.board?.pieces || []) {
    const base = standardBaseName(p.name);
    counts.set(base, (counts.get(base) || 0) + 1);
  }
  for (const owner of [0, 1]) {
    for (const token of state?.hands?.[String(owner)] || []) {
      const base = standardBaseName(token);
      counts.set(base, (counts.get(base) || 0) + 1);
    }
  }
  return counts;
}

function remainingStandardCountFor(name) {
  const base = standardBaseName(name);
  const limit = STANDARD_COUNTS[base];
  if (limit === undefined) return null;
  const used = currentBaseCounts().get(base) || 0;
  return limit - used;
}

function canUsePieceFromBox(name) {
  if (!pieceBoxStandardMode) return true;
  const rem = remainingStandardCountFor(name);
  if (rem === null) return true;
  return rem > 0;
}

function isKingPiece(piece) {
  return Boolean(piece?.attrs?.is_king);
}

function consumeSuppressEditClick() {
  if (!suppressEditClickOnce) return false;
  suppressEditClickOnce = false;
  return true;
}

function clearEditSelectionByRightClick() {
  if (state?.mode !== "edit" || !editSelection) return false;
  clearPendingRightAction();
  setEditSelection(null);
  renderAll();
  return true;
}

function cycleOwner(owner) {
  if (owner === 0) return 1;
  if (owner === 1) return -1;
  return 0;
}

function applyEditOwner(owner) {
  if (owner !== 0 && owner !== 1 && owner !== -1) return;
  editOwner = owner;
  if (state?.mode === "edit" && editSelection?.source === "box" && editSelection?.owner !== owner) {
    setEditSelection({ ...editSelection, owner }, { syncOwner: false });
  }
}

function setEditSelection(sel, opts = {}) {
  editSelection = sel;
  const syncOwnerByDefault = sel?.source === "box";
  const syncOwner = localHasOwn(opts || {}, "syncOwner") ? Boolean(opts.syncOwner) : syncOwnerByDefault;
  if (syncOwner && (sel?.owner === 0 || sel?.owner === 1 || sel?.owner === -1)) {
    editOwner = sel.owner;
  }
  if (sel?.name && ui.editPieceSelect) {
    ui.editPieceSelect.value = sel.name;
  }
}

function bindLongPress(el, handler) {
  if (!el) return;
  let timer = null;
  let active = false;
  const clear = () => {
    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }
  };
  el.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse") return;
    active = true;
    clear();
    timer = window.setTimeout(() => {
      if (!active) return;
      suppressEditClickOnce = true;
      handler(e);
    }, LONG_PRESS_MS);
  });
  const cancel = () => {
    active = false;
    clear();
  };
  el.addEventListener("pointerup", cancel);
  el.addEventListener("pointercancel", cancel);
  el.addEventListener("pointerleave", cancel);
}

function runRightSingleOrDouble(key, singleFn, doubleFn) {
  const now = Date.now();
  if (pendingRightAction && pendingRightAction.key === key && now - pendingRightAction.at <= RIGHT_DOUBLE_MS) {
    window.clearTimeout(pendingRightAction.timer);
    pendingRightAction = null;
    suppressEditClickOnce = true;
    void Promise.resolve().then(doubleFn).catch((e) => logLine(e.message || String(e), true));
    return;
  }
  if (pendingRightAction) {
    window.clearTimeout(pendingRightAction.timer);
    pendingRightAction = null;
  }
  pendingRightAction = {
    key,
    at: now,
    timer: window.setTimeout(() => {
      pendingRightAction = null;
      void Promise.resolve().then(singleFn).catch((e) => logLine(e.message || String(e), true));
    }, RIGHT_DOUBLE_MS),
  };
}

function clearPendingRightAction() {
  if (pendingRightAction) {
    window.clearTimeout(pendingRightAction.timer);
    pendingRightAction = null;
  }
}

function flipOwner(owner) {
  return owner === 0 ? 1 : owner === 1 ? 0 : owner;
}

async function editRotateOrPromoteAt(x, y) {
  const piece = findPieceAt(x, y);
  if (!piece) return;

  let nextName = piece.name;
  let nextOwner = piece.owner;
  const nextAttrs = { ...(piece.attrs || {}) };
  const toggled = PROMOTION_TOGGLE_MAP[piece.name];
  const isOuGyoku = piece.name === "王" || piece.name === "玉";

  if (localIsNeutralImitatorName(piece.name)) {
    nextOwner = -1;
  } else if (isOuGyoku) {
    // 王/玉は成生関係ではないため、右クリックは所属反転のみ。
    nextOwner = flipOwner(piece.owner);
  } else if (toggled && toggled !== piece.name) {
    nextName = toggled;
    if (PROMOTED_NAMES.has(piece.name)) {
      nextOwner = flipOwner(piece.owner);
    }
    nextAttrs.promote_to = localDefaultPromoteTo(nextName);
    if (nextName !== piece.name && nextAttrs.immortal) {
      nextAttrs.immortal = false;
    }
  } else {
    nextOwner = flipOwner(piece.owner);
  }

  await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/put-piece`, {
    x,
    y,
    name: nextName,
    owner: nextOwner,
    attrs: nextAttrs,
  });
  logLine(`右クリック変更：${9 - x}${y + 1} ${ownerMark(piece.owner)}${piece.name} → ${ownerMark(nextOwner)}${nextName}`);
}

function currentEditPieceName() {
  if (editSelection?.name) return editSelection.name;
  const v = ui.editPieceSelect?.value || "";
  if (v) return v;
  return editPieceNames[0] || "FU";
}

async function callEditEndpoint(path, body, options = null) {
  if (!sessionId) return;
  if (state?.mode !== "edit") {
    throw new Error("編集モードで実行してください。");
  }
  const keepEditSelection = Boolean(options && options.keepEditSelection);
  const explicitKeepSelection = options && typeof options.keepSelection === "object" ? options.keepSelection : null;
  const keepSelectionBase = explicitKeepSelection || editSelection;
  const keptSelection = keepEditSelection && keepSelectionBase ? { ...keepSelectionBase } : null;
  const env = await currentEngine().postWithRevision(path, revision, body);
  applyStateEnvelope(env);
  selected = null;
  setEditSelection(null);
  await refreshLegal();
  await refreshHistory();
  if (keptSelection) {
    let canRestore = true;
    if (keptSelection.source === "box") {
      canRestore = canUsePieceFromBox(keptSelection.name);
    } else if (keptSelection.source === "hand") {
      const handOwner = Number(keptSelection.owner);
      const handName = String(keptSelection.name || "");
      const handArr = state?.hands?.[String(handOwner)] || [];
      canRestore = handArr.some((token) => localHandTokenEquals(token, handName));
    }
    if (canRestore) {
      setEditSelection(keptSelection, { syncOwner: false });
    }
  }
  renderAll();
}

async function editPutPieceAt(x, y) {
  const name = currentEditPieceName();
  await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/put-piece`, {
    x,
    y,
    name,
    owner: editOwner,
  });
  logLine(`編集配置：${name} owner=${editOwner} @${9 - x}${y + 1}`);
}

async function editRemovePieceAt(x, y) {
  await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/remove-piece`, { x, y });
  logLine(`編集削除：@${9 - x}${y + 1}`);
}

async function editAddHand(owner) {
  const name = currentEditPieceName();
  await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/add-hand`, { owner, name });
  logLine(`持駒追加：${owner === 0 ? "▲" : "△"} ${name}`);
}

async function editRemoveHand(owner) {
  const name = currentEditPieceName();
  await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/remove-hand`, { owner, name });
  logLine(`持駒削除：${owner === 0 ? "▲" : "△"} ${name}`);
}

async function editPreset(preset) {
  await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/preset`, { preset });
  logLine(`編集プリセット：${preset}`);
}

function shouldFillGoteHandFromBoxInStandardMode() {
  if (!state || state.mode !== "edit") return false;
  if (!pieceBoxStandardMode) return false;
  const goteHand = Array.isArray(state?.hands?.["1"]) ? state.hands["1"] : [];
  return goteHand.length <= 0;
}

function updateEditClearGoteHandButtonLabel() {
  if (!ui.btnEditClearGoteHandToBox) return;
  ui.btnEditClearGoteHandToBox.textContent = shouldFillGoteHandFromBoxInStandardMode()
    ? "駒箱を受方持駒へ"
    : "受方持駒を駒箱へ";
}

async function editFillGoteHandFromBoxStandard() {
  if (!sessionId || !state || state.mode !== "edit") return;
  let added = 0;
  const keepSelection = editSelection ? { ...editSelection } : null;
  for (const [baseName, limitRaw] of Object.entries(STANDARD_COUNTS)) {
    const limit = Number(limitRaw || 0);
    if (!Number.isFinite(limit) || limit <= 0) continue;
    if (localDefaultPieceAttrs(baseName)?.is_king) continue;
    let remain = Number(remainingStandardCountFor(baseName) || 0);
    while (Number.isFinite(remain) && remain > 0) {
      await callEditEndpoint(
        `/api/v1/sessions/${sessionId}/edit/add-hand`,
        { owner: 1, name: baseName },
        keepSelection
          ? { keepEditSelection: true, keepSelection }
          : { keepEditSelection: true }
      );
      added += 1;
      remain -= 1;
    }
  }
  if (added > 0) {
    logLine(`編集移動：駒箱 -> △受方持駒 (${added}枚)`);
  } else {
    logLine("編集移動：駒箱 -> △受方持駒 (追加なし)");
  }
}

function parseCoordInputs() {
  const file = Number(ui.attrFileInput?.value || 0);
  const rank = Number(ui.attrRankInput?.value || 0);
  if (!Number.isInteger(file) || !Number.isInteger(rank) || file < 1 || file > 9 || rank < 1 || rank > 9) {
    throw new Error("座標は1..9で入力してください。");
  }
  return { x: 9 - file, y: rank - 1, file, rank };
}

function findPieceAt(x, y) {
  for (const p of state?.board?.pieces || []) {
    if (p.x === x && p.y === y) return p;
  }
  return null;
}

function setAttrFormFromAttrs(attrs = {}) {
  if (ui.attrDisplayNameInput) {
    ui.attrDisplayNameInput.value = attrs.display_name ? String(attrs.display_name) : "";
  }
  if (ui.attrToHandInput) ui.attrToHandInput.checked = !Boolean(attrs.to_hand);
  if (ui.attrIsKingInput) ui.attrIsKingInput.checked = Boolean(attrs.is_king);
  if (ui.attrImmortalInput) ui.attrImmortalInput.checked = Boolean(attrs.immortal);
  if (ui.attrPromoteToSelect) {
    const v = attrs.promote_to ? String(attrs.promote_to) : "";
    ui.attrPromoteToSelect.value = v;
    if (ui.attrPromoteToSelect.value !== v) ui.attrPromoteToSelect.value = "";
  }
}

function collectAttrsFromForm() {
  const displayNameRaw = (ui.attrDisplayNameInput?.value || "").trim();
  const isKing = Boolean(ui.attrIsKingInput?.checked);
  const immortalChecked = Boolean(ui.attrImmortalInput?.checked);
  const discardOnCapture = Boolean(ui.attrToHandInput?.checked);
  const attrs = {
    display_name: displayNameRaw || null,
    to_hand: !discardOnCapture,
    promote_to: ui.attrPromoteToSelect?.value || null,
    is_king: isKing,
    immortal: immortalChecked && !isKing,
  };
  if (isKing && immortalChecked && ui.attrImmortalInput) {
    ui.attrImmortalInput.checked = false;
  }
  return attrs;
}

async function attrLoadFromBoard() {
  const pos = parseCoordInputs();
  const p = findPieceAt(pos.x, pos.y);
  if (!p) throw new Error(`盤上に駒がありません：${pos.file}${pos.rank}`);
  if (ui.editPieceSelect) ui.editPieceSelect.value = p.name;
  if (p.owner === 0 || p.owner === 1 || p.owner === -1) editOwner = p.owner;
  setAttrFormFromAttrs(p.attrs || {});
  renderAll();
  logLine(`属性読込：${displayNameForPiece(p)} @${pos.file}${pos.rank}`);
}

async function attrApplyToBoard() {
  const pos = parseCoordInputs();
  const attrs = collectAttrsFromForm();
  await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/set-piece-attrs`, {
    x: pos.x,
    y: pos.y,
    attrs,
  });
  logLine(`属性適用(盤上)：@${pos.file}${pos.rank}`);
}

async function attrApplyToType() {
  const pieceName = currentEditPieceName();
  const attrs = collectAttrsFromForm();
  await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/set-type-attrs`, {
    piece_name: pieceName,
    attrs,
  });
  logLine(`属性適用(駒種)：${pieceName}`);
}

function inferTypeAttrsFromBoard(pieceName) {
  const typeAttrs = state?.type_attrs && typeof state.type_attrs === "object" ? state.type_attrs : {};
  return localMergePieceAttrs(localDefaultPieceAttrs(pieceName), typeAttrs[pieceName] || {});
}

function setAttrDialogFieldsFromAttrs(attrsBase = {}) {
  if (ui.attrDlgDisplayNameInput) {
    ui.attrDlgDisplayNameInput.value = attrsBase.display_name ? String(attrsBase.display_name) : "";
  }
  if (ui.attrDlgToHandInput) ui.attrDlgToHandInput.checked = !Boolean(attrsBase.to_hand);
  if (ui.attrDlgIsKingInput) ui.attrDlgIsKingInput.checked = Boolean(attrsBase.is_king);
  if (ui.attrDlgImmortalInput) ui.attrDlgImmortalInput.checked = Boolean(attrsBase.immortal);
  if (ui.attrDlgPromoteToSelect) {
    const v = attrsBase.promote_to ? String(attrsBase.promote_to) : "";
    ui.attrDlgPromoteToSelect.value = v;
    if (ui.attrDlgPromoteToSelect.value !== v) ui.attrDlgPromoteToSelect.value = "";
  }
}

function buildAttrDialogOptions(pieceName, attrsByScope, canApplyPiece, piecePos, preferredScope = "type") {
  if (!ui.attrScopeSelect || !ui.attrDlgPromoteToSelect || !ui.attrTargetInfo) return;
  ui.attrScopeSelect.innerHTML = "";
  if (canApplyPiece) {
    const opPiece = document.createElement("option");
    opPiece.value = "piece";
    opPiece.textContent = "この駒のみ";
    ui.attrScopeSelect.appendChild(opPiece);
  }
  const opType = document.createElement("option");
  opType.value = "type";
  opType.textContent = "同駒種すべて";
  ui.attrScopeSelect.appendChild(opType);
  const initialScope = canApplyPiece && preferredScope === "piece" ? "piece" : "type";
  ui.attrScopeSelect.value = initialScope;

  ui.attrDlgPromoteToSelect.innerHTML = "";
  for (const v of ["", ...editPieceNames]) {
    const op = document.createElement("option");
    op.value = v;
    op.textContent = v ? `${displayNameForName(v)} (${v})` : "成れない";
    ui.attrDlgPromoteToSelect.appendChild(op);
  }

  const initialAttrs =
    initialScope === "piece" && canApplyPiece
      ? attrsByScope?.piece || {}
      : attrsByScope?.type || (canApplyPiece ? attrsByScope?.piece || {} : {});
  setAttrDialogFieldsFromAttrs(initialAttrs);

  const placeText =
    piecePos && canApplyPiece ? ` @${9 - piecePos.x}${piecePos.y + 1}` : "";
  ui.attrTargetInfo.textContent = `対象：${displayNameForName(pieceName)} (${pieceName})${placeText}`;
}

function collectAttrsFromDialog() {
  const displayNameRaw = (ui.attrDlgDisplayNameInput?.value || "").trim();
  const isKing = Boolean(ui.attrDlgIsKingInput?.checked);
  const immortalRaw = Boolean(ui.attrDlgImmortalInput?.checked);
  const discardOnCapture = Boolean(ui.attrDlgToHandInput?.checked);
  if (isKing && immortalRaw && ui.attrDlgImmortalInput) {
    ui.attrDlgImmortalInput.checked = false;
  }
  return {
    display_name: displayNameRaw || null,
    to_hand: !discardOnCapture,
    promote_to: ui.attrDlgPromoteToSelect?.value || null,
    is_king: isKing,
    immortal: immortalRaw && !isKing,
  };
}

async function showAttrDialog(pieceName, attrsByScope, canApplyPiece, piecePos, preferredScope = "type") {
  if (!ui.attrDialog || !ui.attrDialogForm) return null;
  buildAttrDialogOptions(pieceName, attrsByScope, canApplyPiece, piecePos, preferredScope);

  return await new Promise((resolve) => {
    const onScopeChange = () => {
      const scope = ui.attrScopeSelect?.value || "type";
      const nextAttrs = scope === "piece" ? attrsByScope?.piece || {} : attrsByScope?.type || {};
      setAttrDialogFieldsFromAttrs(nextAttrs);
    };
    const onCancel = (e) => {
      e.preventDefault();
      cleanup(null);
    };
    const onClickCancel = () => cleanup(null);
    const onSubmit = (e) => {
      e.preventDefault();
      cleanup({
        scope: ui.attrScopeSelect?.value || "type",
        attrs: collectAttrsFromDialog(),
      });
    };
    const cleanup = (result) => {
      ui.attrScopeSelect?.removeEventListener("change", onScopeChange);
      ui.attrDialog.removeEventListener("cancel", onCancel);
      ui.attrDialogForm.removeEventListener("submit", onSubmit);
      ui.attrDialogCancel?.removeEventListener("click", onClickCancel);
      if (ui.attrDialog.open) ui.attrDialog.close();
      resolve(result);
    };

    ui.attrScopeSelect?.addEventListener("change", onScopeChange);
    ui.attrDialog.addEventListener("cancel", onCancel);
    ui.attrDialogForm.addEventListener("submit", onSubmit);
    ui.attrDialogCancel?.addEventListener("click", onClickCancel);
    ui.attrDialog.showModal();
  });
}

async function openAttrEditorForSelection() {
  if (state?.mode !== "edit") return;
  if (!editSelection) {
    logLine("属性編集する駒を先に選択してください。");
    return;
  }

  let pieceName = localHandTokenName(editSelection.name);
  let canApplyPiece = false;
  let piecePos = null;
  let preferredScope = "type";
  let attrsByScope = { piece: {}, type: {} };

  if (editSelection.source === "board") {
    const p = findPieceAt(editSelection.x, editSelection.y);
    if (!p) {
      logLine("選択した盤上駒が見つかりません。", true);
      setEditSelection(null);
      renderAll();
      return;
    }
    pieceName = p.name;
    attrsByScope = {
      piece: p.attrs || {},
      type: inferTypeAttrsFromBoard(p.name),
    };
    if (Object.keys(localNormalizeRawPieceAttrs(p.attrs)).length > 0) {
      preferredScope = "piece";
    }
    canApplyPiece = true;
    piecePos = { x: editSelection.x, y: editSelection.y };
    setEditSelection({ source: "board", x: p.x, y: p.y, name: p.name, owner: p.owner });
  } else {
    attrsByScope = {
      piece: {},
      type: inferTypeAttrsFromBoard(pieceName),
    };
  }

  const result = await showAttrDialog(pieceName, attrsByScope, canApplyPiece, piecePos, preferredScope);
  if (!result) {
    setEditSelection(null);
    renderAll();
    return;
  }

  if (result.scope === "piece" && canApplyPiece && piecePos) {
    await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/set-piece-attrs`, {
      x: piecePos.x,
      y: piecePos.y,
      attrs: result.attrs,
    });
    logLine(`属性適用(盤上)：@${9 - piecePos.x}${piecePos.y + 1}`);
    return;
  }

  await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/set-type-attrs`, {
    piece_name: pieceName,
    attrs: result.attrs,
  });
  logLine(`属性適用(駒種)：${pieceName}`);
}

function coordKey(x, y) {
  return `${x},${y}`;
}

function coordText(coord) {
  if (!coord) return "??";
  return `${9 - coord.x}${coord.y + 1}`;
}

function localCanonicalPieceName(name) {
  const token = String(localHandTokenName(name) || "").trim();
  if (!token) return "";
  if (localHasOwn(LOCAL_PIECE_SPECS, token)) return token;
  const tokenLower = token.toLowerCase();
  for (const n of Object.keys(LOCAL_PIECE_SPECS || {})) {
    if (String(n || "").toLowerCase() === tokenLower) return n;
  }
  return token;
}

function displayNameForName(name, owner = null) {
  const pieceName = localCanonicalPieceName(name);
  const typeAttrs = state?.type_attrs && typeof state.type_attrs === "object" ? state.type_attrs : {};
  const effective = localMergePieceAttrs(localDefaultPieceAttrs(pieceName), typeAttrs[String(pieceName || "")] || {});
  if (effective.display_name !== undefined && effective.display_name !== null && String(effective.display_name).trim() !== "") {
    return localNormalizeNeutralImitatorDisplay(pieceName, String(effective.display_name));
  }
  return localDisplayPieceNameByOwner(pieceName, owner);
}

function effectiveTypeAttrsForName(name) {
  const pieceName = localHandTokenName(name);
  const typeAttrs = state?.type_attrs && typeof state.type_attrs === "object" ? state.type_attrs : {};
  return localMergePieceAttrs(localDefaultPieceAttrs(pieceName), typeAttrs[String(pieceName || "")] || {});
}

function changedAttrLinesFromDefault(name, effectiveAttrs) {
  const pieceName = localHandTokenName(name);
  const defaults = localDefaultPieceAttrs(pieceName);
  const effective = localNormalizePieceAttrs(effectiveAttrs || {});
  const lines = [];
  const defaultDisplay = defaults.display_name === null ? "" : String(defaults.display_name || "").trim();
  const effectiveDisplay = effective.display_name === null ? "" : String(effective.display_name || "").trim();
  if (defaultDisplay !== effectiveDisplay) {
    lines.push(`表示文字=${effectiveDisplay || "(既定)"}`);
  }
  if (Boolean(defaults.to_hand) !== Boolean(effective.to_hand)) {
    lines.push(`取捨駒=${effective.to_hand ? "OFF" : "ON"}`);
  }
  if ((defaults.promote_to || null) !== (effective.promote_to || null)) {
    const p = effective.promote_to ? `${displayNameForName(effective.promote_to)}(${effective.promote_to})` : "成れない";
    lines.push(`成り先=${p}`);
  }
  if (Boolean(defaults.is_king) !== Boolean(effective.is_king)) {
    lines.push(`玉属性=${effective.is_king ? "ON" : "OFF"}`);
  }
  if (Boolean(defaults.immortal) !== Boolean(effective.immortal)) {
    lines.push(`不滅属性=${effective.immortal ? "ON" : "OFF"}`);
  }
  if (!localDeepEqualSimple(defaults.promote_attrs, effective.promote_attrs)) {
    lines.push(`成り後属性=${effective.promote_attrs ? "設定あり" : "なし"}`);
  }
  return lines;
}

function changedAttrsTooltipForName(name) {
  const pieceName = localHandTokenName(name);
  const defaults = localDefaultPieceAttrs(pieceName);
  const effective = effectiveTypeAttrsForName(pieceName);
  const changed = localCollectChangedAttrsByEffective(effective, defaults);
  const leftLabel = localEffectiveDisplayLabel(pieceName, effective);
  if (Object.keys(changed).length <= 0) {
    if (!LOCAL_STANDARD_PIECE_NAMES.has(String(pieceName || ""))) {
      return `${leftLabel}:${pieceName}`;
    }
    return "";
  }
  const compactLine = localBuildCompactAttrLine(pieceName, changed, leftLabel);
  if (compactLine) return compactLine;
  const tokens = localFormatAttrTokensFromDict(changed);
  if (tokens.length > 0) return `${leftLabel}:${tokens.join("、")}`;
  const lines = changedAttrLinesFromDefault(pieceName, effective);
  if (lines.length <= 0) return "";
  return `${leftLabel}:${lines.join(" / ")}`;
}

function changedAttrsTooltipForPiece(piece) {
  if (!piece) return "";
  const typeAttrs = state?.type_attrs && typeof state.type_attrs === "object" ? state.type_attrs : {};
  const defaults = localDefaultPieceAttrs(piece.name);
  const base = localMergePieceAttrs(localDefaultPieceAttrs(piece.name), typeAttrs[String(piece.name || "")] || {});
  const effective = localMergePieceAttrs(base, piece?.attrs || {});
  const changed = localCollectChangedAttrsByEffective(effective, defaults);
  const leftLabel = localEffectiveDisplayLabel(piece.name, effective);
  if (Object.keys(changed).length <= 0) {
    if (!LOCAL_STANDARD_PIECE_NAMES.has(String(piece?.name || ""))) {
      return `${leftLabel}:${piece.name}`;
    }
    return "";
  }
  const compactLine = localBuildCompactAttrLine(piece.name, changed, leftLabel);
  if (compactLine) return compactLine;
  const tokens = localFormatAttrTokensFromDict(changed);
  if (tokens.length > 0) return `${leftLabel}:${tokens.join("、")}`;
  const lines = changedAttrLinesFromDefault(piece.name, effective);
  if (lines.length <= 0) return "";
  return `${leftLabel}:${lines.join(" / ")}`;
}

function displayNameForPiece(piece) {
  if (!piece) return "";
  const custom = piece?.attrs?.display_name;
  if (custom !== undefined && custom !== null && String(custom).trim() !== "") {
    return localNormalizeNeutralImitatorDisplay(piece?.name, String(custom));
  }
  return displayNameForName(piece.name, piece.owner);
}

function localShouldCompactPieceDisplayText(displayText, pieceName) {
  const text = String(displayText || "").trim();
  if (!text) return false;
  if (Array.from(text).length < 2) return false;
  const canonical = localCanonicalPieceName(pieceName);
  if (!canonical) return false;
  return !LOCAL_STANDARD_PIECE_NAMES.has(canonical);
}

function ruleLabelForKey(key) {
  const label = ruleLabels?.[key];
  if (typeof label === "string" && label.trim() !== "") return label;
  return key;
}

function ensureRuleSelectOptions(selectEl, values) {
  if (!selectEl) return;
  const next = Array.isArray(values) ? values.filter((v) => typeof v === "string") : [];
  const curr = Array.from(selectEl.options).map((op) => op.value);
  const same = curr.length === next.length && curr.every((v, i) => v === next[i]);
  if (same) return;
  selectEl.innerHTML = "";
  for (const v of next) {
    const op = document.createElement("option");
    op.value = v;
    op.textContent = v;
    selectEl.appendChild(op);
  }
}

function currentRuleFlagKeys() {
  const rules = state?.rules || {};
  const src = ruleKeys.length > 0 ? ruleKeys : Object.keys(rules);
  const out = [];
  for (const key of src) {
    if (RULE_PROFILE_KEYS.has(key) || RULE_INTERNAL_HIDDEN_KEYS.has(key)) continue;
    if (typeof rules[key] === "boolean") {
      out.push(key);
      continue;
    }
    if (ruleKeys.length > 0 && !localHasOwn(rules, key)) {
      out.push(key);
    }
  }
  return out;
}

function ruleTabForKey(key) {
  for (const tabId of Object.keys(RULE_TAB_KEY_MAP)) {
    if (RULE_TAB_KEY_MAP[tabId].has(key)) return tabId;
  }
  return "other";
}

function buildRuleDraftFromState() {
  const rules = state?.rules || {};
  const draft = {};
  const fallbackStrategy = ruleStrategyOptions[0] || "";
  const fallbackObjective = ruleObjectiveOptions[0] || "";
  draft.strategy = String(rules.strategy ?? fallbackStrategy);
  draft.objective = String(rules.objective ?? fallbackObjective);
  const rawPly = Number.parseInt(rules.problem_ply, 10);
  draft.problem_ply = Number.isFinite(rawPly) && rawPly > 0 ? rawPly : 0;
  for (const key of currentRuleFlagKeys()) {
    draft[key] = Boolean(rules[key]);
  }
  return applyRuleDraftConstraints(draft);
}

function buildTsumeOnlyRuleDraft() {
  const draft = {};
  const fallbackStrategy = ruleStrategyOptions[0] || "詰将棋";
  const fallbackObjective = ruleObjectiveOptions[0] || "詰";
  draft.strategy = ruleStrategyOptions.includes("詰将棋") ? "詰将棋" : fallbackStrategy;
  draft.objective = ruleObjectiveOptions.includes("詰") ? "詰" : fallbackObjective;
  draft.problem_ply = 0;
  for (const key of currentRuleFlagKeys()) {
    draft[key] = false;
  }
  return applyRuleDraftConstraints(draft);
}

function applyRuleDraftConstraints(draft, changedPatch) {
  if (!draft || typeof draft !== "object") return draft;
  const validRuleKeys = new Set(currentRuleFlagKeys());
  const patchObj = changedPatch && typeof changedPatch === "object" ? changedPatch : {};
  const patchTrueKeysOrdered = Object.entries(patchObj)
    .filter(([, v]) => v === true)
    .map(([k]) => k);
  const catalog = loadCustomCatalogFromStorage();
  const specMap = localBuildRuleCompositionSpecFromCatalog(catalog, validRuleKeys);
  const patchTrueKeys = new Set(patchTrueKeysOrdered);
  const before = {};
  for (const key of validRuleKeys) {
    before[key] = Boolean(draft[key]);
  }
  localApplyCustomRuleCompositionConstraints(draft, patchObj, validRuleKeys);
  if (draft.uchifu_simple) {
    draft.uchifu_complete = false;
  } else if (draft.uchifu_complete) {
    draft.uchifu_simple = false;
  }
  if (draft[CANT_REPEAT_TYPE_RULE_KEY] && draft[CANT_CAPTURE_REPEAT_TYPE_RULE_KEY]) {
    if (patchTrueKeys.has(CANT_CAPTURE_REPEAT_TYPE_RULE_KEY)) {
      draft[CANT_REPEAT_TYPE_RULE_KEY] = false;
    } else if (patchTrueKeys.has(CANT_REPEAT_TYPE_RULE_KEY)) {
      draft[CANT_CAPTURE_REPEAT_TYPE_RULE_KEY] = false;
    } else if (before[CANT_REPEAT_TYPE_RULE_KEY] && !before[CANT_CAPTURE_REPEAT_TYPE_RULE_KEY]) {
      draft[CANT_CAPTURE_REPEAT_TYPE_RULE_KEY] = false;
    } else if (before[CANT_CAPTURE_REPEAT_TYPE_RULE_KEY] && !before[CANT_REPEAT_TYPE_RULE_KEY]) {
      draft[CANT_REPEAT_TYPE_RULE_KEY] = false;
    } else {
      draft[CANT_CAPTURE_REPEAT_TYPE_RULE_KEY] = false;
    }
  }
  if (draft[PATROL_RULE_KEY] && draft[LORTAP_RULE_KEY]) {
    if (patchTrueKeys.has(LORTAP_RULE_KEY)) {
      draft[PATROL_RULE_KEY] = false;
    } else if (patchTrueKeys.has(PATROL_RULE_KEY)) {
      draft[LORTAP_RULE_KEY] = false;
    } else if (before[PATROL_RULE_KEY] && !before[LORTAP_RULE_KEY]) {
      draft[LORTAP_RULE_KEY] = false;
    } else if (before[LORTAP_RULE_KEY] && !before[PATROL_RULE_KEY]) {
      draft[PATROL_RULE_KEY] = false;
    } else {
      draft[LORTAP_RULE_KEY] = false;
    }
  }
  if (draft.isardam_type_b) {
    draft.isardam = false;
  }
  if (draft[MESSIGNY_NO_BACK_RULE_KEY]) {
    draft.messigny = true;
  } else if (!draft.messigny) {
    draft[MESSIGNY_NO_BACK_RULE_KEY] = false;
  }
  if (draft.k_madrasi) {
    draft.madrasi = false;
  }
  if (draft.k_take_make) {
    draft.take_make = false;
  }
  // 性能変化タブのルールは相互排他（常にどれか1つだけON可）として扱う。
  const performanceKeys = PERFORMANCE_MUTUAL_EXCLUSIVE_KEYS.filter((key) => validRuleKeys.has(key));
  if (performanceKeys.length > 0) {
    let winner = "";
    // ユーザーが今回ONにしたキーを最優先で残す。
    for (let i = patchTrueKeysOrdered.length - 1; i >= 0; i -= 1) {
      const key = String(patchTrueKeysOrdered[i] || "");
      if (!performanceKeys.includes(key)) continue;
      winner = key;
      break;
    }
    // 今回ON指定がなければ、既にONの先頭を勝者とする。
    if (!winner) {
      winner = performanceKeys.find((key) => draft[key] === true) || "";
    }
    if (winner) {
      draft[winner] = true;
      for (const key of performanceKeys) {
        if (key === winner) continue;
        draft[key] = false;
      }
    }
  }
  // 取り方/所属タブのルールは相互排他（常にどれか1つだけON可）として扱う。
  const captureOwnerKeys = CAPTURE_OWNER_MUTUAL_EXCLUSIVE_KEYS.filter((key) => validRuleKeys.has(key));
  if (captureOwnerKeys.length > 0) {
    let winner = "";
    // ユーザーが今回ONにしたキーを最優先で残す。
    for (let i = patchTrueKeysOrdered.length - 1; i >= 0; i -= 1) {
      const key = String(patchTrueKeysOrdered[i] || "");
      if (!captureOwnerKeys.includes(key)) continue;
      winner = key;
      break;
    }
    // 今回ON指定がなければ、既にONの先頭を勝者とする。
    if (!winner) {
      winner = captureOwnerKeys.find((key) => draft[key] === true) || "";
    }
    if (winner) {
      draft[winner] = true;
      for (const key of captureOwnerKeys) {
        if (key === winner) continue;
        draft[key] = false;
      }
    }
  }
  // 排他項目は「今回ONにした項目」を優先し、競合項目をOFFにする。
  localApplyPatchedExclusiveWins(draft, patchTrueKeysOrdered, specMap, validRuleKeys);
  if (Object.keys(patchObj).length > 0) {
    const patchKeys = new Set(Object.keys(patchObj));
    const autoChangedLabels = [];
    const blockedByPriority = [];
    for (const key of validRuleKeys) {
      if (Boolean(before[key]) === Boolean(draft[key])) continue;
      if (patchKeys.has(key)) continue;
      autoChangedLabels.push(ruleLabelForKey(key));
    }
    for (const key of patchTrueKeys) {
      if (draft[key] === true) continue;
      let winnerLabel = "";
      for (const [otherKey, spec] of specMap.entries()) {
        if (otherKey === key) continue;
        if (draft[otherKey] !== true) continue;
        if (!Array.isArray(spec?.excludes) || !spec.excludes.includes(key)) continue;
        if (localRuleCompositionKeyWins(specMap, patchTrueKeys, otherKey, key)) {
          winnerLabel = ruleLabelForKey(otherKey);
          break;
        }
      }
      const label = ruleLabelForKey(key);
      blockedByPriority.push(
        winnerLabel ? `${label}(優先: ${winnerLabel})` : `${label}(優先度でOFF)`
      );
    }
    const infoParts = [];
    if (autoChangedLabels.length > 0) {
      infoParts.push(`自動調整：${autoChangedLabels.join(" / ")}`);
    }
    if (blockedByPriority.length > 0) {
      infoParts.push(`選択不可：${blockedByPriority.join(" / ")}`);
    }
    setRuleConstraintInfo(infoParts.join(" ｜ "));
  }
  return draft;
}

function ensureRuleDraft() {
  if (!ruleDraft) ruleDraft = buildRuleDraftFromState();
  return ruleDraft;
}

function setRuleConstraintInfo(text = "") {
  ruleConstraintInfoText = String(text || "");
  if (ui.ruleConstraintInfo) ui.ruleConstraintInfo.textContent = ruleConstraintInfoText;
}

function syncRuleDraftFromInputs() {
  if (!state) return;
  const draft = ensureRuleDraft();
  if (ui.ruleStrategySelect) draft.strategy = ui.ruleStrategySelect.value;
  if (ui.ruleObjectiveSelect) draft.objective = ui.ruleObjectiveSelect.value;
  if (ui.ruleProblemPlyInput) {
    const raw = Number.parseInt(ui.ruleProblemPlyInput.value, 10);
    draft.problem_ply = Number.isFinite(raw) && raw > 0 ? raw : 0;
  }
  if (ui.ruleFlags) {
    const inputs = ui.ruleFlags.querySelectorAll("input[type='checkbox'][data-rule-key]");
    for (const input of inputs) {
      const key = input.dataset.ruleKey;
      draft[key] = Boolean(input.checked);
    }
  }
  applyRuleDraftConstraints(draft);
}

function activeRuleSource() {
  if (ui.ruleDialog?.open) return ensureRuleDraft();
  return state?.rules || {};
}

function filteredRuleFlagKeys() {
  const all = currentRuleFlagKeys();
  const keys = all.filter((key) => ruleTabForKey(key) === activeRuleTab);
  // Inline-managed rule flags are shown beside their host rules.
  return keys.filter((key) => !INLINE_RULE_CHILD_KEYS.has(key));
}

function renderRuleTabs() {
  if (!ui.ruleTabs) return;
  const buttons = ui.ruleTabs.querySelectorAll("button.rule-tab[data-rule-tab]");
  for (const btn of buttons) {
    const tabId = btn.dataset.ruleTab;
    btn.classList.toggle("active", tabId === activeRuleTab);
  }
}

function ensureRuleFlagInputs() {
  if (!ui.ruleFlags) return;
  const keys = filteredRuleFlagKeys();
  const rules = activeRuleSource();
  ui.ruleFlags.innerHTML = "";
  for (const key of keys) {
    const row = document.createElement("label");
    row.className = "rule-flag";

    const main = document.createElement("span");
    main.className = "rule-flag-main";

    const inlineChildKey = INLINE_RULE_HOST_TO_CHILD.get(key);
    const hostChecked = INLINE_PSEUDO_HOST_KEYS.has(key) && inlineChildKey
      ? Boolean(rules[key]) || Boolean(rules[inlineChildKey])
      : Boolean(rules[key]);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.dataset.ruleKey = key;
    input.checked = hostChecked;
    input.addEventListener("change", () => {
      const draft = ensureRuleDraft();
      const checked = Boolean(input.checked);
      const changedPatch = { [key]: checked };
      draft[key] = checked;
      if (inlineChildKey && !input.checked) {
        // Additional option is meaningful only while the host rule is on.
        draft[inlineChildKey] = false;
        changedPatch[inlineChildKey] = false;
      }
      applyRuleDraftConstraints(draft, changedPatch);
      ensureRuleFlagInputs();
    });

    const text = document.createElement("span");
    text.textContent = ruleLabelForKey(key);
    main.appendChild(input);
    main.appendChild(text);
    row.appendChild(main);

    if (inlineChildKey && hostChecked) {
      const inline = document.createElement("span");
      inline.className = "rule-inline-option";
      const inlineInput = document.createElement("input");
      inlineInput.type = "checkbox";
      inlineInput.dataset.ruleKey = inlineChildKey;
      inlineInput.checked = Boolean(rules[inlineChildKey]);
      inlineInput.addEventListener("change", () => {
        const checked = Boolean(inlineInput.checked);
        const draft = ensureRuleDraft();
        const changedPatch = { [inlineChildKey]: checked };
        draft[inlineChildKey] = checked;
        if (checked && INLINE_PSEUDO_HOST_KEYS.has(key)) {
          draft[key] = true;
          // 子ルールを選んだ操作を優先し、親ルールはUI表示のためだけにONへ寄せる。
          // changedPatch には親を入れず、排他判定で親が勝たないようにする。
        }
        applyRuleDraftConstraints(draft, changedPatch);
        ensureRuleFlagInputs();
      });
      const inlineText = document.createElement("span");
      inlineText.textContent = ruleLabelForKey(inlineChildKey);
      inline.appendChild(inlineInput);
      inline.appendChild(inlineText);
      row.appendChild(inline);
    }

    ui.ruleFlags.appendChild(row);
  }
  renderedRuleFlagKeys = keys;
}

function setStatusPair(el, label, value) {
  if (!el) return;
  el.innerHTML = "";
  const key = document.createElement("span");
  key.className = "status-key";
  key.textContent = `${label}：`;
  const val = document.createElement("span");
  val.className = "status-val";
  val.textContent = value;
  el.appendChild(key);
  el.appendChild(val);
}

function renderRulePanel() {
  const ruleName = state?.rule_name || "-";
  setStatusPair(ui.ruleNameInfo, "ルール", ruleName);
  if (ui.ruleNameText) ui.ruleNameText.textContent = `現在：${ruleName}`;
  if (ui.ruleConstraintInfo) ui.ruleConstraintInfo.textContent = ruleConstraintInfoText;
  renderRuleTabs();

  ensureRuleSelectOptions(ui.ruleStrategySelect, ruleStrategyOptions);
  ensureRuleSelectOptions(ui.ruleObjectiveSelect, ruleObjectiveOptions);

  const rules = activeRuleSource();
  if (ui.ruleStrategySelect) {
    const fallback = ruleStrategyOptions[0] || "";
    const v = String(rules.strategy ?? fallback);
    if (v && Array.from(ui.ruleStrategySelect.options).some((op) => op.value === v)) {
      ui.ruleStrategySelect.value = v;
    }
  }
  if (ui.ruleObjectiveSelect) {
    const fallback = ruleObjectiveOptions[0] || "";
    const v = String(rules.objective ?? fallback);
    if (v && Array.from(ui.ruleObjectiveSelect.options).some((op) => op.value === v)) {
      ui.ruleObjectiveSelect.value = v;
    }
  }
  if (ui.ruleProblemPlyInput) {
    const raw = Number.parseInt(rules.problem_ply, 10);
    ui.ruleProblemPlyInput.value = Number.isFinite(raw) && raw > 0 ? String(raw) : "0";
  }

  ensureRuleFlagInputs();
  if (ui.btnRuleApply) ui.btnRuleApply.disabled = !state;
  if (ui.btnRuleReset) ui.btnRuleReset.disabled = !state;
}

function closeRuleDialog() {
  ruleDraft = null;
  setRuleConstraintInfo("");
  if (ui.ruleDialog?.open) ui.ruleDialog.close();
}

function openRuleDialog() {
  if (!ui.ruleDialog || !state) return;
  if (!RULE_TAB_IDS.includes(activeRuleTab)) activeRuleTab = RULE_TAB_IDS[0];
  ruleDraft = buildRuleDraftFromState();
  setRuleConstraintInfo("");
  renderRulePanel();
  if (!ui.ruleDialog.open) ui.ruleDialog.showModal();
}

const RULE_COMPATIBILITY_IGNORE_KEYS = new Set(["strategy", "objective", "problem_ply", "detect_sennichite"]);

function hasAnyHistoryMovesForRuleCompatibilityCheck() {
  if (!historyTree || !Array.isArray(historyTree.nodes)) return false;
  return historyTree.nodes.some((n) => Number(n?.ply || 0) > 0);
}

function hasAnyReverseHistoryMovesForTransition() {
  if (!reverseHistoryTree || !Array.isArray(reverseHistoryTree.nodes)) return false;
  return reverseHistoryTree.nodes.some((n) => Number(n?.ply || 0) > 0);
}

function hasAnyCurrentPlayTrailMovesForEditTransition() {
  if (playSubMode === "reverse") {
    return hasAnyReverseHistoryMovesForTransition();
  }
  return hasAnyHistoryMovesForRuleCompatibilityCheck();
}

async function confirmSwitchToEditWithHistoryResetRisk() {
  const message = "現在の棋譜は消去されます。編集モードへ移行してよいですか？";
  if (!ui.playSubModeDialog || !ui.playSubModeDialogActions || !ui.playSubModeDialogTitle || !ui.playSubModeDialogMessage) {
    return window.confirm(message);
  }
  ui.playSubModeDialogTitle.textContent = "編集モードへ切替";
  ui.playSubModeDialogMessage.textContent = message;
  ui.playSubModeDialogActions.innerHTML = "";
  const actions = [
    { value: "apply", label: "移行する" },
    { value: "cancel", label: "キャンセル" },
  ];
  for (const action of actions) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.value = action.value;
    btn.textContent = action.label;
    ui.playSubModeDialogActions.appendChild(btn);
  }
  const result = await new Promise((resolve) => {
    const onClick = (e) => {
      const btn = e.target?.closest?.("button[data-value]");
      if (!btn) return;
      cleanup(String(btn.dataset.value || "cancel"));
    };
    const onCancel = (e) => {
      e.preventDefault();
      cleanup("cancel");
    };
    const cleanup = (value) => {
      ui.playSubModeDialogActions.removeEventListener("click", onClick);
      ui.playSubModeDialog.removeEventListener("cancel", onCancel);
      if (ui.playSubModeDialog.open) ui.playSubModeDialog.close();
      resolve(value);
    };
    ui.playSubModeDialogActions.addEventListener("click", onClick);
    ui.playSubModeDialog.addEventListener("cancel", onCancel);
    ui.playSubModeDialog.showModal();
  });
  return result === "apply";
}

function isRulePatchAffectingMoveLegality(patch) {
  const cur = state?.rules && typeof state.rules === "object" ? state.rules : {};
  const src = patch && typeof patch === "object" ? patch : {};
  for (const [key, nextVal] of Object.entries(src)) {
    if (RULE_COMPATIBILITY_IGNORE_KEYS.has(key)) continue;
    if (!localHasOwn(cur, key)) continue;
    if (JSON.stringify(cur[key]) !== JSON.stringify(nextVal)) return true;
  }
  return false;
}

async function detectRulePatchHistoryIncompatibility(patch) {
  if (!sessionId) return { checked: false, incompatible: false };
  try {
    const env = await currentEngine().ioExportKifuText(sessionId);
    const kifuText = String(env?.data?.kifu || "").trim();
    if (!kifuText) return { checked: false, incompatible: false };

    let meta = null;
    try {
      meta = await loadLocalMetaFromStatic();
    } catch (_e) {
      meta = null;
    }

    const parsed = localParseKifuText(kifuText, meta, {
      typeAttrs: state?.type_attrs && typeof state.type_attrs === "object" ? state.type_attrs : {},
    });
    const split = localSplitKifuAndVariationLines(parsed?.moveLines || []);
    const moveInfo = localExtractMovesAndTerminalFromKifuLines(split.mainLines);
    const moves = Array.isArray(moveInfo?.moves) ? moveInfo.moves : [];
    if (moves.length <= 0) {
      return { checked: true, incompatible: false };
    }

    const rootState = buildRootStateFromParsedKifu(parsed);
    const simCtx = localBuildContextFromState(localBuildPresetState("tsume"));
    simCtx.state.board = cloneJson(rootState.board || { width: 9, height: 9, pieces: [] });
    simCtx.state.hands = cloneJson(rootState.hands || { "0": [], "1": [] });
    simCtx.state.turn = Number(rootState.turn) === 1 ? 1 : 0;
    simCtx.state.mode = "play";
    simCtx.state.rules = cloneJson(rootState.rules || localDefaultRulesObject());
    simCtx.typeAttrs = cloneJson(rootState.type_attrs || {});
    simCtx.state.repeat_params = { from_ply: null, to_ply: null, repeat_count: null };
    localApplyRulePatch(simCtx, patch, meta);
    localRefreshAllPieceEffectiveAttrs(simCtx);
    simCtx.history = localBaseHistoryForState(simCtx.state);
    simCtx.legal = localEmptyLegal();
    simCtx.legal_cache_revision = -1;

    for (let i = 0; i < moves.length; i += 1) {
      const mv = String(moves[i] || "").trim();
      if (!mv) continue;
      let ok = localReplayMoveTextOnCurrent(simCtx, mv, {
        noTouch: true,
        fastHintMode: true,
        allowFullFallback: false,
      });
      if (!ok) {
        ok = localReplayMoveTextOnCurrent(simCtx, mv, {
          noTouch: true,
          fastHintMode: false,
          allowFullFallback: true,
        });
      }
      if (!ok) {
        return {
          checked: true,
          incompatible: true,
          failedPly: i + 1,
          failedMove: mv,
        };
      }
    }
    return { checked: true, incompatible: false };
  } catch (e) {
    logLine(`ルール互換チェック失敗: ${e?.message || e}`);
    return { checked: false, incompatible: false };
  }
}

async function confirmRuleApplyWithHistoryResetRisk(preview) {
  const failedPly = Number(preview?.failedPly || 0);
  const failedMove = String(preview?.failedMove || "").trim();
  const detail = failedPly > 0 && failedMove
    ? `（${failedPly}手目: ${failedMove}）`
    : "";
  const message = `このルールでは現在の棋譜を維持できません。棋譜を消去して適用してもよいですか？${detail}`;
  if (!ui.playSubModeDialog || !ui.playSubModeDialogActions || !ui.playSubModeDialogTitle || !ui.playSubModeDialogMessage) {
    return window.confirm(message);
  }
  ui.playSubModeDialogTitle.textContent = "ルール変更の確認";
  ui.playSubModeDialogMessage.textContent = message;
  ui.playSubModeDialogActions.innerHTML = "";
  const actions = [
    { value: "apply", label: "適用する" },
    { value: "cancel", label: "キャンセル" },
  ];
  for (const action of actions) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.value = action.value;
    btn.textContent = action.label;
    ui.playSubModeDialogActions.appendChild(btn);
  }
  const result = await new Promise((resolve) => {
    const onClick = (e) => {
      const btn = e.target?.closest?.("button[data-value]");
      if (!btn) return;
      cleanup(String(btn.dataset.value || "cancel"));
    };
    const onCancel = (e) => {
      e.preventDefault();
      cleanup("cancel");
    };
    const cleanup = (value) => {
      ui.playSubModeDialogActions.removeEventListener("click", onClick);
      ui.playSubModeDialog.removeEventListener("cancel", onCancel);
      if (ui.playSubModeDialog.open) ui.playSubModeDialog.close();
      resolve(value);
    };
    ui.playSubModeDialogActions.addEventListener("click", onClick);
    ui.playSubModeDialog.addEventListener("cancel", onCancel);
    ui.playSubModeDialog.showModal();
  });
  return result === "apply";
}

async function applyRulesFromPanel() {
  if (!sessionId || !state) return;
  syncRuleDraftFromInputs();
  const draft = ensureRuleDraft();

  const patch = {};
  patch.strategy = draft.strategy;
  patch.objective = draft.objective;
  patch.problem_ply = draft.problem_ply;
  for (const key of currentRuleFlagKeys()) {
    patch[key] = Boolean(draft[key]);
  }
  // Kマドラシは内部的には単独フラグとして扱う。
  if (patch.k_madrasi) {
    patch.madrasi = false;
  }
  // K-Take&Makeは内部的には単独フラグとして扱う。
  if (patch.k_take_make) {
    patch.take_make = false;
  }
  // Isardam(TypeB)は内部的に独立フラグとして扱う。
  if (patch.isardam_type_b) {
    patch.isardam = false;
  }
  // 打歩(単純)ON時は内部的に打歩(完全)を立てない。
  if (patch.uchifu_simple) {
    patch.uchifu_complete = false;
  }

  let shouldClearHistoryAfterApply = false;
  if (
    state?.mode === "play" &&
    !isReverseSubModeActive() &&
    hasAnyHistoryMovesForRuleCompatibilityCheck() &&
    isRulePatchAffectingMoveLegality(patch)
  ) {
    const preview = await detectRulePatchHistoryIncompatibility(patch);
    if (preview?.checked && preview?.incompatible) {
      const ok = await confirmRuleApplyWithHistoryResetRisk(preview);
      if (!ok) return;
      shouldClearHistoryAfterApply = true;
    }
  }

  const env = await currentEngine().patchRules(sessionId, revision, patch);
  applyStateEnvelope(env);
  if (shouldClearHistoryAfterApply && state?.mode === "play") {
    const envEdit = await currentEngine().patchMode(sessionId, revision, "edit");
    applyStateEnvelope(envEdit);
    const envPlay = await currentEngine().patchMode(sessionId, revision, "play");
    applyStateEnvelope(envPlay);
  }
  selected = null;
  ruleDraft = null;
  setRuleConstraintInfo("");
  await refreshLegal();
  await refreshHistory();
  renderAll();
  logLine(`ルール適用：${state?.rule_name || "-"}`);
}

function pieceMapFromState() {
  const map = new Map();
  if (!state?.board?.pieces) return map;
  for (const p of state.board.pieces) {
    map.set(coordKey(p.x, p.y), p);
  }
  return map;
}

function boardCandidatesFrom(x, y) {
  return legalMoves.filter(
    (m) => m.kind === "move" && m.from && m.from.x === x && m.from.y === y
  );
}

function boardCandidatesTo(fromX, fromY, toX, toY) {
  return legalMoves.filter(
    (m) =>
      m.kind === "move" &&
      m.from &&
      m.to &&
      m.from.x === fromX &&
      m.from.y === fromY &&
      m.to.x === toX &&
      m.to.y === toY
  );
}

function legalMoveTakeMakeStepTo(mv) {
  if (!mv || mv.kind !== "move") return null;
  const direct = mv?.take_make?.step_to;
  if (direct && localInBoard(direct.x, direct.y)) {
    return { x: Number(direct.x), y: Number(direct.y) };
  }
  if (!localIsTakeMakeActive(state?.rules || {})) return null;
  const raw = localNormalizeDigits(String(mv?.notation || "").trim());
  if (!raw) return null;
  const body = raw.replace(/^\s*(?:v[▲△]|[▲△]|v)\s*/, "");
  const mm = body.match(/^((?:同)|(?:[1-9][1-9]))\s*-\s*([1-9])([1-9])/);
  if (!mm) return null;
  const stepToken = String(mm[1] || "");
  let stepX = null;
  let stepY = null;
  if (stepToken === "同") {
    const info = localExtractLastMoveInfo(
      (historyTree?.nodes || []).find((n) => n && n.node_id === historyTree?.current_id)?.last_move_info || null
    );
    const to = info?.to || null;
    if (!to) return null;
    stepX = Array.isArray(to) ? Number(to[0]) : Number(to.x);
    stepY = Array.isArray(to) ? Number(to[1]) : Number(to.y);
  } else {
    stepX = localParseReplayFileChar(stepToken[0]);
    stepY = localParseReplayRankChar(stepToken[1]);
  }
  const finalX = localParseReplayFileChar(mm[2]);
  const finalY = localParseReplayRankChar(mm[3]);
  if (!localInBoard(stepX, stepY) || !localInBoard(finalX, finalY)) return null;
  if (
    mv?.to &&
    (Number(mv.to.x) !== Number(finalX) || Number(mv.to.y) !== Number(finalY))
  ) {
    return null;
  }
  return { x: stepX, y: stepY };
}

function boardTakeMakeStepCandidates(fromX, fromY, stepX, stepY) {
  return boardCandidatesFrom(fromX, fromY).filter((m) => {
    const step = legalMoveTakeMakeStepTo(m);
    return (
      m?.kind === "move" &&
      step &&
      localInBoard(step.x, step.y) &&
      Number(step.x) === Number(stepX) &&
      Number(step.y) === Number(stepY)
    );
  });
}

function boardTakeMakeContinuationCandidates(fromX, fromY, stepX, stepY, toX, toY) {
  return boardTakeMakeStepCandidates(fromX, fromY, stepX, stepY).filter(
    (m) => m?.to && Number(m.to.x) === Number(toX) && Number(m.to.y) === Number(toY)
  );
}

function takeMakePendingForSelectedBoard() {
  if (!selected || selected.type !== "board") return null;
  if (!takeMakePending) return null;
  if (takeMakePending?.reverse) return null;
  if (
    Number(takeMakePending.fromX) !== Number(selected.x) ||
    Number(takeMakePending.fromY) !== Number(selected.y)
  ) {
    return null;
  }
  const stepX = Number(takeMakePending.stepX);
  const stepY = Number(takeMakePending.stepY);
  if (!localInBoard(stepX, stepY)) return null;
  const cachedCandsRaw = Array.isArray(takeMakePending.cands) ? takeMakePending.cands : null;
  const cachedCands = cachedCandsRaw
    ? cachedCandsRaw.filter(
        (m) =>
          m?.kind === "move" &&
          m?.from &&
          Number(m.from.x) === Number(selected.x) &&
          Number(m.from.y) === Number(selected.y) &&
          (() => {
            const step = legalMoveTakeMakeStepTo(m);
            return !!step && Number(step.x) === stepX && Number(step.y) === stepY;
          })()
      )
    : null;
  const cands =
    cachedCands && cachedCands.length > 0
      ? cachedCands
      : boardTakeMakeStepCandidates(Number(selected.x), Number(selected.y), stepX, stepY);
  if (cands.length <= 0) return null;
  return {
    fromX: Number(selected.x),
    fromY: Number(selected.y),
    stepX,
    stepY,
    cands,
  };
}

function reverseBoardTakeMakeStepCandidates(anchorX, anchorY, stepX, stepY) {
  return reverseBoardCandidatesAtToSquare(anchorX, anchorY).filter((m) => {
    if (!m || m.kind !== "move") return false;
    const step = legalMoveTakeMakeStepTo(m);
    if (!step || !localInBoard(step.x, step.y)) return false;
    return Number(step.x) === Number(stepX) && Number(step.y) === Number(stepY);
  });
}

function reverseBoardTakeMakeContinuationCandidates(anchorX, anchorY, stepX, stepY, fromX, fromY) {
  return reverseBoardTakeMakeStepCandidates(anchorX, anchorY, stepX, stepY).filter(
    (m) => m?.from && Number(m.from.x) === Number(fromX) && Number(m.from.y) === Number(fromY)
  );
}

function reverseTakeMakePendingForSelectedBoard() {
  if (!selected || selected.type !== "board") return null;
  if (!takeMakePending || !takeMakePending?.reverse) return null;
  if (
    Number(takeMakePending.fromX) !== Number(selected.x) ||
    Number(takeMakePending.fromY) !== Number(selected.y)
  ) {
    return null;
  }
  const stepX = Number(takeMakePending.stepX);
  const stepY = Number(takeMakePending.stepY);
  if (!localInBoard(stepX, stepY)) return null;
  const cachedCandsRaw = Array.isArray(takeMakePending.cands) ? takeMakePending.cands : null;
  const cachedCands = cachedCandsRaw
    ? cachedCandsRaw.filter(
        (m) =>
          m?.kind === "move" &&
          m?.to &&
          Number(m.to.x) === Number(selected.x) &&
          Number(m.to.y) === Number(selected.y) &&
          (() => {
            const step = legalMoveTakeMakeStepTo(m);
            return !!step && Number(step.x) === stepX && Number(step.y) === stepY;
          })()
      )
    : null;
  const cands =
    cachedCands && cachedCands.length > 0
      ? cachedCands
      : reverseBoardTakeMakeStepCandidates(Number(selected.x), Number(selected.y), stepX, stepY);
  if (cands.length <= 0) return null;
  return {
    fromX: Number(selected.x),
    fromY: Number(selected.y),
    stepX,
    stepY,
    cands,
    reverse: true,
  };
}

function reverseBoardCandidatesAtToSquare(x, y) {
  ensureReverseMovesForCurrentState();
  return reverseMoves.filter(
    (m) => m?.to && Number(m.to.x) === Number(x) && Number(m.to.y) === Number(y)
  );
}

function reverseBoardCandidatesTo(anchorX, anchorY, targetX, targetY) {
  const anchorMoves = reverseBoardCandidatesAtToSquare(anchorX, anchorY);
  return anchorMoves.filter((m) => {
    if (m.kind === "move" && m.from) {
      return Number(m.from.x) === Number(targetX) && Number(m.from.y) === Number(targetY);
    }
    if (m.kind === "drop") {
      return Number(anchorX) === Number(targetX) && Number(anchorY) === Number(targetY);
    }
    return false;
  });
}

function dropCandidates(owner, name) {
  const handToken = localParseHandToken(name);
  return legalMoves.filter(
    (m) =>
      m.kind === "drop" &&
      Number(m.owner) === Number(owner) &&
      m.to &&
      localDropHandTokenMatches(m, handToken.token || handToken.name)
  );
}

function dropCandidatesTo(owner, name, toX, toY) {
  const handToken = localParseHandToken(name);
  return legalMoves.filter(
    (m) =>
      m.kind === "drop" &&
      Number(m.owner) === Number(owner) &&
      localDropHandTokenMatches(m, handToken.token || handToken.name) &&
      m.to &&
      m.to.x === toX &&
      m.to.y === toY
  );
}

function boardSelectable(x, y, piece) {
  if (state?.mode !== "play") return false;
  if (isReverseSubModeActive()) {
    if (!piece) return false;
    return reverseBoardCandidatesAtToSquare(x, y).length > 0;
  }
  if (!piece) return false;
  return boardCandidatesFrom(x, y).length > 0;
}

function handSelectable(owner, name) {
  if (state?.mode !== "play") return false;
  if (isReverseSubModeActive()) {
    if (!selected || selected.type !== "board") return false;
    const anchorX = Number(selected.x);
    const anchorY = Number(selected.y);
    const cands = reverseBoardCandidatesTo(anchorX, anchorY, anchorX, anchorY);
    return cands.some(
      (m) => m?.kind === "drop" && Number(m.owner) === Number(owner) && localDropHandTokenMatches(m, name)
    );
  }
  return dropCandidates(owner, name).length > 0;
}

function handOwnerCanAct(owner) {
  if (state?.mode !== "play") return false;
  if (state?.rules?.all_in_shogi) return owner === 0 || owner === 1;
  return Number(state?.turn) === Number(owner);
}

async function ensureHandSelectable(owner, name) {
  if (handSelectable(owner, name)) return true;
  if (!sessionId || !handOwnerCanAct(owner)) return false;
  // stale cacheで手駒候補が欠落している場合に備えて、先に合法手全体を同期する。
  try {
    await refreshLegal();
  } catch (_e) {
    // getLegalHand fallback below
  }
  if (handSelectable(owner, name)) return true;
  try {
    const env = await currentEngine().getLegalHand(sessionId, owner, name);
    revision = env.revision;
    const moves = Array.isArray(env?.data?.moves) ? env.data.moves : [];
    if (moves.length <= 0) return false;
    await refreshLegal();
    return handSelectable(owner, name);
  } catch (e) {
    logLine(e.message || String(e), true);
    return false;
  }
}

async function choosePromoteByDialog(options = null) {
  const opts = options && typeof options === "object" ? options : {};
  const titleText = String(opts.title || "成生選択");
  const promptText = String(opts.prompt || "成りますか？");
  const yesText = String(opts.yes || "成る");
  const noText = String(opts.no || "不成");
  if (!ui.promoteDialog || !ui.btnPromoteYes || !ui.btnPromoteNo) {
    return window.confirm(`${promptText}\nOK：${yesText} / キャンセル：${noText}`);
  }
  const titleEl = ui.promoteDialog.querySelector("h3");
  const promptEl = ui.promoteDialog.querySelector(".attr-target");
  if (titleEl) titleEl.textContent = titleText;
  if (promptEl) promptEl.textContent = promptText;
  ui.btnPromoteYes.textContent = yesText;
  ui.btnPromoteNo.textContent = noText;
  return await new Promise((resolve) => {
    const onYes = () => cleanup(true);
    const onNo = () => cleanup(false);
    const onCancel = (e) => {
      e.preventDefault();
      cleanup(null);
    };
    const cleanup = (result) => {
      ui.btnPromoteYes.removeEventListener("click", onYes);
      ui.btnPromoteNo.removeEventListener("click", onNo);
      ui.promoteDialog.removeEventListener("cancel", onCancel);
      if (ui.promoteDialog.open) ui.promoteDialog.close();
      resolve(result);
    };

    ui.btnPromoteYes.addEventListener("click", onYes);
    ui.btnPromoteNo.addEventListener("click", onNo);
    ui.promoteDialog.addEventListener("cancel", onCancel);
    ui.promoteDialog.showModal();
  });
}

function reverseCapturedNameKeyOfCandidate(candidate) {
  const raw = String(candidate?.captured_name_hint || "").trim();
  const decoded = reverseCaptureHintDecode(raw);
  const nameFromHint = localCanonicalPieceName(String(decoded?.name || "").trim());
  const ownerFromHintRaw = Number(decoded?.owner);
  const ownerFromHint =
    ownerFromHintRaw === -1 || ownerFromHintRaw === 0 || ownerFromHintRaw === 1 ? ownerFromHintRaw : null;
  const mv = candidate && typeof candidate === "object" ? candidate : null;
  const prePieces = Array.isArray(mv?.pre_state?.board?.pieces) ? mv.pre_state.board.pieces : [];
  const capPos =
    mv?.take_make?.capture_at && localInBoard(Number(mv.take_make.capture_at.x), Number(mv.take_make.capture_at.y))
      ? { x: Number(mv.take_make.capture_at.x), y: Number(mv.take_make.capture_at.y) }
      : mv?.locust_capture && localInBoard(Number(mv.locust_capture.x), Number(mv.locust_capture.y))
        ? { x: Number(mv.locust_capture.x), y: Number(mv.locust_capture.y) }
        : mv?.to && localInBoard(Number(mv.to.x), Number(mv.to.y))
          ? { x: Number(mv.to.x), y: Number(mv.to.y) }
          : null;
  const hasExplicitCapturePos =
    Boolean(mv?.take_make?.capture_at) || Boolean(mv?.locust_capture) || Boolean(mv?.locust_capture_pos);
  // Zero(零) の同一マス移動など、from==to で明示捕獲情報がないケースは駒取扱いしない。
  if (
    !hasExplicitCapturePos &&
    mv?.from &&
    mv?.to &&
    Number(mv.from.x) === Number(mv.to.x) &&
    Number(mv.from.y) === Number(mv.to.y)
  ) {
    return "";
  }
  let ownerFromPre = null;
  let nameFromPre = "";
  if (capPos && prePieces.length > 0) {
    const sameAsFromSquare =
      mv?.from &&
      Number(capPos.x) === Number(mv.from.x) &&
      Number(capPos.y) === Number(mv.from.y);
    if (!hasExplicitCapturePos && sameAsFromSquare) {
      return "";
    }
    const capPiece = prePieces.find(
      (p) => p && Number(p.x) === Number(capPos.x) && Number(p.y) === Number(capPos.y)
    );
    if (capPiece) {
      const poRaw = Number(capPiece.owner);
      ownerFromPre = poRaw === -1 || poRaw === 0 || poRaw === 1 ? poRaw : null;
      nameFromPre = localCanonicalPieceName(String(capPiece.name || "").trim());
    }
  }
  // 盤面上の実駒情報が取れる場合はそちらを優先する。
  const name = nameFromPre || nameFromHint;
  if (!name) return "";
  const owner = ownerFromPre !== null ? ownerFromPre : ownerFromHint;
  return reverseCaptureHintEncode(name, owner);
}

function reverseCaptureHintEncode(name, owner = null) {
  const n = localCanonicalPieceName(name);
  if (!n) return "";
  const o = Number(owner);
  if (o === -1 || o === 0 || o === 1) return `${o}:${n}`;
  return n;
}

function reverseCaptureHintDecode(hint) {
  const raw = String(hint || "").trim();
  if (!raw) return { name: "", owner: null };
  const m = raw.match(/^(-?1|0|1):(.*)$/);
  if (m) {
    return {
      owner: Number(m[1]),
      name: localCanonicalPieceName(String(m[2] || "").trim()),
    };
  }
  return { name: localCanonicalPieceName(raw), owner: null };
}

function reverseCaptureOptionLabelForKey(capturedNameKey) {
  if (!capturedNameKey) return "駒取なし";
  const info = reverseCaptureHintDecode(capturedNameKey);
  const disp = displayNameForName(info.name || capturedNameKey);
  if (info.owner === -1) return `n${disp}`;
  if (info.owner === 0) return `▲${disp}`;
  if (info.owner === 1) return `△${disp}`;
  return disp;
}

function reverseCandidateGroupKey(candidate) {
  // 一覧表示は「同じ符号」を1つに統合し、駒取有無などの差分は選択ダイアログで分岐させる。
  // 例: 「23香」と「23 香(+22 馬)」は同一グループ。
  const base = reverseCandidateBaseLabel(candidate);
  return String(base || "")
    .trim()
    .replace(/\s+/g, " ");
}

function reverseCandidateBaseLabel(candidate) {
  const raw = String(candidate?.label || candidate?.notation || "");
  // 例: "23香(+22馬)" / "23 香(+22 馬)" -> "23香"
  const stripped = raw.replace(/\s*\(\+\s*[0-9０-９]{2}\s*[^)]+\)\s*$/, "");
  return stripped.replace(/^((?:(?:v)?(?:▲|△)\s*)?[0-9０-９]{2})\s+/, "$1");
}

function reverseGroupMovesForList(moves) {
  const groups = [];
  const byKey = new Map();
  for (const mv of moves || []) {
    const key = reverseCandidateGroupKey(mv);
    let g = byKey.get(key);
    if (!g) {
      g = {
        key,
        label: reverseCandidateBaseLabel(mv),
        moves: [],
      };
      byKey.set(key, g);
      groups.push(g);
    }
    g.moves.push(mv);
  }
  return groups;
}

function buildNormalLegalGroupsForList(moves, pieceMap) {
  const src = Array.isArray(moves) ? moves : [];
  const groups = [];
  const byKey = new Map();
  const dropCountByTo = new Map();
  for (const mv of src) {
    if (!mv || mv.kind !== "drop" || !mv.to) continue;
    const key = coordKey(Number(mv.to.x), Number(mv.to.y));
    dropCountByTo.set(key, (dropCountByTo.get(key) || 0) + 1);
  }

  for (const mv of src) {
    if (mv && mv.kind === "drop" && mv.to) {
      const toKey = coordKey(Number(mv.to.x), Number(mv.to.y));
      if ((dropCountByTo.get(toKey) || 0) > 1) {
        const groupKey = `drop-multi:${toKey}`;
        let g = byKey.get(groupKey);
        if (!g) {
          const ownerMark = Number(mv.owner) === 1 ? "△" : "▲";
          g = {
            key: groupKey,
            label: `${ownerMark}${coordText(mv.to)}打`,
            moves: [],
          };
          byKey.set(groupKey, g);
          groups.push(g);
        }
        g.moves.push(mv);
        continue;
      }
    }
    groups.push({
      key: `single:${groups.length}:${String(mv?.kind || "-")}`,
      label: formatLegalMoveLabel(mv, pieceMap),
      moves: [mv],
    });
  }
  return groups;
}

async function chooseLegalDropByDialog(cands) {
  const src = Array.isArray(cands) ? cands.filter((c) => c?.kind === "drop" && c?.to) : [];
  if (src.length <= 0) return null;
  if (src.length === 1) return src[0];
  const tokens = Array.from(
    new Set(src.map((c) => localDropMoveHandToken(c).token).filter((s) => String(s || "").length > 0))
  );
  if (tokens.length <= 1) return src[0];

  const handOrderIdx = (token) => {
    const base = baseNameForHand(localHandTokenName(token));
    const idx = HAND_ORDER.indexOf(base);
    return idx >= 0 ? idx : 999;
  };
  const sortedTokens = tokens.sort((a, b) => {
    const aInfo = localParseHandToken(a);
    const bInfo = localParseHandToken(b);
    const da = `${aInfo.neutral ? "n" : ""}${displayNameForName(aInfo.name || a)}`;
    const db = `${bInfo.neutral ? "n" : ""}${displayNameForName(bInfo.name || b)}`;
    const oa = handOrderIdx(a);
    const ob = handOrderIdx(b);
    if (oa !== ob) return oa - ob;
    return da.localeCompare(db, "ja");
  });

  if (!ui.reverseCaptureDialog || !ui.reverseCaptureDialogOptions || !ui.btnReverseCaptureCancel) {
    const firstToken = sortedTokens[0];
    return src.find((c) => localDropHandTokenMatches(c, firstToken)) || src[0];
  }

  const chosenToken = await new Promise((resolve) => {
    if (ui.reverseCaptureDialogInfo) {
      ui.reverseCaptureDialogInfo.textContent = "打つ駒を選択してください";
    }
    ui.reverseCaptureDialogOptions.innerHTML = "";
    for (const token of sortedTokens) {
      const info = localParseHandToken(token);
      const baseName = String(info.name || "");
      const disp = `${info.neutral ? "n" : ""}${displayNameForName(baseName)}`;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "reverse-capture-option-btn";
      btn.dataset.dropToken = token;
      btn.textContent = disp;
      ui.reverseCaptureDialogOptions.appendChild(btn);
    }

    const onOptionClick = (e) => {
      const btn = e.target?.closest?.("button[data-drop-token]");
      if (!btn) return;
      cleanup(String(btn.dataset.dropToken || ""));
    };
    const onCancelClick = () => cleanup(null);
    const onCancelDialog = (e) => {
      e.preventDefault();
      cleanup(null);
    };
    const cleanup = (pickedName) => {
      ui.reverseCaptureDialogOptions.removeEventListener("click", onOptionClick);
      ui.btnReverseCaptureCancel.removeEventListener("click", onCancelClick);
      ui.reverseCaptureDialog.removeEventListener("cancel", onCancelDialog);
      if (ui.reverseCaptureDialog.open) ui.reverseCaptureDialog.close();
      resolve(pickedName);
    };

    ui.reverseCaptureDialogOptions.addEventListener("click", onOptionClick);
    ui.btnReverseCaptureCancel.addEventListener("click", onCancelClick);
    ui.reverseCaptureDialog.addEventListener("cancel", onCancelDialog);
    ui.reverseCaptureDialog.showModal();
  });

  if (!chosenToken) return null;
  return src.find((c) => localDropHandTokenMatches(c, chosenToken)) || null;
}

async function chooseReverseCaptureByDialog(cands) {
  const keys = Array.from(new Set((cands || []).map((c) => reverseCapturedNameKeyOfCandidate(c))));
  if (keys.length <= 1) return keys[0] || "";
  const sortedKeys = keys.sort((a, b) => {
    if (!a && b) return -1;
    if (a && !b) return 1;
    return reverseCaptureOptionLabelForKey(a).localeCompare(reverseCaptureOptionLabelForKey(b), "ja");
  });
  if (!ui.reverseCaptureDialog || !ui.reverseCaptureDialogOptions || !ui.btnReverseCaptureCancel) {
    const fallbackCaptureKey = sortedKeys.find((k) => k);
    return fallbackCaptureKey || sortedKeys[0] || "";
  }
  const counts = new Map();
  for (const cand of cands || []) {
    const key = reverseCapturedNameKeyOfCandidate(cand);
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return await new Promise((resolve) => {
    if (ui.reverseCaptureDialogInfo) {
      ui.reverseCaptureDialogInfo.textContent = "駒取候補を選択してください";
    }
    ui.reverseCaptureDialogOptions.innerHTML = "";
    for (const key of sortedKeys) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "reverse-capture-option-btn";
      btn.dataset.captureKey = key || "__none__";
      btn.textContent = `${reverseCaptureOptionLabelForKey(key)}`;
      ui.reverseCaptureDialogOptions.appendChild(btn);
    }

    const onOptionClick = (e) => {
      const btn = e.target?.closest?.("button[data-capture-key]");
      if (!btn) return;
      const raw = String(btn.dataset.captureKey || "__none__");
      const picked = raw === "__none__" ? "" : raw;
      cleanup(picked);
    };
    const onCancelClick = () => cleanup(null);
    const onCancelDialog = (e) => {
      e.preventDefault();
      cleanup(null);
    };
    const cleanup = (pickedKey) => {
      ui.reverseCaptureDialogOptions.removeEventListener("click", onOptionClick);
      ui.btnReverseCaptureCancel.removeEventListener("click", onCancelClick);
      ui.reverseCaptureDialog.removeEventListener("cancel", onCancelDialog);
      if (ui.reverseCaptureDialog.open) ui.reverseCaptureDialog.close();
      resolve(pickedKey);
    };

    ui.reverseCaptureDialogOptions.addEventListener("click", onOptionClick);
    ui.btnReverseCaptureCancel.addEventListener("click", onCancelClick);
    ui.reverseCaptureDialog.addEventListener("cancel", onCancelDialog);
    ui.reverseCaptureDialog.showModal();
  });
}

async function chooseMoveVariant(cands) {
  const rebirthKeyOf = (cand) =>
    cand?.rebirth && localInBoard(cand.rebirth.x, cand.rebirth.y) ? coordText(cand.rebirth) : "__none__";
  if (cands.length <= 1) return cands[0] || null;
  const hasPromote = cands.some((c) => Boolean(c.promote));
  const hasNoPromote = cands.some((c) => !c.promote);
  let filtered = cands;

  if (hasPromote && hasNoPromote) {
    const promote = await choosePromoteByDialog();
    if (promote === null) return null;
    filtered = cands.filter((c) => Boolean(c.promote) === promote);
  }
  if (filtered.length <= 1) return filtered[0] || null;

  const hasSwap = filtered.some((c) => c?.kind === "move" && Boolean(c?.messigny_swap));
  const hasNormal = filtered.some((c) => c?.kind === "move" && !Boolean(c?.messigny_swap));
  if (hasSwap && hasNormal) {
    const swapSample = filtered.find((c) => Boolean(c?.messigny_swap));
    const normalSample = filtered.find((c) => !Boolean(c?.messigny_swap));
    const stripOwner = (s) => String(s || "").replace(/^\s*(?:v[▲△]|[▲△]|v)\s*/, "").trim();
    const chooseSwap = await choosePromoteByDialog({
      title: "Messigny選択",
      prompt: "同一移動先の手を選択してください",
      yes: `交換手(${stripOwner(swapSample?.notation || "交換")})`,
      no: `通常手(${stripOwner(normalSample?.notation || "通常")})`,
    });
    if (chooseSwap === null) return null;
    filtered = filtered.filter((c) => Boolean(c?.messigny_swap) === chooseSwap);
  }
  if (filtered.length <= 1) return filtered[0] || null;

  const rebirthKeys = Array.from(new Set(filtered.map((c) => rebirthKeyOf(c))));
  if (rebirthKeys.length > 1) {
    if (rebirthKeys.length === 2) {
      const labelOf = (k) => (k === "__none__" ? "復活なし" : `${k}で復活`);
      const chooseFirst = await choosePromoteByDialog({
        title: "復活地点選択",
        prompt: "復活地点を選択してください",
        yes: labelOf(rebirthKeys[0]),
        no: labelOf(rebirthKeys[1]),
      });
      if (chooseFirst === null) return null;
      const picked = chooseFirst ? rebirthKeys[0] : rebirthKeys[1];
      filtered = filtered.filter((c) => rebirthKeyOf(c) === picked);
    } else {
      logLine("復活候補が3件以上のため先頭候補を選択しました。");
    }
  }
  if (filtered.length <= 1) return filtered[0] || null;

  const noRebirth = filtered.find((c) => !c.rebirth);
  if (noRebirth) return noRebirth;
  logLine("再誕生候補が複数あるため先頭候補を選択しました。");
  return filtered[0];
}

async function chooseReverseCandidateVariant(cands) {
  if (!Array.isArray(cands) || cands.length <= 0) return null;
  if (cands.length === 1) return cands[0] || null;
  let filtered = cands;

  const captureKeys = Array.from(new Set(filtered.map((c) => reverseCapturedNameKeyOfCandidate(c))));
  if (captureKeys.length > 1) {
    const pickedCaptureKey = await chooseReverseCaptureByDialog(filtered);
    if (pickedCaptureKey === null) return null;
    filtered = filtered.filter((c) => reverseCapturedNameKeyOfCandidate(c) === pickedCaptureKey);
  }

  if (filtered.length <= 1) return filtered[0] || null;

  const hasPromote = filtered.some((c) => c?.kind === "move" && Boolean(c.promote));
  const hasNoPromote = filtered.some((c) => c?.kind === "move" && !c.promote);
  if (hasPromote && hasNoPromote) {
    const keepPromotedInPreState = await choosePromoteByDialog({
      title: "成生選択",
      prompt: "逆算時の状態を選択してください",
      yes: "成駒のまま",
      no: "生駒に戻る",
    });
    if (keepPromotedInPreState === null) return null;
    // 逆算では c.promote=true は「前局面が生駒」を意味するため、
    // UI文言（成駒のまま / 生駒に戻る）に合わせて選択効果を反転する。
    filtered = filtered.filter((c) =>
      c?.kind === "move" ? Boolean(c.promote) !== keepPromotedInPreState : true
    );
  }
  if (filtered.length <= 1) return filtered[0] || null;
  const noRebirth = filtered.find((c) => !c?.rebirth);
  if (noRebirth) return noRebirth;
  logLine("逆算候補が複数あるため先頭候補を選択しました。");
  return filtered[0];
}

function inferMessignySwapFromNotation(candidate) {
  if (!state?.rules?.messigny) return null;
  if (!candidate || candidate.kind !== "move" || !candidate.from) return null;
  const notation = localNormalizeDigits(String(candidate.notation || ""));
  const m = notation.match(/\/\s*(?:v[▲△]|[▲△]|v)?\s*([1-9])([1-9])/);
  if (!m) return false;
  const sx = localParseReplayFileChar(m[1]);
  const sy = localParseReplayRankChar(m[2]);
  if (!localInBoard(sx, sy)) return null;
  return Number(sx) === Number(candidate.from.x) && Number(sy) === Number(candidate.from.y);
}

async function applyMove(candidate) {
  if (playSubMode !== "reverse") {
    const terminal = getCurrentHistoryTerminalResult();
    if (terminal) {
      throw new Error(`終局(${terminal})のため、次の手へは進めません。`);
    }
  }
  const prevTurn = Number(state?.turn ?? 0);
  const body = {
    expected_revision: revision,
    from: candidate.from,
    to: candidate.to,
    promote: Boolean(candidate.promote),
  };
  const messignySwap =
    typeof candidate?.messigny_swap === "boolean"
      ? Boolean(candidate.messigny_swap)
      : inferMessignySwapFromNotation(candidate);
  if (typeof messignySwap === "boolean") {
    body.messigny_swap = messignySwap;
  }
  if (candidate.rebirth) {
    body.rebirth = candidate.rebirth;
  }
  let env;
  try {
    env = await currentEngine().applyMove(sessionId, body);
  } catch (e) {
    const apiCode = String(e?.apiCode || "");
    const apiMsg = String(e?.apiMessage || e?.message || "");
    if (apiCode === "INVALID_MOVE" && apiMsg.includes("move leaves own king in check")) {
      markRejectedLegalMove(candidate);
    }
    if (apiCode === "INVALID_MOVE" || apiCode === "INVALID_DROP") {
      selected = null;
      takeMakePending = null;
      setEditSelection(null);
      try {
        await refreshLegal();
      } catch (_refreshErr) {
        // keep original API error as primary
      }
      renderAll();
    }
    throw e;
  }
  applyStateEnvelope(env);
  if (Number(state?.turn ?? prevTurn) === prevTurn) {
    await refreshState();
  }
  selected = null;
  takeMakePending = null;
  setEditSelection(null);
  const views = applyViewsFromEnvelope(env);
  const refreshTasks = [];
  if (!views.hasLegal) refreshTasks.push(refreshLegal());
  if (!views.hasHistory) refreshTasks.push(refreshHistory());
  if (refreshTasks.length > 0) {
    await Promise.all(refreshTasks);
  }
  renderAll();
  logLine(`逆算遷移：${String(candidate?.label || "-")}`);
}

async function applyDrop(candidate) {
  if (playSubMode !== "reverse") {
    const terminal = getCurrentHistoryTerminalResult();
    if (terminal) {
      throw new Error(`終局(${terminal})のため、次の手へは進めません。`);
    }
  }
  const prevTurn = Number(state?.turn ?? 0);
  const selectedHandToken =
    selected && selected.type === "hand" ? String(selected.name || "").trim() : "";
  const selectedHandOwner = selected && selected.type === "hand" ? Number(selected.owner) : null;
  const resolvedHandToken = String(candidate?.hand_token || selectedHandToken || candidate?.name || "").trim();
  const resolvedHandInfo = localParseHandToken(resolvedHandToken);
  const resolvedOwnerRaw =
    candidate && candidate.owner !== undefined && candidate.owner !== null
      ? Number(candidate.owner)
      : selectedHandOwner;
  const resolvedOwner = resolvedOwnerRaw === 0 || resolvedOwnerRaw === 1 ? resolvedOwnerRaw : Number(state?.turn) === 1 ? 1 : 0;
  const resolvedName = String(candidate?.name || resolvedHandInfo.name || "").trim();
  const resolvedNeutralPiece =
    Boolean(candidate?.neutral_piece) ||
    localHandTokenNeutral(resolvedHandToken) ||
    (selected && selected.type === "hand" ? localHandTokenNeutral(selected.name) : false);
  const body = {
    expected_revision: revision,
    owner: resolvedOwner,
    name: resolvedName,
    hand_token: resolvedHandToken,
    to: candidate.to,
  };
  if (resolvedNeutralPiece) body.neutral_piece = true;
  let env;
  try {
    env = await currentEngine().applyDrop(sessionId, body);
  } catch (e) {
    const apiCode = String(e?.apiCode || "");
    if (apiCode === "INVALID_MOVE" || apiCode === "INVALID_DROP") {
      selected = null;
      takeMakePending = null;
      setEditSelection(null);
      try {
        await refreshLegal();
      } catch (_refreshErr) {
        // keep original API error as primary
      }
      renderAll();
    }
    throw e;
  }
  applyStateEnvelope(env);
  if (Number(state?.turn ?? prevTurn) === prevTurn) {
    await refreshState();
  }
  selected = null;
  takeMakePending = null;
  const views = applyViewsFromEnvelope(env);
  const refreshTasks = [];
  if (!views.hasLegal) refreshTasks.push(refreshLegal());
  if (!views.hasHistory) refreshTasks.push(refreshHistory());
  if (refreshTasks.length > 0) {
    await Promise.all(refreshTasks);
  }
  renderAll();
}

function collectPlayPositionIllegalReasons(srcState = state) {
  const st = srcState && typeof srcState === "object" ? srcState : null;
  if (!st || !st.board || !Array.isArray(st.board.pieces)) return [];
  const rules = st.rules && typeof st.rules === "object" ? st.rules : {};
  const turn = Number(st.turn) === 1 ? 1 : 0;
  const typeAttrs =
    st.type_attrs && typeof st.type_attrs === "object"
      ? st.type_attrs
      : st.typeAttrs && typeof st.typeAttrs === "object"
        ? st.typeAttrs
        : {};
  const typeCtx = { typeAttrs };
  const pieces = st.board.pieces.map((p) =>
    localAnnotatePieceEffectiveAttrs(
      {
        ...p,
        attrs: localCloneRawPieceAttrs(p?.attrs),
      },
      typeCtx
    )
  );
  const reasons = [];

  if (!Boolean(rules.allow_check_on_self)) {
    const prevMover = turn === 0 ? 1 : 0;
    const prevMoverChecked = localIsInCheckWithRules(pieces, prevMover, rules, {
      typeAttrsOrCtx: typeCtx,
    });
    if (prevMoverChecked) {
      reasons.push(`王手放置（${prevMover === 0 ? "攻方" : "受方"}玉が王手状態）`);
    }
  }

  if (localHasDeadZoneRestriction(rules)) {
    const dead = [];
    for (const p of pieces) {
      if (!p) continue;
      const owner = Number(p.owner);
      if (owner !== 0 && owner !== 1) continue;
      if (localIsDeadZoneByRules(String(p.name || ""), owner, Number(p.y), rules)) {
        dead.push(p);
      }
    }
    if (dead.length > 0) {
      const maxShow = 6;
      const shown = dead.slice(0, maxShow).map((p) => `${9 - Number(p.x)}${Number(p.y) + 1}${localDisplayPieceName(String(p.name || ""))}`);
      const suffix = dead.length > maxShow ? ` ほか${dead.length - maxShow}駒` : "";
      reasons.push(`行き所のない駒があります: ${shown.join("、")}${suffix}`);
    }
  }

  return reasons;
}

async function showSimpleInfoDialog(title, message) {
  const t = String(title || "").trim() || "お知らせ";
  const msg = String(message || "").trim();
  if (!ui.playSubModeDialog || !ui.playSubModeDialogActions || !ui.playSubModeDialogTitle || !ui.playSubModeDialogMessage) {
    window.alert(msg || t);
    return;
  }
  ui.playSubModeDialogTitle.textContent = t;
  ui.playSubModeDialogMessage.textContent = msg;
  ui.playSubModeDialogActions.innerHTML = "";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.dataset.value = "ok";
  btn.textContent = "OK";
  ui.playSubModeDialogActions.appendChild(btn);
  await new Promise((resolve) => {
    const onClick = (e) => {
      const hit = e.target?.closest?.("button[data-value='ok']");
      if (!hit) return;
      cleanup();
    };
    const onCancel = (e) => {
      e.preventDefault();
      cleanup();
    };
    const cleanup = () => {
      ui.playSubModeDialogActions.removeEventListener("click", onClick);
      ui.playSubModeDialog.removeEventListener("cancel", onCancel);
      if (ui.playSubModeDialog.open) ui.playSubModeDialog.close();
      resolve();
    };
    ui.playSubModeDialogActions.addEventListener("click", onClick);
    ui.playSubModeDialog.addEventListener("cancel", onCancel);
    ui.playSubModeDialog.showModal();
  });
}

async function ensureCurrentPositionLegalForPlay(entryLabel = "局面遷移") {
  const reasons = collectPlayPositionIllegalReasons(state);
  if (reasons.length <= 0) return true;
  const toSentence = (text) => {
    const s = String(text || "").trim();
    if (!s) return "";
    return /[。！？]$/.test(s) ? s : `${s}です。`;
  };
  const body = reasons.map((r) => toSentence(r)).filter((v) => v.length > 0).join("\n");
  const msg = `${body}\n編集モードに戻します。`;
  logLine(`局面チェック\n${msg}`, true);
  await showSimpleInfoDialog("局面チェック", msg);
  if (state?.mode !== "edit" && sessionId) {
    const envEdit = await currentEngine().patchMode(sessionId, revision, "edit");
    applyStateEnvelope(envEdit);
    selected = null;
    setEditSelection(null);
    await refreshLegal();
    await refreshHistory();
    renderAll();
    logLine("不合法局面のため編集モードに切替えました。", true);
  }
  return false;
}

async function applyLegalMove(move) {
  if (!move) return;
  stopHistoryPlayback({ silent: true });
  if (state?.mode !== "play") {
    logLine("編集モードでは着手できません。");
    return;
  }
  if (playSubMode !== "reverse") {
    const terminal = getCurrentHistoryTerminalResult();
    if (terminal) {
      logLine(`終局(${terminal})のため、次の手へは進めません。`);
      return;
    }
  }
  if (move.kind === "move") {
    await applyMove(move);
    return;
  }
  if (move.kind === "drop") {
    await applyDrop(move);
  }
}

async function setMode(mode) {
  if (!sessionId) return;
  stopHistoryPlayback({ silent: true });
  if (mode !== "play") closeRepeatDialog();
  clearPendingRightAction();
  const prevMode = state?.mode === "edit" ? "edit" : "play";
  if (mode === "edit" && prevMode === "play") {
    if (hasAnyCurrentPlayTrailMovesForEditTransition()) {
      const ok = await confirmSwitchToEditWithHistoryResetRisk();
      if (!ok) return;
    }
  }
  if (mode === "play" && prevMode === "edit") {
    const ok = await ensureCurrentPositionLegalForPlay("編集モードから検討モードへの切替");
    if (!ok) return;
  }
  const env = await currentEngine().patchMode(sessionId, revision, mode);
  applyStateEnvelope(env);
  selected = null;
  takeMakePending = null;
  if (mode !== "edit") {
    setEditSelection(null);
  }
  await refreshLegal();
  await refreshHistory();
  renderAll();
  logLine(`モード切替：${mode}`);
}

function isReverseSubModeActive() {
  return state?.mode === "play" && playSubMode === "reverse";
}

async function choosePlaySubModeTransition(currentMode, nextMode) {
  const current = currentMode === "reverse" ? "reverse" : "normal";
  const next = nextMode === "reverse" ? "reverse" : "normal";
  if (current === next) return "stay";

  const isToReverse = current === "normal" && next === "reverse";
  if (!ui.playSubModeDialog || !ui.playSubModeDialogActions || !ui.playSubModeDialogTitle || !ui.playSubModeDialogMessage) {
    if (isToReverse) {
      return window.confirm("通常モードの棋譜は消去されます。逆算モードに切り替えますか？")
        ? "switch"
        : "stay";
    }
    return window.confirm("逆算を変換しますか？\nOK：変換して通常モードへ / キャンセル：変換せず通常モードへ")
      ? "convert"
      : "discard";
  }

  const config = isToReverse
    ? {
        title: "逆算モードへ切替",
        message: "通常モードの棋譜は消去されます。逆算モードに切り替えますか？",
        actions: [
          { value: "switch", label: "棋譜を消去して逆算モードへ" },
          { value: "stay", label: "キャンセル" },
        ],
      }
    : {
        title: "通常モードへ切替",
        message: "逆算を通常モードへ変換しますか？",
        actions: [
          { value: "convert", label: "棋譜を変換して通常モードへ" },
          { value: "discard", label: "通常モードへ" },
          { value: "stay", label: "キャンセル" },
        ],
      };

  ui.playSubModeDialogTitle.textContent = config.title;
  ui.playSubModeDialogMessage.textContent = config.message;
  ui.playSubModeDialogActions.innerHTML = "";
  for (const action of config.actions) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.value = action.value;
    btn.textContent = action.label;
    ui.playSubModeDialogActions.appendChild(btn);
  }

  return await new Promise((resolve) => {
    const onClick = (e) => {
      const btn = e.target?.closest?.("button[data-value]");
      if (!btn) return;
      cleanup(String(btn.dataset.value || "stay"));
    };
    const onCancel = (e) => {
      e.preventDefault();
      cleanup("stay");
    };
    const cleanup = (result) => {
      ui.playSubModeDialogActions.removeEventListener("click", onClick);
      ui.playSubModeDialog.removeEventListener("cancel", onCancel);
      if (ui.playSubModeDialog.open) ui.playSubModeDialog.close();
      resolve(result);
    };
    ui.playSubModeDialogActions.addEventListener("click", onClick);
    ui.playSubModeDialog.addEventListener("cancel", onCancel);
    ui.playSubModeDialog.showModal();
  });
}

async function setPlaySubMode(mode) {
  // サブモード切替時は再生を止め、合法手表示の取り残しを防ぐ。
  stopHistoryPlayback({ silent: true });
  const next = mode === "reverse" ? "reverse" : "normal";
  if (playSubMode === next) {
    // 同一モード押下時も表示を再同期して、取り残し表示を防ぐ。
    renderStatus();
    renderLegalList();
    return;
  }
  if (state?.mode !== "play") return;

  if (playSubMode === "normal" && next === "reverse") {
    const hasHistoryMoves = hasAnyHistoryMovesForRuleCompatibilityCheck();
    const action = hasHistoryMoves ? await choosePlaySubModeTransition("normal", "reverse") : "switch";
    if (action !== "switch") return;
    reverseHistoryTree = null;
    reverseHistoryNodeSeq = 1;
    reverseSelectedNodeId = null;
    playSubMode = "reverse";
    reverseEnsureHistoryTreeBase();
    selected = null;
    takeMakePending = null;
    renderAll();
    logLine("検討サブモード：逆算（棋譜消去）");
    return;
  }

  if (playSubMode === "reverse" && next === "normal") {
    const hasReverseMoves = hasAnyReverseHistoryMovesForTransition();
    const action = hasReverseMoves ? await choosePlaySubModeTransition("reverse", "normal") : "discard";
    if (action === "stay") return;
    const doConvert = action === "convert";
    if (doConvert) {
      await reverseConvertToNormalHistory();
    }
    playSubMode = "normal";
    selected = null;
    takeMakePending = null;
    reverseHistoryTree = null;
    reverseHistoryNodeSeq = 1;
    reverseSelectedNodeId = null;
    await refreshLegal();
    await refreshHistory();
    renderAll();
    logLine(`検討サブモード：通常${doConvert ? " (逆算変換)" : ""}`);
    return;
  }

  playSubMode = next;
  selected = null;
  takeMakePending = null;
  if (next !== "reverse") {
    reverseHistoryTree = null;
    reverseHistoryNodeSeq = 1;
    reverseSelectedNodeId = null;
  }
  renderAll();
}

function isSelectedBoard(x, y) {
  return selected && selected.type === "board" && selected.x === x && selected.y === y;
}

function isSelectedHand(owner, name) {
  return (
    selected &&
    selected.type === "hand" &&
    Number(selected.owner) === Number(owner) &&
    localHandTokenEquals(selected.name, name)
  );
}

function selectedLegalDestSet() {
  const out = new Set();
  if (isReverseSubModeActive()) {
    if (!selected || selected.type !== "board") return out;
    const pending = reverseTakeMakePendingForSelectedBoard();
    if (pending) {
      for (const mv of pending.cands || []) {
        if (mv?.kind === "move" && mv?.from) {
          out.add(coordKey(mv.from.x, mv.from.y));
        }
      }
      return out;
    }
    const cands = reverseBoardCandidatesAtToSquare(selected.x, selected.y);
    for (const mv of cands) {
      if (mv.kind === "move") {
        const step = legalMoveTakeMakeStepTo(mv);
        if (step && localInBoard(step.x, step.y)) {
          out.add(coordKey(step.x, step.y));
        } else if (mv.from) {
          out.add(coordKey(mv.from.x, mv.from.y));
        }
      }
    }
    return out;
  }
  if (!selected) return out;
  if (selected.type === "board") {
    const pending = takeMakePendingForSelectedBoard();
    if (pending) {
      for (const m of pending.cands) {
        if (m?.to) out.add(coordKey(m.to.x, m.to.y));
      }
      return out;
    }
    for (const m of boardCandidatesFrom(selected.x, selected.y)) {
      const step = legalMoveTakeMakeStepTo(m);
      if (step && localInBoard(step.x, step.y)) {
        out.add(coordKey(step.x, step.y));
      } else if (m?.to) {
        out.add(coordKey(m.to.x, m.to.y));
      }
    }
    return out;
  }
  if (selected.type === "hand") {
    for (const m of dropCandidates(selected.owner, selected.name)) {
      out.add(coordKey(m.to.x, m.to.y));
    }
  }
  return out;
}

function selectedLegalMoves() {
  if (isReverseSubModeActive()) return [];
  if (!selected) return legalMoves;
  if (selected.type === "board") return boardCandidatesFrom(selected.x, selected.y);
  if (selected.type === "hand") return dropCandidates(selected.owner, selected.name);
  return legalMoves;
}

async function onHandClick(owner, name = null) {
  if (!state) return;
  const hasName = typeof name === "string" && name.length > 0;

  if (state.mode === "edit") {
    if (consumeSuppressEditClick()) return;
    try {
      if (editSelection) {
        if (editSelection.source === "board") {
          const srcX = editSelection.x;
          const srcY = editSelection.y;
          const srcPiece = findPieceAt(srcX, srcY);
          if (!srcPiece) {
            setEditSelection(null);
            renderAll();
            return;
          }
          if (!isKingPiece(srcPiece)) {
            await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/add-hand`, {
              owner,
              name: baseNameForHand(srcPiece.name),
              neutral: Number(srcPiece.owner) === -1,
            });
          }
          await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/remove-piece`, { x: srcX, y: srcY });
          logLine(
            `編集移動：盤上 ${ownerMark(srcPiece.owner)}${srcPiece.name} ${9 - srcX}${srcY + 1} -> ${
              owner === 0 ? "▲" : "△"
            }持駒`
          );
          return;
        }

        if (editSelection.source === "box") {
          const boxName = editSelection.name;
          const boxNeutral = Number(editSelection.owner) === -1;
          if (!canUsePieceFromBox(boxName)) {
            logLine(`標準駒数上限のため追加できません：${boxName}`);
            setEditSelection(null);
            renderAll();
            return;
          }
          await callEditEndpoint(
            `/api/v1/sessions/${sessionId}/edit/add-hand`,
            {
              owner,
              name: boxName,
              neutral: boxNeutral,
            },
            { keepEditSelection: true }
          );
          const boxDisp = boxNeutral ? `n${displayNameForName(boxName)}` : displayNameForName(boxName);
          logLine(`編集配置：駒箱 ${boxDisp} -> ${owner === 0 ? "▲" : "△"}持駒`);
          return;
        }

        if (editSelection.source === "hand") {
          if (editSelection.owner !== owner) {
            const fromOwner = editSelection.owner;
            const moveName = editSelection.name;
            const moveInfo = localParseHandToken(moveName);
            const moveDisp = `${moveInfo.neutral ? "n" : ""}${displayNameForName(moveInfo.name || moveName)}`;
            const keepHandSelection = {
              source: "hand",
              owner: fromOwner,
              name: moveName,
            };
            await callEditEndpoint(
              `/api/v1/sessions/${sessionId}/edit/remove-hand`,
              {
                owner: fromOwner,
                name: moveName,
              },
              { keepEditSelection: true, keepSelection: keepHandSelection }
            );
            await callEditEndpoint(
              `/api/v1/sessions/${sessionId}/edit/add-hand`,
              {
                owner,
                name: moveName,
              },
              { keepEditSelection: true, keepSelection: keepHandSelection }
            );
            logLine(
              `編集移動：持駒 ${ownerMark(fromOwner)}${moveDisp} -> ${
                owner === 0 ? "▲" : "△"
              }${moveDisp}`
            );
            return;
          }

          if (!hasName) {
            setEditSelection(null);
            renderAll();
            return;
          }

          if (localHandTokenEquals(editSelection.name, name)) {
            setEditSelection(null);
            renderAll();
            return;
          }

          setEditSelection({ source: "hand", owner, name });
          renderAll();
          return;
        }
      }

      if (!hasName) return;
      setEditSelection({ source: "hand", owner, name });
      renderAll();
    } catch (e) {
      logLine(e.message || String(e), true);
    }
    return;
  }

  if (isReverseSubModeActive()) {
    if (!selected || selected.type !== "board") return;
    const anchorX = Number(selected.x);
    const anchorY = Number(selected.y);
    const ownerDropCands = reverseBoardCandidatesTo(anchorX, anchorY, anchorX, anchorY).filter(
      (m) => m?.kind === "drop" && Number(m.owner) === Number(owner)
    );
    if (ownerDropCands.length <= 0) return;
    let cands = ownerDropCands;
    if (hasName) {
      cands = ownerDropCands.filter((m) => localDropHandTokenMatches(m, name));
    } else {
      const pickedDrop = await chooseLegalDropByDialog(ownerDropCands);
      if (!pickedDrop) return;
      const pickedTokenInfo = localDropMoveHandToken(pickedDrop);
      const pickedToken = String(pickedTokenInfo.token || pickedTokenInfo.name || "").trim();
      if (!pickedToken) return;
      cands = ownerDropCands.filter((m) => localDropHandTokenMatches(m, pickedToken));
    }
    if (cands.length <= 0) return;
    const pick = await chooseReverseCandidateVariant(cands);
    if (!pick) return;
    try {
      await applyReverseCandidate(pick);
    } catch (e) {
      logLine(e.message || String(e), true);
    }
    return;
  }

  if (!hasName) return;
  if (isSelectedHand(owner, name)) {
    selected = null;
    takeMakePending = null;
    renderAll();
    return;
  }
  if (handOwnerCanAct(owner)) {
    try {
      await refreshLegal();
    } catch (_e) {
      // ensureHandSelectable() will retry.
    }
  }
  if (!(await ensureHandSelectable(owner, name))) {
    logLine(`指せる駒がありません：owner=${owner} ${name}`);
    return;
  }
  selected = { type: "hand", owner, name };
  takeMakePending = null;
  renderAll();
}

async function onCellClick(x, y) {
  if (!state) return;
  const piece = findPieceAt(x, y);
  if (state.mode === "edit") {
    if (consumeSuppressEditClick()) return;
    try {
      if (!editSelection) {
        if (piece) {
          setEditSelection({ source: "board", x, y, name: piece.name, owner: piece.owner });
          renderAll();
        }
        return;
      }

      if (editSelection.source === "board") {
        const srcX = editSelection.x;
        const srcY = editSelection.y;
        const moveName = editSelection.name;
        const moveOwner = editSelection.owner;
        const srcPieceForAttrs = findPieceAt(srcX, srcY);
        if (srcX === x && srcY === y) {
          const srcPiece = findPieceAt(srcX, srcY);
          if (!srcPiece) {
            setEditSelection(null);
            renderAll();
            return;
          }
          if (!isKingPiece(srcPiece)) {
            const srcOwner = Number(srcPiece.owner);
            const handOwner =
              srcOwner === 0 || srcOwner === 1 ? srcOwner : editOwner === 0 || editOwner === 1 ? editOwner : 0;
            await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/add-hand`, {
              owner: handOwner,
              name: baseNameForHand(srcPiece.name),
              neutral: srcOwner === -1,
            });
          }
          await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/remove-piece`, { x: srcX, y: srcY });
          logLine(`編集移動：盤上 ${ownerMark(srcPiece.owner)}${srcPiece.name} ${9 - srcX}${srcY + 1} -> 持駒`);
          return;
        }
        await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/put-piece`, {
          x,
          y,
          name: moveName,
          owner: moveOwner,
          attrs: srcPieceForAttrs?.attrs ? cloneJson(srcPieceForAttrs.attrs) : undefined,
        });
        await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/remove-piece`, { x: srcX, y: srcY });
        logLine(`編集移動：${moveName} ${ownerMark(moveOwner)} ${9 - srcX}${srcY + 1}→${9 - x}${y + 1}`);
      } else if (editSelection.source === "hand") {
        const handOwner = editSelection.owner;
        const handToken = editSelection.name;
        const handInfo = localParseHandToken(handToken);
        const handName = String(handInfo.name || "");
        const handNeutral = Boolean(handInfo.neutral);
        if (!handName) {
          setEditSelection(null);
          renderAll();
          return;
        }
        await callEditEndpoint(
          `/api/v1/sessions/${sessionId}/edit/put-piece`,
          {
            x,
            y,
            name: handName,
            owner: handNeutral ? -1 : handOwner,
          },
          { keepEditSelection: true, keepSelection: { source: "hand", owner: handOwner, name: handToken } }
        );
        await callEditEndpoint(
          `/api/v1/sessions/${sessionId}/edit/remove-hand`,
          {
            owner: handOwner,
            name: handToken,
          },
          { keepEditSelection: true, keepSelection: { source: "hand", owner: handOwner, name: handToken } }
        );
        const handDisp = handNeutral ? `n${displayNameForName(handName)}` : displayNameForName(handName);
        logLine(`編集配置：持駒 ${ownerMark(handOwner)}${handDisp} @${9 - x}${y + 1}`);
      } else if (editSelection.source === "box") {
        const putOwner = editSelection.owner;
        const putName = editSelection.name;
        if (!canUsePieceFromBox(putName)) {
          logLine(`標準駒数上限のため配置できません：${putName}`);
          setEditSelection(null);
          renderAll();
          return;
        }
        await callEditEndpoint(
          `/api/v1/sessions/${sessionId}/edit/put-piece`,
          {
            x,
            y,
            name: putName,
            owner: putOwner,
          },
          { keepEditSelection: true }
        );
        logLine(`編集配置：${putName} ${ownerMark(putOwner)} @${9 - x}${y + 1}`);
      } else {
        const putOwner = editSelection.owner;
        const putName = editSelection.name;
        await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/put-piece`, {
          x,
          y,
          name: putName,
          owner: putOwner,
        });
        logLine(`編集配置：${putName} ${ownerMark(putOwner)} @${9 - x}${y + 1}`);
      }
    } catch (e) {
      logLine(e.message || String(e), true);
    }
    return;
  }
  const pieces = pieceMapFromState();
  const pieceOnMap = pieces.get(coordKey(x, y));

  if (isReverseSubModeActive()) {
    const pendingSameCell = reverseTakeMakePendingForSelectedBoard();
    if (selected && selected.type === "board" && selected.x === x && selected.y === y && !pendingSameCell) {
      const sameSquareCands = reverseBoardCandidatesTo(x, y, x, y).filter(
        (m) => m?.kind === "move" && !legalMoveTakeMakeStepTo(m)
      );
      if (sameSquareCands.length > 0) {
        const pick = await chooseReverseCandidateVariant(sameSquareCands);
        if (pick) {
          try {
            await applyReverseCandidate(pick);
          } catch (e) {
            logLine(e.message || String(e), true);
          }
        }
        return;
      }
      selected = null;
      renderAll();
      return;
    }

    if (selected && selected.type === "board") {
      const anchorX = Number(selected.x);
      const anchorY = Number(selected.y);
      const pending = pendingSameCell || reverseTakeMakePendingForSelectedBoard();
      if (pending) {
        const continuationCands = reverseBoardTakeMakeContinuationCandidates(
          anchorX,
          anchorY,
          pending.stepX,
          pending.stepY,
          x,
          y
        );
        if (continuationCands.length > 0) {
          const pick = await chooseReverseCandidateVariant(continuationCands);
          if (pick) {
            try {
              await applyReverseCandidate(pick);
            } catch (e) {
              logLine(e.message || String(e), true);
            }
          }
          return;
        }
        const switchStepCands = reverseBoardTakeMakeStepCandidates(anchorX, anchorY, x, y);
        if (switchStepCands.length > 0) {
          takeMakePending = {
            fromX: anchorX,
            fromY: anchorY,
            stepX: Number(x),
            stepY: Number(y),
            cands: switchStepCands,
            reverse: true,
          };
          renderAll();
          return;
        }
        if (selected.x === x && selected.y === y) {
          // 2段目待ちで起点を再クリックしたら段階解除（駒選択は維持）
          takeMakePending = null;
          renderAll();
          return;
        }
      } else {
        const stepCands = reverseBoardTakeMakeStepCandidates(anchorX, anchorY, x, y);
        if (stepCands.length > 0) {
          takeMakePending = {
            fromX: anchorX,
            fromY: anchorY,
            stepX: Number(x),
            stepY: Number(y),
            cands: stepCands,
            reverse: true,
          };
          renderAll();
          return;
        }
      }

      const cands = reverseBoardCandidatesTo(anchorX, anchorY, x, y).filter((m) => !legalMoveTakeMakeStepTo(m));
      if (cands.length > 0) {
        const pick = await chooseReverseCandidateVariant(cands);
        if (pick) {
          try {
            await applyReverseCandidate(pick);
          } catch (e) {
            logLine(e.message || String(e), true);
          }
        }
        return;
      }
      if (boardSelectable(x, y, pieceOnMap)) {
        selected = { type: "board", x, y };
        takeMakePending = null;
        renderAll();
        return;
      }
      selected = null;
      takeMakePending = null;
      renderAll();
      return;
    }

    if (boardSelectable(x, y, pieceOnMap)) {
      selected = { type: "board", x, y };
      takeMakePending = null;
      renderAll();
      return;
    }
    selected = null;
    takeMakePending = null;
    renderAll();
    return;
  }

  const pendingSameCell = takeMakePendingForSelectedBoard();
  if (
    selected &&
    selected.type === "board" &&
    selected.x === x &&
    selected.y === y &&
    !pendingSameCell
  ) {
    const sameSquareCands = boardCandidatesTo(x, y, x, y).filter((m) => !legalMoveTakeMakeStepTo(m));
    if (sameSquareCands.length > 0) {
      const pick = await chooseMoveVariant(sameSquareCands);
      if (pick) {
        try {
          await applyMove(pick);
        } catch (e) {
          logLine(e.message || String(e), true);
        }
      }
      return;
    }
    selected = null;
    takeMakePending = null;
    renderAll();
    return;
  }

  if (selected && selected.type === "board") {
    const fromX = Number(selected.x);
    const fromY = Number(selected.y);
    const pending = pendingSameCell || takeMakePendingForSelectedBoard();
    if (pending) {
      const continuationCands = (pending.cands || []).filter(
        (m) => m?.to && Number(m.to.x) === Number(x) && Number(m.to.y) === Number(y)
      );
      if (continuationCands.length > 0) {
        const pick = await chooseMoveVariant(continuationCands);
        if (pick) {
          try {
            await applyMove(pick);
          } catch (e) {
            logLine(e.message || String(e), true);
          }
        }
        return;
      }

      const switchStepCands = boardTakeMakeStepCandidates(fromX, fromY, x, y);
      if (switchStepCands.length > 0) {
        takeMakePending = {
          fromX,
          fromY,
          stepX: Number(x),
          stepY: Number(y),
          cands: switchStepCands,
        };
        renderAll();
        return;
      }
      if (selected.x === x && selected.y === y) {
        // 追加移動待ち状態で始点マスを押した場合は、段階のみ解除（駒選択は維持）
        takeMakePending = null;
        renderAll();
        return;
      }
    } else {
      const stepCands = boardTakeMakeStepCandidates(fromX, fromY, x, y);
      if (stepCands.length > 0) {
        takeMakePending = {
          fromX,
          fromY,
          stepX: Number(x),
          stepY: Number(y),
          cands: stepCands,
        };
        renderAll();
        return;
      }
    }

    const cands = boardCandidatesTo(fromX, fromY, x, y).filter((m) => !legalMoveTakeMakeStepTo(m));
    if (cands.length > 0) {
      const pick = await chooseMoveVariant(cands);
      if (pick) {
        try {
          await applyMove(pick);
        } catch (e) {
          logLine(e.message || String(e), true);
        }
      }
      return;
    }
    if (boardSelectable(x, y, pieceOnMap)) {
      selected = { type: "board", x, y };
      takeMakePending = null;
      renderAll();
      return;
    }
    selected = null;
    takeMakePending = null;
    renderAll();
    return;
  }

  if (selected && selected.type === "hand") {
    const cands = dropCandidatesTo(selected.owner, selected.name, x, y);
    if (cands.length > 0) {
      try {
        await applyDrop(cands[0]);
      } catch (e) {
        logLine(e.message || String(e), true);
      }
      return;
    }
    if (boardSelectable(x, y, pieceOnMap)) {
      selected = { type: "board", x, y };
      takeMakePending = null;
      renderAll();
      return;
    }
    selected = null;
    takeMakePending = null;
    renderAll();
    return;
  }

  if (boardSelectable(x, y, pieceOnMap)) {
    selected = { type: "board", x, y };
    takeMakePending = null;
    renderAll();
  }
}

function handCounts(owner) {
  const arr = state?.hands?.[String(owner)] || [];
  const map = new Map();
  for (const raw of arr) {
    const token = localParseHandToken(raw).token || String(raw || "");
    map.set(token, (map.get(token) || 0) + 1);
  }
  return [...map.entries()].sort((a, b) => {
    const aName = localHandTokenName(a[0]);
    const bName = localHandTokenName(b[0]);
    const ai = HAND_ORDER.indexOf(aName);
    const bi = HAND_ORDER.indexOf(bName);
    const aKnown = ai >= 0;
    const bKnown = bi >= 0;
    if (aKnown && bKnown) return ai - bi;
    if (aKnown) return -1;
    if (bKnown) return 1;
    return aName.localeCompare(bName, "ja");
  });
}

function fairyTabForPieceName(name, trail = null) {
  const nm = String(name || "");
  if (PIECEBOX_FAIRY_LEAPER_NAMES.has(nm)) return "leaper";
  if (PIECEBOX_FAIRY_RIDER_NAMES.has(nm)) return "rider";
  if (PIECEBOX_FAIRY_HOPPER_NAMES.has(nm)) return "hopper";
  if (PIECEBOX_FAIRY_CHUSHOGI_NAMES.has(nm)) return "chushogi";
  const customSpec = customPieceDirectSpecMap.get(nm);
  if (customSpec?.type === "step") return "leaper";
  if (customSpec?.type === "slide") return "rider";
  if (customSpec?.type === "hopper") return "hopper";
  const visited = trail instanceof Set ? trail : new Set();
  if (visited.has(nm)) return "other";
  visited.add(nm);
  const copyFrom = customPieceMoveLikeMap.get(nm);
  if (copyFrom) return fairyTabForPieceName(copyFrom, visited);
  return "other";
}

function buildHistoryRows() {
  if (!historyTree || !Array.isArray(historyTree.nodes)) return [];
  const nodesById = new Map(historyTree.nodes.map((n) => [n.node_id, n]));
  const rootId = historyTree.root_id;
  const rootNode = nodesById.get(rootId);
  if (!rootNode) return [];

  // Mainline shown in the list:
  // root -> ... -> current (selected branch) -> first-child continuation.
  const lineIds = [];
  const seen = new Set();
  const maxSteps = Math.max(1000, nodesById.size * 4);

  const climbIds = [];
  let curId = historyTree.current_id || rootId;
  let safety = 0;
  while (curId && safety < maxSteps) {
    safety += 1;
    const node = nodesById.get(curId);
    if (!node) break;
    climbIds.push(curId);
    if (curId === rootId) break;
    curId = node.parent_id || null;
  }
  if (climbIds.length === 0 || climbIds[climbIds.length - 1] !== rootId) {
    climbIds.length = 0;
    climbIds.push(rootId);
  }
  for (const id of climbIds.reverse()) {
    if (seen.has(id)) break;
    seen.add(id);
    lineIds.push(id);
  }

  let tailId = lineIds[lineIds.length - 1] || rootId;
  safety = 0;
  while (tailId && safety < maxSteps) {
    safety += 1;
    const node = nodesById.get(tailId);
    if (!node) break;
    const children = Array.isArray(node.children) ? node.children : [];
    const nextId = children[0];
    if (!nextId || seen.has(nextId)) break;
    seen.add(nextId);
    lineIds.push(nextId);
    tailId = nextId;
  }

  const principalIds = [];
  let principalId = rootId;
  safety = 0;
  while (principalId && safety < maxSteps) {
    safety += 1;
    if (principalIds.includes(principalId)) break;
    principalIds.push(principalId);
    const principalNode = nodesById.get(principalId);
    if (!principalNode) break;
    const principalChildren = Array.isArray(principalNode.children) ? principalNode.children : [];
    principalId = principalChildren[0] || null;
  }

  const rows = [];
  let variationStarted = false;
  for (let i = 0; i < lineIds.length; i += 1) {
    const nodeId = lineIds[i];
    const node = nodesById.get(nodeId);
    if (!node) continue;
    if (!variationStarted) {
      const principalAtIndex = i < principalIds.length ? principalIds[i] : null;
      if (!principalAtIndex || principalAtIndex !== nodeId) {
        variationStarted = true;
      }
    }
    const parent = node.parent_id ? nodesById.get(node.parent_id) : null;
    const siblings = Array.isArray(parent?.children) ? parent.children : [];
    const branchOptions = siblings
      .filter((id) => id !== nodeId)
      .map((id) => nodesById.get(id))
      .filter((n) => !!n)
      .map((n) => ({
        nodeId: n.node_id,
        ply: n.ply || 0,
        turn: Number(n.turn || 0),
        moveStr: n.move_str || "",
      }));

    rows.push({
      nodeId,
      ply: node.ply || 0,
      turn: Number(node.turn || 0),
      moveStr: i === 0 ? "開始局面" : node.move_str || "",
      branchOptions,
      isVariation: variationStarted,
      isCurrent: historyTree.current_id === nodeId,
    });
  }

  return rows;
}

function resolveHistoryTargetNodeId() {
  if (isReverseSubModeActive() && reverseHistoryTree && Array.isArray(reverseHistoryTree.nodes)) {
    const ids = new Set((reverseHistoryTree.nodes || []).map((n) => n.node_id));
    if (reverseSelectedNodeId && ids.has(reverseSelectedNodeId)) {
      return reverseSelectedNodeId;
    }
    return reverseHistoryTree.current_id || reverseHistoryTree.root_id || null;
  }
  if (!historyTree) return null;
  const ids = new Set((historyTree.nodes || []).map((n) => n.node_id));
  if (selectedHistoryNodeId && ids.has(selectedHistoryNodeId)) {
    return selectedHistoryNodeId;
  }
  return historyTree.current_id || historyTree.root_id || null;
}

function setHistoryActionButtonVisible(btn, visible) {
  if (!btn) return;
  btn.classList.toggle("history-action-hidden", !visible);
  btn.disabled = !visible;
}

function updateHistoryActionButtons() {
  if (isReverseSubModeActive()) {
    if (!reverseHistoryTree || !Array.isArray(reverseHistoryTree.nodes)) {
      setHistoryActionButtonVisible(ui.btnPromoteBranch, false);
      setHistoryActionButtonVisible(ui.btnDeleteBranch, false);
      return;
    }
    const targetNodeId = resolveHistoryTargetNodeId();
    if (!targetNodeId) {
      setHistoryActionButtonVisible(ui.btnPromoteBranch, false);
      setHistoryActionButtonVisible(ui.btnDeleteBranch, false);
      return;
    }
    const nodesById = new Map(reverseHistoryTree.nodes.map((n) => [n.node_id, n]));
    const node = nodesById.get(targetNodeId);
    const parent = node?.parent_id ? nodesById.get(node.parent_id) : null;
    const siblings = Array.isArray(parent?.children) ? parent.children : [];
    const canDelete = Boolean(node && node.parent_id);
    const canPromote = Boolean(node && node.parent_id && siblings.length > 1 && siblings[0] !== node.node_id);
    setHistoryActionButtonVisible(ui.btnPromoteBranch, canPromote);
    setHistoryActionButtonVisible(ui.btnDeleteBranch, canDelete);
    return;
  }
  if (!historyTree || !Array.isArray(historyTree.nodes)) {
    setHistoryActionButtonVisible(ui.btnPromoteBranch, false);
    setHistoryActionButtonVisible(ui.btnDeleteBranch, false);
    return;
  }
  const targetNodeId = resolveHistoryTargetNodeId();
  if (!targetNodeId) {
    setHistoryActionButtonVisible(ui.btnPromoteBranch, false);
    setHistoryActionButtonVisible(ui.btnDeleteBranch, false);
    return;
  }
  const nodesById = new Map(historyTree.nodes.map((n) => [n.node_id, n]));
  const node = nodesById.get(targetNodeId);
  const parent = node?.parent_id ? nodesById.get(node.parent_id) : null;
  const siblings = Array.isArray(parent?.children) ? parent.children : [];
  const canDelete = Boolean(node && node.parent_id);
  const canPromoteByTarget = Boolean(node && node.parent_id && siblings.length > 1 && siblings[0] !== node.node_id);
  const rows = buildHistoryRows();
  const hasVariationLine = Array.isArray(rows) && rows.some((r) => Boolean(r?.isVariation));
  const canPromote = hasVariationLine ? true : canPromoteByTarget;
  setHistoryActionButtonVisible(ui.btnPromoteBranch, canPromote);
  setHistoryActionButtonVisible(ui.btnDeleteBranch, canDelete);
}

function collectTreeMainlineIds(tree) {
  if (!tree || !Array.isArray(tree.nodes)) return [];
  const byId = new Map(tree.nodes.map((n) => [n.node_id, n]));
  const out = [];
  const seen = new Set();
  let id = tree.root_id || null;
  const maxSteps = Math.max(1000, byId.size * 4);
  let guard = 0;
  while (id && guard < maxSteps && !seen.has(id)) {
    guard += 1;
    seen.add(id);
    out.push(id);
    const node = byId.get(id);
    const children = Array.isArray(node?.children) ? node.children : [];
    id = children[0] || null;
  }
  return out;
}

function collectTreeVariationRootIds(tree) {
  if (!tree || !Array.isArray(tree.nodes)) return [];
  const byId = new Map(tree.nodes.map((n) => [n.node_id, n]));
  const mainlineIds = collectTreeMainlineIds(tree);
  const out = [];
  const seen = new Set();
  for (const id of mainlineIds) {
    const node = byId.get(id);
    const children = Array.isArray(node?.children) ? node.children : [];
    for (let i = 1; i < children.length; i += 1) {
      const childId = String(children[i] || "");
      if (!childId || seen.has(childId)) continue;
      seen.add(childId);
      out.push(childId);
    }
  }
  return out;
}

function collectForwardDeletableBranchRootIds(tree) {
  if (!tree || !Array.isArray(tree.nodes)) return [];
  const byId = new Map(tree.nodes.map((n) => [n.node_id, n]));
  const roots = collectTreeVariationRootIds(tree);
  const out = [];
  const seen = new Set();
  for (const id of roots) {
    const sid = String(id || "");
    if (!sid || seen.has(sid)) continue;
    const node = byId.get(sid);
    if (!node || !node.parent_id) continue;
    seen.add(sid);
    out.push(sid);
  }
  return out;
}

function localHistoryNodeMapForUi() {
  const nodes = Array.isArray(historyTree?.nodes) ? historyTree.nodes : [];
  if (historyNodeMapNodesRef === nodes && historyNodeMapCache instanceof Map) {
    return historyNodeMapCache;
  }
  const byId = new Map();
  for (const n of nodes) {
    if (!n || typeof n.node_id !== "string" || !n.node_id) continue;
    byId.set(n.node_id, n);
  }
  historyNodeMapNodesRef = nodes;
  historyNodeMapCache = byId;
  return byId;
}

function localAdvanceHistoryCurrentIdInUi(kind) {
  if (!historyTree || !Array.isArray(historyTree.nodes) || historyTree.nodes.length <= 0) return false;
  const byId = localHistoryNodeMapForUi();
  const rootId = historyTree.root_id || null;
  const curId = historyTree.current_id || rootId;
  if (!curId || !byId.has(curId)) return false;

  let nextId = curId;
  if (kind === "start") {
    nextId = rootId || curId;
  } else if (kind === "back") {
    const cur = byId.get(curId);
    nextId = (cur && cur.parent_id) || curId;
  } else if (kind === "forward") {
    const cur = byId.get(curId);
    const children = Array.isArray(cur?.children) ? cur.children : [];
    nextId = children[0] || curId;
  } else if (kind === "end") {
    let walkId = curId;
    const seen = new Set();
    while (walkId && !seen.has(walkId)) {
      seen.add(walkId);
      const node = byId.get(walkId);
      if (!node) break;
      const children = Array.isArray(node.children) ? node.children : [];
      const childId = children[0] || null;
      if (!childId) break;
      walkId = childId;
    }
    nextId = walkId || curId;
  }

  if (!nextId || nextId === curId) return false;
  historyTree.current_id = nextId;
  if (!selectedHistoryNodeId || selectedHistoryNodeId === curId) {
    selectedHistoryNodeId = nextId;
  }
  return true;
}

function rowTopInScrollContainer(containerEl, rowEl) {
  if (!containerEl || !rowEl) return 0;
  const listRect = containerEl.getBoundingClientRect();
  const rowRect = rowEl.getBoundingClientRect();
  return Number(containerEl.scrollTop || 0) + (rowRect.top - listRect.top);
}

function syncHistoryScrollToCurrentFast() {
  if (!ui.historyList || !historyRenderRowOrder.length) return false;
  const list = ui.historyList;
  const currentId = historyTree?.current_id || null;
  if (!currentId) return false;
  const curEl = historyRenderRowByNodeId.get(currentId);
  if (!curEl) return false;
  const rowTop = rowTopInScrollContainer(list, curEl);
  const rowBottom = rowTop + Number(curEl.getBoundingClientRect().height || 0);
  const viewTop = Number(list.scrollTop || 0);
  const viewBottom = viewTop + Number(list.clientHeight || 0);
  const margin = 8;
  if (rowTop >= viewTop + margin && rowBottom <= viewBottom - margin) return true;
  const targetTop = Math.max(
    0,
    Math.min(
      Math.max(0, list.scrollHeight - list.clientHeight),
      rowTop - Math.floor((Number(list.clientHeight || 0) * 0.35))
    )
  );
  if (Math.abs(list.scrollTop - targetTop) > 1) list.scrollTop = targetTop;
  return true;
}

function renderHistoryListFastForPlayback() {
  if (!ui.historyList || !historyTree || isReverseSubModeActive()) return false;
  const nodes = Array.isArray(historyTree.nodes) ? historyTree.nodes : [];
  if (nodes.length <= 0) return false;
  if (historyRenderNodesRef !== nodes) return false;
  if (historyRenderRowByNodeId.size !== nodes.length) return false;

  const focusId = resolveHistoryTargetNodeId();
  const currentId = historyTree.current_id || historyTree.root_id || null;

  if (historyRenderCurrentNodeId && historyRenderCurrentNodeId !== currentId) {
    const prev = historyRenderRowByNodeId.get(historyRenderCurrentNodeId);
    if (prev) prev.classList.remove("current");
  }
  if (currentId) {
    const curEl = historyRenderRowByNodeId.get(currentId);
    if (curEl) curEl.classList.add("current");
  }
  historyRenderCurrentNodeId = currentId;

  if (historyRenderFocusNodeId && historyRenderFocusNodeId !== focusId) {
    const prev = historyRenderRowByNodeId.get(historyRenderFocusNodeId);
    if (prev) prev.classList.remove("focused");
  }
  if (focusId) {
    const focusEl = historyRenderRowByNodeId.get(focusId);
    if (focusEl) focusEl.classList.add("focused");
  }
  historyRenderFocusNodeId = focusId || null;

  const byId = localHistoryNodeMapForUi();
  const curNode = currentId ? byId.get(currentId) : null;
  const curPly = Number.parseInt(curNode?.ply, 10);
  if (ui.historyInfo) {
    ui.historyInfo.textContent =
      Number.isFinite(curPly) && curPly >= 0 ? `現在：${curPly}手` : "現在：-";
  }

  syncHistoryScrollToCurrentFast();
  scheduleHistoryHeaderScrollbarCompensation();
  return true;
}

function getMainlinePlyCount() {
  if (!historyTree || !Array.isArray(historyTree.nodes)) return 0;
  const nodesById = new Map(historyTree.nodes.map((n) => [n.node_id, n]));
  let count = 0;
  let nodeId = historyTree.root_id || null;
  const seen = new Set();
  while (nodeId && !seen.has(nodeId)) {
    seen.add(nodeId);
    const node = nodesById.get(nodeId);
    if (!node) break;
    const children = Array.isArray(node.children) ? node.children : [];
    const nextId = children[0] || null;
    if (!nextId) break;
    count += 1;
    nodeId = nextId;
  }
  return count;
}

function reverseHistoryNodeMap() {
  const nodes = Array.isArray(reverseHistoryTree?.nodes) ? reverseHistoryTree.nodes : [];
  return new Map(nodes.map((n) => [n.node_id, n]));
}

function reverseCurrentNode() {
  if (!reverseHistoryTree) return null;
  const byId = reverseHistoryNodeMap();
  return byId.get(reverseHistoryTree.current_id) || byId.get(reverseHistoryTree.root_id) || null;
}

function reverseCreateNodeId() {
  const id = `r_${String(reverseHistoryNodeSeq).padStart(6, "0")}`;
  reverseHistoryNodeSeq += 1;
  return id;
}

function reverseNormalizeStartTurn(raw, fallback = 0) {
  const n = Number(raw);
  if (n === 0 || n === 1) return n;
  return Number(fallback) === 1 ? 1 : 0;
}

function reverseInferForwardContextFromForwardHistory() {
  let startTurn = reverseNormalizeStartTurn(state?.turn, 0);
  let currentForwardPly = null;
  if (historyTree && Array.isArray(historyTree.nodes) && historyTree.nodes.length > 0) {
    const nodesById = new Map((historyTree.nodes || []).map((n) => [String(n?.node_id || ""), n]));
    const rootId = String(historyTree.root_id || "");
    const rootNode = nodesById.get(rootId) || null;
    if (rootNode) {
      startTurn = reverseNormalizeStartTurn(rootNode?.turn, startTurn);
    }
    const curId = String(historyTree.current_id || rootId);
    const curNode = nodesById.get(curId) || rootNode;
    const plyRaw = Number.parseInt(curNode?.ply, 10);
    if (Number.isFinite(plyRaw) && plyRaw >= 0) currentForwardPly = plyRaw;
  }
  return { start_turn: startTurn, current_forward_ply: currentForwardPly };
}

function reverseResolveComputeContext() {
  if (reverseComputeContextOverride && typeof reverseComputeContextOverride === "object") {
    const startTurn = reverseNormalizeStartTurn(
      reverseComputeContextOverride.start_turn,
      state?.turn
    );
    const forwardPlyRaw = Number.parseInt(reverseComputeContextOverride.current_forward_ply, 10);
    const currentForwardPly = Number.isFinite(forwardPlyRaw) && forwardPlyRaw >= 0 ? forwardPlyRaw : null;
    return { start_turn: startTurn, current_forward_ply: currentForwardPly };
  }
  if (reverseHistoryTree && Array.isArray(reverseHistoryTree.nodes) && reverseHistoryTree.nodes.length > 0) {
    const nodesById = reverseHistoryNodeMap();
    const rootId = String(reverseHistoryTree.root_id || "r_root");
    const rootNode = nodesById.get(rootId) || null;
    const curNode = nodesById.get(String(reverseHistoryTree.current_id || rootId)) || rootNode;
    const startTurn = reverseNormalizeStartTurn(
      reverseHistoryTree.start_turn,
      rootNode?.state?.turn
    );
    let currentForwardPly = null;
    const nodeForwardPlyRaw = Number.parseInt(curNode?.forward_ply, 10);
    if (Number.isFinite(nodeForwardPlyRaw) && nodeForwardPlyRaw >= 0) {
      currentForwardPly = nodeForwardPlyRaw;
    } else {
      const rootForwardPlyRaw = Number.parseInt(reverseHistoryTree.root_forward_ply, 10);
      const revPlyRaw = Number.parseInt(curNode?.ply, 10);
      if (
        Number.isFinite(rootForwardPlyRaw) &&
        rootForwardPlyRaw >= 0 &&
        Number.isFinite(revPlyRaw) &&
        revPlyRaw >= 0
      ) {
        currentForwardPly = Math.max(0, rootForwardPlyRaw - revPlyRaw);
      }
    }
    return { start_turn: startTurn, current_forward_ply: currentForwardPly };
  }
  return reverseInferForwardContextFromForwardHistory();
}

function reverseBuildWorkerContextSnapshot() {
  const ctx = reverseResolveComputeContext();
  const out = {
    start_turn: reverseNormalizeStartTurn(ctx?.start_turn, state?.turn),
    current_forward_ply: null,
  };
  const plyRaw = Number.parseInt(ctx?.current_forward_ply, 10);
  if (Number.isFinite(plyRaw) && plyRaw >= 0) out.current_forward_ply = plyRaw;
  return out;
}

function reverseEnsureHistoryTreeBase() {
  if (reverseHistoryTree && Array.isArray(reverseHistoryTree.nodes) && reverseHistoryTree.nodes.length > 0) {
    return reverseHistoryTree;
  }
  if (!state || state.mode !== "play") return null;
  const inferred = reverseInferForwardContextFromForwardHistory();
  const rootForwardPlyRaw = Number.parseInt(inferred?.current_forward_ply, 10);
  const ruleProblemPlyRaw = Number.parseInt(state?.rules?.problem_ply, 10);
  const rootForwardPly =
    Number.isFinite(rootForwardPlyRaw) && rootForwardPlyRaw >= 0
      ? rootForwardPlyRaw
      : Number.isFinite(ruleProblemPlyRaw) && ruleProblemPlyRaw >= 0
      ? ruleProblemPlyRaw
      : 0;
  const startTurn = reverseNormalizeStartTurn(inferred?.start_turn, state?.turn);
  const rootId = "r_root";
  reverseHistoryTree = {
    root_id: rootId,
    current_id: rootId,
    start_turn: startTurn,
    root_forward_ply: rootForwardPly,
    nodes: [
      {
        node_id: rootId,
        parent_id: null,
        ply: 0,
        forward_ply: rootForwardPly,
        label: "開始局面",
        state: cloneJson(state),
        children: [],
      },
    ],
  };
  reverseHistoryNodeSeq = 1;
  reverseSelectedNodeId = rootId;
  return reverseHistoryTree;
}

function buildReverseHistoryDisplayRows() {
  if (reverseHistoryTree && Array.isArray(reverseHistoryTree.nodes) && reverseHistoryTree.nodes.length > 0) {
    const byId = reverseHistoryNodeMap();
    const rootId = reverseHistoryTree.root_id || "r_root";
    if (!byId.has(rootId)) return [];

    const lineIds = [];
    const seen = new Set();
    const maxSteps = Math.max(1000, byId.size * 4);

    const climbIds = [];
    let curId = reverseHistoryTree.current_id || rootId;
    let safety = 0;
    while (curId && safety < maxSteps) {
      safety += 1;
      const node = byId.get(curId);
      if (!node) break;
      climbIds.push(curId);
      if (curId === rootId) break;
      curId = node.parent_id || null;
    }
    if (climbIds.length === 0 || climbIds[climbIds.length - 1] !== rootId) {
      climbIds.length = 0;
      climbIds.push(rootId);
    }
    for (const id of climbIds.reverse()) {
      if (seen.has(id)) break;
      seen.add(id);
      lineIds.push(id);
    }

    let tailId = lineIds[lineIds.length - 1] || rootId;
    safety = 0;
    while (tailId && safety < maxSteps) {
      safety += 1;
      const node = byId.get(tailId);
      if (!node) break;
      const children = Array.isArray(node.children) ? node.children : [];
      const nextId = children[0] || null;
      if (!nextId || seen.has(nextId)) break;
      seen.add(nextId);
      lineIds.push(nextId);
      tailId = nextId;
    }

    const mainlineMoveTextSet = new Set();
    for (let i = 1; i < lineIds.length; i += 1) {
      const n = byId.get(lineIds[i]);
      if (!n) continue;
      const t = String(n.label || "-").trim();
      if (t) mainlineMoveTextSet.add(t);
    }

    const rows = [];
    for (let i = 0; i < lineIds.length; i += 1) {
      const nodeId = lineIds[i];
      const node = byId.get(nodeId);
      if (!node) continue;
      const parent = node.parent_id ? byId.get(node.parent_id) : null;
      const siblings = Array.isArray(parent?.children) ? parent.children : [];
      const branchOptions = siblings
        .filter((id) => id !== nodeId)
        .map((id) => byId.get(id))
        .filter((n) => !!n)
        .map((n) => ({
          nodeId: n.node_id,
          ply: Number(n.ply || 0),
          turn: Number(n?.state?.turn),
          moveStr: String(n.label || "-"),
        }))
        .filter((opt) => {
          const t = String(opt?.moveStr || "").trim();
          if (!t) return true;
          // 左列(逆順)に既に表示されている手は、右列(変化)から除外する。
          return !mainlineMoveTextSet.has(t);
        });

      rows.push({
        nodeId,
        ply: Number(node.ply || 0),
        turn: Number(node?.state?.turn),
        moveStr: i === 0 ? "開始局面" : String(node.label || "-"),
        branchOptions,
        isCurrent: reverseHistoryTree.current_id === nodeId,
      });
    }
    return rows;
  }

  const forwardRows = buildHistoryRows();
  const out = [{ text: "開始局面", kind: "start", isCurrent: false }];
  for (let i = forwardRows.length - 1; i >= 1; i -= 1) {
    const row = forwardRows[i];
    const owner = Number.isFinite(Number(row?.turn)) ? 1 - Number(row.turn) : null;
    const moveText = formatOpponentControlNotationForDisplay(String(row?.moveStr || "-"), owner);
    out.push({
      text: `${moveText}`,
      kind: "history",
      nodeId: row?.nodeId || null,
      isCurrent: Boolean(row?.isCurrent),
    });
  }
  if (!out.some((r) => r?.isCurrent)) {
    out[0].isCurrent = true;
  }
  return out;
}

async function loadAnalysisSnapshotIntoSession(snapshot, { preserveReverseTrail = false } = {}) {
  if (!sessionId) throw new Error("session not found");
  const snap = snapshot && typeof snapshot === "object" ? snapshot : null;
  if (!snap) throw new Error("snapshot is empty");
  const eng = currentEngine();
  let env = null;
  if (typeof eng.analysisLoadState === "function") {
    env = await eng.analysisLoadState(sessionId, revision, snap);
  } else {
    const sfen = buildSfenFromStateLike(snap);
    env = await eng.ioLoadSfen(sessionId, revision, sfen);
  }
  if (preserveReverseTrail) {
    keepReverseTrailOnNextStateApply = true;
  }
  try {
    applyStateEnvelope(env);
  } finally {
    if (preserveReverseTrail) keepReverseTrailOnNextStateApply = false;
  }
  return env;
}

function reverseNormalizeMoveForApply(move) {
  if (!move || typeof move !== "object") return null;
  if (move.kind === "move" && move.from && move.to) {
    const out = {
      kind: "move",
      from: { x: Number(move.from.x), y: Number(move.from.y) },
      to: { x: Number(move.to.x), y: Number(move.to.y) },
      promote: Boolean(move.promote),
    };
    if (move.rebirth && typeof move.rebirth === "object") {
      out.rebirth = { x: Number(move.rebirth.x), y: Number(move.rebirth.y) };
    }
    return out;
  }
  if (move.kind === "drop" && move.to) {
    const handToken = String(move.hand_token || move.name || "");
    return {
      kind: "drop",
      owner: Number(move.owner),
      name: String(move.name || ""),
      hand_token: handToken,
      to: { x: Number(move.to.x), y: Number(move.to.y) },
    };
  }
  return null;
}

function reverseInferForwardMoveBetweenSnapshots(fromSnapshot, toSnapshot) {
  const fromState = fromSnapshot && typeof fromSnapshot === "object" ? fromSnapshot : null;
  const toState = toSnapshot && typeof toSnapshot === "object" ? toSnapshot : null;
  if (!fromState || !toState) return null;
  const rules = fromState?.rules && typeof fromState.rules === "object" ? cloneJson(fromState.rules) : {};
  const typeAttrs =
    fromState?.type_attrs && typeof fromState.type_attrs === "object"
      ? cloneJson(fromState.type_attrs)
      : toState?.type_attrs && typeof toState.type_attrs === "object"
        ? cloneJson(toState.type_attrs)
        : state?.type_attrs && typeof state.type_attrs === "object"
          ? cloneJson(state.type_attrs)
          : {};
  const preTurn = Number(fromState.turn) === 1 ? 1 : 0;
  const prePieces = Array.isArray(fromState?.board?.pieces)
    ? fromState.board.pieces.map((p) => reverseNormalizePieceForCompare(p, typeAttrs))
    : [];
  const preHands = localCloneHands(fromState?.hands || {});
  const targetPieces = Array.isArray(toState?.board?.pieces)
    ? toState.board.pieces.map((p) => reverseNormalizePieceForCompare(p, typeAttrs))
    : [];
  const targetHands = localCloneHands(toState?.hands || {});
  const targetTurn = Number(toState.turn) === 1 ? 1 : 0;
  const targetSig = reverseBuildStateSignatureForCompare(targetPieces, targetHands, targetTurn, typeAttrs);
  const preState = {
    mode: "play",
    turn: preTurn,
    board: { width: 9, height: 9, pieces: prePieces },
    hands: preHands,
    rules: cloneJson(rules),
  };
  const simCtx = localBuildAnalysisContext(preState, null, "", null, typeAttrs);
  localComputeLegalAll(simCtx);
  const legal = Array.isArray(simCtx?.legal?.moves) ? simCtx.legal.moves : [];
  const matched = [];
  for (const mv of legal) {
    if (reverseMoveMatchesTargetState(prePieces, preHands, preTurn, mv, rules, simCtx, targetSig)) {
      matched.push(reverseNormalizeMoveForApply(mv));
    }
  }
  const candidates = matched.filter((m) => !!m);
  if (candidates.length <= 0) return null;
  const noRebirth = candidates.find((m) => !m.rebirth);
  return noRebirth || candidates[0];
}

function reverseCurrentPathFromOldestToNewest() {
  if (!reverseHistoryTree || !Array.isArray(reverseHistoryTree.nodes) || reverseHistoryTree.nodes.length <= 0) {
    return [];
  }
  const byId = reverseHistoryNodeMap();
  const rootId = String(reverseHistoryTree.root_id || "r_root");
  let curId = String(reverseHistoryTree.current_id || rootId);
  const chain = [];
  const seen = new Set();
  while (curId && !seen.has(curId)) {
    seen.add(curId);
    const node = byId.get(curId);
    if (!node) break;
    chain.push(node);
    if (curId === rootId) break;
    curId = String(node.parent_id || "");
  }
  if (chain.length <= 0 || String(chain[chain.length - 1]?.node_id || "") !== rootId) {
    return [];
  }
  // chain is [current(oldest), ..., root(newest)]
  return chain;
}

async function reverseConvertToNormalHistory() {
  const path = reverseCurrentPathFromOldestToNewest();
  if (path.length <= 0) return false;
  const newestSnapshot = cloneJson(path[path.length - 1]?.state || state || {});
  const oldestSnapshot = cloneJson(path[0]?.state || {});
  const forwardMoves = [];
  for (let i = 0; i < path.length - 1; i += 1) {
    const olderNode = path[i];
    const newerNode = path[i + 1];
    const stored = reverseNormalizeMoveForApply(olderNode?.forward_move);
    const inferred =
      stored ||
      reverseInferForwardMoveBetweenSnapshots(
        olderNode?.state && typeof olderNode.state === "object" ? olderNode.state : null,
        newerNode?.state && typeof newerNode.state === "object" ? newerNode.state : null
      );
    if (!inferred) {
      throw new Error(`逆算変換失敗：${Number(olderNode?.ply || 0)}手目の変換候補を復元できません。`);
    }
    forwardMoves.push(inferred);
  }

  stopHistoryPlayback({ silent: true });
  clearPendingRightAction();
  selected = null;
  setEditSelection(null);

  try {
    await loadAnalysisSnapshotIntoSession(oldestSnapshot, { preserveReverseTrail: false });
    for (const mv of forwardMoves) {
      if (mv.kind === "move") {
        const body = {
          expected_revision: revision,
          from: mv.from,
          to: mv.to,
          promote: Boolean(mv.promote),
        };
        if (mv.rebirth) body.rebirth = mv.rebirth;
        const env = await currentEngine().applyMove(sessionId, body);
        applyStateEnvelope(env);
      } else if (mv.kind === "drop") {
        const body = {
          expected_revision: revision,
          owner: Number(mv.owner),
          name: String(mv.name || ""),
          hand_token: String(mv.hand_token || mv.name || ""),
          to: mv.to,
        };
        const env = await currentEngine().applyDrop(sessionId, body);
        applyStateEnvelope(env);
      }
    }
  } catch (e) {
    try {
      await loadAnalysisSnapshotIntoSession(newestSnapshot, { preserveReverseTrail: false });
    } catch (_restoreErr) {
      // restore best-effort
    }
    throw e;
  }

  await refreshLegal();
  await refreshHistory();
  return true;
}

async function jumpToReverseHistoryNode(nodeId, options = {}) {
  const id = String(nodeId || "");
  if (!id || !sessionId || !state || state.mode !== "play") return false;
  const forceReload = Boolean(options.forceReload || options.force);
  const includeLegal = options.includeLegal !== false;
  const includeHistory = options.includeHistory !== false;
  const refreshLegalIfMissing = options.refreshLegalIfMissing !== false;
  const refreshHistoryIfMissing = options.refreshHistoryIfMissing !== false;
  const silentLog = Boolean(options.silentLog);

  const byId = reverseHistoryNodeMap();
  const target = byId.get(id) || null;
  const snapshot = target?.state && typeof target.state === "object" ? target.state : null;
  if (!snapshot) return false;
  if (!forceReload && String(reverseHistoryTree?.current_id || "") === id) return false;

  stopHistoryPlayback({ silent: true });
  clearPendingRightAction();
  selected = null;
  setEditSelection(null);

  try {
    await loadAnalysisSnapshotIntoSession(snapshot, { preserveReverseTrail: true });
  } catch (e) {
    logLine(e.message || String(e), true);
    return false;
  }

  if (reverseHistoryTree) {
    reverseHistoryTree.current_id = id;
  }
  reverseSelectedNodeId = id;
  const refreshTasks = [];
  if (includeLegal) {
    if (refreshLegalIfMissing) {
      refreshTasks.push(refreshLegal());
    } else {
      legalNeedsRefreshAfterPlayback = true;
    }
  } else if (!refreshLegalIfMissing) {
    legalNeedsRefreshAfterPlayback = true;
  }
  if (includeHistory && refreshHistoryIfMissing) {
    refreshTasks.push(refreshHistory());
  }
  if (refreshTasks.length > 0) {
    await Promise.all(refreshTasks);
  }
  renderAll();
  if (!silentLog) {
    logLine(`逆算棋譜ジャンプ：${target.ply > 0 ? String(target?.label || "-") : "開始局面"}`);
  }
  return true;
}

function closeHistoryBranchDialog() {
  if (typeof historyBranchDialogCleanup === "function") {
    try {
      historyBranchDialogCleanup();
    } catch (_e) {
      // noop
    }
  }
  historyBranchDialogCleanup = null;
  if (ui.historyBranchDialogList) ui.historyBranchDialogList.innerHTML = "";
  if (ui.historyBranchDialog?.open) ui.historyBranchDialog.close();
}

function formatHistoryPlyPrefix(plyRaw) {
  const plyNum = Number.parseInt(plyRaw, 10);
  const ply = Number.isFinite(plyNum) && plyNum >= 0 ? plyNum : 0;
  const plyText = String(ply);
  return `${plyText.length <= 3 ? plyText.padStart(3, "\u2007") : plyText}:`;
}

function historyBranchOptionText(option, { reverse = false, includePly = false } = {}) {
  const ply = Number(option?.ply || 0);
  let text = String(option?.moveStr || "-");
  if (!reverse) {
    const owner = Number.isFinite(Number(option?.turn)) ? 1 - Number(option.turn) : null;
    text = formatOpponentControlNotationForDisplay(text, owner);
  } else {
    const owner = Number.isFinite(Number(option?.turn)) ? Number(option.turn) : null;
    text = formatReverseHistoryNotationForDisplay(text, owner);
  }
  if (includePly) return `${formatHistoryPlyPrefix(ply)} ${text}`;
  return text;
}

function dedupeHistoryBranchOptions(options, { reverse = false } = {}) {
  if (!Array.isArray(options) || options.length <= 0) return [];
  const out = [];
  const seen = new Set();
  for (const option of options) {
    const text = historyBranchOptionText(option, { reverse, includePly: false });
    const key = String(text || "-");
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(option);
  }
  return out;
}

function openHistoryBranchDialog(options, { reverse = false, onSelect = null } = {}) {
  const sourceOptions = reverse ? dedupeHistoryBranchOptions(options, { reverse: true }) : options;
  if (!Array.isArray(sourceOptions) || sourceOptions.length <= 0) return;
  if (!ui.historyBranchDialog || !ui.historyBranchDialogList || !ui.btnHistoryBranchDialogClose) {
    if (typeof onSelect === "function") onSelect(sourceOptions[0]);
    return;
  }
  closeHistoryBranchDialog();
  if (ui.historyBranchDialogTitle) {
    ui.historyBranchDialogTitle.textContent = reverse ? "変化一覧（逆算）" : "変化一覧";
  }
  ui.historyBranchDialogList.innerHTML = "";
  for (const option of sourceOptions) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "history-branch-dialog-option";
    btn.textContent = historyBranchOptionText(option, { reverse, includePly: !reverse });
    btn.addEventListener("click", () => {
      closeHistoryBranchDialog();
      if (typeof onSelect === "function") onSelect(option);
    });
    ui.historyBranchDialogList.appendChild(btn);
  }
  const onCancel = (e) => {
    e.preventDefault();
    closeHistoryBranchDialog();
  };
  const onClose = () => closeHistoryBranchDialog();
  historyBranchDialogCleanup = () => {
    ui.historyBranchDialog?.removeEventListener("cancel", onCancel);
    ui.btnHistoryBranchDialogClose?.removeEventListener("click", onClose);
  };
  ui.historyBranchDialog.addEventListener("cancel", onCancel);
  ui.btnHistoryBranchDialogClose.addEventListener("click", onClose);
  ui.historyBranchDialog.showModal();
}

function renderHistoryBranchOptions(container, options, { reverse = false, onSelect = null } = {}) {
  if (!container) return;
  container.textContent = "";
  const sourceOptions = reverse ? dedupeHistoryBranchOptions(options, { reverse: true }) : options;
  if (!Array.isArray(sourceOptions) || sourceOptions.length <= 0) return;
  const inline = sourceOptions.slice(0, HISTORY_BRANCH_INLINE_MAX);
  const overflow = sourceOptions.slice(inline.length);
  for (const option of inline) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "history-branch-option";
    b.textContent = historyBranchOptionText(option, { reverse, includePly: false });
    b.addEventListener("click", (ev) => {
      ev.stopPropagation();
      if (typeof onSelect === "function") onSelect(option);
    });
    container.appendChild(b);
  }
  if (overflow.length > 0) {
    const more = document.createElement("button");
    more.type = "button";
    more.className = "history-branch-more";
    more.textContent = `+${overflow.length}件`;
    more.addEventListener("click", (ev) => {
      ev.stopPropagation();
      openHistoryBranchDialog(sourceOptions, { reverse, onSelect });
    });
    container.appendChild(more);
  }
}

function renderReverseHistoryList() {
  if (!ui.historyList) return;
  ui.historyList.innerHTML = "";
  syncHistoryHeaderScrollbarCompensation();
  if (ui.historyMainHeader) ui.historyMainHeader.textContent = "逆順";
  if (ui.historyBranchHeader) ui.historyBranchHeader.textContent = "変化";
  const currentNode = reverseCurrentNode();
  const currentPly = Number(currentNode?.ply || 0);
  if (ui.historyInfo) ui.historyInfo.textContent = `逆算：${currentPly}手`;
  updateHistoryActionButtons();
  const rows = buildReverseHistoryDisplayRows();
  if (rows.length <= 0) {
    const rowEl = document.createElement("div");
    rowEl.className = "history-row";
    const main = document.createElement("button");
    main.type = "button";
    main.className = "history-move readonly";
    main.textContent = "（なし）";
    const br = document.createElement("div");
    br.className = "history-branch";
    br.textContent = "";
    rowEl.appendChild(main);
    rowEl.appendChild(br);
    ui.historyList.appendChild(rowEl);
    scheduleHistoryHeaderScrollbarCompensation();
    return;
  }
  const frag = document.createDocumentFragment();
  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    const rowEl = document.createElement("div");
    rowEl.className = "history-row";
    if (row?.isCurrent) rowEl.classList.add("current");
    if (row?.nodeId && row.nodeId === reverseSelectedNodeId) rowEl.classList.add("focused");
    const main = document.createElement("button");
    main.type = "button";
    main.className = "history-move";
    if (row?.moveStr === "開始局面" || row?.text === "開始局面") {
      main.textContent = "開始局面";
    } else {
      const ply = Number(row?.ply || 0);
      const raw = String(row?.moveStr || row?.text || "-");
      const owner = Number.isFinite(Number(row?.turn)) ? Number(row.turn) : null;
      const text = formatReverseHistoryNotationForDisplay(raw, owner);
      main.textContent = `${formatHistoryPlyPrefix(ply)} ${text}`;
    }
    if (row?.nodeId && reverseHistoryTree && Array.isArray(reverseHistoryTree.nodes)) {
      main.addEventListener("click", () => {
        reverseSelectedNodeId = row.nodeId;
        void enqueueSequentialAction(() =>
          jumpToReverseHistoryNode(row.nodeId, { includeHistory: false, refreshHistoryIfMissing: false })
        ).catch((e) => {
          logLine(e.message || String(e), true);
        });
      });
    } else if (row?.kind === "history" && row?.nodeId) {
      main.addEventListener("click", () => {
        selectedHistoryNodeId = row.nodeId;
        void selectHistoryNode(row.nodeId).catch((e) => logLine(e.message || String(e), true));
      });
    } else {
      main.classList.add("readonly");
    }
    const br = document.createElement("div");
    br.className = "history-branch";
    renderHistoryBranchOptions(br, row?.branchOptions, {
      reverse: true,
      onSelect: (option) => {
        reverseSelectedNodeId = option.nodeId;
        void enqueueSequentialAction(() =>
          jumpToReverseHistoryNode(option.nodeId, { includeHistory: false, refreshHistoryIfMissing: false })
        ).catch((e) => {
          logLine(e.message || String(e), true);
        });
      },
    });
    rowEl.appendChild(main);
    rowEl.appendChild(br);
    frag.appendChild(rowEl);
  }
  ui.historyList.appendChild(frag);
  syncHistoryScrollToCurrent(rows);
  scheduleHistoryHeaderScrollbarCompensation();
}

function normalizeRepeatDialogDefaults(maxPly) {
  const defaults = {
    fromPly: maxPly > 0 ? 1 : 0,
    toPly: maxPly > 0 ? maxPly : 0,
    repeatCount: 1,
  };
  const raw = state?.repeat_params;
  if (!raw || typeof raw !== "object") return defaults;

  let fromPly = Number.parseInt(raw.from_ply, 10);
  let toPly = Number.parseInt(raw.to_ply, 10);
  let repeatCount = Number.parseInt(raw.repeat_count, 10);

  if (!Number.isFinite(fromPly) || fromPly <= 0) fromPly = defaults.fromPly;
  if (!Number.isFinite(toPly) || toPly <= 0) toPly = defaults.toPly;
  if (!Number.isFinite(repeatCount) || repeatCount <= 0) repeatCount = defaults.repeatCount;

  if (maxPly > 0) {
    fromPly = Math.max(1, Math.min(maxPly, fromPly));
    toPly = Math.max(1, Math.min(maxPly, toPly));
    if (fromPly > toPly) {
      fromPly = 1;
      toPly = maxPly;
    }
  }
  return { fromPly, toPly, repeatCount };
}

function closeRepeatDialog() {
  if (ui.repeatDialog?.open) ui.repeatDialog.close();
}

function openRepeatDialog() {
  if (!ui.repeatDialog) return;
  if (state?.mode !== "play") {
    logLine("反復は検討モードで実行してください。");
    return;
  }
  const maxPly = getMainlinePlyCount();
  if (maxPly <= 0) {
    logLine("反復元となる棋譜がありません。");
    return;
  }
  const defaults = normalizeRepeatDialogDefaults(maxPly);
  if (ui.repeatRangeInfo) ui.repeatRangeInfo.textContent = `対象手数：1 〜 ${maxPly}`;
  if (ui.repeatFromInput) ui.repeatFromInput.value = String(defaults.fromPly);
  if (ui.repeatToInput) ui.repeatToInput.value = String(defaults.toPly);
  if (ui.repeatCountInput) ui.repeatCountInput.value = String(defaults.repeatCount);
  if (!ui.repeatDialog.open) ui.repeatDialog.showModal();
}

function parseRepeatDialogInput(maxPly) {
  const fromPly = Number.parseInt((ui.repeatFromInput?.value || "").trim(), 10);
  const toPly = Number.parseInt((ui.repeatToInput?.value || "").trim(), 10);
  const repeatCount = Number.parseInt((ui.repeatCountInput?.value || "").trim(), 10);

  if (!Number.isFinite(fromPly) || !Number.isFinite(toPly) || !Number.isFinite(repeatCount)) {
    throw new Error("開始/終了手数と反復回数は整数で入力してください。");
  }
  if (fromPly <= 0 || toPly <= 0) {
    throw new Error("開始/終了手数は1以上で入力してください。");
  }
  if (repeatCount <= 0) {
    throw new Error("反復回数は1以上で入力してください。");
  }
  if (fromPly > toPly) {
    throw new Error("開始手数は終了手数以下にしてください。");
  }
  if (toPly > maxPly) {
    throw new Error(`終了手数は ${maxPly} 以下にしてください。`);
  }

  return { fromPly, toPly, repeatCount };
}

function buildRepeatErrorMessage(error) {
  const details = error?.apiDetails;
  if (!details || typeof details !== "object") return error?.message || String(error);
  const rep = Number.parseInt(details.repeat_index, 10);
  const idx = Number.parseInt(details.move_index, 10);
  const mv = details.move || "";
  if (!Number.isFinite(rep) || !Number.isFinite(idx) || !mv) return error?.message || String(error);
  return `現在局面では反復できません。\n${rep}回目の${idx}手目で失敗：${mv}`;
}

async function applyRepeatFromDialog() {
  if (!sessionId || state?.mode !== "play") return;
  const maxPly = getMainlinePlyCount();
  if (maxPly <= 0) {
    logLine("反復元となる棋譜がありません。");
    return;
  }

  let params;
  try {
    params = parseRepeatDialogInput(maxPly);
  } catch (e) {
    window.alert(e.message || String(e));
    return;
  }

  stopHistoryPlayback({ silent: true });
  const send = () =>
    currentEngine().historyRepeatApply(sessionId, revision, {
        from_ply: params.fromPly,
        to_ply: params.toPly,
        repeat_count: params.repeatCount,
    });

  try {
    let env;
    try {
      env = await send();
    } catch (e) {
      if (!isRevisionConflictError(e)) throw e;
      await refreshState();
      env = await send();
    }

    applyStateEnvelope(env);
    selected = null;
    await refreshLegal();
    await refreshHistory();
    renderAll();
    closeRepeatDialog();

    const applied = Number.parseInt(env?.data?.applied, 10) || 0;
    const segmentLen = params.toPly - params.fromPly + 1;
    logLine(
      `${params.fromPly}手目〜${params.toPly}手目（${segmentLen}手）を` +
        `${params.repeatCount}回反復し、${applied}手を棋譜に反映しました。`
    );
  } catch (e) {
    const msg = buildRepeatErrorMessage(e);
    logLine(msg, true);
    window.alert(msg);
  }
}

async function selectHistoryNode(nodeId) {
  if (!sessionId) return;
  stopHistoryPlayback({ silent: true });
  selectedHistoryNodeId = nodeId;
  const env = await currentEngine().historySelect(sessionId, revision, nodeId);
  applyStateEnvelope(env);
  selected = null;
  const views = applyViewsFromEnvelope(env);
  const refreshTasks = [];
  if (!views.hasLegal) refreshTasks.push(refreshLegal());
  if (!views.hasHistory) refreshTasks.push(refreshHistory());
  if (refreshTasks.length > 0) {
    await Promise.all(refreshTasks);
  }
  renderAll();
  logLine(`棋譜選択：${nodeId}`);
}

function promoteReverseBranchNode(nodeId) {
  if (!reverseHistoryTree || !Array.isArray(reverseHistoryTree.nodes)) return false;
  const byId = reverseHistoryNodeMap();
  const node = byId.get(nodeId);
  if (!node || !node.parent_id) return false;
  const parent = byId.get(node.parent_id);
  if (!parent || !Array.isArray(parent.children)) return false;
  const idx = parent.children.indexOf(nodeId);
  if (idx <= 0) return false;
  parent.children.splice(idx, 1);
  parent.children.unshift(nodeId);
  return true;
}

function collectPromotableVariationNodeIds(rows, nodesById) {
  const out = [];
  const seen = new Set();
  const list = Array.isArray(rows) ? rows : [];
  const map = nodesById instanceof Map ? nodesById : new Map();
  for (const row of list) {
    const nodeId = String(row?.nodeId || "");
    if (!nodeId || seen.has(nodeId)) continue;
    if (!Boolean(row?.isVariation)) continue;
    const node = map.get(nodeId);
    const parent = node?.parent_id ? map.get(node.parent_id) : null;
    const siblings = Array.isArray(parent?.children) ? parent.children : [];
    if (!node || !node.parent_id || siblings.length <= 1) continue;
    if (siblings[0] === nodeId) continue;
    out.push(nodeId);
    seen.add(nodeId);
  }
  return out;
}

async function promoteDisplayedVariationLine() {
  if (!sessionId) return false;
  if (!historyTree || !Array.isArray(historyTree.nodes)) return false;
  const rows = buildHistoryRows();
  const nodesById = new Map(historyTree.nodes.map((n) => [n.node_id, n]));
  const promoteIds = collectPromotableVariationNodeIds(rows, nodesById);
  if (promoteIds.length <= 0) return false;
  for (const nodeId of promoteIds) {
    const env = await currentEngine().historyPromoteBranch(sessionId, revision, nodeId);
    applyStateEnvelope(env);
  }
  selected = null;
  await refreshLegal();
  await refreshHistory();
  renderAll();
  logLine(`変化を本譜に(手順全体)：${promoteIds.length}箇所`);
  return true;
}

function deleteReverseBranchNode(nodeId) {
  if (!reverseHistoryTree || !Array.isArray(reverseHistoryTree.nodes)) {
    return { changed: false, currentChanged: false };
  }
  const byId = reverseHistoryNodeMap();
  const node = byId.get(nodeId);
  if (!node || !node.parent_id) {
    return { changed: false, currentChanged: false };
  }

  const deleteIds = new Set();
  const stack = [nodeId];
  while (stack.length > 0) {
    const id = stack.pop();
    if (!id || deleteIds.has(id)) continue;
    deleteIds.add(id);
    const n = byId.get(id);
    const children = Array.isArray(n?.children) ? n.children : [];
    for (const childId of children) stack.push(childId);
  }

  const parent = byId.get(node.parent_id);
  if (parent && Array.isArray(parent.children)) {
    parent.children = parent.children.filter((id) => !deleteIds.has(id));
  }

  reverseHistoryTree.nodes = reverseHistoryTree.nodes.filter((n) => !deleteIds.has(n.node_id));
  const currentId = String(reverseHistoryTree.current_id || reverseHistoryTree.root_id || "");
  const currentChanged = deleteIds.has(currentId);
  if (currentChanged) {
    reverseHistoryTree.current_id = node.parent_id || reverseHistoryTree.root_id;
  }
  if (reverseSelectedNodeId && deleteIds.has(reverseSelectedNodeId)) {
    reverseSelectedNodeId = reverseHistoryTree.current_id || reverseHistoryTree.root_id || null;
  }
  return { changed: true, currentChanged };
}

async function promoteBranch() {
  if (!sessionId) return;
  stopHistoryPlayback({ silent: true });
  if (isReverseSubModeActive()) {
    const nodeId = resolveHistoryTargetNodeId();
    if (!nodeId) return;
    const changed = promoteReverseBranchNode(nodeId);
    if (!changed) return;
    renderAll();
    logLine(`変化を本譜に：${nodeId}`);
    return;
  }
  if (await promoteDisplayedVariationLine()) {
    return;
  }
  const nodeId = resolveHistoryTargetNodeId();
  if (!nodeId) return;
  const env = await currentEngine().historyPromoteBranch(sessionId, revision, nodeId);
  applyStateEnvelope(env);
  selected = null;
  await refreshLegal();
  await refreshHistory();
  renderAll();
  logLine(`変化を本譜に：${nodeId}`);
}

async function confirmDeleteBranchByDialog(nodeId) {
  if (
    !ui.branchDeleteDialog ||
    !ui.btnBranchDeleteCancel ||
    !ui.btnBranchDeleteAll ||
    !ui.btnBranchDeleteOk ||
    !ui.branchDeleteTarget
  ) {
    return window.confirm(`この手順を削除しますか？\n${nodeId}`) ? "single" : "cancel";
  }

  const isReverse = isReverseSubModeActive();
  const tree = isReverse ? reverseHistoryTree : historyTree;
  const variationRoots = isReverse ? collectTreeVariationRootIds(tree) : collectForwardDeletableBranchRootIds(tree);
  const canDeleteAll = variationRoots.length > 0;
  const allCount = variationRoots.length;
  ui.branchDeleteTarget.textContent = `削除方法を選択してください (${nodeId})`;
  ui.btnBranchDeleteOk.textContent = "この手順を削除";
  ui.btnBranchDeleteAll.textContent = `本譜以外を全削除${canDeleteAll ? ` (${allCount}本)` : ""}`;
  ui.btnBranchDeleteAll.style.display = canDeleteAll ? "" : "none";
  ui.btnBranchDeleteAll.disabled = !canDeleteAll;
  return await new Promise((resolve) => {
    const onOk = () => cleanup("single");
    const onAll = () => cleanup("all");
    const onCancelBtn = () => cleanup("cancel");
    const onCancel = (e) => {
      e.preventDefault();
      cleanup("cancel");
    };
    const cleanup = (result) => {
      ui.btnBranchDeleteOk.removeEventListener("click", onOk);
      ui.btnBranchDeleteAll.removeEventListener("click", onAll);
      ui.btnBranchDeleteCancel.removeEventListener("click", onCancelBtn);
      ui.branchDeleteDialog.removeEventListener("cancel", onCancel);
      if (ui.branchDeleteDialog.open) ui.branchDeleteDialog.close();
      resolve(result);
    };

    ui.btnBranchDeleteOk.addEventListener("click", onOk);
    ui.btnBranchDeleteAll.addEventListener("click", onAll);
    ui.btnBranchDeleteCancel.addEventListener("click", onCancelBtn);
    ui.branchDeleteDialog.addEventListener("cancel", onCancel);
    ui.branchDeleteDialog.showModal();
  });
}

async function deleteAllForwardBranches() {
  if (!sessionId || !historyTree || !Array.isArray(historyTree.nodes)) return { changed: false, count: 0 };
  let deletedRoots = 0;
  let pass = 0;
  const maxPass = 1024;
  while (true) {
    pass += 1;
    if (pass > maxPass) break;
    const roots = collectForwardDeletableBranchRootIds(historyTree);
    if (roots.length <= 0) break;
    let deletedThisPass = 0;
    for (const nodeId of roots) {
      const nodeMap = new Map((historyTree?.nodes || []).map((n) => [String(n?.node_id || ""), n]));
      const target = nodeMap.get(String(nodeId || ""));
      if (!target || !target.parent_id) continue;
      try {
        const env = await currentEngine().historyDeleteBranch(sessionId, revision, nodeId);
        applyStateEnvelope(env);
        deletedRoots += 1;
        deletedThisPass += 1;
      } catch (e) {
        const msg = String(e?.message || e || "");
        if (!msg.includes("delete target must have a parent")) throw e;
      }
    }
    if (deletedThisPass <= 0) break;
  }
  selected = null;
  selectedHistoryNodeId = null;
  await refreshLegal();
  await refreshHistory();
  renderAll();
  return { changed: deletedRoots > 0, count: deletedRoots };
}

function deleteAllReverseBranches() {
  if (!reverseHistoryTree || !Array.isArray(reverseHistoryTree.nodes)) {
    return { changed: false, count: 0, currentChanged: false };
  }
  const roots = collectTreeVariationRootIds(reverseHistoryTree);
  if (roots.length <= 0) {
    return { changed: false, count: 0, currentChanged: false };
  }
  const byId = reverseHistoryNodeMap();
  const deleteIds = new Set();
  const stack = [...roots];
  while (stack.length > 0) {
    const id = stack.pop();
    if (!id || deleteIds.has(id)) continue;
    deleteIds.add(id);
    const n = byId.get(id);
    const children = Array.isArray(n?.children) ? n.children : [];
    for (const c of children) stack.push(c);
  }

  reverseHistoryTree.nodes = reverseHistoryTree.nodes.filter((n) => !deleteIds.has(String(n?.node_id || "")));
  for (const n of reverseHistoryTree.nodes) {
    if (!Array.isArray(n?.children)) continue;
    n.children = n.children.filter((id) => !deleteIds.has(String(id || "")));
  }

  const currentId = String(reverseHistoryTree.current_id || reverseHistoryTree.root_id || "");
  const currentChanged = deleteIds.has(currentId);
  if (currentChanged) {
    const mainlineIds = collectTreeMainlineIds(reverseHistoryTree);
    reverseHistoryTree.current_id = mainlineIds[mainlineIds.length - 1] || reverseHistoryTree.root_id;
  }
  if (reverseSelectedNodeId && deleteIds.has(String(reverseSelectedNodeId))) {
    reverseSelectedNodeId = String(reverseHistoryTree.current_id || reverseHistoryTree.root_id || "");
  }
  return { changed: true, count: roots.length, currentChanged };
}

async function deleteBranch() {
  if (!sessionId) return;
  stopHistoryPlayback({ silent: true });
  const nodeId = resolveHistoryTargetNodeId();
  if (!nodeId) return;
  const action = await confirmDeleteBranchByDialog(nodeId);
  if (action === "cancel") return;
  let didDelete = false;
  try {
    if (action === "all") {
      if (isReverseSubModeActive()) {
        const result = deleteAllReverseBranches();
        if (!result.changed) return;
        didDelete = true;
        if (result.currentChanged) {
          const targetId = String(reverseHistoryTree?.current_id || reverseHistoryTree?.root_id || "");
          if (targetId) {
            await jumpToReverseHistoryNode(targetId, {
              includeLegal: true,
              includeHistory: false,
              refreshLegalIfMissing: true,
              refreshHistoryIfMissing: false,
              forceReload: true,
              silentLog: true,
            });
          } else {
            renderAll();
          }
        } else {
          renderAll();
        }
        logLine(`本譜以外を全削除：${result.count}本`);
        return;
      }
      const result = await deleteAllForwardBranches();
      if (!result.changed) return;
      didDelete = true;
      logLine(`本譜以外を全削除：${result.count}本`);
      return;
    }
    if (isReverseSubModeActive()) {
      const result = deleteReverseBranchNode(nodeId);
      if (!result.changed) return;
      didDelete = true;
      if (result.currentChanged) {
        const targetId = String(reverseHistoryTree?.current_id || reverseHistoryTree?.root_id || "");
        if (targetId) {
          await jumpToReverseHistoryNode(targetId, {
            includeLegal: true,
            includeHistory: false,
            refreshLegalIfMissing: true,
            refreshHistoryIfMissing: false,
            forceReload: true,
            silentLog: true,
          });
        } else {
          renderAll();
        }
      } else {
        renderAll();
      }
      logLine(`手順削除：${nodeId}`);
      return;
    }
    const nodeMap = new Map((historyTree?.nodes || []).map((n) => [String(n?.node_id || ""), n]));
    const target = nodeMap.get(String(nodeId || ""));
    if (!target || !target.parent_id) {
      logLine("開始局面は削除できません。", true);
      return;
    }
    try {
      const env = await currentEngine().historyDeleteBranch(sessionId, revision, nodeId);
      applyStateEnvelope(env);
    } catch (e) {
      const msg = String(e?.message || e || "");
      if (msg.includes("delete target must have a parent")) {
        logLine("開始局面は削除できません。", true);
        return;
      }
      throw e;
    }
    selected = null;
    selectedHistoryNodeId = null;
    await refreshLegal();
    await refreshHistory();
    renderAll();
    didDelete = true;
    logLine(`手順削除：${nodeId}`);
  } finally {
    if (didDelete) {
      // 削除直後は棋譜エリアを必ず再取得・再描画して表示を同期する。
      try {
        await refreshHistory();
      } catch (_e) {
        // no-op (best effort)
      }
      renderAll();
    }
  }
}

async function historyActionOnReverseTree(kind, options = {}) {
  if (!reverseHistoryTree || !Array.isArray(reverseHistoryTree.nodes) || reverseHistoryTree.nodes.length <= 0) {
    return false;
  }
  const byId = reverseHistoryNodeMap();
  const rootId = reverseHistoryTree.root_id || "r_root";
  const curId = reverseHistoryTree.current_id || rootId;
  const curNode = byId.get(curId);
  if (!curNode) return false;
  let targetId = curId;
  if (kind === "start") {
    targetId = rootId;
  } else if (kind === "back") {
    targetId = curNode.parent_id || curId;
  } else if (kind === "forward") {
    const children = Array.isArray(curNode.children) ? curNode.children : [];
    targetId = children[0] || curId;
  } else if (kind === "end") {
    let tailId = curId;
    const seen = new Set();
    while (tailId && !seen.has(tailId)) {
      seen.add(tailId);
      const n = byId.get(tailId);
      if (!n) break;
      const children = Array.isArray(n.children) ? n.children : [];
      const nextId = children[0] || null;
      if (!nextId) break;
      tailId = nextId;
    }
    targetId = tailId || curId;
  }
  if (!targetId || targetId === curId) return false;
  return await jumpToReverseHistoryNode(targetId, {
    includeLegal: options.includeLegal !== false,
    includeHistory: false,
    refreshLegalIfMissing: options.refreshLegalIfMissing !== false,
    refreshHistoryIfMissing: false,
    silentLog: true,
  });
}

async function historyAction(kind, options = {}) {
  if (!sessionId) return false;
  const allowed = new Set(["start", "back", "forward", "end"]);
  if (!allowed.has(kind)) throw new Error(`unsupported history action: ${kind}`);
  if (!isReverseSubModeActive() && (kind === "forward" || kind === "end")) {
    const terminal = getCurrentHistoryTerminalResult();
    if (terminal) {
      if (!options.silentLog) {
        logLine(`終局(${terminal})のため、これ以上進めません。`);
      }
      return false;
    }
  }
  if (isReverseSubModeActive() && reverseHistoryTree && Array.isArray(reverseHistoryTree.nodes)) {
    const changed = await historyActionOnReverseTree(kind, options);
    if (!options.silentLog) {
      logLine(`棋譜操作：${kind}`);
    }
    return changed;
  }
  const prevRevision = revision;
  const includeLegal = options.includeLegal !== false;
  const includeHistory = options.includeHistory !== false;
  const refreshLegalIfMissing = options.refreshLegalIfMissing !== false;
  const refreshHistoryIfMissing = options.refreshHistoryIfMissing !== false;
  const skipLegalCompute = Boolean(options.skipLegalCompute);
  const playbackFrame = Boolean(options.playbackFrame);
  const fastState = Boolean(options.fastState);
  const alignHistorySelectionToCurrent = Boolean(options.alignHistorySelectionToCurrent);
  const query = new URLSearchParams({
    include_legal: includeLegal ? "true" : "false",
    include_history: includeHistory ? "true" : "false",
    skip_legal_compute: skipLegalCompute ? "true" : "false",
    fast_state: fastState ? "true" : "false",
  });
  const send = () =>
    currentEngine().historyAction(sessionId, kind, revision, query);

  let env;
  try {
    env = await send();
  } catch (e) {
    if (!isRevisionConflictError(e)) throw e;
    // Another operation updated revision first; sync and retry once.
    await refreshState();
    env = await send();
  }
  if (
    playbackFrame &&
    fastState &&
    !includeLegal &&
    !includeHistory &&
    env?.data?.state &&
    typeof env.data.state === "object"
  ) {
    const nextState = env.data.state;
    const nextRevisionRaw = Number(env?.revision ?? nextState?.revision ?? revision);
    const nextRevision = Number.isFinite(nextRevisionRaw) ? nextRevisionRaw : Number(revision || 0);
    revision = nextRevision;
    state = nextState;
    sessionId = String(nextState.session_id || sessionId || "");
    refreshEpoch += 1;
  } else {
    applyStateEnvelope(env);
  }
  selected = null;
  const views = applyViewsFromEnvelope(env);
  const changed = revision !== prevRevision || Boolean(env?.data?.moved);
  if (
    changed &&
    !views.hasHistory &&
    !isReverseSubModeActive() &&
    options.syncLocalHistoryCurrent !== false
  ) {
    localAdvanceHistoryCurrentIdInUi(kind);
  }
  if (!isReverseSubModeActive() && alignHistorySelectionToCurrent && historyTree) {
    selectedHistoryNodeId = historyTree.current_id || historyTree.root_id || null;
  }
  const refreshTasks = [];
  if (!views.hasLegal) {
    if (refreshLegalIfMissing) {
      refreshTasks.push(refreshLegal());
    } else {
      legalNeedsRefreshAfterPlayback = true;
    }
  }
  if (!views.hasHistory && refreshHistoryIfMissing) {
    refreshTasks.push(refreshHistory());
  }
  if (refreshTasks.length > 0) {
    await Promise.all(refreshTasks);
  }
  if (playbackFrame) {
    renderPlaybackStepFrame();
  } else {
    renderAll();
  }
  if (!options.silentLog) {
    logLine(`棋譜操作：${kind}`);
  }
  return changed;
}

async function addTerminalResult(resultText) {
  if (!sessionId) return;
  stopHistoryPlayback({ silent: true });
  const result = String(resultText || "").trim();
  if (!localIsTerminalResultText(result)) {
    throw new Error("終局結果は詰み/逃れ/ステイルメイト/千日手のみ入力できます");
  }
  const env = await currentEngine().historyAddTerminal(sessionId, revision, result);
  applyStateEnvelope(env);
  selected = null;
  await refreshLegal();
  await refreshHistory();
  renderAll();
  logLine(`終局入力：${result}`);
}

function closeIoDialog() {
  if (ioBusyCount > 0) return;
  resetIoDragState();
  if (ui.ioDialog?.open) ui.ioDialog.close();
}

function openIoDialog() {
  if (!ui.ioDialog) return;
  if (ioBusyCount <= 0) {
    if (ui.ioText) ui.ioText.value = "";
    if (ui.ioFileInput) ui.ioFileInput.value = "";
    stopIoProgressPulse();
    if (ui.ioBusy) {
      ui.ioBusy.hidden = true;
      ui.ioBusy.textContent = "読込中...";
    }
    if (ui.ioProgress) {
      ui.ioProgress.hidden = true;
      ui.ioProgress.value = 0;
    }
    if (ui.ioProgressText) {
      ui.ioProgressText.hidden = true;
      ui.ioProgressText.textContent = "0%";
    }
  }
  resetIoDragState();
  hideIoClipboardNotice();
  if (!ui.ioDialog.open) ui.ioDialog.showModal();
}

function ioEventHasFiles(e) {
  const types = e?.dataTransfer?.types;
  if (!types) return false;
  if (typeof types.includes === "function") return types.includes("Files");
  return Array.from(types).includes("Files");
}

function setIoDragActive(active) {
  if (!ui.ioText) return;
  ui.ioText.classList.toggle("drag-active", Boolean(active));
}

function resetIoDragState() {
  ioDragDepth = 0;
  setIoDragActive(false);
}

function hideIoClipboardNotice() {
  if (ioClipboardNoticeTimer) {
    clearTimeout(ioClipboardNoticeTimer);
    ioClipboardNoticeTimer = null;
  }
  if (!ui.ioClipboardNotice) return;
  ui.ioClipboardNotice.hidden = true;
  ui.ioClipboardNotice.textContent = "";
  ui.ioClipboardNotice.classList.remove("error");
}

function showIoClipboardNotice(message, isError = false, autoHideMs = 3200) {
  if (!ui.ioClipboardNotice) {
    logLine(message, isError);
    return;
  }
  if (ioClipboardNoticeTimer) {
    clearTimeout(ioClipboardNoticeTimer);
    ioClipboardNoticeTimer = null;
  }
  ui.ioClipboardNotice.hidden = false;
  ui.ioClipboardNotice.textContent = String(message || "");
  ui.ioClipboardNotice.classList.toggle("error", Boolean(isError));
  if (Number.isFinite(autoHideMs) && autoHideMs > 0) {
    ioClipboardNoticeTimer = setTimeout(() => {
      hideIoClipboardNotice();
    }, autoHideMs);
  }
}

function stopIoProgressPulse() {
  if (ioProgressPulseTimer) {
    clearInterval(ioProgressPulseTimer);
    ioProgressPulseTimer = null;
  }
}

function setIoLoadProgressHook(fn) {
  ioLoadProgressHook = typeof fn === "function" ? fn : null;
}

function reportIoLoadProgress(stage, payload = null) {
  const hook = ioLoadProgressHook;
  if (typeof hook !== "function") return;
  try {
    hook(String(stage || ""), payload && typeof payload === "object" ? payload : {});
  } catch (_e) {
    // Ignore progress callback errors.
  }
}

function setIoProgress(percent, text = "") {
  const p = Math.max(0, Math.min(100, Number(percent) || 0));
  if (ui.ioProgress) {
    ui.ioProgress.hidden = false;
    ui.ioProgress.value = p;
  }
  if (ui.ioProgressText) {
    ui.ioProgressText.hidden = false;
    ui.ioProgressText.textContent = text || `${Math.round(p)}%`;
  }
}

function startIoProgressPulse(startPercent = 20, maxPercent = 95, label = "読込中...") {
  stopIoProgressPulse();
  let current = Math.max(0, Math.min(100, Number(startPercent) || 0));
  const cap = Math.max(current, Math.min(99, Number(maxPercent) || 95));
  setIoProgress(current, `${label} ${Math.round(current)}%`);
  ioProgressPulseTimer = setInterval(() => {
    if (current >= cap) return;
    current = Math.min(cap, current + Math.max(1, Math.ceil((cap - current) / 7)));
    setIoProgress(current, `${label} ${Math.round(current)}%`);
  }, 180);
}

async function localYieldToUiOnce() {
  await new Promise((resolve) => {
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(() => resolve());
    } else {
      setTimeout(resolve, 0);
    }
  });
}

function countOccurrences(text, needle) {
  if (!text || !needle) return 0;
  let idx = 0;
  let count = 0;
  while (true) {
    const found = text.indexOf(needle, idx);
    if (found < 0) break;
    count += 1;
    idx = found + needle.length;
  }
  return count;
}

function scoreDecodedText(text, filename = "") {
  const s = String(text || "");
  const lowerName = String(filename || "").toLowerCase();
  let score = 0;
  if (lowerName.endsWith(".kif") || lowerName.endsWith(".kifu")) score += 2;
  score -= countOccurrences(s, "\uFFFD") * 12;
  if (s.includes("手合割")) score += 4;
  if (s.includes("先手の持駒")) score += 4;
  if (s.includes("後手の持駒")) score += 4;
  if (s.includes("手数----指手")) score += 4;
  if (s.includes("まで") && s.includes("手")) score += 2;
  if (s.includes("詰み")) score += 2;
  if (s.includes("逃れ")) score += 2;
  if (s.includes("千日手")) score += 2;
  return score;
}

async function decodeArrayBufferToText(buffer, filename = "", onProgress = null) {
  const bytes = new Uint8Array(buffer || []);
  const lowerName = String(filename || "").toLowerCase();
  const preferred =
    lowerName.endsWith(".kif") || lowerName.endsWith(".kifu") ? ["shift_jis", "utf-8"] : ["utf-8", "shift_jis"];
  const tried = new Set();
  let bestText = "";
  let bestScore = Number.NEGATIVE_INFINITY;

  const decodeByEncoding = async (encoding) => {
    if (bytes.length <= 0) return "";
    const decoder = new TextDecoder(encoding, { fatal: false });
    const chunks = [];
    const chunkSize = 1024 * 1024; // 1MB
    let processed = 0;
    let chunkIndex = 0;
    while (processed < bytes.length) {
      const end = Math.min(bytes.length, processed + chunkSize);
      chunks.push(decoder.decode(bytes.subarray(processed, end), { stream: end < bytes.length }));
      processed = end;
      chunkIndex += 1;
      if (typeof onProgress === "function") {
        onProgress(processed, bytes.length, "decode-progress");
      }
      if ((chunkIndex & 7) === 0) {
        await localYieldToUiOnce();
      }
    }
    return chunks.join("");
  };

  for (const enc of preferred) {
    if (tried.has(enc)) continue;
    tried.add(enc);
    try {
      const text = await decodeByEncoding(enc);
      const score = scoreDecodedText(text, filename);
      if (score > bestScore) {
        bestScore = score;
        bestText = text;
      }
    } catch (_e) {
      // Unsupported encoding or decode failure.
    }
  }

  if (bestScore === Number.NEGATIVE_INFINITY) {
    const fallback = new TextDecoder("utf-8", { fatal: false });
    return fallback.decode(bytes);
  }
  return bestText;
}

function readFileTextWithProgress(file, onProgress) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error(`ファイル読込に失敗しました：${file?.name || ""}`));
    reader.onabort = () => reject(new Error(`ファイル読込が中断されました：${file?.name || ""}`));
    reader.onprogress = (e) => {
      if (!e.lengthComputable || typeof onProgress !== "function") return;
      onProgress(e.loaded, e.total, "read");
    };
    reader.onload = async () => {
      try {
        if (reader.result instanceof ArrayBuffer) {
          if (typeof onProgress === "function") {
            const total = Math.max(0, Number(reader.result.byteLength || 0));
            onProgress(total, total, "decode-start");
          }
          const decoded = await decodeArrayBufferToText(reader.result, file?.name || "", onProgress);
          if (typeof onProgress === "function") {
            const total = Math.max(0, Number(reader.result.byteLength || 0));
            onProgress(total, total, "decode-done");
          }
          resolve(decoded);
        } else {
          resolve(String(reader.result || ""));
        }
      } catch (e) {
        reject(e instanceof Error ? e : new Error(String(e)));
      }
    };
    reader.readAsArrayBuffer(file);
  });
}

async function writeTextToClipboard(text) {
  const value = String(text ?? "");

  if (navigator?.clipboard?.writeText && window?.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const ta = document.createElement("textarea");
  ta.value = value;
  ta.setAttribute("readonly", "true");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  ta.style.top = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  let copied = false;
  try {
    copied = Boolean(document.execCommand && document.execCommand("copy"));
  } finally {
    ta.remove();
  }
  if (!copied) {
    throw new Error("クリップボード出力に失敗しました");
  }
}

function setIoBusy(active, message = "読込中...") {
  if (active) {
    ioBusyCount += 1;
    if (ui.ioBusy) ui.ioBusy.textContent = message;
  } else {
    ioBusyCount = Math.max(0, ioBusyCount - 1);
  }

  const busy = ioBusyCount > 0;
  if (ui.ioBusy) {
    ui.ioBusy.hidden = !busy;
    if (!busy) ui.ioBusy.textContent = "読込中...";
  }
  if (!busy) stopIoProgressPulse();
  if (ui.ioProgress) {
    ui.ioProgress.hidden = !busy;
    if (!busy) ui.ioProgress.value = 0;
  }
  if (ui.ioProgressText) {
    ui.ioProgressText.hidden = !busy;
    if (!busy) ui.ioProgressText.textContent = "0%";
  }
  if (ui.ioDialog) ui.ioDialog.classList.toggle("busy", busy);

  const controls = [
    ui.ioText,
    ui.ioFileInput,
    ui.btnLoadClipboard,
    ui.btnLoadClipboardKifuOnly,
    ui.btnExportSfen,
    ui.btnExportKifu,
    ui.btnIoUpload,
    ui.btnIoUploadKifuOnly,
    ui.btnIoDownload,
    ui.btnIoDialogClose,
  ];
  for (const el of controls) {
    if (el) el.disabled = busy;
  }
}

async function withIoBusy(message, fn) {
  setIoBusy(true, message);
  try {
    return await fn();
  } finally {
    setIoBusy(false);
  }
}

async function loadTextFromFileInput(file, options = {}) {
  if (!file) return;
  const fileMode = String(options?.mode || "auto");
  await withIoBusy(`読込中... ${file.name}`, async () => {
    let maxUiPercent = 1;
    let stageProgressUsed = false;
    const setMonotonicProgress = (percent, text) => {
      const next = Math.max(maxUiPercent, Math.round(Number(percent) || 0));
      maxUiPercent = next;
      setIoProgress(next, text || `${next}%`);
    };
    const onLoadStageProgress = (stage, payload = {}) => {
      if (!stageProgressUsed) {
        stageProgressUsed = true;
        stopIoProgressPulse();
      }
      if (stage === "kifu-parse-start") {
        setMonotonicProgress(76, "棋譜解析中 76%");
        return;
      }
      if (stage === "kifu-parse-done") {
        setMonotonicProgress(78, "棋譜解析完了 78%");
        return;
      }
      if (stage === "kifu-mainline") {
        const done = Math.max(0, Number(payload.done || 0));
        const total = Math.max(0, Number(payload.total || 0));
        const ratio = total > 0 ? Math.max(0, Math.min(1, done / total)) : 1;
        const pct = 78 + Math.round(ratio * 12);
        const suffix = total > 0 ? ` (${done}/${total})` : "";
        setMonotonicProgress(pct, `手順反映中 ${pct}%${suffix}`);
        return;
      }
      if (stage === "kifu-variation") {
        const done = Math.max(0, Number(payload.done || 0));
        const total = Math.max(0, Number(payload.total || 0));
        const ratio = total > 0 ? Math.max(0, Math.min(1, done / total)) : 1;
        const pct = 90 + Math.round(ratio * 6);
        const suffix = total > 0 ? ` (${done}/${total})` : "";
        setMonotonicProgress(pct, `変化反映中 ${pct}%${suffix}`);
        return;
      }
      if (stage === "kifu-finalize") {
        setMonotonicProgress(97, "最終処理中 97%");
      }
    };

    setMonotonicProgress(1, "ファイル読込 1%");
    startIoProgressPulse(2, 68, "ファイル読込");
    const text = await readFileTextWithProgress(file, (loaded, total, phase = "read") => {
      if (phase === "decode-start") {
        startIoProgressPulse(Math.max(maxUiPercent, 70), 74, "文字コード変換中");
        setMonotonicProgress(70, "文字コード変換中 70%");
        return;
      }
      if (phase === "decode-done") {
        stopIoProgressPulse();
        setMonotonicProgress(74, "形式判定中 74%");
        return;
      }
      const ratio = total > 0 ? loaded / total : 0;
      const percent = Math.max(1, Math.min(68, Math.round(ratio * 68)));
      const filePercent = Math.max(1, Math.min(100, Math.round(ratio * 100)));
      setMonotonicProgress(percent, `ファイル読込 ${filePercent}%`);
    });
    stopIoProgressPulse();
    if (ui.ioText) ui.ioText.value = text;
    logLine(`ファイルを読み込みました：${file.name}`);
    setMonotonicProgress(74, "形式判定中 74%");
    await localYieldToUiOnce();
    startIoProgressPulse(Math.max(maxUiPercent, 76), 95, "局面反映中");
    setIoLoadProgressHook(onLoadStageProgress);
    let kind = "kifu";
    try {
      if (fileMode === "kifu_only") {
        await loadKifuText(text, { movesOnly: true });
        kind = "kifu_only";
      } else {
        kind = await loadAutoFromText(text, file.name);
      }
    } finally {
      setIoLoadProgressHook(null);
    }
    stopIoProgressPulse();
    setMonotonicProgress(100, "読込完了 100%");
    if (kind === "kifu_only") {
      logLine("棋譜のみ読込を実行しました");
    } else {
      logLine(`自動判定：${ioAutoKindLabel(kind)}`);
    }
  });
  closeIoDialog();
}

function buildDownloadFileName() {
  const now = new Date();
  const pad2 = (n) => String(n).padStart(2, "0");
  const stamp =
    `${now.getFullYear()}${pad2(now.getMonth() + 1)}${pad2(now.getDate())}` +
    `_${pad2(now.getHours())}${pad2(now.getMinutes())}${pad2(now.getSeconds())}`;
  return `f-tsume_${stamp}.txt`;
}

function reverseComputeNextNodeSeq(tree) {
  const nodes = Array.isArray(tree?.nodes) ? tree.nodes : [];
  let maxParsed = 0;
  for (const node of nodes) {
    const id = String(node?.node_id || "");
    const m = /^r_(\d+)$/.exec(id);
    if (!m) continue;
    const n = Number.parseInt(m[1], 10);
    if (Number.isFinite(n) && n > maxParsed) maxParsed = n;
  }
  return Math.max(maxParsed + 1, nodes.length + 1);
}

function buildReverseKifuExportText() {
  const tree = reverseEnsureHistoryTreeBase();
  if (!tree || !Array.isArray(tree.nodes) || tree.nodes.length <= 0) {
    throw new Error("逆算棋譜がありません");
  }
  const nodes = tree.nodes.map((node) => ({
    forward_ply: (() => {
      const n = Number.parseInt(node?.forward_ply, 10);
      return Number.isFinite(n) && n >= 0 ? n : null;
    })(),
    node_id: String(node?.node_id || ""),
    parent_id: node?.parent_id === null || node?.parent_id === undefined ? null : String(node.parent_id),
    ply: Math.max(0, Number.parseInt(node?.ply, 10) || 0),
    label: String(node?.label || ""),
    forward_move: reverseNormalizeMoveForApply(node?.forward_move),
    state: reverseNormalizeSnapshotState(node?.state, state),
    children: Array.isArray(node?.children) ? node.children.map((id) => String(id || "")).filter((id) => id) : [],
  }));
  const payload = {
    kind: REVERSE_IO_KIND,
    version: 1,
    exported_at: new Date().toISOString(),
    tree: {
      start_turn: reverseNormalizeStartTurn(tree.start_turn, state?.turn),
      root_forward_ply: (() => {
        const n = Number.parseInt(tree.root_forward_ply, 10);
        if (Number.isFinite(n) && n >= 0) return n;
        const rootNode = nodes.find((n2) => String(n2?.node_id || "") === String(tree.root_id || "r_root"));
        const rn = Number.parseInt(rootNode?.forward_ply, 10);
        return Number.isFinite(rn) && rn >= 0 ? rn : 0;
      })(),
      root_id: String(tree.root_id || "r_root"),
      current_id: String(tree.current_id || tree.root_id || "r_root"),
      nodes,
    },
  };
  return `${REVERSE_IO_HEADER}\n${JSON.stringify(payload, null, 2)}\n`;
}

function buildReverseKifuTextLikeNormal() {
  const tree = reverseEnsureHistoryTreeBase();
  if (!tree || !Array.isArray(tree.nodes) || tree.nodes.length <= 0) {
    throw new Error("逆算棋譜がありません");
  }

  const nodesById = new Map((tree.nodes || []).map((n) => [String(n?.node_id || ""), n]));
  const rootId = String(tree.root_id || "r_root");
  const rootNode = nodesById.get(rootId) || null;
  const rootStateRaw = rootNode?.state && typeof rootNode.state === "object" ? rootNode.state : state;
  const rootState = reverseNormalizeSnapshotState(rootStateRaw, state);

  const idMap = new Map();
  const outNodes = [];
  const orderedReverseNodes = Array.isArray(tree.nodes) ? tree.nodes : [];
  for (let i = 0; i < orderedReverseNodes.length; i += 1) {
    const src = orderedReverseNodes[i] || {};
    const srcId = String(src?.node_id || "");
    if (!srcId || idMap.has(srcId)) continue;
    const dstId = `n_r${String(i + 1).padStart(6, "0")}`;
    idMap.set(srcId, dstId);
    outNodes.push({
      node_id: dstId,
      parent_id: null,
      ply: Math.max(0, Number.parseInt(src?.ply, 10) || 0),
      move_str: srcId === rootId ? "" : String(src?.label || ""),
      turn: Number(src?.state?.turn) === 1 ? 1 : 0,
      last_move_info: null,
      children: [],
    });
  }
  if (!idMap.has(rootId)) {
    throw new Error("逆算棋譜のルートノードが不正です");
  }
  const outById = new Map(outNodes.map((n) => [n.node_id, n]));

  for (const src of orderedReverseNodes) {
    const srcId = String(src?.node_id || "");
    const dstId = idMap.get(srcId);
    if (!dstId) continue;
    const dst = outById.get(dstId);
    if (!dst) continue;
    const srcParentId =
      src?.parent_id === null || src?.parent_id === undefined ? null : String(src.parent_id || "");
    dst.parent_id = srcParentId && idMap.has(srcParentId) ? idMap.get(srcParentId) : null;
    const srcChildren = localUniqueChildIds(src?.children);
    dst.children = srcChildren
      .map((cid) => idMap.get(String(cid || "")))
      .filter((cid) => typeof cid === "string" && cid.length > 0);
  }

  const rootOutId = idMap.get(rootId);
  const rootOutNode = outById.get(rootOutId);
  if (rootOutNode) {
    rootOutNode.parent_id = null;
    rootOutNode.snapshot_pieces = cloneJson(rootState?.board?.pieces || []);
    rootOutNode.snapshot_hands = {
      "0": cloneJson(rootState?.hands?.["0"] || []),
      "1": cloneJson(rootState?.hands?.["1"] || []),
    };
    rootOutNode.snapshot_turn = Number(rootState?.turn) === 1 ? 1 : 0;
  }

  const currentOutId = idMap.get(String(tree.current_id || rootId)) || rootOutId;
  const exportCtx = {
    state: {
      ...cloneJson(rootState),
      rule_name: localRuleNameFromRules(rootState?.rules || {}, { typeAttrs: rootState?.type_attrs || {} }),
    },
    // 逆算モードでは表示手番を反転して扱うため、(受先) 判定も反転する。
    initial_turn_override: Number(rootState?.turn) === 1 ? 0 : 1,
    history: {
      root_id: rootOutId,
      current_id: currentOutId,
      nodes: outNodes,
    },
    typeAttrs:
      rootState?.type_attrs && typeof rootState.type_attrs === "object"
        ? cloneJson(rootState.type_attrs)
        : {},
  };
  const text = localBuildKifuText(exportCtx);
  const lines = String(text || "").replace(/\r/g, "").split("\n");
  if (lines.length >= 2 && lines[1] !== REVERSE_PLAIN_MARKER_LINE) {
    lines.splice(1, 0, REVERSE_PLAIN_MARKER_LINE);
  }
  return `${lines.join("\n").replace(/\n+$/, "")}\n`;
}

function looksLikeReverseKifuText(text) {
  const raw = String(text || "");
  const trimmed = raw.trimStart();
  if (!trimmed) return false;
  if (raw.includes(REVERSE_IO_EMBED_PREFIX)) return true;
  if (trimmed.startsWith(REVERSE_IO_HEADER)) return true;
  if (raw.includes(REVERSE_IO_HEADER)) return true;
  if (!trimmed.startsWith("{")) return false;
  return trimmed.includes(REVERSE_IO_KIND) && trimmed.includes('"kind"');
}

function utf8ToBase64(text) {
  const src = String(text ?? "");
  if (typeof TextEncoder !== "undefined" && typeof btoa === "function") {
    const bytes = new TextEncoder().encode(src);
    let bin = "";
    for (let i = 0; i < bytes.length; i += 1) {
      bin += String.fromCharCode(bytes[i]);
    }
    return btoa(bin);
  }
  if (typeof Buffer !== "undefined") {
    return Buffer.from(src, "utf8").toString("base64");
  }
  if (typeof btoa === "function") {
    return btoa(unescape(encodeURIComponent(src)));
  }
  throw new Error("base64 encode is not supported");
}

function base64ToUtf8(base64) {
  const src = String(base64 || "").trim();
  if (!src) return "";
  if (typeof atob === "function") {
    const bin = atob(src);
    if (typeof TextDecoder !== "undefined") {
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i += 1) {
        bytes[i] = bin.charCodeAt(i);
      }
      return new TextDecoder().decode(bytes);
    }
    return decodeURIComponent(escape(bin));
  }
  if (typeof Buffer !== "undefined") {
    return Buffer.from(src, "base64").toString("utf8");
  }
  throw new Error("base64 decode is not supported");
}

function stripCodeFence(text) {
  const src = String(text || "").trim();
  if (!src.startsWith("```")) return src;
  const match = /^```[^\n]*\n([\s\S]*?)\n```$/m.exec(src);
  if (!match) return src;
  return String(match[1] || "").trim();
}

function extractReverseKifuJsonText(text) {
  let src = String(text || "");
  const embedIdx = src.indexOf(REVERSE_IO_EMBED_PREFIX);
  if (embedIdx >= 0) {
    const line = src
      .slice(embedIdx + REVERSE_IO_EMBED_PREFIX.length)
      .split(/\r?\n/, 1)[0]
      .trim();
    if (!line) {
      throw new Error("逆算埋め込みデータが空です");
    }
    src = base64ToUtf8(line);
  }
  src = src.trim();
  const headerIdx = src.indexOf(REVERSE_IO_HEADER);
  if (headerIdx >= 0) {
    src = src.slice(headerIdx + REVERSE_IO_HEADER.length).trim();
  }
  src = stripCodeFence(src);
  const braceIdx = src.indexOf("{");
  if (braceIdx > 0) {
    src = src.slice(braceIdx).trim();
  }
  return src;
}

function reverseNormalizeLabelForCompare(label) {
  return String(label || "")
    .replace(/\s+/g, "")
    .trim();
}

function reverseExtractMoveLabelsFromKifuLines(lines) {
  const out = [];
  const all = Array.isArray(lines) ? lines : [];
  for (const raw of all) {
    let s = String(raw || "").trim();
    if (!s) continue;
    if (s === REVERSE_PLAIN_MARKER_LINE) continue;
    if (/^変化[：:]/.test(s)) continue;
    if (/^V\d+:/.test(s)) continue;
    if (/^まで\s+/.test(s)) continue;
    if (/^手数[-]/.test(s)) continue;
    s = s.replace(/^\d+[:：]\s*/, "");
    while (s.length > 0) {
      s = s.trimStart();
      if (!s) break;
      // 例: 26 金(+15 歩) [M:...]
      let m = s.match(
        /^((?:(?:v)?(?:▲|△)\s*)?[0-9０-９]{2}\s+[^\s]+?\(\+\s*[0-9０-９]{2}\s+[^\s\)]+\)\s*(?:\[[^\]]+\])?)/
      );
      if (!m) {
        // 例: 15歩打 / 16金 / 16金[M:...] / v△15歩打
        m = s.match(/^((?:(?:v)?(?:▲|△)\s*)?[0-9０-９]{2}[^\s]+(?:\s*\[[^\]]+\])?)/);
      }
      if (!m) break;
      const token = String(m[1] || "")
        .replace(/\s+/g, " ")
        .trim();
      if (token) out.push(token);
      s = s.slice(m[1].length);
    }
  }
  return out;
}

function reverseFindCandidateBySavedLabel(cands, savedLabel) {
  const list = Array.isArray(cands) ? cands : [];
  const rawSaved = String(savedLabel || "").trim();
  if (!rawSaved) return null;
  const stripOwnerPrefix = (s) => String(s || "").replace(/^(?:v)?(?:▲|△)\s*/, "");
  const savedCore = rawSaved.replace(/\s*\[[^\]]+\]\s*$/, "").trim();
  const savedCoreNoPrefix = stripOwnerPrefix(savedCore).trim();
  const key = reverseNormalizeLabelForCompare(savedCore);
  const keyNoPrefix = reverseNormalizeLabelForCompare(savedCoreNoPrefix);
  if (!key && !keyNoPrefix) return null;
  const sameSavedCore = (text) => {
    const raw = String(text || "");
    const n1 = reverseNormalizeLabelForCompare(raw);
    if (n1 && (n1 === key || n1 === keyNoPrefix)) return true;
    const n2 = reverseNormalizeLabelForCompare(stripOwnerPrefix(raw));
    return Boolean(n2 && n2 === keyNoPrefix);
  };
  const byTrail = list.filter((c) => sameSavedCore(c?.trail_label || ""));
  if (byTrail.length > 0) return byTrail[0];
  const byLabel = list.filter((c) => sameSavedCore(c?.label || ""));
  if (byLabel.length > 0) return byLabel[0];
  // フォールバック:
  // 読込元表記の揺れ(空白、▲△、捕獲駒名の差異)を許容して
  // 「同じ逆算符号」(例: 26金)で解決する。
  const savedBaseKey = reverseNormalizeLabelForCompare(stripOwnerPrefix(reverseCandidateBaseLabel({ label: savedCore })));
  if (!savedBaseKey) return null;
  const byBase = list.filter(
    (c) => reverseNormalizeLabelForCompare(stripOwnerPrefix(reverseCandidateBaseLabel(c))) === savedBaseKey
  );
  if (byBase.length <= 0) return null;
  if (byBase.length === 1) return byBase[0];

  const savedHasCapture = /\(\+/.test(savedCore);
  if (!savedHasCapture) {
    const noCapture = byBase.find((c) => !String(c?.captured_name_hint || "").trim());
    return noCapture || byBase[0];
  }

  const capMatch = savedCore.match(/\(\+\s*([0-9０-９]{2})\s*([^)]+?)\s*\)$/);
  if (!capMatch) return byBase[0];
  const capPosKey = reverseNormalizeLabelForCompare(capMatch[1] || "");
  if (!capPosKey) return byBase[0];

  const byCapPos = byBase.filter((c) => {
    const m = String(c?.label || "").match(/\(\+\s*([0-9０-９]{2})\s*([^)]+?)\s*\)$/);
    if (!m) return false;
    return reverseNormalizeLabelForCompare(m[1] || "") === capPosKey;
  });
  if (byCapPos.length > 0) return byCapPos[0];

  const anyCapture = byBase.find((c) => String(c?.captured_name_hint || "").trim());
  return anyCapture || byBase[0];
}

function buildRulesFromParsedTitleRules(titleRules) {
  const rules = localDefaultRulesObject();
  const src = titleRules && typeof titleRules === "object" ? titleRules : {};
  for (const k of Object.keys(rules)) {
    if (!localHasOwn(src, k)) continue;
    rules[k] = cloneJson(src[k]);
  }
  return rules;
}

function buildRootStateFromParsedKifu(parsed) {
  const pieces = Array.isArray(parsed?.pieces)
    ? parsed.pieces.map((p) => ({
        x: Number(p?.x),
        y: Number(p?.y),
        name: String(p?.name || ""),
        owner: Number(p?.owner) === 1 ? 1 : Number(p?.owner) === -1 || Number(p?.owner) === 2 ? -1 : 0,
        attrs: localCloneRawPieceAttrs(p?.attrs),
      }))
    : [];
  const hands = {
    "0": Array.isArray(parsed?.hands?.["0"]) ? cloneJson(parsed.hands["0"]) : [],
    "1": Array.isArray(parsed?.hands?.["1"]) ? cloneJson(parsed.hands["1"]) : [],
  };
  const rules = buildRulesFromParsedTitleRules(parsed?.titleRules || {});
  return {
    mode: "play",
    turn: Number(parsed?.turn) === 1 ? 1 : 0,
    board: { width: 9, height: 9, pieces },
    hands,
    rules,
    type_attrs: parsed?.typeAttrs && typeof parsed.typeAttrs === "object" ? cloneJson(parsed.typeAttrs) : {},
  };
}

function looksLikeReverseKifuPlainText(text) {
  const raw = String(text || "");
  if (!raw.trim()) return false;
  if (raw.split(/\r?\n/).some((ln) => String(ln || "").trim() === REVERSE_PLAIN_MARKER_LINE)) return true;
  try {
    const parsed = localParseKifuText(raw, null, {
      typeAttrs: state?.type_attrs && typeof state.type_attrs === "object" ? state.type_attrs : {},
    });
    const split = localSplitKifuAndVariationLines(parsed?.moveLines || []);
    const labels = reverseExtractMoveLabelsFromKifuLines(split.mainLines || []);
    if (labels.length <= 0) return false;
    return labels.some(
      (lb) =>
        /^\d{2}\s+/.test(String(lb)) || // 26 金(+15 歩) 形式
        /\[[MDN]:/.test(String(lb)) || // 一意化トークン
        /\(\+\d{2}\s+/.test(String(lb)) // 駒取表記
    );
  } catch (_e) {
    return false;
  }
}

async function loadReverseKifuPlainText(text) {
  if (!sessionId) return;
  stopHistoryPlayback({ silent: true });
  clearPendingRightAction();
  selected = null;
  setEditSelection(null);

  let meta = null;
  try {
    meta = await loadLocalMetaFromStatic();
  } catch (_e) {
    meta = null;
  }
  const parsed = localParseKifuText(text, meta, {
    typeAttrs: state?.type_attrs && typeof state.type_attrs === "object" ? state.type_attrs : {},
  });
  const split = localSplitKifuAndVariationLines(parsed?.moveLines || []);
  const labels = reverseExtractMoveLabelsFromKifuLines(split.mainLines || []);
  const rootState = buildRootStateFromParsedKifu(parsed);
  // 平文逆算棋譜は「最終局面 + 逆算手順」なので、root の手番は
  // 初手番(parsed.turn)ではなく、手数ぶん進めた側になる。
  {
    const startTurn = Number(parsed?.turn) === 1 ? 1 : 0;
    const plyCount = Math.max(0, labels.length);
    rootState.turn = (startTurn + (plyCount % 2)) % 2;
  }

  if (state?.mode !== "play") {
    const envMode = await currentEngine().patchMode(sessionId, revision, "play");
    applyStateEnvelope(envMode);
  }

  const rootId = "r_root";
  const rootForwardPly = labels.length;
  reverseHistoryTree = {
    root_id: rootId,
    current_id: rootId,
    start_turn: reverseNormalizeStartTurn(rootState?.turn, rootState?.turn),
    root_forward_ply: rootForwardPly,
    nodes: [
      {
        node_id: rootId,
        parent_id: null,
        ply: 0,
        forward_ply: rootForwardPly,
        label: "開始局面",
        state: cloneJson(rootState),
        children: [],
      },
    ],
  };
  reverseHistoryNodeSeq = 1;
  reverseSelectedNodeId = rootId;
  playSubMode = "reverse";
  reverseMoves = [];
  reverseStatusText = "-";
  reverseCacheKey = "";
  reverseResultCache.clear();
  reversePredecessorLegalGlobalCache.clear();

  await loadAnalysisSnapshotIntoSession(rootState, { preserveReverseTrail: true });

  for (let i = 0; i < labels.length; i += 1) {
    const saved = labels[i];
    reverseComputeOnePlyCandidates();
    const cand = reverseFindCandidateBySavedLabel(reverseMoves, saved);
    if (cand) {
      await applyReverseCandidate(cand);
      continue;
    }

    // 読込時フォールバック:
    // 逆算候補生成の「王手放置除外」等が強く効き過ぎる場合のみ、
    // 復元中に限って緩和して再探索する。
    reverseComputeOnePlyCandidates({ relaxPredecessorCheckPolicy: true });
    const relaxed = reverseFindCandidateBySavedLabel(reverseMoves, saved);
    if (relaxed) {
      await applyReverseCandidate(relaxed);
      continue;
    }

    const sample = (reverseMoves || [])
      .slice(0, 12)
      .map((m) => String(m?.trail_label || m?.label || ""))
      .filter((s) => s.length > 0)
      .join(" | ");
    logLine(
      `逆算復元失敗デバッグ: ply=${i + 1}, saved=${saved}, turn=${Number(state?.turn || 0)}, 候補数=${reverseMoves.length}, 先頭候補=${sample || "-"}`,
      true
    );
    throw new Error(`逆算手を復元できません: ${saved} (${i + 1}手目)`);
  }

  if (reverseHistoryTree) {
    reverseHistoryTree.current_id = rootId;
  }
  reverseSelectedNodeId = rootId;
  await loadAnalysisSnapshotIntoSession(rootState, { preserveReverseTrail: true });
  await refreshLegal();
  await refreshHistory();
  renderAll();
  logLine("逆算棋譜を読込みました");
}

function reverseNormalizeSnapshotState(rawState, fallbackState = null) {
  const src = rawState && typeof rawState === "object" ? cloneJson(rawState) : {};
  const fallback =
    fallbackState && typeof fallbackState === "object" ? fallbackState : state && typeof state === "object" ? state : {};

  const boardSrc =
    src.board && typeof src.board === "object"
      ? src.board
      : fallback.board && typeof fallback.board === "object"
        ? fallback.board
        : {};
  const rawPieces = Array.isArray(boardSrc.pieces) ? boardSrc.pieces : [];
  const pieces = [];
  for (const p of rawPieces) {
    const x = Number(p?.x);
    const y = Number(p?.y);
    if (!localInBoard(x, y)) continue;
    const name = String(p?.name || "");
    if (!name) continue;
    let owner = Number(p?.owner);
    if (owner === 2) owner = -1;
    if (owner !== 0 && owner !== 1 && owner !== -1) owner = 0;
    pieces.push({
      x,
      y,
      name,
      owner,
      attrs: localCloneRawPieceAttrs(p?.attrs),
    });
  }

  const handsSrc =
    src.hands && typeof src.hands === "object"
      ? src.hands
      : fallback.hands && typeof fallback.hands === "object"
        ? fallback.hands
        : {};
  const hands = { "0": [], "1": [] };
  for (const owner of [0, 1]) {
    const arr = Array.isArray(handsSrc[String(owner)]) ? handsSrc[String(owner)] : [];
    hands[String(owner)] = arr.map((v) => String(v || "")).filter((v) => v.length > 0);
  }

  const out = {
    mode: "play",
    turn: Number(src.turn) === 1 ? 1 : 0,
    board: { width: 9, height: 9, pieces },
    hands,
  };
  const rules =
    src.rules && typeof src.rules === "object"
      ? cloneJson(src.rules)
      : fallback.rules && typeof fallback.rules === "object"
        ? cloneJson(fallback.rules)
        : null;
  if (rules) out.rules = rules;
  const typeAttrs =
    src.type_attrs && typeof src.type_attrs === "object"
      ? cloneJson(src.type_attrs)
      : fallback.type_attrs && typeof fallback.type_attrs === "object"
        ? cloneJson(fallback.type_attrs)
        : null;
  if (typeAttrs) out.type_attrs = typeAttrs;
  return out;
}

function normalizeReverseHistoryTreePayload(payload) {
  const treeRaw = payload?.tree && typeof payload.tree === "object" ? payload.tree : null;
  if (!treeRaw) {
    throw new Error("逆算棋譜の tree がありません");
  }
  const rawNodes = Array.isArray(treeRaw.nodes) ? treeRaw.nodes : [];
  if (rawNodes.length <= 0) {
    throw new Error("逆算棋譜の nodes が空です");
  }

  const nodeMap = new Map();
  const rawById = new Map();
  const order = [];
  for (const rawNode of rawNodes) {
    const id = String(rawNode?.node_id || "").trim();
    if (!id || nodeMap.has(id)) continue;
    const forwardPlyRaw = Number.parseInt(rawNode?.forward_ply, 10);
    const node = {
      node_id: id,
      parent_id: null,
      ply: Math.max(0, Number.parseInt(rawNode?.ply, 10) || 0),
      forward_ply: Number.isFinite(forwardPlyRaw) && forwardPlyRaw >= 0 ? forwardPlyRaw : null,
      label: String(rawNode?.label || ""),
      forward_move: reverseNormalizeMoveForApply(rawNode?.forward_move),
      state: reverseNormalizeSnapshotState(rawNode?.state, state),
      children: [],
    };
    nodeMap.set(id, node);
    rawById.set(id, rawNode);
    order.push(id);
  }
  if (order.length <= 0) {
    throw new Error("逆算棋譜のノードが不正です");
  }

  let rootId = String(treeRaw.root_id || "").trim();
  if (!nodeMap.has(rootId)) {
    const fallbackRoot = order.find((id) => {
      const rawNode = rawById.get(id);
      return rawNode?.parent_id === null || rawNode?.parent_id === undefined || String(rawNode.parent_id).trim() === "";
    });
    rootId = fallbackRoot || order[0];
  }

  for (const id of order) {
    const rawNode = rawById.get(id);
    let parentId =
      rawNode?.parent_id === null || rawNode?.parent_id === undefined ? null : String(rawNode.parent_id).trim();
    if (!parentId || !nodeMap.has(parentId) || id === rootId || parentId === id) {
      parentId = id === rootId ? null : rootId;
    }
    nodeMap.get(id).parent_id = parentId;
  }
  nodeMap.get(rootId).parent_id = null;

  const childOrderByParent = new Map();
  const pushChild = (parentId, childId) => {
    if (!parentId || !childId || parentId === childId) return;
    if (!nodeMap.has(parentId) || !nodeMap.has(childId)) return;
    let arr = childOrderByParent.get(parentId);
    if (!arr) {
      arr = [];
      childOrderByParent.set(parentId, arr);
    }
    if (!arr.includes(childId)) arr.push(childId);
  };

  for (const id of order) {
    const rawNode = rawById.get(id);
    const rawChildren = Array.isArray(rawNode?.children) ? rawNode.children : [];
    for (const rawChildId of rawChildren) {
      const childId = String(rawChildId || "").trim();
      if (!childId || !nodeMap.has(childId)) continue;
      if (nodeMap.get(childId).parent_id !== id) continue;
      pushChild(id, childId);
    }
  }
  for (const id of order) {
    const parentId = nodeMap.get(id).parent_id;
    if (parentId) pushChild(parentId, id);
  }
  for (const id of order) {
    nodeMap.get(id).children = childOrderByParent.get(id) || [];
  }

  const startTurnRaw = Number(treeRaw.start_turn);
  let startTurn = startTurnRaw === 0 || startTurnRaw === 1 ? startTurnRaw : null;
  if (startTurn === null) {
    startTurn = reverseNormalizeStartTurn(nodeMap.get(rootId)?.state?.turn, 0);
  }
  let rootForwardPly = null;
  const rootForwardPlyRaw = Number.parseInt(treeRaw.root_forward_ply, 10);
  if (Number.isFinite(rootForwardPlyRaw) && rootForwardPlyRaw >= 0) rootForwardPly = rootForwardPlyRaw;
  const rootNode = nodeMap.get(rootId);
  const rootNodeForwardRaw = Number.parseInt(rootNode?.forward_ply, 10);
  if (rootForwardPly === null && Number.isFinite(rootNodeForwardRaw) && rootNodeForwardRaw >= 0) {
    rootForwardPly = rootNodeForwardRaw;
  }
  if (rootForwardPly === null) {
    const ruleProblemPlyRaw = Number.parseInt(rootNode?.state?.rules?.problem_ply, 10);
    if (Number.isFinite(ruleProblemPlyRaw) && ruleProblemPlyRaw >= 0) {
      rootForwardPly = ruleProblemPlyRaw;
    }
  }
  if (rootForwardPly === null) rootForwardPly = 0;
  if (rootNode && !(Number.isFinite(rootNodeForwardRaw) && rootNodeForwardRaw >= 0)) {
    rootNode.forward_ply = rootForwardPly;
  }
  // 旧形式( forward_ply 未保存 )用に、親子から forward_ply を補完する。
  const bfs = [rootId];
  const bfsSeen = new Set();
  while (bfs.length > 0) {
    const id = bfs.shift();
    if (!id || bfsSeen.has(id)) continue;
    bfsSeen.add(id);
    const parent = nodeMap.get(id);
    if (!parent) continue;
    const parentFpRaw = Number.parseInt(parent?.forward_ply, 10);
    const parentFp = Number.isFinite(parentFpRaw) && parentFpRaw >= 0 ? parentFpRaw : null;
    const children = Array.isArray(parent.children) ? parent.children : [];
    for (const childId of children) {
      const child = nodeMap.get(childId);
      if (!child) continue;
      const childFpRaw = Number.parseInt(child?.forward_ply, 10);
      if (!(Number.isFinite(childFpRaw) && childFpRaw >= 0) && parentFp !== null) {
        child.forward_ply = Math.max(0, parentFp - 1);
      }
      bfs.push(childId);
    }
  }

  let currentId = String(treeRaw.current_id || "").trim();
  if (!nodeMap.has(currentId)) currentId = rootId;

  return {
    start_turn: startTurn,
    root_forward_ply: rootForwardPly,
    root_id: rootId,
    current_id: currentId,
    nodes: order.map((id) => nodeMap.get(id)),
  };
}

async function loadReverseKifuText(reverseText) {
  if (!sessionId) return;
  stopHistoryPlayback({ silent: true });
  clearPendingRightAction();
  selected = null;
  setEditSelection(null);

  const jsonText = extractReverseKifuJsonText(reverseText);
  if (!jsonText) throw new Error("逆算棋譜テキストが空です");

  let payload;
  try {
    payload = JSON.parse(jsonText);
  } catch (_e) {
    throw new Error("逆算棋譜JSONの解析に失敗しました");
  }
  if (!payload || typeof payload !== "object") {
    throw new Error("逆算棋譜の形式が不正です");
  }
  const kind = String(payload.kind || "");
  if (kind && kind !== REVERSE_IO_KIND) {
    throw new Error(`未対応の逆算棋譜形式です: ${kind}`);
  }

  const normalizedTree = normalizeReverseHistoryTreePayload(payload);
  const byId = new Map((normalizedTree.nodes || []).map((n) => [String(n.node_id || ""), n]));
  const rootNode = byId.get(String(normalizedTree.root_id || ""));
  if (!rootNode?.state) {
    throw new Error("逆算棋譜の開始局面が取得できません");
  }

  if (state?.mode !== "play") {
    const envMode = await currentEngine().patchMode(sessionId, revision, "play");
    applyStateEnvelope(envMode);
  }

  reverseHistoryTree = normalizedTree;
  reverseHistoryTree.current_id = reverseHistoryTree.root_id;
  reverseHistoryNodeSeq = reverseComputeNextNodeSeq(normalizedTree);
  reverseSelectedNodeId = normalizedTree.root_id || null;
  playSubMode = "reverse";
  reverseMoves = [];
  reverseStatusText = "-";
  reverseCacheKey = "";
  reverseResultCache.clear();
  reversePredecessorLegalGlobalCache.clear();

  await loadAnalysisSnapshotIntoSession(rootNode.state, { preserveReverseTrail: true });
  await refreshLegal();
  await refreshHistory();
  renderAll();
  logLine("逆算棋譜を読込みました");
}

function downloadTextAsFile(text, filename) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function downloadIoTextFile() {
  let text = ui.ioText?.value || "";
  if (!text.trim()) {
    text =
      (await exportKifuToText({
        toClipboard: false,
        showNotice: false,
        silentLog: true,
      })) || "";
    if (ui.ioText) ui.ioText.value = text;
  }
  if (!text.trim()) throw new Error("ダウンロードするテキストがありません");
  downloadTextAsFile(text, buildDownloadFileName());
  showIoClipboardNotice("ファイルをダウンロードしました。");
  logLine("TXTファイルをダウンロードしました");
}

function normalizeSfenCandidate(text) {
  const trimmed = (text || "").trim();
  if (!trimmed) return "";
  const line = trimmed.split(/\r?\n/).find((v) => v.trim());
  if (!line) return "";
  return line.startsWith("sfen ") ? line.slice(5).trim() : line.trim();
}

function looksLikeSfen(text) {
  const sfen = normalizeSfenCandidate(text);
  if (!sfen) return false;
  const t = sfen.split(/\s+/);
  if (t.length < 4) return false;
  if (!t[0].includes("/")) return false;
  if (t[1] !== "b" && t[1] !== "w") return false;
  if (!/^\d+$/.test(t[3])) return false;
  return true;
}

async function loadSfenText(sfenText) {
  if (!sessionId) return;
  stopHistoryPlayback({ silent: true });
  // 通常棋譜/SFENを読む場合は、逆算サブモードを明示的に解除してから反映する。
  if (playSubMode === "reverse") {
    playSubMode = "normal";
    reverseHistoryTree = null;
    reverseHistoryNodeSeq = 1;
    reverseSelectedNodeId = null;
    reverseMoves = [];
    reverseStatusText = "-";
    reverseCacheKey = "";
    reverseResultCache.clear();
    reversePredecessorLegalGlobalCache.clear();
    reverseClearWorkerPending();
  }
  const sfen = normalizeSfenCandidate(sfenText);
  if (!sfen) throw new Error("SFENテキストが空です");
  const env = await currentEngine().ioLoadSfen(sessionId, revision, sfen);
  applyStateEnvelope(env);
  selected = null;
  {
    const ok = await ensureCurrentPositionLegalForPlay("ファイル読込");
    if (!ok) return;
  }
  await refreshLegal();
  await refreshHistory();
  renderAll();
  logLine("SFENを読込みました");
}

async function loadKifuText(kifuText, options = {}) {
  if (!sessionId) return;
  stopHistoryPlayback({ silent: true });
  const movesOnly =
    Boolean(options?.movesOnly) || Boolean(options?.moves_only) || Boolean(options?.kifu_only);
  // 通常棋譜を読む場合は、逆算サブモードを明示的に解除してから反映する。
  if (playSubMode === "reverse") {
    playSubMode = "normal";
    reverseHistoryTree = null;
    reverseHistoryNodeSeq = 1;
    reverseSelectedNodeId = null;
    reverseMoves = [];
    reverseStatusText = "-";
    reverseCacheKey = "";
    reverseResultCache.clear();
    reversePredecessorLegalGlobalCache.clear();
    reverseClearWorkerPending();
  }
  const kifu = kifuText || "";
  if (!kifu.trim()) throw new Error("棋譜テキストが空です");
  const env = await currentEngine().ioLoadKifu(
    sessionId,
    revision,
    kifu,
    movesOnly ? { moves_only: true } : {}
  );
  applyStateEnvelope(env);
  selected = null;
  {
    const ok = await ensureCurrentPositionLegalForPlay("ファイル読込");
    if (!ok) return;
  }
  await refreshLegal();
  await refreshHistory();
  renderAll();
  logLine(movesOnly ? "現在局面に棋譜手順を読込みました" : "棋譜を読込みました");
}

function ioAutoKindLabel(kind) {
  if (kind === "sfen") return "SFEN";
  if (kind === "reverse") return "逆算棋譜";
  return "棋譜";
}

async function loadAutoFromText(text, filename = "", options = {}) {
  const raw = text || "";
  if (!raw.trim()) throw new Error("読込テキストが空です");
  if (looksLikeReverseKifuText(raw)) {
    await loadReverseKifuText(raw);
    return "reverse";
  }
  if (looksLikeReverseKifuPlainText(raw)) {
    await loadReverseKifuPlainText(raw);
    return "reverse";
  }

  const ext = (filename || "").toLowerCase();
  const preferSfenByExt = ext.endsWith(".sfen");
  const preferKifuByExt = ext.endsWith(".kif") || ext.endsWith(".kifu") || ext.endsWith(".txt");
  const maybeSfen = looksLikeSfen(raw);

  const order = [];
  if (preferSfenByExt || maybeSfen) order.push("sfen");
  if (preferKifuByExt || !maybeSfen) order.push("kifu");
  if (!order.includes("sfen")) order.push("sfen");
  if (!order.includes("kifu")) order.push("kifu");

  let lastError = null;
  const appendOnPlayMode = Boolean(options?.append_on_play_mode);
  const kifuOnly = Boolean(options?.kifu_only);
  for (const kind of order) {
    try {
      if (kind === "sfen") {
        await loadSfenText(raw);
        return "sfen";
      }
      const movesOnly = kifuOnly || (appendOnPlayMode && String(state?.mode || "") === "play");
      await loadKifuText(raw, movesOnly ? { movesOnly: true } : {});
      return "kifu";
    } catch (e) {
      lastError = e;
    }
  }
  throw new Error(`自動判別に失敗しました: ${lastError?.message || "unknown error"}`);
}

async function loadAutoFromClipboard(options = {}) {
  if (!navigator?.clipboard?.readText) {
    throw new Error("このブラウザではクリップボード読込に対応していません");
  }
  if (!window?.isSecureContext) {
    throw new Error("クリップボード読込は https または localhost でのみ利用できます");
  }

  setIoProgress(5, "クリップボード取得 5%");
  startIoProgressPulse(8, 40, "クリップボード取得");
  const text = await navigator.clipboard.readText();
  stopIoProgressPulse();
  if (!text || !text.trim()) {
    throw new Error("クリップボードに読込可能なテキストがありません");
  }

  const mode = String(options?.mode || "auto");
  if (ui.ioText) ui.ioText.value = text;
  if (mode === "kifu_only") {
    setIoProgress(45, "棋譜読込中 45%");
    startIoProgressPulse(50, 95, "棋譜反映中");
    await loadKifuText(text, { movesOnly: true });
    stopIoProgressPulse();
    setIoProgress(100, "読込完了 100%");
    logLine("クリップボードを読み込みました (棋譜のみ)");
    return "kifu_only";
  }
  setIoProgress(45, "形式判定中 45%");
  startIoProgressPulse(50, 95, "局面反映中");
  const kind = await loadAutoFromText(text, "clipboard.txt", { append_on_play_mode: true });
  stopIoProgressPulse();
  setIoProgress(100, "読込完了 100%");
  logLine(`クリップボードを読み込みました (${ioAutoKindLabel(kind)})`);
}

async function exportSfenToText(options = {}) {
  if (!sessionId) return;
  const toClipboard = options?.toClipboard !== false;
  const showNotice = options?.showNotice !== false;
  const silentLog = Boolean(options?.silentLog);
  const sfenNeutralSummary = localCollectSfenIncompatibleNeutralSummary(state);
  const neutralPieces = sfenNeutralSummary.neutralPieces;
  const neutralHandCount = sfenNeutralSummary.neutralHandCount;
  if (neutralPieces.length > 0 || neutralHandCount > 0) {
    const msg = localBuildSfenNeutralIncompatibleMessage(sfenNeutralSummary);
    if (showNotice) showIoClipboardNotice(msg, true);
    if (!silentLog) logLine(msg, true);
    throw new Error(msg);
  }
  const env = await currentEngine().ioExportSfen(sessionId);
  const text = env.data.sfen || "";
  if (ui.ioText) ui.ioText.value = text;
  revision = env.revision;
  if (toClipboard) {
    await writeTextToClipboard(text);
    if (showNotice) showIoClipboardNotice("SFENをクリップボードに出力しました");
    if (!silentLog) logLine("SFENを出力し、クリップボードへコピーしました");
  } else if (!silentLog) {
    logLine("SFENを出力しました");
  }
  return text;
}

function localCollectSfenIncompatibleNeutralSummary(st) {
  const neutralPieces =
    Array.isArray(st?.board?.pieces) && st.board.pieces.length > 0
      ? st.board.pieces.filter((p) => Number(p?.owner) === -1 && !localIsFixedNeutralBoardPieceName(p?.name))
      : [];
  let neutralHandCount = 0;
  const hands = st?.hands && typeof st.hands === "object" ? st.hands : {};
  for (const owner of ["0", "1"]) {
    const arr = Array.isArray(hands[owner]) ? hands[owner] : [];
    for (const token of arr) {
      if (localHandTokenNeutral(token)) neutralHandCount += 1;
    }
  }
  return { neutralPieces, neutralHandCount };
}

function localBuildSfenNeutralIncompatibleMessage(summary) {
  const neutralPieces = Array.isArray(summary?.neutralPieces) ? summary.neutralPieces : [];
  const neutralHandCount = Number(summary?.neutralHandCount || 0);
  const sample = neutralPieces
    .slice(0, 3)
    .map((p) => `${9 - Number(p.x)}${Number(p.y) + 1}${displayNameForName(String(p.name || ""), Number(p.owner))}`);
  const details = [];
  if (neutralPieces.length > 0) {
    details.push(
      sample.length > 0
        ? `盤上中立駒 ${neutralPieces.length}件（${sample.join("、")}${neutralPieces.length > sample.length ? "…" : ""}）`
        : `盤上中立駒 ${neutralPieces.length}件`
    );
  }
  if (neutralHandCount > 0) details.push(`中立持駒 ${neutralHandCount}枚`);
  return `中立駒を含むためSFEN出力はできません。棋譜コピーを使用してください。${details.length > 0 ? ` (${details.join(" / ")})` : ""}`;
}

async function exportKifuToText(options = {}) {
  if (!sessionId) return;
  const toClipboard = options?.toClipboard !== false;
  const showNotice = options?.showNotice !== false;
  const silentLog = Boolean(options?.silentLog);
  if (isReverseSubModeActive()) {
    const text = buildReverseKifuTextLikeNormal();
    if (ui.ioText) ui.ioText.value = text;
    if (toClipboard) {
      await writeTextToClipboard(text);
      if (showNotice) showIoClipboardNotice("逆算棋譜をクリップボードに出力しました");
      if (!silentLog) logLine("逆算棋譜を出力し、クリップボードへコピーしました");
    } else if (!silentLog) {
      logLine("逆算棋譜を出力しました");
    }
    return text;
  }
  const env = await currentEngine().ioExportKifuText(sessionId);
  const text = env.data.kifu || "";
  if (ui.ioText) ui.ioText.value = text;
  revision = env.revision;
  if (toClipboard) {
    await writeTextToClipboard(text);
    if (showNotice) showIoClipboardNotice("棋譜をクリップボードに出力しました");
    if (!silentLog) logLine("棋譜を出力し、クリップボードへコピーしました");
  } else if (!silentLog) {
    logLine("棋譜を出力しました");
  }
  return text;
}

function normalizeTurnForUi(rawTurn, fallback = 0) {
  const n = Number.parseInt(rawTurn, 10);
  if (n === 0 || n === 1) return n;
  return fallback === 1 ? 1 : 0;
}

function getDisplayTurnForUi() {
  const baseTurn = normalizeTurnForUi(state?.turn, 0);
  if (state?.mode === "play" && playSubMode === "reverse") {
    return baseTurn === 0 ? 1 : 0;
  }
  return baseTurn;
}

function renderStatus() {
  updateEditClearGoteHandButtonLabel();
  if (!state) {
    stopHistoryPlayback({ silent: true });
    if (document?.body) document.body.removeAttribute("data-mode");
    ui.sessionInfo.textContent = "session: -";
    ui.revisionInfo.textContent = "revision: -";
    if (ui.versionInfo) ui.versionInfo.textContent = `version: ${APP_VERSION}`;
    setStatusPair(ui.modeInfo, "モード", "-");
    setStatusPair(ui.turnInfo, "手番", "-");
    setStatusPair(ui.ruleNameInfo, "ルール", "-");
    ui.selectedInfo.textContent = "選択：なし";
    if (ui.btnModePlay) ui.btnModePlay.classList.remove("active");
    if (ui.btnModeEdit) ui.btnModeEdit.classList.remove("active");
    if (ui.btnEditTurnTop) ui.btnEditTurnTop.hidden = true;
    if (ui.btnEditAttrDialogTop) {
      ui.btnEditAttrDialogTop.hidden = true;
      ui.btnEditAttrDialogTop.disabled = true;
    }
    renderPlaySubModeButtons();
    setHistoryPlayButtonState();
    if (ui.btnExportSfen) {
      ui.btnExportSfen.disabled = true;
      ui.btnExportSfen.title = "局面未作成";
    }
    if (ui.btnExportKifu) ui.btnExportKifu.textContent = "棋譜コピー";
    return;
  }
  ui.sessionInfo.textContent = `session: ${sessionId}`;
  ui.revisionInfo.textContent = `revision: ${revision}`;
  if (ui.versionInfo) ui.versionInfo.textContent = `version: ${APP_VERSION}`;
  if (document?.body) document.body.setAttribute("data-mode", state.mode);
  const modeLabel =
    state.mode === "play" ? (playSubMode === "reverse" ? "検討モード(逆算)" : "検討モード(通常)") : "編集モード";
  setStatusPair(ui.modeInfo, "モード", modeLabel);
  const displayTurn = getDisplayTurnForUi();
  setStatusPair(ui.turnInfo, "手番", displayTurn === 0 ? "▲攻方" : "△受方");
  if (ui.btnModePlay) ui.btnModePlay.classList.toggle("active", state.mode === "play");
  if (ui.btnModeEdit) ui.btnModeEdit.classList.toggle("active", state.mode === "edit");
  if (ui.btnEditTurnTop) ui.btnEditTurnTop.hidden = state.mode !== "edit";
  if (ui.btnEditAttrDialogTop) {
    ui.btnEditAttrDialogTop.hidden = state.mode !== "edit";
    ui.btnEditAttrDialogTop.disabled = state.mode !== "edit" || !editSelection;
  }
  if (state.mode !== "play" && historyPlayRunning) {
    stopHistoryPlayback({ silent: true });
  }
  renderPlaySubModeButtons();
  setHistoryPlayButtonState();
  if (ui.btnExportKifu) {
    ui.btnExportKifu.textContent = isReverseSubModeActive() ? "逆算棋譜コピー" : "棋譜コピー";
  }
  if (ui.btnExportSfen) {
    const sfenSummary = localCollectSfenIncompatibleNeutralSummary(state);
    const sfenBlocked =
      Array.isArray(sfenSummary.neutralPieces) && sfenSummary.neutralPieces.length > 0
        ? true
        : Number(sfenSummary.neutralHandCount || 0) > 0;
    ui.btnExportSfen.disabled = sfenBlocked;
    ui.btnExportSfen.title = sfenBlocked ? localBuildSfenNeutralIncompatibleMessage(sfenSummary) : "";
  }
  if (state.mode === "edit") {
    if (!editSelection) {
      ui.selectedInfo.textContent = "編集：駒を選択してください";
      return;
    }
    const ownerText = ownerMark(editSelection.owner);
    if (editSelection.source === "board") {
      ui.selectedInfo.textContent = `編集選択：盤上 ${ownerText}${displayNameForName(editSelection.name, editSelection.owner)} @${9 - editSelection.x}${editSelection.y + 1}`;
      return;
    }
    if (editSelection.source === "hand") {
      const handInfo = localParseHandToken(editSelection.name);
      const baseDisp = displayNameForName(handInfo.name || editSelection.name, handInfo.neutral ? -1 : editSelection.owner);
      const handDisp = baseDisp;
      ui.selectedInfo.textContent = `編集選択：持駒 ${ownerText}${handDisp}`;
      return;
    }
    ui.selectedInfo.textContent = `編集選択：駒箱 ${ownerText}${displayNameForName(editSelection.name, editSelection.owner)}`;
    return;
  }
  if (!selected) {
    ui.selectedInfo.textContent = "選択：なし";
    return;
  }
  if (selected.type === "board") {
    const pending = isReverseSubModeActive()
      ? reverseTakeMakePendingForSelectedBoard()
      : takeMakePendingForSelectedBoard();
    if (pending) {
      ui.selectedInfo.textContent = isReverseSubModeActive()
        ? `選択：${9 - selected.x}${selected.y + 1} → ${9 - pending.stepX}${pending.stepY + 1}（逆算移動元を選択）`
        : `選択：${9 - selected.x}${selected.y + 1} → ${9 - pending.stepX}${pending.stepY + 1}（追加移動先を選択）`;
    } else {
      ui.selectedInfo.textContent = `選択：${9 - selected.x}${selected.y + 1}`;
    }
    return;
  }
  const selectedHand = localParseHandToken(selected.name);
  const selectedDisp = displayNameForName(selectedHand.name || selected.name, selectedHand.neutral ? -1 : selected.owner);
  const selectedLabel = selectedDisp;
  ui.selectedInfo.textContent = `選択：${selected.owner === 0 ? "▲" : "△"}持駒 ${selectedLabel}`;
}

function addAttackLegendDot(iconRoot, owner, size, danger = false) {
  const dot = document.createElement("span");
  dot.className = `attack-legend-dot owner${owner} ${size}${danger ? " danger" : ""}`;
  iconRoot.appendChild(dot);
}

function addAttackLegendArrow(iconRoot, owner) {
  const arrow = document.createElement("span");
  arrow.className = `attack-legend-arrow owner${owner}`;
  iconRoot.appendChild(arrow);
}

function renderHands() {
  const displayTurn = getDisplayTurnForUi();
  if (ui.hand0Wrap) ui.hand0Wrap.classList.toggle("active", displayTurn === 0);
  if (ui.hand1Wrap) ui.hand1Wrap.classList.toggle("active", displayTurn === 1);

  const renderHandSide = (owner, rootEl) => {
    if (!rootEl) return;
    rootEl.innerHTML = "";
    const entries = handCounts(owner);
    if (entries.length === 0) {
      const none = document.createElement("span");
      none.className = "muted";
      none.textContent = "なし";
      rootEl.appendChild(none);
      return;
    }
    for (const [handToken, cnt] of entries) {
      const handInfo = localParseHandToken(handToken);
      const name = String(handInfo.name || "");
      const neutral = Boolean(handInfo.neutral);
      if (!name) continue;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "hand-item";
      const dispBase = displayNameForName(name, neutral ? -1 : owner);
      const disp = dispBase;
      const handAttrTip = changedAttrsTooltipForName(name);
      const head = neutral ? `${disp} (${name}) [中立]` : `${disp} (${name})`;
      btn.title = handAttrTip ? `${head}\n${handAttrTip}` : head;

      const pieceSpan = document.createElement("span");
      pieceSpan.className = "hand-piece";
      if (owner === 1) pieceSpan.classList.add("owner-1");
      if (neutral) pieceSpan.classList.add("owner--1");
      if (localShouldCompactPieceDisplayText(disp, name)) pieceSpan.classList.add("piece-text-compact");
      pieceSpan.textContent = disp;
      btn.appendChild(pieceSpan);

      if (cnt > 1) {
        const countSpan = document.createElement("span");
        countSpan.className = "hand-count";
        countSpan.textContent = String(cnt);
        btn.appendChild(countSpan);
      }

      const enabled = handSelectable(owner, handToken);
      const clickableWhenDisabled = handOwnerCanAct(owner);
      if (!enabled && state?.mode !== "edit") {
        btn.classList.add("disabled");
        btn.setAttribute("aria-disabled", "true");
        btn.disabled = !clickableWhenDisabled;
      } else {
        btn.disabled = false;
        btn.removeAttribute("aria-disabled");
      }
      if (state?.mode === "edit") {
        if (
          editSelection &&
          editSelection.source === "hand" &&
          editSelection.owner === owner &&
          localHandTokenEquals(editSelection.name, handToken)
        ) {
          btn.classList.add("selected");
        }
      } else if (isSelectedHand(owner, handToken)) {
        btn.classList.add("selected");
      }

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (state?.mode === "edit" && e.detail > 1) return;
        void onHandClick(owner, handToken);
      });
      btn.addEventListener("contextmenu", (e) => {
        if (state?.mode !== "edit") return;
        if (clearEditSelectionByRightClick()) {
          e.preventDefault();
          return;
        }
        e.preventDefault();
        if (
          editSelection &&
          editSelection.source === "hand" &&
          editSelection.owner === owner &&
          localHandTokenEquals(editSelection.name, handToken)
        ) {
          setEditSelection({ source: "hand", owner: cycleOwner(editSelection.owner), name: handToken });
        } else {
          setEditSelection({ source: "hand", owner, name: handToken });
        }
        renderAll();
      });
      bindLongPress(btn, () => {
        if (state?.mode !== "edit") return;
        setEditSelection({ source: "hand", owner, name: handToken });
        void openAttrEditorForSelection().catch((err) => logLine(err.message || String(err), true));
      });
      rootEl.appendChild(btn);
    }
  };

  renderHandSide(1, ui.hand1List);
  renderHandSide(0, ui.hand0List);
}

function renderPieceBox() {
  if (!ui.pieceBoxWrap || !ui.pieceBoxList) return;
  const isEdit = state?.mode === "edit";
  applyPanelVisibility(isEdit);

  const preferredHost = isEdit ? ui.pieceBoxSideHost : ui.pieceBoxBoardHost;
  if (preferredHost && ui.pieceBoxWrap.parentElement !== preferredHost) {
    preferredHost.appendChild(ui.pieceBoxWrap);
  }

  ui.pieceBoxWrap.hidden = !isEdit;
  if (ui.btnPieceBoxStandard) ui.btnPieceBoxStandard.classList.toggle("active", pieceBoxStandardMode);
  if (ui.btnPieceBoxNonStandard) ui.btnPieceBoxNonStandard.classList.toggle("active", !pieceBoxStandardMode);
  if (!isEdit) {
    if (ui.pieceBoxFairyTabs) ui.pieceBoxFairyTabs.hidden = true;
    ui.pieceBoxList.innerHTML = "";
    return;
  }

  const selectedName =
    state?.mode === "edit" && editSelection && editSelection.source === "box"
      ? String(editSelection.name || "") === "王"
        ? "玉"
        : editSelection.name
      : null;
  const sourceNames = editPieceNames.length > 0 ? editPieceNames : ["FU"];
  const names = Array.from(
    new Set(
      sourceNames
        .map((n) => (String(n || "") === "王" ? "玉" : String(n || "")))
        .filter((n) => n.length > 0)
    )
  );
  ui.pieceBoxList.innerHTML = "";
  const nameSet = new Set(names);
  const standardTop = ["玉", "飛", "角", "金", "銀", "桂", "香", "歩"];
  const standardBottomFor = {
    玉: null,
    飛: "龍",
    角: "馬",
    金: null,
    銀: "成銀",
    桂: "成桂",
    香: "成香",
    歩: "と",
  };
  const consumed = new Set();

  const appendSectionLabel = (label) => {
    const div = document.createElement("div");
    div.className = "piecebox-section";
    div.textContent = label;
    ui.pieceBoxList.appendChild(div);
  };

  const appendSpacer = () => {
    const spacer = document.createElement("div");
    spacer.className = "piecebox-spacer";
    spacer.setAttribute("aria-hidden", "true");
    ui.pieceBoxList.appendChild(spacer);
  };

  const appendPieceButton = (name) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "piecebox-item";
    if (name === selectedName) btn.classList.add("selected");
    const standardRem = pieceBoxStandardMode ? remainingStandardCountFor(name) : null;
    const disabledByStandard = pieceBoxStandardMode && standardRem !== null && standardRem <= 0;
    if (disabledByStandard) {
      btn.classList.add("disabled");
    }

    const text = document.createElement("span");
    text.className = "piecebox-text";
    const shownName = displayNameForName(name, editOwner);
    if (localShouldCompactPieceDisplayText(shownName, name)) text.classList.add("piece-text-compact");
    text.textContent = shownName;
    btn.appendChild(text);

    const limit = STANDARD_COUNTS[standardBaseName(name)];
    const used = currentBaseCounts().get(standardBaseName(name)) || 0;
    const hideCount = PROMOTED_SET.has(name) || standardBaseName(name) === "王";
    const needsParenCount = false;
    const isFairyPiece = limit === undefined;
    let countText = "";
    if (!hideCount && pieceBoxStandardMode) {
      if (isFairyPiece) {
        if (used > 0) {
          countText = `+${used}`;
        }
      } else {
        const rem = limit - used;
        countText = needsParenCount ? `(${rem})` : String(rem);
      }
    } else if (!hideCount) {
      if (isFairyPiece) {
        if (used > 0) {
          countText = `+${used}`;
        }
      } else {
        const diff = used - limit;
        if (diff !== 0) {
          const signText = diff > 0 ? `+${diff}` : String(diff);
          countText = needsParenCount ? `(${signText})` : signText;
        }
      }
    }
    if (countText) {
      const countSpan = document.createElement("span");
      countSpan.className = "piecebox-count";
      countSpan.textContent = countText;
      btn.appendChild(countSpan);
    }

    btn.title = `${shownName} (${name})`;
    const desc = pieceDescriptions?.[name];
    if (typeof desc === "string" && desc.trim() !== "") {
      btn.title = `${btn.title}\n${desc.trim()}`;
    }
    const pieceBoxAttrTip = changedAttrsTooltipForName(name);
    if (pieceBoxAttrTip) {
      btn.title = `${btn.title}\n${pieceBoxAttrTip}`;
    }

    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      if (state?.mode === "edit" && e.detail > 1) return;
      if (consumeSuppressEditClick()) return;
      try {
        if (state?.mode === "edit" && editSelection?.source === "board") {
          const srcX = editSelection.x;
          const srcY = editSelection.y;
          const srcPiece = findPieceAt(srcX, srcY);
          if (srcPiece) {
            await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/remove-piece`, { x: srcX, y: srcY });
            logLine(`編集移動：盤上 ${ownerMark(srcPiece.owner)}${srcPiece.name} ${9 - srcX}${srcY + 1} -> 駒箱`);
            return;
          }
        }
        if (state?.mode === "edit" && editSelection?.source === "hand") {
          const srcOwner = editSelection.owner;
          const srcName = editSelection.name;
          await callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/remove-hand`, {
            owner: srcOwner,
            name: srcName,
          });
          logLine(`編集移動：持駒 ${ownerMark(srcOwner)}${srcName} -> 駒箱`);
          return;
        }
      } catch (e) {
        logLine(e.message || String(e), true);
        return;
      }

      if (disabledByStandard) return;
      if (
        state?.mode === "edit" &&
        editSelection &&
        editSelection.source === "box" &&
        editSelection.name === name
      ) {
        setEditSelection(null);
      } else {
        setEditSelection({ source: "box", name, owner: editOwner });
      }
      renderAll();
    });
    btn.addEventListener("contextmenu", (e) => {
      if (state?.mode !== "edit") return;
      if (editSelection?.source === "box") {
        e.preventDefault();
        clearPendingRightAction();
        setEditSelection(null);
        renderAll();
        return;
      }
      e.preventDefault();
      if (editSelection && editSelection.source === "box" && editSelection.name === name) {
        setEditSelection({ source: "box", name, owner: cycleOwner(editSelection.owner) });
      } else {
        setEditSelection({ source: "box", name, owner: editOwner });
      }
      renderAll();
    });
    bindLongPress(btn, () => {
      if (state?.mode !== "edit") return;
      setEditSelection({ source: "box", name, owner: editOwner });
      void openAttrEditorForSelection().catch((err) => logLine(err.message || String(err), true));
    });
    ui.pieceBoxList.appendChild(btn);
  };

  ui.pieceBoxList.onclick = (e) => {
    if (state?.mode !== "edit") return;
    if (e.target && e.target.closest && e.target.closest("button.piecebox-item")) return;
    if (consumeSuppressEditClick()) return;
    if (editSelection?.source === "board") {
      const srcX = editSelection.x;
      const srcY = editSelection.y;
      const srcPiece = findPieceAt(srcX, srcY);
      if (!srcPiece) {
        setEditSelection(null);
        renderAll();
        return;
      }
      void callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/remove-piece`, { x: srcX, y: srcY })
        .then(() => logLine(`編集移動：盤上 ${ownerMark(srcPiece.owner)}${srcPiece.name} ${9 - srcX}${srcY + 1} -> 駒箱`))
        .catch((err) => logLine(err.message || String(err), true));
      return;
    }
    if (editSelection?.source === "hand") {
      const srcOwner = editSelection.owner;
      const srcName = editSelection.name;
      void callEditEndpoint(`/api/v1/sessions/${sessionId}/edit/remove-hand`, {
        owner: srcOwner,
        name: srcName,
      })
        .then(() => logLine(`編集移動：持駒 ${ownerMark(srcOwner)}${srcName} -> 駒箱`))
        .catch((err) => logLine(err.message || String(err), true));
    }
  };
  ui.pieceBoxList.oncontextmenu = (e) => {
    if (state?.mode !== "edit") return;
    if (editSelection?.source === "box") {
      e.preventDefault();
      clearPendingRightAction();
      setEditSelection(null);
      renderAll();
      return false;
    }
    if (e.target && e.target.closest && e.target.closest("button.piecebox-item")) {
      e.preventDefault();
      return false;
    }
    return undefined;
  };

  // Row 1: standard pieces, Row 2: promoted pieces right below each base.
  appendSectionLabel("通常駒");
  for (const baseName of standardTop) {
    if (nameSet.has(baseName)) {
      appendPieceButton(baseName);
      consumed.add(baseName);
    } else {
      appendSpacer();
    }
  }
  for (const baseName of standardTop) {
    const promotedName = standardBottomFor[baseName];
    if (promotedName && nameSet.has(promotedName)) {
      appendPieceButton(promotedName);
      consumed.add(promotedName);
    } else {
      appendSpacer();
    }
  }

  // Remaining fairy/extra pieces.
  const fairyNames = names.filter((name) => !consumed.has(name));
  const uiAddedFairyNames = fairyNames.filter((name) => Boolean(customUserTagForPieceName(name)));
  const regularFairyNames = fairyNames.filter((name) => !customUserTagForPieceName(name));
  if (ui.pieceBoxFairyTabs) {
    const showFairyTabs = true;
    ui.pieceBoxFairyTabs.hidden = !showFairyTabs;
    if (showFairyTabs) {
      const availableTabs = PIECEBOX_FAIRY_TAB_IDS.filter((tab) =>
        tab === "custom" || regularFairyNames.some((name) => fairyTabForPieceName(name) === tab)
      );
      if (!availableTabs.includes(pieceBoxFairyTab)) {
        pieceBoxFairyTab = availableTabs[0] || "custom";
      }
      const tabButtons = ui.pieceBoxFairyTabs.querySelectorAll("button.piecebox-fairy-tab[data-piecebox-fairy-tab]");
      for (const btn of tabButtons) {
        const tab = btn.dataset.pieceboxFairyTab;
        const hasAny = tab === "custom" || regularFairyNames.some((name) => fairyTabForPieceName(name) === tab);
        btn.disabled = !hasAny;
        btn.classList.toggle("active", tab === pieceBoxFairyTab);
      }
    }
  }
  if (ui.pieceBoxFairyTabs && ui.pieceBoxFairyTabs.parentElement !== ui.pieceBoxList) {
    ui.pieceBoxList.appendChild(ui.pieceBoxFairyTabs);
  }

  if (fairyNames.length > 0) {
    const selectedFairyName =
      editSelection?.source === "box" && fairyNames.includes(String(editSelection?.name || ""))
        ? String(editSelection.name || "")
        : "";
    const viewerActions = document.createElement("div");
    viewerActions.className = "piecebox-custom-actions";
    const viewerBtn = document.createElement("button");
    viewerBtn.type = "button";
    viewerBtn.className = "piecebox-custom-btn";
    viewerBtn.textContent = "選択駒の動き確認";
    viewerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openFairyMoveViewerDialog(selectedFairyName || fairyNames[0] || "");
    });
    viewerActions.appendChild(viewerBtn);
    ui.pieceBoxList.appendChild(viewerActions);
  }

  if (pieceBoxFairyTab === "custom") {
    appendSectionLabel("追加駒");
    const customActions = document.createElement("div");
    customActions.className = "piecebox-custom-actions";
    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "piecebox-custom-btn";
    addBtn.textContent = "フェアリー駒追加";
    addBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openCustomFairyDialog();
    });
    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.className = "piecebox-custom-btn";
    clearBtn.textContent = "選択駒を削除";
    const selectedCustomName =
      editSelection?.source === "box" && customUserTagForPieceName(editSelection?.name)
        ? String(editSelection.name || "")
        : "";
    clearBtn.disabled = !selectedCustomName;
    clearBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      try {
        if (!selectedCustomName) {
          logLine("削除する追加駒を先に選択してください。");
          return;
        }
        await deleteUiDefinedFairyPiece(selectedCustomName);
      } catch (err) {
        logLine(err.message || String(err), true);
      }
    });
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "piecebox-custom-btn";
    editBtn.textContent = "選択駒を再編集";
    editBtn.disabled = !selectedCustomName;
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!selectedCustomName) {
        logLine("再編集する追加駒を先に選択してください。");
        return;
      }
      openCustomFairyDialog(selectedCustomName);
    });
    customActions.appendChild(addBtn);
    customActions.appendChild(editBtn);
    customActions.appendChild(clearBtn);
    ui.pieceBoxList.appendChild(customActions);

    if (uiAddedFairyNames.length <= 0) {
      const empty = document.createElement("div");
      empty.className = "piecebox-empty";
      empty.textContent = "追加駒はまだありません";
      ui.pieceBoxList.appendChild(empty);
      return;
    }
    const tagGroups = new Map();
    for (const name of uiAddedFairyNames) {
      const tag = customUserTagForPieceName(name) || "未分類";
      if (!tagGroups.has(tag)) tagGroups.set(tag, []);
      tagGroups.get(tag).push(name);
    }
    const sortedTags = Array.from(tagGroups.keys()).sort((a, b) => String(a).localeCompare(String(b), "ja"));
    for (const tag of sortedTags) {
      appendSectionLabel(`タグ: ${tag}`);
      for (const name of tagGroups.get(tag) || []) {
        appendPieceButton(name);
      }
    }
    return;
  }

  const remainingNames = regularFairyNames.filter((name) => fairyTabForPieceName(name) === pieceBoxFairyTab);
  if (regularFairyNames.length > 0) {
    appendSectionLabel("フェアリー駒");
  }
  for (const name of remainingNames) {
    appendPieceButton(name);
  }
}

function renderEditPanel() {
  if (ui.editPanelSection) ui.editPanelSection.hidden = true;
  if (!ui.editPieceSelect) return;
  const current = ui.editPieceSelect.value || currentEditPieceName();
  const options = editPieceNames.length > 0 ? editPieceNames : ["FU"];
  const optionValues = new Set([...ui.editPieceSelect.options].map((o) => o.value));
  const needsRebuild =
    ui.editPieceSelect.options.length !== options.length ||
    options.some((name) => !optionValues.has(name));

  if (needsRebuild) {
    ui.editPieceSelect.innerHTML = "";
    for (const name of options) {
      const op = document.createElement("option");
      op.value = name;
      op.textContent = `${displayNameForName(name)} (${name})`;
      ui.editPieceSelect.appendChild(op);
    }
  }

  if (!options.includes(current)) {
    ui.editPieceSelect.value = options[0];
  } else {
    ui.editPieceSelect.value = current;
  }

  if (ui.attrPromoteToSelect) {
    const currentPromote = ui.attrPromoteToSelect.value || "";
    const promoteOptions = ["", ...options];
    const existing = new Set([...ui.attrPromoteToSelect.options].map((o) => o.value));
    const rebuildPromote =
      ui.attrPromoteToSelect.options.length !== promoteOptions.length ||
      promoteOptions.some((v) => !existing.has(v));
    if (rebuildPromote) {
      ui.attrPromoteToSelect.innerHTML = "";
      for (const v of promoteOptions) {
        const op = document.createElement("option");
        op.value = v;
        op.textContent = v ? `${displayNameForName(v)} (${v})` : "成れない";
        ui.attrPromoteToSelect.appendChild(op);
      }
    }
    ui.attrPromoteToSelect.value = currentPromote;
    if (ui.attrPromoteToSelect.value !== currentPromote) ui.attrPromoteToSelect.value = "";
  }

  const isEdit = state?.mode === "edit";
  const editButtons = [
    ui.btnEditOwnerSente,
    ui.btnEditOwnerGote,
    ui.btnEditOwnerNeutral,
    ui.btnQuickOwnerSente,
    ui.btnQuickOwnerGote,
    ui.btnQuickOwnerNeutral,
    ui.btnEditPlaceMode,
    ui.btnEditEraseMode,
    ui.btnEditAddSenteHand,
    ui.btnEditRemoveSenteHand,
    ui.btnEditAddGoteHand,
    ui.btnEditRemoveGoteHand,
    ui.btnEditPresetHirate,
    ui.btnEditPresetTsume,
    ui.btnEditPresetClear,
    ui.btnEditSwitchTurn,
    ui.btnAttrLoadFromBoard,
    ui.btnAttrApplyToBoard,
    ui.btnAttrApplyToType,
  ];
  for (const btn of editButtons) {
    if (!btn) continue;
    btn.disabled = !isEdit;
  }
  ui.editPieceSelect.disabled = !isEdit;
  if (ui.attrFileInput) ui.attrFileInput.disabled = !isEdit;
  if (ui.attrRankInput) ui.attrRankInput.disabled = !isEdit;
  if (ui.attrDisplayNameInput) ui.attrDisplayNameInput.disabled = !isEdit;
  if (ui.attrPromoteToSelect) ui.attrPromoteToSelect.disabled = !isEdit;
  if (ui.attrToHandInput) ui.attrToHandInput.disabled = !isEdit;
  if (ui.attrIsKingInput) ui.attrIsKingInput.disabled = !isEdit;
  if (ui.attrImmortalInput) ui.attrImmortalInput.disabled = !isEdit;

  if (ui.btnEditOwnerSente) ui.btnEditOwnerSente.classList.toggle("active", editOwner === 0);
  if (ui.btnEditOwnerGote) ui.btnEditOwnerGote.classList.toggle("active", editOwner === 1);
  if (ui.btnEditOwnerNeutral) ui.btnEditOwnerNeutral.classList.toggle("active", editOwner === -1);
  if (ui.btnQuickOwnerSente) ui.btnQuickOwnerSente.classList.toggle("active", editOwner === 0);
  if (ui.btnQuickOwnerGote) ui.btnQuickOwnerGote.classList.toggle("active", editOwner === 1);
  if (ui.btnQuickOwnerNeutral) ui.btnQuickOwnerNeutral.classList.toggle("active", editOwner === -1);
  if (ui.btnEditPlaceMode) ui.btnEditPlaceMode.classList.toggle("active", !editEraseMode);
  if (ui.btnEditEraseMode) ui.btnEditEraseMode.classList.toggle("active", editEraseMode);
}

function parsePxValue(raw, fallback) {
  const n = Number.parseFloat(String(raw || "").replace("px", ""));
  return Number.isFinite(n) ? n : fallback;
}

function lightenHexColor(hex, ratio = 0.55) {
  const m = /^#?([0-9a-fA-F]{6})$/.exec(String(hex || "").trim());
  if (!m) return hex;
  const v = m[1];
  const r = Number.parseInt(v.slice(0, 2), 16);
  const g = Number.parseInt(v.slice(2, 4), 16);
  const b = Number.parseInt(v.slice(4, 6), 16);
  const mix = (c) => Math.max(0, Math.min(255, Math.round(c * (1 - ratio) + 255 * ratio)));
  const rr = mix(r).toString(16).padStart(2, "0");
  const gg = mix(g).toString(16).padStart(2, "0");
  const bb = mix(b).toString(16).padStart(2, "0");
  return `#${rr}${gg}${bb}`;
}

function coordSetFromArray(arr) {
  const s = new Set();
  for (const c of arr || []) {
    if (!c || typeof c.x !== "number" || typeof c.y !== "number") continue;
    s.add(`${c.x},${c.y}`);
  }
  return s;
}

function computeAttackOverlayMetrics() {
  if (!ui.boardGrid) return null;
  const cs = window.getComputedStyle(ui.boardGrid);
  const cellW = parsePxValue(cs.getPropertyValue("--cell-w"), 48);
  const cellH = parsePxValue(cs.getPropertyValue("--cell-h"), 54);
  const boardW = cellW * 9;
  const boardH = cellH * 9;
  const offsetX = Math.round(cellW * 0.36);
  const offsetY = Math.round(cellH * 0.22);
  const pieceRadius = Math.max(4, Math.round(Math.min(cellW, cellH) * 0.1));
  const kingRadius = Math.max(pieceRadius + 2, Math.round(Math.min(cellW, cellH) * 0.16));
  return { cellW, cellH, boardW, boardH, offsetX, offsetY, pieceRadius, kingRadius };
}

function renderAttackOverlay() {
  if (!ui.boardGrid) return;
  const old = ui.boardGrid.querySelector(".attack-overlay");
  if (old) old.remove();

  if (!state || state.mode !== "play" || !hasAnyAttackOverlayFlagEnabled()) return;
  const expectedKey = attackOverlayRequestKey();
  if (!expectedKey || attackOverlayCacheKey !== expectedKey || !attackOverlayData) return;

  const m = computeAttackOverlayMetrics();
  if (!m) return;

  const svgNs = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNs, "svg");
  svg.classList.add("attack-overlay");
  svg.setAttribute("viewBox", `0 0 ${m.boardW} ${m.boardH}`);
  svg.setAttribute("width", `${m.boardW}`);
  svg.setAttribute("height", `${m.boardH}`);
  svg.setAttribute("aria-hidden", "true");

  const makeMarkerCenter = (coord, owner) => {
    let cx = coord.x * m.cellW + m.cellW / 2;
    let cy = coord.y * m.cellH + m.cellH / 2;
    if (owner === 0) {
      cx -= m.offsetX;
      cy -= m.offsetY;
    } else {
      cx += m.offsetX;
      cy += m.offsetY;
    }
    return { x: cx, y: cy };
  };

  const defs = document.createElementNS(svgNs, "defs");
  const mk0 = document.createElementNS(svgNs, "marker");
  mk0.setAttribute("id", "attack-arrow-owner0");
  mk0.setAttribute("markerWidth", "8");
  mk0.setAttribute("markerHeight", "8");
  mk0.setAttribute("refX", "7");
  mk0.setAttribute("refY", "4");
  mk0.setAttribute("orient", "auto");
  const p0 = document.createElementNS(svgNs, "path");
  p0.setAttribute("d", "M0,0 L8,4 L0,8 z");
  p0.setAttribute("fill", ATTACKER_COLOR);
  mk0.appendChild(p0);
  defs.appendChild(mk0);
  const mk1 = document.createElementNS(svgNs, "marker");
  mk1.setAttribute("id", "attack-arrow-owner1");
  mk1.setAttribute("markerWidth", "8");
  mk1.setAttribute("markerHeight", "8");
  mk1.setAttribute("refX", "7");
  mk1.setAttribute("refY", "4");
  mk1.setAttribute("orient", "auto");
  const p1 = document.createElementNS(svgNs, "path");
  p1.setAttribute("d", "M0,0 L8,4 L0,8 z");
  p1.setAttribute("fill", DEFENDER_COLOR);
  mk1.appendChild(p1);
  defs.appendChild(mk1);
  svg.appendChild(defs);

  const drawPaths = (items, owner, strokeColor, markerId) => {
    const seen = new Set();
    for (const item of items || []) {
      const path = Array.isArray(item?.path) ? item.path : [];
      if (path.length < 2) continue;
      let prev = makeMarkerCenter(path[0], owner);
      for (let i = 1; i < path.length; i += 1) {
        const next = makeMarkerCenter(path[i], owner);
        if (prev.x === next.x && prev.y === next.y) {
          prev = next;
          continue;
        }
        const key = `${owner}:${prev.x},${prev.y}->${next.x},${next.y}`;
        if (seen.has(key)) {
          prev = next;
          continue;
        }
        seen.add(key);
        const line = document.createElementNS(svgNs, "line");
        line.setAttribute("x1", String(prev.x));
        line.setAttribute("y1", String(prev.y));
        line.setAttribute("x2", String(next.x));
        line.setAttribute("y2", String(next.y));
        line.setAttribute("stroke", strokeColor);
        line.setAttribute("stroke-width", "1");
        line.setAttribute("marker-end", `url(#${markerId})`);
        svg.appendChild(line);
        prev = next;
      }
    }
  };

  drawPaths(attackOverlayData.attacker_piece_paths, 0, ATTACKER_COLOR, "attack-arrow-owner0");
  drawPaths(attackOverlayData.defender_piece_paths, 1, DEFENDER_COLOR, "attack-arrow-owner1");

  const drawDots = (coords, owner, color, radius, dangerSet = null, dangerColor = null) => {
    for (const c of coords || []) {
      if (!c || typeof c.x !== "number" || typeof c.y !== "number") continue;
      const center = makeMarkerCenter(c, owner);
      const key = `${c.x},${c.y}`;
      const fill = dangerSet && dangerSet.has(key) && dangerColor ? dangerColor : color;
      const circle = document.createElementNS(svgNs, "circle");
      circle.setAttribute("cx", String(center.x));
      circle.setAttribute("cy", String(center.y));
      circle.setAttribute("r", String(radius));
      circle.setAttribute("fill", fill);
      circle.setAttribute("stroke", "#ffffff");
      circle.setAttribute("stroke-width", "1");
      svg.appendChild(circle);
    }
  };

  const attackerKingDangerSet = coordSetFromArray(attackOverlayData.attacker_king_danger);
  const defenderKingDangerSet = coordSetFromArray(attackOverlayData.defender_king_danger);
  drawDots(attackOverlayData.attacker_piece_squares, 0, ATTACKER_COLOR, m.pieceRadius);
  drawDots(attackOverlayData.defender_piece_squares, 1, DEFENDER_COLOR, m.pieceRadius);
  drawDots(
    attackOverlayData.attacker_king_squares,
    0,
    ATTACKER_COLOR,
    m.kingRadius,
    attackerKingDangerSet,
    lightenHexColor(ATTACKER_COLOR)
  );
  drawDots(
    attackOverlayData.defender_king_squares,
    1,
    DEFENDER_COLOR,
    m.kingRadius,
    defenderKingDangerSet,
    lightenHexColor(DEFENDER_COLOR)
  );

  ui.boardGrid.appendChild(svg);
}

function normalizeBoardCoord(pos) {
  if (!pos || typeof pos !== "object") return null;
  const x = Number(pos.x);
  const y = Number(pos.y);
  if (!Number.isInteger(x) || !Number.isInteger(y)) return null;
  if (x < 0 || x > 8 || y < 0 || y > 8) return null;
  return { x, y };
}

function getCurrentLastMoveSquares() {
  if (!historyTree || !Array.isArray(historyTree.nodes)) return null;
  const currentId = historyTree.current_id;
  if (!currentId) return null;
  const node = historyTree.nodes.find((n) => n && n.node_id === currentId);
  const info = node?.last_move_info;
  if (!info || typeof info !== "object") return null;
  const from = normalizeBoardCoord(info.from);
  const to = normalizeBoardCoord(info.to);
  if (!from && !to) return null;
  return { from, to };
}

function getCurrentHistoryTerminalResult() {
  if (playSubMode === "reverse") return "";
  if (!historyTree || !Array.isArray(historyTree.nodes)) return "";
  const currentId = String(historyTree.current_id || historyTree.root_id || "");
  if (!currentId) return "";
  const node = historyTree.nodes.find((n) => n && String(n.node_id || "") === currentId) || null;
  const text = String(node?.move_str || "").trim();
  return localIsTerminalResultText(text) ? text : "";
}

function computeBoardHoverMoveDestKeys(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y) || !localInBoard(x, y)) return null;
  const piece = findPieceAt(x, y);
  if (!piece) return null;
  const pieceList = Array.isArray(state?.board?.pieces) ? state.board.pieces : [];
  const rules = state?.rules && typeof state.rules === "object" ? state.rules : {};
  const neutralTurnOwner = Number(state?.turn) === 1 ? 1 : 0;
  let targets = [];
  try {
    targets = localGenerateTargetsForPiece(pieceList, piece, rules, { mode: "move", neutralTurnOwner }) || [];
  } catch (_err) {
    targets = [];
  }
  const out = new Set();
  for (const t of targets) {
    if (!t || typeof t !== "object") continue;
    const tx = Number(t.x);
    const ty = Number(t.y);
    if (!localInBoard(tx, ty)) continue;
    out.add(coordKey(tx, ty));
  }
  return out;
}

function refreshBoardHoverMoveHighlightClasses() {
  if (!Array.isArray(boardGridCells)) return;
  const activeSet = boardHoverMoveDestKeys instanceof Set && boardHoverMoveDestKeys.size > 0 ? boardHoverMoveDestKeys : null;
  for (const cell of boardGridCells) {
    cell?.btn?.classList?.toggle("hover-move", Boolean(activeSet && activeSet.has(cell.key)));
  }
}

function clearBoardHoverMoveHighlight() {
  boardHoverMoveSource = null;
  boardHoverMoveDestKeys = null;
  refreshBoardHoverMoveHighlightClasses();
}

function setBoardHoverMoveHighlight(x, y) {
  if (boardHoverMoveSource && boardHoverMoveSource.x === x && boardHoverMoveSource.y === y) return;
  const dest = computeBoardHoverMoveDestKeys(x, y);
  if (!(dest instanceof Set)) {
    clearBoardHoverMoveHighlight();
    return;
  }
  boardHoverMoveSource = { x, y };
  boardHoverMoveDestKeys = dest;
  refreshBoardHoverMoveHighlightClasses();
}

function ensureBoardGridScaffold() {
  if (!ui.boardGrid) return false;
  const reusable =
    boardGridOwnerEl === ui.boardGrid &&
    Array.isArray(boardGridCells) &&
    boardGridCells.length === 81 &&
    boardGridCells[0] &&
    boardGridCells[0].btn &&
    boardGridCells[0].btn.isConnected;
  if (reusable) return true;

  ui.boardGrid.innerHTML = "";
  boardGridCells = [];
  boardGridOwnerEl = ui.boardGrid;
  boardHoverMoveSource = null;
  boardHoverMoveDestKeys = null;

  for (let x = 0; x < 9; x += 1) {
    const file = document.createElement("div");
    file.className = "axis axis-file";
    file.textContent = FILE_LABELS[x] || String(9 - x);
    file.style.gridColumn = String(x + 1);
    file.style.gridRow = "1";
    ui.boardGrid.appendChild(file);
  }

  for (let y = 0; y < 9; y += 1) {
    const rank = document.createElement("div");
    rank.className = "axis axis-rank";
    rank.textContent = RANK_LABELS[y] || String(y + 1);
    rank.style.gridColumn = "10";
    rank.style.gridRow = String(y + 2);
    ui.boardGrid.appendChild(rank);
  }

  for (let y = 0; y < 9; y += 1) {
    for (let x = 0; x < 9; x += 1) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cell";
      if (x === 8) btn.classList.add("edge-right");
      if (y === 8) btn.classList.add("edge-bottom");
      btn.style.gridColumn = String(x + 1);
      btn.style.gridRow = String(y + 2);
      btn.dataset.x = String(x);
      btn.dataset.y = String(y);

      const span = document.createElement("span");
      span.className = "piece";
      btn.appendChild(span);

      btn.addEventListener("click", (e) => {
        if (state?.mode === "edit" && e.detail > 1) return;
        void onCellClick(x, y);
      });
      btn.addEventListener("mouseenter", () => {
        setBoardHoverMoveHighlight(x, y);
      });
      btn.addEventListener("mouseleave", () => {
        clearBoardHoverMoveHighlight();
      });
      btn.addEventListener("contextmenu", (e) => {
        if (state?.mode !== "edit") return;
        if (clearEditSelectionByRightClick()) {
          e.preventDefault();
          return;
        }
        e.preventDefault();
        const boardPiece = findPieceAt(x, y);
        if (!boardPiece) return;
        void editRotateOrPromoteAt(x, y).catch((err) => logLine(err.message || String(err), true));
      });
      bindLongPress(btn, () => {
        if (state?.mode !== "edit") return;
        const boardPiece = findPieceAt(x, y);
        if (!boardPiece) return;
        setEditSelection({ source: "board", x, y, name: boardPiece.name, owner: boardPiece.owner });
        void openAttrEditorForSelection().catch((err) => logLine(err.message || String(err), true));
      });

      ui.boardGrid.appendChild(btn);
      boardGridCells.push({ x, y, key: coordKey(x, y), btn, span });
    }
  }
  return true;
}

function renderBoard() {
  if (!ui.boardGrid) return;
  if (!ensureBoardGridScaffold()) return;

  if (boardHoverMoveSource) {
    const recomputed = computeBoardHoverMoveDestKeys(boardHoverMoveSource.x, boardHoverMoveSource.y);
    if (recomputed instanceof Set) {
      boardHoverMoveDestKeys = recomputed;
    } else {
      boardHoverMoveSource = null;
      boardHoverMoveDestKeys = null;
    }
  }

  const pieces = pieceMapFromState();
  const legalDest = selectedLegalDestSet();
  const hoverMoveDest = boardHoverMoveDestKeys instanceof Set && boardHoverMoveDestKeys.size > 0 ? boardHoverMoveDestKeys : null;
  const lastMoveSquares = state?.mode === "play" ? getCurrentLastMoveSquares() : null;
  const showEffectiveBadge = isUiSettingEnabled("show_effective_move_badge", false);
  const effectiveMoveNames = new Map();
  if (showEffectiveBadge) {
    const pieceList = Array.isArray(state?.board?.pieces) ? state.board.pieces : [];
    const rules = state?.rules && typeof state.rules === "object" ? state.rules : {};
    for (const piece of pieceList) {
      if (!piece || !localInBoard(piece.x, piece.y)) continue;
      const effectiveName = localEffectiveMoveNameByPiece(pieceList, piece, rules);
      effectiveMoveNames.set(coordKey(piece.x, piece.y), effectiveName || piece.name);
    }
  }

  const pending = isReverseSubModeActive() ? reverseTakeMakePendingForSelectedBoard() : takeMakePendingForSelectedBoard();

  for (const cell of boardGridCells) {
    const x = cell.x;
    const y = cell.y;
    const key = cell.key;
    const btn = cell.btn;
    const span = cell.span;
    const p = pieces.get(key);

    btn.classList.toggle(
      "last-from",
      Boolean(lastMoveSquares?.from && lastMoveSquares.from.x === x && lastMoveSquares.from.y === y)
    );
    btn.classList.toggle("last-to", Boolean(lastMoveSquares?.to && lastMoveSquares.to.x === x && lastMoveSquares.to.y === y));

    const editBoardSelected =
      state?.mode === "edit" &&
      editSelection &&
      editSelection.source === "board" &&
      editSelection.x === x &&
      editSelection.y === y;
    const takeMakeStepSelected = Boolean(pending && pending.stepX === x && pending.stepY === y);
    btn.classList.toggle("selected", Boolean(isSelectedBoard(x, y) || editBoardSelected || takeMakeStepSelected));
    btn.classList.toggle("legal", legalDest.has(key));
    btn.classList.toggle("hover-move", Boolean(hoverMoveDest && hoverMoveDest.has(key)));

    const oldBadge = btn.querySelector(".piece-origin-badge");
    if (oldBadge) oldBadge.remove();

    span.className = "piece";
    if (p) {
      span.classList.add(`owner-${p.owner}`);
      const effectiveName = effectiveMoveNames.get(key) || p.name;
      const changedMove = showEffectiveBadge && !localEquivalentMoveName(effectiveName, p.name);
      const pieceDisplay = displayNameForPiece(p);
      if (localShouldCompactPieceDisplayText(pieceDisplay, p.name)) span.classList.add("piece-text-compact");
      if (changedMove) {
        span.textContent = pieceDisplay;
        const originBadge = document.createElement("span");
        originBadge.className = "piece-origin-badge";
        if (p.owner === 1) originBadge.classList.add("owner-1");
        if (Number(p.owner) === -1) originBadge.classList.add("owner--1");
        originBadge.textContent = displayNameForName(effectiveName);
        btn.insertBefore(originBadge, span);
      } else {
        span.textContent = pieceDisplay;
      }
    } else {
      span.textContent = "";
    }

    const coordTitle = `${9 - x}${y + 1}`;
    const boardAttrTip = p ? changedAttrsTooltipForPiece(p) : "";
    btn.title = boardAttrTip ? `${coordTitle}\n${boardAttrTip}` : coordTitle;
  }

  renderAttackOverlay();
  void fetchAttackOverlayDataIfNeeded();
}

function renderHistoryList() {
  if (!ui.historyList) return;
  if (isReverseSubModeActive()) {
    renderReverseHistoryList();
    return;
  }
  ui.historyList.innerHTML = "";
  syncHistoryHeaderScrollbarCompensation();
  if (ui.historyMainHeader) ui.historyMainHeader.textContent = "本譜";
  if (ui.historyBranchHeader) ui.historyBranchHeader.textContent = "変化";
  if (!historyTree) {
    historyRenderNodesRef = null;
    historyRenderRowByNodeId = new Map();
    historyRenderRowOrder = [];
    historyRenderRowIndexByNodeId = new Map();
    historyRenderCurrentNodeId = null;
    historyRenderFocusNodeId = null;
    scheduleHistoryHeaderScrollbarCompensation();
    updateHistoryActionButtons();
    if (ui.historyInfo) ui.historyInfo.textContent = "-";
    return;
  }

  const rows = buildHistoryRows();
  const hasVariation = rows.some((r) => r && r.isVariation);
  if (ui.historyMainHeader) ui.historyMainHeader.textContent = hasVariation ? "変化" : "本譜";
  if (ui.historyBranchHeader) ui.historyBranchHeader.textContent = "変化";
  const focusId = resolveHistoryTargetNodeId();
  const current = rows.find((r) => r.isCurrent);
  if (ui.historyInfo) {
    if (!current) {
      ui.historyInfo.textContent = "現在：-";
    } else {
      const totalPly = rows.reduce((max, row) => {
        if (!row || row.isVariation || localIsTerminalResultText(row.moveStr)) return max;
        const p = Number.parseInt(row.ply, 10);
        if (!Number.isFinite(p) || p < 0) return max;
        return Math.max(max, p);
      }, 0);
      const currentRawPly = Number.parseInt(current.ply, 10);
      const currentPly = Number.isFinite(currentRawPly) && currentRawPly >= 0 ? currentRawPly : 0;
      const displayCurrentPly = localIsTerminalResultText(current.moveStr)
        ? Math.max(0, currentPly - 1)
        : currentPly;
      ui.historyInfo.textContent = `現在：${displayCurrentPly}手／${totalPly}手`;
    }
  }
  updateHistoryActionButtons();

  const frag = document.createDocumentFragment();
  const rowById = new Map();
  const rowOrder = [];
  const rowIndexById = new Map();
  for (const row of rows) {
    const rowEl = document.createElement("div");
    rowEl.className = "history-row";
    rowEl.dataset.nodeId = String(row.nodeId || "");
    if (row.isCurrent) rowEl.classList.add("current");
    if (row.nodeId === focusId) rowEl.classList.add("focused");
    if (row.isVariation) rowEl.classList.add("variation-step");

    const main = document.createElement("button");
    main.type = "button";
    main.className = "history-move";
    if (row.moveStr === "開始局面") {
      main.textContent = row.moveStr;
    } else {
      const owner = Number.isFinite(Number(row.turn)) ? 1 - Number(row.turn) : null;
      const moveText = formatOpponentControlNotationForDisplay(row.moveStr, owner);
      main.textContent = `${formatHistoryPlyPrefix(row.ply)} ${moveText}`;
    }
    main.addEventListener("click", () => {
      selectedHistoryNodeId = row.nodeId;
      void selectHistoryNode(row.nodeId).catch((e) => logLine(e.message || String(e), true));
    });
    rowEl.appendChild(main);

    const br = document.createElement("div");
    br.className = "history-branch";
    renderHistoryBranchOptions(br, row?.branchOptions, {
      reverse: false,
      onSelect: (option) => {
        selectedHistoryNodeId = option.nodeId;
        void selectHistoryNode(option.nodeId).catch((e) => logLine(e.message || String(e), true));
      },
    });
    rowEl.appendChild(br);

    frag.appendChild(rowEl);
    if (row.nodeId) {
      rowById.set(row.nodeId, rowEl);
      rowIndexById.set(row.nodeId, rowOrder.length);
      rowOrder.push(row.nodeId);
    }
  }
  ui.historyList.appendChild(frag);
  historyRenderNodesRef = Array.isArray(historyTree?.nodes) ? historyTree.nodes : null;
  historyRenderRowByNodeId = rowById;
  historyRenderRowOrder = rowOrder;
  historyRenderRowIndexByNodeId = rowIndexById;
  historyRenderCurrentNodeId = historyTree?.current_id || historyTree?.root_id || null;
  historyRenderFocusNodeId = focusId || null;

  syncHistoryScrollToCurrent(rows);
  scheduleHistoryHeaderScrollbarCompensation();
}

function syncHistoryScrollToCurrent(rows = null) {
  if (suppressHistoryAutoScroll) return;
  if (!ui.historyList) return;
  const list = ui.historyList;
  const applyScroll = () => {
    if (list.clientHeight <= 0) return false;

    const rowEls = Array.from(list.querySelectorAll(".history-row"));
    if (rowEls.length === 0) return false;

    const srcRows = Array.isArray(rows) && rows.length === rowEls.length ? rows : null;
    const currentNodeId = String(historyTree?.current_id || historyTree?.root_id || "");
    let currentIndex = -1;
    if (currentNodeId) {
      currentIndex = rowEls.findIndex((el) => String(el?.dataset?.nodeId || "") === currentNodeId);
    }
    if (currentIndex < 0 && srcRows) {
      currentIndex = srcRows.findIndex((r) => r && r.isCurrent);
    }
    if (currentIndex < 0) {
      currentIndex = rowEls.findIndex((el) => el.classList.contains("current"));
    }
    if (currentIndex < 0) return false;

    const curEl = rowEls[currentIndex];
    if (!curEl) return false;
    const rowTop = rowTopInScrollContainer(list, curEl);
    const rowBottom = rowTop + Number(curEl.getBoundingClientRect().height || 0);
    const viewTop = Number(list.scrollTop || 0);
    const viewBottom = viewTop + Number(list.clientHeight || 0);
    const margin = 8;
    if (rowTop >= viewTop + margin && rowBottom <= viewBottom - margin) return true;

    let targetTop = rowTop - Math.floor((Number(list.clientHeight || 0) * 0.35));
    targetTop = Math.max(0, Math.min(Math.max(0, list.scrollHeight - list.clientHeight), targetTop));
    if (Math.abs(list.scrollTop - targetTop) > 1) list.scrollTop = targetTop;
    return true;
  };

  const attempt = (remaining) => {
    if (applyScroll()) return;
    if (remaining <= 0) return;
    requestAnimationFrame(() => attempt(remaining - 1));
  };
  attempt(4);
}

function ensureCurrentHistoryRowVisible() {
  if (!ui.historyList) return;
  const list = ui.historyList;
  const currentNodeId = String(historyTree?.current_id || historyTree?.root_id || "");
  const currentEl = currentNodeId
    ? Array.from(list.querySelectorAll(".history-row")).find(
        (el) => String(el?.dataset?.nodeId || "") === currentNodeId
      ) || list.querySelector(".history-row.current")
    : list.querySelector(".history-row.current");
  if (!currentEl) return;
  const rowEls = Array.from(list.querySelectorAll(".history-row"));
  const currentIndex = rowEls.indexOf(currentEl);
  if (currentIndex >= 0) {
    const targetTopIndex = Math.max(0, currentIndex - 9); // 現在手が概ね10行目に来るようにする
    const topEl = rowEls[targetTopIndex];
    if (topEl) {
      const topInList = rowTopInScrollContainer(list, topEl);
      const targetTop = Math.max(
        0,
        Math.min(
          Math.max(0, list.scrollHeight - list.clientHeight),
          topInList
        )
      );
      if (Math.abs(Number(list.scrollTop || 0) - targetTop) > 1) {
        list.scrollTop = targetTop;
      }
      return;
    }
  }
  try {
    currentEl.scrollIntoView({ block: "nearest", inline: "nearest" });
  } catch (_e) {
    // no-op
  }
}

function localNotationSegmentPieceOwner(segment, moveOwner = null, fallbackOwner = null) {
  const raw = String(segment || "").trim();
  const moveOwnerNum = Number(moveOwner);
  const baseOwner =
    Number(fallbackOwner) === 0 || Number(fallbackOwner) === 1
      ? Number(fallbackOwner)
      : moveOwnerNum === 0 || moveOwnerNum === 1
        ? moveOwnerNum
        : null;
  if (!raw) return baseOwner;
  if (raw.startsWith("v▲")) return 1;
  if (raw.startsWith("v△")) return 0;
  if (raw.startsWith("▲")) return 0;
  if (raw.startsWith("△")) return 1;
  if (raw.startsWith("v")) {
    if (moveOwnerNum === 0 || moveOwnerNum === 1) return 1 - moveOwnerNum;
    return baseOwner;
  }
  if (/^(?:同|[1-9][1-9](?:-[1-9][1-9])?)v/.test(raw)) {
    if (moveOwnerNum === 0 || moveOwnerNum === 1) return 1 - moveOwnerNum;
  }
  return baseOwner;
}

function localApplyKingGlyphToNotationSegment(segment, moveOwner = null, fallbackOwner = null) {
  const raw = String(segment || "");
  if (!raw) return raw;
  const neutralGlyph = localUiKingGlyphByOwner(-1);
  const withNeutral = raw.replace(/n[玉王]/g, () => `n${neutralGlyph}`);
  const owner = localNotationSegmentPieceOwner(raw, moveOwner, fallbackOwner);
  const glyph = localUiKingGlyphByOwner(owner);
  if (!glyph) return withNeutral;
  return withNeutral.replace(/[玉王]/g, glyph);
}

function localApplyKingGlyphToNotation(notation, moveOwner = null) {
  const text = String(notation || "");
  if (!text) return text;
  const parts = text.split("/");
  const baseOwner = localNotationSegmentPieceOwner(parts[0], moveOwner, moveOwner);
  parts[0] = localApplyKingGlyphToNotationSegment(parts[0], moveOwner, moveOwner);
  for (let i = 1; i < parts.length; i += 1) {
    parts[i] = localApplyKingGlyphToNotationSegment(parts[i], moveOwner, baseOwner);
  }
  return parts.join("/");
}

function formatOpponentControlNotationForDisplay(notation, owner = null) {
  const s = localApplyKingGlyphToNotation(notation, owner);
  if (!s) return s;
  if (localHasInlineOpponentMarker(s)) return s;
  if (s.startsWith("v▲") || s.startsWith("v△") || s[0] === "v") {
    return localInsertInlineOpponentMarker(s);
  }
  return s;
}

function formatReverseHistoryNotationForDisplay(notation, owner = null) {
  const s = localApplyKingGlyphToNotation(notation, owner);
  if (!s) return s;
  if (s.startsWith("▲") || s.startsWith("△") || localHasInlineOpponentMarker(s)) return s;
  const n = Number(owner);
  if (s.startsWith("v")) return formatOpponentControlNotationForDisplay(s, n);
  if (n !== 0 && n !== 1) return s;
  return `${n === 0 ? "▲" : "△"}${s}`;
}

function formatLegalMoveLabel(m, pieceMap) {
  if (!m) return "";
  if (m.notation) return formatOpponentControlNotationForDisplay(localApplyKingGlyphToNotation(m.notation, m.owner), m.owner);
  const ownerMark = m.owner === 1 ? "△" : "▲";
  if (m.kind === "drop") {
    const neutral = Boolean(m.neutral_piece) || localHandTokenNeutral(m.hand_token || m.name);
    const baseName = localHandTokenName(m.hand_token || m.name || m.name);
    const pieceOwner =
      Number(m?.piece_owner) === -1 ? -1 : neutral ? -1 : Number(m?.owner) === 1 ? 1 : 0;
    const name = `${neutral ? "n" : ""}${displayNameForName(baseName || m.name, pieceOwner)}`;
    return `${ownerMark}${coordText(m.to)}${name}打`;
  }
  if (m.kind === "move") {
    const fromKey = m.from ? coordKey(m.from.x, m.from.y) : null;
    const fromPiece = fromKey ? pieceMap.get(fromKey) : null;
    const pieceLabel = fromPiece ? displayNameForPiece(fromPiece) : displayNameForName(m.name, m?.piece_owner);
    const promote = m.promote ? "成" : "";
    const rebirth = m.rebirth ? `/${coordText(m.rebirth)}` : "";
    return `${ownerMark}${coordText(m.to)}${pieceLabel}${promote}${rebirth}`;
  }
  return m.notation || JSON.stringify(m);
}

function buildSfenFromStateLike(st) {
  const src = st && typeof st === "object" ? st : {};
  const pieces = Array.isArray(src?.board?.pieces) ? src.board.pieces : [];
  const rows = [];
  for (let y = 0; y < 9; y += 1) {
    let row = "";
    let empty = 0;
    for (let x = 0; x < 9; x += 1) {
      const p = pieces.find((piece) => Number(piece?.x) === x && Number(piece?.y) === y);
      if (!p) {
        empty += 1;
        continue;
      }
      if (empty > 0) {
        row += String(empty);
        empty = 0;
      }
      row += localPieceToSfenChar(p);
    }
    if (empty > 0) row += String(empty);
    rows.push(row || "9");
  }
  const boardPart = rows.join("/");
  const turnPart = Number(src?.turn) === 1 ? "w" : "b";
  let handPart = "";
  let hasHand = false;
  const hands = src?.hands && typeof src.hands === "object" ? src.hands : {};
  for (const name of LOCAL_HAND_NAME_ORDER) {
    for (const owner of [0, 1]) {
      const hand = Array.isArray(hands[String(owner)]) ? hands[String(owner)] : [];
      const count = hand.reduce((acc, token) => acc + (localHandTokenName(token) === name ? 1 : 0), 0);
      if (count <= 0) continue;
      hasHand = true;
      const piece = localPieceToSfenChar({ name, owner });
      if (count > 1) handPart += String(count);
      handPart += piece;
    }
  }
  if (!hasHand) handPart = "-";
  return `${boardPart} ${turnPart} ${handPart} 1`;
}

function reverseCapturedInfoFromPreMap(move, prePieceMap, captureNameHint = "") {
  const fallbackInfo = reverseCaptureHintDecode(captureNameHint);
  const fallbackName = String(fallbackInfo?.name || "");
  const fallbackOwnerRaw = Number(fallbackInfo?.owner);
  const fallbackOwner = fallbackOwnerRaw === -1 || fallbackOwnerRaw === 0 || fallbackOwnerRaw === 1 ? fallbackOwnerRaw : null;
  if (!move || move.kind !== "move") {
    return fallbackName ? { name: fallbackName, owner: fallbackOwner, pos: null } : null;
  }
  const capPos =
    move?.take_make?.capture_at && localInBoard(Number(move.take_make.capture_at.x), Number(move.take_make.capture_at.y))
      ? { x: Number(move.take_make.capture_at.x), y: Number(move.take_make.capture_at.y) }
      : move?.locust_capture && localInBoard(Number(move.locust_capture.x), Number(move.locust_capture.y))
      ? { x: Number(move.locust_capture.x), y: Number(move.locust_capture.y) }
      : move?.to && localInBoard(Number(move.to.x), Number(move.to.y))
        ? { x: Number(move.to.x), y: Number(move.to.y) }
        : null;
  if (!capPos || !prePieceMap) {
    return fallbackName ? { name: fallbackName, owner: fallbackOwner, pos: capPos } : null;
  }
  const cap = prePieceMap.get(coordKey(capPos.x, capPos.y));
  if (!cap || Number(cap.owner) === Number(move.owner)) {
    return fallbackName ? { name: fallbackName, owner: fallbackOwner, pos: capPos } : null;
  }
  return { name: String(cap.name || ""), owner: Number(cap.owner), pos: capPos };
}

function reverseMovedPieceDisplayName(move, prePieceMap) {
  if (!move) return "";
  const fromKey = move.from ? coordKey(move.from.x, move.from.y) : null;
  const fromPiece = fromKey ? prePieceMap.get(fromKey) : null;
  const name = fromPiece ? String(fromPiece.name || "") : String(move.name || "");
  const isNeutral = Number(fromPiece?.owner) === -1 || Boolean(move?.neutral_piece);
  return `${isNeutral ? "n" : ""}${displayNameForName(name)}`;
}

function formatReverseMoveLabel(move, prePieceMap, captureNameHint = "", options = null) {
  if (!move) return "";
  const opts = options && typeof options === "object" ? options : {};
  const owner = Number(move?.owner);
  const turn = Number(opts?.turn);
  const allInShogi = Boolean(opts?.rules?.all_in_shogi);
  let ownerPrefix = "";
  if (owner === 0 || owner === 1) {
    if (allInShogi && (turn === 0 || turn === 1) && owner !== turn) {
      ownerPrefix = "v";
    } else {
      ownerPrefix = owner === 0 ? "▲" : "△";
    }
  }
  if (move.kind === "drop") {
    const neutralDrop = Number(move?.piece_owner) === -1 || Boolean(move?.neutral_piece);
    return localComposeTokenWithOwnerPrefix(
      ownerPrefix,
      `${coordText(move.to)}${neutralDrop ? "n" : ""}${displayNameForName(move.name)}打`
    );
  }
  if (move.kind === "move") {
    const reverseToText = move.from ? coordText(move.from) : "??";
    const pieceLabel = reverseMovedPieceDisplayName(move, prePieceMap);
    const narazu = move.promote ? "生" : "";
    const captured = reverseCapturedInfoFromPreMap(move, prePieceMap, captureNameHint);
    if (captured?.name) {
      const capPosText = captured?.pos ? coordText(captured.pos) : "??";
      const capPieceText = `${Number(captured?.owner) === -1 ? "n" : ""}${displayNameForName(captured.name)}`;
      return localComposeTokenWithOwnerPrefix(
        ownerPrefix,
        `${reverseToText}${pieceLabel}${narazu}(+${capPosText}${capPieceText})`
      );
    }
    return localComposeTokenWithOwnerPrefix(ownerPrefix, `${reverseToText}${pieceLabel}${narazu}`);
  }
  return ownerPrefix + String(move.notation || "");
}

function reverseTrailSignatureToken(move, captureNameHint = "") {
  if (!move || typeof move !== "object") return "";
  if (move.kind === "drop") {
    const toText = move?.to ? coordText(move.to) : "??";
    return `D:${String(move.name || "")}@${toText}`;
  }
  if (move.kind === "move") {
    const fromText = move?.from ? coordText(move.from) : "??";
    const toText = move?.to ? coordText(move.to) : "??";
    const promotePart = move.promote ? "p1" : "p0";
    const rebirthPart = move?.rebirth ? `rb${coordText(move.rebirth)}` : "rb-";
    const locustPart = move?.locust_capture ? `lc${coordText(move.locust_capture)}` : "lc-";
    const capPart = captureNameHint ? `cap${String(captureNameHint)}` : "cap-";
    return `M:${fromText}>${toText}:${promotePart}:${rebirthPart}:${locustPart}:${capPart}`;
  }
  return `N:${String(move.notation || "")}`;
}

function reverseApplyTrailLabelDisambiguation(moves) {
  const src = Array.isArray(moves) ? moves : [];
  const byLabel = new Map();
  for (const mv of src) {
    const label = String(mv?.label || "").trim();
    if (!label) continue;
    let arr = byLabel.get(label);
    if (!arr) {
      arr = [];
      byLabel.set(label, arr);
    }
    arr.push(mv);
  }
  for (const [label, arr] of byLabel.entries()) {
    if (!Array.isArray(arr) || arr.length <= 1) {
      if (arr && arr[0]) arr[0].trail_label = label;
      continue;
    }
    for (const mv of arr) {
      const token = reverseTrailSignatureToken(mv, mv?.captured_name_hint || "");
      mv.trail_label = token ? `${label} [${token}]` : label;
    }
  }
}

async function applyReverseCandidate(candidate) {
  if (!sessionId || !state || state.mode !== "play") return;
  if (!candidate || !candidate.pre_state) return;
  stopHistoryPlayback({ silent: true });
  clearPendingRightAction();
  selected = null;
  setEditSelection(null);
  const tree = reverseEnsureHistoryTreeBase();
  if (!tree) return;

  let env = null;
  try {
    const eng = currentEngine();
    if (typeof eng.analysisLoadState === "function") {
      env = await eng.analysisLoadState(sessionId, revision, candidate.pre_state);
    } else {
      const sfen = buildSfenFromStateLike(candidate.pre_state);
      env = await eng.ioLoadSfen(sessionId, revision, sfen);
    }
  } catch (e) {
    logLine(e.message || String(e), true);
    return;
  }

  keepReverseTrailOnNextStateApply = true;
  try {
    applyStateEnvelope(env);
  } finally {
    keepReverseTrailOnNextStateApply = false;
  }
  const byId = reverseHistoryNodeMap();
  const parentId = String(tree.current_id || tree.root_id || "r_root");
  const parent = byId.get(parentId);
  const newNodeId = reverseCreateNodeId();
  const nextPly = Number(parent?.ply || 0) + 1;
  const parentForwardPlyRaw = Number.parseInt(parent?.forward_ply, 10);
  const nextForwardPly =
    Number.isFinite(parentForwardPlyRaw) && parentForwardPlyRaw >= 0
      ? Math.max(0, parentForwardPlyRaw - 1)
      : null;
  const newNode = {
    node_id: newNodeId,
    parent_id: parentId,
    ply: nextPly,
    forward_ply: nextForwardPly,
    label: String(candidate?.trail_label || candidate?.label || ""),
    forward_move: reverseNormalizeMoveForApply(candidate),
    state: cloneJson(candidate.pre_state),
    children: [],
  };
  tree.nodes.push(newNode);
  if (parent) {
    parent.children = Array.isArray(parent.children) ? parent.children : [];
    parent.children.push(newNodeId);
  }
  tree.current_id = newNodeId;
  reverseSelectedNodeId = newNodeId;
  const views = applyViewsFromEnvelope(env);
  const refreshTasks = [];
  if (!views.hasLegal) refreshTasks.push(refreshLegal());
  if (!views.hasHistory) refreshTasks.push(refreshHistory());
  if (refreshTasks.length > 0) {
    await Promise.all(refreshTasks);
  }
  renderAll();
  logLine(`逆算遷移：${String(candidate?.label || "-")}`);
}

function reverseGetCachedResult(key) {
  if (!key || !reverseResultCache.has(key)) return null;
  const cached = reverseResultCache.get(key);
  // Refresh LRU order.
  reverseResultCache.delete(key);
  reverseResultCache.set(key, cached);
  return cached;
}

function reverseSetCachedResult(key, moves, status) {
  if (!key) return;
  reverseResultCache.set(key, {
    moves: Array.isArray(moves) ? moves : [],
    status: String(status || "-"),
  });
  while (reverseResultCache.size > REVERSE_RESULT_CACHE_MAX) {
    const oldest = reverseResultCache.keys().next();
    if (oldest.done) break;
    reverseResultCache.delete(oldest.value);
  }
}

function reverseGetPredecessorLegalGlobalCache(key) {
  if (!key || !reversePredecessorLegalGlobalCache.has(key)) return null;
  const cached = reversePredecessorLegalGlobalCache.get(key);
  // Refresh LRU order.
  reversePredecessorLegalGlobalCache.delete(key);
  reversePredecessorLegalGlobalCache.set(key, cached);
  return cached;
}

function reverseSetPredecessorLegalGlobalCache(key, value) {
  if (!key || !value || typeof value !== "object") return;
  reversePredecessorLegalGlobalCache.set(key, value);
  while (reversePredecessorLegalGlobalCache.size > REVERSE_PREDECESSOR_LEGAL_CACHE_MAX) {
    const oldest = reversePredecessorLegalGlobalCache.keys().next();
    if (oldest.done) break;
    reversePredecessorLegalGlobalCache.delete(oldest.value);
  }
}

function reverseCanUseWorker() {
  if (IS_WORKER_CONTEXT) return false;
  return typeof Worker !== "undefined";
}

function reverseNowMs() {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return Date.now();
}

function reverseFinalizeProfile(profile) {
  if (!profile || typeof profile !== "object") return profile;
  const total = Math.max(0, reverseNowMs() - Number(profile._start_ms || 0));
  const legal = Math.max(0, Number(profile.legal_compute_ms || 0));
  const match = Math.max(0, Number(profile.state_match_ms || 0));
  const gen = Math.max(0, total - legal - match);
  profile.total_ms = total;
  profile.generate_ms = gen;
  delete profile._start_ms;
  return profile;
}

function reverseLogComputeProfile(profile, source = "") {
  if (!REVERSE_PROFILE_LOG_ENABLED) return;
  if (!profile || typeof profile !== "object") return;
  const src = source ? `(${source})` : "";
  const n = (v) => Number(v || 0).toFixed(1);
  logLine(
    `逆算プロファイル${src}: total=${n(profile.total_ms)}ms / 生成=${n(profile.generate_ms)}ms / 合法手=${n(
      profile.legal_compute_ms
    )}ms / 一致照合=${n(profile.state_match_ms)}ms / 仮説=${Number(profile.hypothesis_count || 0)} / pre局面=${Number(
      profile.pre_eval_count || 0
    )}(hit:${Number(profile.pre_cache_hit || 0)} [L:${Number(profile.pre_cache_local_hit || 0)} G:${Number(
      profile.pre_cache_global_hit || 0
    )}], miss:${Number(profile.pre_cache_miss || 0)}) / legal走査=${Number(
      profile.legal_scanned || 0
    )} / matcher通過=${Number(profile.matcher_passed || 0)} / hint計算=${Number(
      profile.hinted_eval_count || 0
    )} / full計算=${Number(profile.full_eval_count || 0)} / 結果=${Number(
      profile.result_count || 0
    )} / skip(配置/前手王手/受玉非王手)=${Number(profile.skip_invalid_pre || 0)}/${Number(
      profile.skip_prev_mover_checked || 0
    )}/${Number(profile.skip_defender_not_checked || 0)} / ctx(t:${Number(profile.debug_current_turn ?? -1)},p:${Number(
      profile.debug_prev_turn ?? -1
    )},def:${Number(profile.debug_enforce_defender_checked ? 1 : 0)},fp:${Number(
      profile.debug_forward_ply ?? -1
    )},rply:${Number(profile.debug_reverse_ply ?? -1)},pp:${Number(profile.debug_problem_ply ?? -1)})${
      profile.limit_reached ? " / limit" : ""
    }`
  );
}

function reverseClearWorkerWatchdog() {
  if (reverseWorkerWatchdogTimer) {
    clearTimeout(reverseWorkerWatchdogTimer);
    reverseWorkerWatchdogTimer = null;
  }
}

function reverseClearWorkerPending() {
  reverseClearWorkerWatchdog();
  reverseWorkerPendingId = 0;
  reverseWorkerPendingKey = "";
  reverseWorkerPendingAt = 0;
}

function reverseFallbackComputeSync(reason = "") {
  let profile = null;
  try {
    profile = reverseComputeOnePlyCandidates();
  } catch (e) {
    reverseMoves = [];
    reverseStatusText = "逆算計算エラー";
    logLine(`逆算候補計算エラー：${e?.message || String(e)}`, true);
    return null;
  }
  if (reason) {
    logLine(`逆算Workerフォールバック：${reason}`);
  }
  reverseLogComputeProfile(profile, reason ? `sync:${reason}` : "sync");
  return profile;
}

function reverseInitWorker() {
  if (!reverseCanUseWorker()) return null;
  if (reverseWorker) return reverseWorker;
  try {
    const worker = new Worker(REVERSE_WORKER_SCRIPT);
    worker.addEventListener("message", (ev) => {
      const data = ev?.data && typeof ev.data === "object" ? ev.data : null;
      if (!data) return;
      const id = Number(data.id || 0);
      const key = String(data.key || "");
      if (!id || !key) return;
      if (id !== reverseWorkerPendingId) return;
      if (key !== reverseWorkerPendingKey) return;
      reverseClearWorkerPending();
      const ok = data.ok !== false;
      if (ok) {
        reverseMoves = Array.isArray(data.moves) ? data.moves : [];
        reverseStatusText = String(data.status || "-");
        reverseLogComputeProfile(data.profile || null, "worker");
      } else {
        reverseMoves = [];
        reverseStatusText = "逆算計算エラー";
        logLine(`逆算候補計算エラー：${String(data.error || "worker error")}`, true);
      }
      reverseSetCachedResult(key, reverseMoves, reverseStatusText);
      if (isReverseSubModeActive() && reverseBuildCacheKey() === key) {
        renderLegalList();
      }
    });
    worker.addEventListener("error", (ev) => {
      logLine(`逆算Workerエラー：${ev?.message || "unknown"}`, true);
      const key = String(reverseWorkerPendingKey || "");
      reverseClearWorkerPending();
      reverseWorker = null;
      if (key) {
        reverseFallbackComputeSync("worker error");
        reverseSetCachedResult(key, reverseMoves, reverseStatusText);
        if (isReverseSubModeActive() && reverseBuildCacheKey() === key) {
          renderLegalList();
        }
      }
    });
    worker.addEventListener("messageerror", () => {
      const key = String(reverseWorkerPendingKey || "");
      logLine("逆算Worker通信エラー", true);
      reverseClearWorkerPending();
      reverseWorker = null;
      if (key) {
        reverseFallbackComputeSync("worker messageerror");
        reverseSetCachedResult(key, reverseMoves, reverseStatusText);
        if (isReverseSubModeActive() && reverseBuildCacheKey() === key) {
          renderLegalList();
        }
      }
    });
    reverseWorker = worker;
  } catch (e) {
    logLine(`逆算Worker初期化失敗：${e?.message || String(e)}`, true);
    reverseWorker = null;
  }
  return reverseWorker;
}

function reverseHasPseudoTarget(prePieces, piece, to, promote, rules, neutralTurnOwner = null) {
  if (!piece || !to) return false;
  if (localSkipBoardMoveGenerationForPiece(piece)) return false;
  const moveOptions = { mode: "move" };
  if (neutralTurnOwner === 0 || neutralTurnOwner === 1) {
    moveOptions.orientationOwner = Number(neutralTurnOwner);
    moveOptions.neutralTurnOwner = Number(neutralTurnOwner);
  }
  const targets = localGenerateTargetsForPiece(prePieces || [], piece, rules || {}, moveOptions);
  for (const t of targets || []) {
    if (Number(t?.x) !== Number(to.x) || Number(t?.y) !== Number(to.y)) continue;
    // localGenerateTargetsForPiece() は promote 情報を持たないため、
    // ここでは座標一致のみを疑似判定とし、成/不成の正否は後段の合法手照合で確定する。
    return true;
  }
  return false;
}

function reverseHasInvalidPreStatePlacement(prePieces, rules = {}) {
  const pieces = Array.isArray(prePieces) ? prePieces : [];

  // 行き所のない駒（ルール上の死に駒制約があるとき）
  if (localHasDeadZoneRestriction(rules)) {
    for (const p of pieces) {
      if (!p) continue;
      const owner = Number(p.owner);
      if (owner !== 0 && owner !== 1) continue;
      if (localIsDeadZoneByRules(String(p.name || ""), owner, Number(p.y), rules)) {
        return true;
      }
    }
  }

  // 二歩（受攻それぞれ同一筋の「歩」は1枚まで）
  const fuFileCount = new Map();
  for (const p of pieces) {
    if (!p || String(p.name || "") !== "歩") continue;
    const owner = Number(p.owner);
    if (owner !== 0 && owner !== 1) continue;
    const x = Number(p.x);
    const key = `${owner}:${x}`;
    const next = (fuFileCount.get(key) || 0) + 1;
    if (next >= 2) return true;
    fuFileCount.set(key, next);
  }

  return false;
}

function reverseAnalysisEnabledForCurrentState() {
  return Boolean(state && state.mode === "play");
}

function reverseBuildCacheKey() {
  if (!sessionId || !state) return "";
  const ctx = reverseResolveComputeContext();
  const startTurn = reverseNormalizeStartTurn(ctx?.start_turn, state?.turn);
  const forwardPlyRaw = Number.parseInt(ctx?.current_forward_ply, 10);
  const forwardPly = Number.isFinite(forwardPlyRaw) && forwardPlyRaw >= 0 ? forwardPlyRaw : "-";
  return `${REVERSE_PRE_LEGAL_CACHE_VERSION}:${sessionId}:${Number(revision || 0)}:${state.mode || ""}:${Number(
    state.turn || 0
  )}:${String(
    state?.rules?.strategy || ""
  )}:${startTurn}:${forwardPly}`;
}

function ensureReverseMovesForCurrentState() {
  if (!isReverseSubModeActive()) return;
  const reverseKey = reverseBuildCacheKey();
  if (!reverseKey) {
    reverseMoves = [];
    reverseStatusText = "-";
    reverseCacheKey = "";
    return;
  }
  if (reverseKey === reverseCacheKey) return;
  reverseCacheKey = reverseKey;
  const cached = reverseGetCachedResult(reverseKey);
  if (cached) {
    reverseMoves = Array.isArray(cached.moves) ? cached.moves : [];
    reverseStatusText = String(cached.status || "-");
    return;
  }
  const canUseWorker = reverseCanUseWorker();
  if (canUseWorker) {
    // 同一キー計算中は再投入しない。タイムアウト時のみ再投入可。
    if (reverseWorkerPendingKey === reverseKey && reverseWorkerPendingId > 0) {
      const elapsed = Date.now() - Number(reverseWorkerPendingAt || 0);
      if (elapsed < REVERSE_WORKER_TIMEOUT_MS) {
        reverseMoves = [];
        reverseStatusText = "計算中...";
        return;
      }
      reverseClearWorkerPending();
    }
    const worker = reverseInitWorker();
    if (worker) {
      reverseMoves = [];
      reverseStatusText = "計算中...";
      const reqId = reverseWorkerReqSeq++;
      reverseWorkerPendingId = reqId;
      reverseWorkerPendingKey = reverseKey;
      reverseWorkerPendingAt = Date.now();
      try {
        reverseClearWorkerWatchdog();
        reverseWorkerWatchdogTimer = setTimeout(() => {
          if (reverseWorkerPendingId !== reqId) return;
          if (reverseWorkerPendingKey !== reverseKey) return;
          const key = String(reverseWorkerPendingKey || "");
          reverseClearWorkerPending();
          if (reverseWorker) {
            try {
              reverseWorker.terminate();
            } catch (_e) {
              // noop
            }
            reverseWorker = null;
          }
          if (key) {
            reverseFallbackComputeSync("worker timeout");
            reverseSetCachedResult(key, reverseMoves, reverseStatusText);
            if (isReverseSubModeActive() && reverseBuildCacheKey() === key) {
              renderLegalList();
            }
          }
        }, REVERSE_WORKER_TIMEOUT_MS);
        worker.postMessage({
          id: reqId,
          key: reverseKey,
          session_id: String(sessionId || ""),
          revision: Number(revision || 0),
          state: cloneJson(state),
          display_names: cloneJson(displayNames && typeof displayNames === "object" ? displayNames : {}),
          reverse_context: reverseBuildWorkerContextSnapshot(),
        });
        return;
      } catch (e) {
        logLine(`逆算Worker送信失敗：${e?.message || String(e)}`, true);
        reverseClearWorkerPending();
      }
    }
  }
  try {
    const profile = reverseComputeOnePlyCandidates();
    reverseLogComputeProfile(profile, "sync");
    reverseSetCachedResult(reverseKey, reverseMoves, reverseStatusText);
  } catch (e) {
    reverseMoves = [];
    reverseStatusText = "逆算計算エラー";
    reverseSetCachedResult(reverseKey, reverseMoves, reverseStatusText);
    logLine(`逆算候補計算エラー：${e?.message || String(e)}`, true);
  }
}

function reverseNormalizePieceForCompare(piece, typeAttrsOrCtx = null) {
  const rawAttrs = localCloneRawPieceAttrs(piece?.attrs);
  const effAttrs = localEffectivePieceAttrs(
    {
      name: String(piece?.name || ""),
      attrs: rawAttrs,
    },
    typeAttrsOrCtx
  );
  return {
    x: Number(piece?.x),
    y: Number(piece?.y),
    owner: Number(piece?.owner),
    name: String(piece?.name || ""),
    attrs: effAttrs,
  };
}

function reversePiecesSignature(pieces, typeAttrsOrCtx = null) {
  const list = Array.isArray(pieces)
    ? pieces.map((p) => {
        const np = reverseNormalizePieceForCompare(p, typeAttrsOrCtx);
        const attrsSig = JSON.stringify(np.attrs);
        return {
          ...np,
          _attrsSig: attrsSig,
        };
      })
    : [];
  list.sort((a, b) => {
    if (a.y !== b.y) return a.y - b.y;
    if (a.x !== b.x) return a.x - b.x;
    if (a.owner !== b.owner) return a.owner - b.owner;
    const na = String(a.name || "");
    const nb = String(b.name || "");
    const nc = na < nb ? -1 : na > nb ? 1 : 0;
    if (nc !== 0) return nc;
    const aa = String(a._attrsSig || "");
    const bb = String(b._attrsSig || "");
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
  return list.map((p) => `${p.x},${p.y},${p.owner},${p.name},${p._attrsSig || ""}`).join("|");
}

function reverseHandsSignature(hands) {
  const sideSig = (owner) => {
    const arr = Array.isArray(hands?.[String(owner)]) ? hands[String(owner)] : [];
    const counts = new Map();
    for (const n of arr) counts.set(String(n || ""), (counts.get(String(n || "")) || 0) + 1);
    return Array.from(counts.entries())
      .sort((a, b) => {
        const sa = String(a[0] || "");
        const sb = String(b[0] || "");
        return sa < sb ? -1 : sa > sb ? 1 : 0;
      })
      .map(([name, cnt]) => `${name}:${cnt}`)
      .join(",");
  };
  return `0=${sideSig(0)}|1=${sideSig(1)}`;
}

function reverseBuildStateSignatureForCompare(boardPieces, hands, turn, typeAttrsOrCtx = null) {
  return `${reversePiecesSignature(boardPieces, typeAttrsOrCtx)}||${reverseHandsSignature(hands)}||t=${Number(turn)}`;
}

function reversePieceCompareKeyFromNormalized(p) {
  if (!p) return "";
  const attrsObj = p.attrs && typeof p.attrs === "object" ? p.attrs : {};
  const attrsSig = Object.keys(attrsObj).length > 0 ? JSON.stringify(attrsObj) : "";
  return `${Number(p.x)},${Number(p.y)},${Number(p.owner)},${String(p.name || "")},${attrsSig}`;
}

function reversePieceCompareKey(piece, typeAttrsOrCtx = null) {
  const np = reverseNormalizePieceForCompare(piece, typeAttrsOrCtx);
  return reversePieceCompareKeyFromNormalized(np);
}

function reverseHandCountsFast(hands, owner) {
  const arr = Array.isArray(hands?.[String(owner)]) ? hands[String(owner)] : [];
  const m = new Map();
  for (const n of arr) {
    const key = String(n || "");
    m.set(key, (m.get(key) || 0) + 1);
  }
  return m;
}

function reverseCountMapEquals(a, b) {
  if (!a || !b) return false;
  if (a.size !== b.size) return false;
  for (const [k, v] of a.entries()) {
    if ((b.get(k) || 0) !== v) return false;
  }
  return true;
}

function reverseBuildTargetStateComparator(boardPieces, hands, turn) {
  const pieces = Array.isArray(boardPieces) ? boardPieces : [];
  const pieceCounts = new Map();
  for (const p of pieces) {
    const key = reversePieceCompareKeyFromNormalized(p);
    if (!key) continue;
    pieceCounts.set(key, (pieceCounts.get(key) || 0) + 1);
  }
  return {
    __reverseTargetCmp: true,
    turn: Number(turn),
    pieceTotal: pieces.length,
    pieceCounts,
    hand0: reverseHandCountsFast(hands, 0),
    hand1: reverseHandCountsFast(hands, 1),
  };
}

function reverseStateMatchesTargetFast(simState, targetCmp, typeAttrsOrCtx = null) {
  if (!simState || !targetCmp || !targetCmp.__reverseTargetCmp) return false;
  if (Number(simState.turn) !== Number(targetCmp.turn)) return false;
  if (!reverseCountMapEquals(reverseHandCountsFast(simState.hands || {}, 0), targetCmp.hand0)) return false;
  if (!reverseCountMapEquals(reverseHandCountsFast(simState.hands || {}, 1), targetCmp.hand1)) return false;
  const pieces = Array.isArray(simState?.board?.pieces) ? simState.board.pieces : [];
  if (pieces.length !== Number(targetCmp.pieceTotal)) return false;
  const pieceCounts = new Map();
  for (const p of pieces) {
    const key = reversePieceCompareKey(p, typeAttrsOrCtx);
    if (!key) continue;
    pieceCounts.set(key, (pieceCounts.get(key) || 0) + 1);
  }
  return reverseCountMapEquals(pieceCounts, targetCmp.pieceCounts);
}

function reverseBuildPreStateQuickKey(boardPieces, hands, turn) {
  const pieces = Array.isArray(boardPieces) ? boardPieces : [];
  const pSig = pieces
    .map((p) => reversePieceCompareKeyFromNormalized(p))
    .filter((v) => Boolean(v))
    .sort()
    .join(";");
  const h0 = Array.isArray(hands?.["0"]) ? hands["0"].slice().map((v) => String(v || "")).sort().join(",") : "";
  const h1 = Array.isArray(hands?.["1"]) ? hands["1"].slice().map((v) => String(v || "")).sort().join(",") : "";
  return `${pSig}||0=${h0}|1=${h1}||t=${Number(turn)}`;
}

function reverseBuildRulesTypeQuickKey(rules, typeAttrs) {
  const ruleObj = rules && typeof rules === "object" ? rules : {};
  const typeObj = typeAttrs && typeof typeAttrs === "object" ? typeAttrs : {};
  // JSON 文字列化コストを抑えるため、キー名をソートして安定化した軽量シグネチャを作る。
  const ruleKeys = Object.keys(ruleObj).sort();
  const typeKeys = Object.keys(typeObj).sort();
  const r = ruleKeys.map((k) => `${k}=${JSON.stringify(ruleObj[k])}`).join("&");
  const t = typeKeys.map((k) => `${k}=${JSON.stringify(typeObj[k])}`).join("&");
  return `r:${r}||ta:${t}`;
}

function reverseMoveMatchesTargetState(prevPieces, prevHands, prevTurn, moveCand, rules, typeAttrsOrCtx, targetSig) {
  const simState = localSimulateStateAfterCandidate(prevPieces, prevHands, prevTurn, moveCand, rules, typeAttrsOrCtx);
  if (!simState) return false;
  if (targetSig && typeof targetSig === "object" && targetSig.__reverseTargetCmp) {
    return reverseStateMatchesTargetFast(simState, targetSig, typeAttrsOrCtx);
  }
  const sig = reverseBuildStateSignatureForCompare(
    simState?.board?.pieces || [],
    simState?.hands || {},
    simState?.turn,
    typeAttrsOrCtx
  );
  return sig === targetSig;
}

function reversePrevNameCandidates(piece, typeAttrsOrCtx = null) {
  const name = String(piece?.name || "");
  const out = [];
  const seen = new Set();
  const add = (candName, promote) => {
    const n = String(candName || "");
    if (!n) return;
    const key = `${n}|${promote ? 1 : 0}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ name: n, promote: Boolean(promote) });
  };

  add(name, false);

  // 標準成駒の逆変換
  if (PROMOTED_NAMES.has(name)) {
    const base = BASE_NAME_MAP[name];
    if (base && base !== name) add(base, true);
  }

  // カスタム成り設定(type_attrs)にも対応
  const typeAttrs = localResolveTypeAttrsMap(typeAttrsOrCtx);
  const candidateNames = new Set(Object.keys(LOCAL_PIECE_SPECS || {}));
  if (typeAttrs && typeof typeAttrs === "object") {
    for (const n of Object.keys(typeAttrs)) candidateNames.add(String(n || ""));
  }
  for (const srcName of candidateNames) {
    if (!srcName || srcName === name) continue;
    const promoteTo = localPiecePromoteTo(
      localAnnotatePieceEffectiveAttrs(
        {
          name: srcName,
          attrs: {},
        },
        typeAttrsOrCtx
      )
    );
    if (String(promoteTo || "") === name) {
      add(srcName, true);
    }
  }
  return out;
}

function reverseMinimizedRawAttrsForName(name, attrs, typeAttrsOrCtx = null) {
  const raw = localCloneRawPieceAttrs(attrs);
  const typeAttrs = localResolveTypeAttrsMap(typeAttrsOrCtx);
  const typePatch =
    typeAttrs && typeof typeAttrs === "object" && typeAttrs[name] && typeof typeAttrs[name] === "object"
      ? typeAttrs[name]
      : {};
  const base = localMergePieceAttrs(localDefaultPieceAttrs(name), typePatch);
  return localCollectChangedAttrsFromRaw(raw, base);
}

function reverseBeforeAttrsCandidatesForMove(movedNow, promote, typeAttrsOrCtx = null) {
  const movedName = String(movedNow?.name || "");
  const minimizedMovedAttrs = reverseMinimizedRawAttrsForName(movedName, movedNow?.attrs, typeAttrsOrCtx);
  if (!promote) {
    return [localCloneRawPieceAttrs(minimizedMovedAttrs)];
  }
  const out = [];
  const seen = new Set();
  const pushAttrs = (attrs) => {
    const normalized = localCloneRawPieceAttrs(attrs);
    const key = JSON.stringify(normalized);
    if (seen.has(key)) return;
    seen.add(key);
    out.push(normalized);
  };

  // 成り先既定属性を使う経路
  pushAttrs({});

  // 成り後属性を引き継ぐ経路（差分がある場合のみ）
  if (Object.keys(minimizedMovedAttrs).length > 0) {
    pushAttrs({ promote_attrs: minimizedMovedAttrs });
  }

  return out;
}

function reverseResolveBeforeAttrsForPreState(beforeAttrs, movedNow, typeAttrsOrCtx = null) {
  const out = localCloneRawPieceAttrs(beforeAttrs);
  const movedEff =
    movedNow?.effective_attrs && typeof movedNow.effective_attrs === "object"
      ? movedNow.effective_attrs
      : localEffectivePieceAttrs(movedNow, typeAttrsOrCtx);
  if (Boolean(movedEff?.is_king) && !localHasOwn(out, "is_king")) {
    out.is_king = true;
  }
  return out;
}

function reverseCaptureCandidateNames(typeAttrsOrCtx = null) {
  const out = new Set();
  for (const name of Object.keys(LOCAL_PIECE_SPECS || {})) {
    const nm = String(name || "").trim();
    if (!nm) continue;
    out.add(nm);
  }
  if (customPieceDirectSpecMap && typeof customPieceDirectSpecMap.keys === "function") {
    for (const name of customPieceDirectSpecMap.keys()) {
      const nm = String(name || "").trim();
      if (!nm) continue;
      out.add(nm);
    }
  }
  if (customPieceMoveLikeMap && typeof customPieceMoveLikeMap.keys === "function") {
    for (const name of customPieceMoveLikeMap.keys()) {
      const nm = String(name || "").trim();
      if (!nm) continue;
      out.add(nm);
    }
  }
  const typeAttrs = localResolveTypeAttrsMap(typeAttrsOrCtx);
  if (typeAttrs && typeof typeAttrs === "object") {
    for (const name of Object.keys(typeAttrs)) {
      const nm = String(name || "").trim();
      if (!nm) continue;
      out.add(nm);
    }
  }
  return Array.from(out.values());
}

function reverseIsNonCapturableName(name, typeAttrsOrCtx = null) {
  const nm = String(name || "").trim();
  if (!nm) return true;
  if (localIsNeutralImitatorName(nm) || nm === "石" || nm === "穴" || nm === "塔") return true;
  const eff = localEffectivePieceAttrs({ name: nm, attrs: {} }, typeAttrsOrCtx);
  return Boolean(eff?.is_king);
}

function reverseCaptureNamesByHandName(typeAttrsOrCtx = null) {
  const out = new Map();
  for (const name of reverseCaptureCandidateNames(typeAttrsOrCtx)) {
    if (reverseIsNonCapturableName(name, typeAttrsOrCtx)) continue;
    const probePiece = { name: String(name), owner: 0, attrs: {} };
    if (!localShouldCapturedGoToHand(probePiece, typeAttrsOrCtx)) continue;
    const handName = baseNameForHand(name);
    if (!out.has(handName)) out.set(handName, []);
    out.get(handName).push(String(name));
  }
  return out;
}

function reverseAllCapturablePieceNames(typeAttrsOrCtx = null) {
  const out = new Set();
  for (const name of reverseCaptureCandidateNames(typeAttrsOrCtx)) {
    if (reverseIsNonCapturableName(name, typeAttrsOrCtx)) continue;
    out.add(String(name));
  }
  return Array.from(out.values());
}

function reverseCapturableNamesForStandardBase(baseName, typeAttrsOrCtx = null) {
  const targetBase = String(baseName || "");
  if (!targetBase) return [];
  const out = [];
  for (const name of reverseCaptureCandidateNames(typeAttrsOrCtx)) {
    if (reverseIsNonCapturableName(name, typeAttrsOrCtx)) continue;
    if (String(standardBaseName(name)) !== targetBase) continue;
    out.push(String(name));
  }
  out.sort((a, b) => a.localeCompare(b, "ja"));
  return out;
}

function reverseStepVectorForAlignedLine(from, to) {
  const fx = Number(from?.x);
  const fy = Number(from?.y);
  const tx = Number(to?.x);
  const ty = Number(to?.y);
  const dx = tx - fx;
  const dy = ty - fy;
  if (dx === 0 && dy === 0) return null;
  const sx = dx === 0 ? 0 : dx > 0 ? 1 : -1;
  const sy = dy === 0 ? 0 : dy > 0 ? 1 : -1;
  if (!(dx === 0 || dy === 0 || Math.abs(dx) === Math.abs(dy))) return null;
  return { sx, sy };
}

function reverseCaptureSquaresForMoveFromTo(from, to) {
  const out = [];
  const seen = new Set();
  const push = (x, y) => {
    const nx = Number(x);
    const ny = Number(y);
    if (!localInBoard(nx, ny)) return;
    const key = `${nx},${ny}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ x: nx, y: ny });
  };

  // 通常捕獲は着地点上の駒。
  push(to?.x, to?.y);

  // Locust など「着地点以外を取る」系も拾えるよう、1マス手前を候補に含める。
  const step = reverseStepVectorForAlignedLine(from, to);
  if (step) {
    const cx = Number(to?.x) - step.sx;
    const cy = Number(to?.y) - step.sy;
    if (!(cx === Number(from?.x) && cy === Number(from?.y))) push(cx, cy);
  }

  return out;
}

function reverseTakeMakeStepSquaresForSource(prePieces, movingPiece, rules = {}, neutralTurnOwner = null) {
  if (!movingPiece) return [];
  if (localSkipBoardMoveGenerationForPiece(movingPiece)) return [];
  const srcX = Number(movingPiece.x);
  const srcY = Number(movingPiece.y);
  if (!localInBoard(srcX, srcY)) return [];
  const moveOptions = { mode: "move" };
  if (neutralTurnOwner === 0 || neutralTurnOwner === 1) {
    moveOptions.orientationOwner = Number(neutralTurnOwner);
    moveOptions.neutralTurnOwner = Number(neutralTurnOwner);
  }
  const targets = localGenerateTargetsForPiece(prePieces || [], movingPiece, rules || {}, moveOptions);
  const out = [];
  const seen = new Set();
  for (const t of targets || []) {
    const tx = Number(t?.x);
    const ty = Number(t?.y);
    if (!localInBoard(tx, ty)) continue;
    if (tx === srcX && ty === srcY) continue;
    const key = `${tx},${ty}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ x: tx, y: ty });
  }
  return out;
}

function reverseCaptureSquaresForMoveWithRules(
  from,
  to,
  rules = {},
  prePieces = [],
  movingPiece = null,
  neutralTurnOwner = null
) {
  const base = reverseCaptureSquaresForMoveFromTo(from, to);
  if (!localIsTakeMakeActive(rules)) return base;
  const out = [];
  const seen = new Set();
  const push = (x, y) => {
    const nx = Number(x);
    const ny = Number(y);
    if (!localInBoard(nx, ny)) return;
    if (Number(from?.x) === nx && Number(from?.y) === ny) return;
    const key = `${nx},${ny}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ x: nx, y: ny });
  };
  for (const sq of base) {
    push(sq?.x, sq?.y);
  }
  const steps = reverseTakeMakeStepSquaresForSource(prePieces, movingPiece, rules, neutralTurnOwner);
  for (const step of steps) {
    push(step?.x, step?.y);
    // Locust など「着地地点と捕獲地点が異なる」系も候補化する。
    const caps = reverseCaptureSquaresForMoveFromTo(from, step);
    for (const cap of caps) push(cap?.x, cap?.y);
  }
  return out;
}

function reverseHasPseudoTakeMakeTarget(
  prePieces,
  movingPiece,
  to,
  captureAt,
  capturedPiece,
  rules = {},
  typeAttrsOrCtx = null,
  neutralTurnOwner = null
) {
  if (!localIsTakeMakeActive(rules)) return false;
  if (!movingPiece || !capturedPiece || !to || !captureAt) return false;
  if (!localInBoard(captureAt.x, captureAt.y) || !localInBoard(to.x, to.y)) return false;
  const from = { x: Number(movingPiece.x), y: Number(movingPiece.y) };
  const stepsRaw = reverseTakeMakeStepSquaresForSource(prePieces, movingPiece, rules, neutralTurnOwner);
  const steps = [];
  const seen = new Set();
  const pushStep = (x, y) => {
    const nx = Number(x);
    const ny = Number(y);
    if (!localInBoard(nx, ny)) return;
    const key = `${nx},${ny}`;
    if (seen.has(key)) return;
    seen.add(key);
    steps.push({ x: nx, y: ny });
  };
  for (const s of stepsRaw) pushStep(s?.x, s?.y);
  // 通常捕獲（capture_at=step_to）も拾えるように明示的に含める。
  pushStep(captureAt.x, captureAt.y);

  for (const stepTo of steps) {
    const capCandidates = reverseCaptureSquaresForMoveFromTo(from, stepTo);
    const captureMatch = capCandidates.some(
      (sq) => Number(sq?.x) === Number(captureAt.x) && Number(sq?.y) === Number(captureAt.y)
    );
    if (!captureMatch) continue;
    const cont = localBuildTakeMakeContinuationSquares(
      prePieces || [],
      movingPiece,
      stepTo,
      captureAt,
      capturedPiece,
      rules,
      {
        movingSource: from,
        capturedMoveName: String(capturedPiece?.name || ""),
        typeAttrsOrCtx,
      }
    );
    if (cont.some((sq) => Number(sq?.x) === Number(to.x) && Number(sq?.y) === Number(to.y))) {
      return true;
    }
  }
  return false;
}

function reverseRifleCaptureSquaresFromSource(source) {
  const sx = Number(source?.x);
  const sy = Number(source?.y);
  if (!localInBoard(sx, sy)) return [];
  const out = [];
  for (let y = 0; y < 9; y += 1) {
    for (let x = 0; x < 9; x += 1) {
      if (x === sx && y === sy) continue;
      out.push({ x, y });
    }
  }
  return out;
}

function reverseHasDynamicMoveChangeRule(rules = {}) {
  // 盤上配置で駒性能が変わるルール群。
  // これらが有効なときは source 逆推定を広く取り、取りこぼしを避ける。
  return Boolean(
    rules?.annan ||
      rules?.anpoku ||
      rules?.haimen ||
      rules?.taimen ||
      rules?.tenkyo ||
      rules?.nekoneko ||
      rules?.madrasi ||
      rules?.k_madrasi ||
      rules?.tenjiku
  );
}

function reverseStaticFromCandidatesBySpec(spec, owner, to, occupiedNow, outSet) {
  if (!spec || !to || !outSet) return false;
  const tx = Number(to.x);
  const ty = Number(to.y);
  if (!localInBoard(tx, ty)) return false;
  const vectors = Array.isArray(spec.vectors) ? spec.vectors : [];

  if (spec.type === "zero") {
    // Zero(零): 同一マス移動。逆算では from==to を候補に含める。
    outSet.add(`${tx},${ty}`);
    return true;
  }

  if (spec.type === "step") {
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(owner, vec);
      const fx = tx - dx;
      const fy = ty - dy;
      if (!localInBoard(fx, fy)) continue;
      const key = `${fx},${fy}`;
      if (occupiedNow.has(key)) continue;
      outSet.add(key);
    }
    return true;
  }

  if (spec.type === "slide") {
    for (const vec of vectors) {
      const [dx, dy] = localMoveVecForOwner(owner, vec);
      if (dx === 0 && dy === 0) continue;
      let fx = tx - dx;
      let fy = ty - dy;
      while (localInBoard(fx, fy)) {
        const key = `${fx},${fy}`;
        if (occupiedNow.has(key)) break;
        outSet.add(key);
        fx -= dx;
        fy -= dy;
      }
    }
    return true;
  }

  if (spec.type === "area2") {
    for (let dy = -2; dy <= 2; dy += 1) {
      for (let dx = -2; dx <= 2; dx += 1) {
        if (dx === 0 && dy === 0) continue;
        const fx = tx - dx;
        const fy = ty - dy;
        if (!localInBoard(fx, fy)) continue;
        const key = `${fx},${fy}`;
        if (occupiedNow.has(key)) continue;
        outSet.add(key);
      }
    }
    return true;
  }

  if (spec.type === "mixed") {
    const parts = Array.isArray(spec.parts) ? spec.parts : [];
    if (parts.length <= 0) return false;
    for (const part of parts) {
      if (!part) return false;
      if (!reverseStaticFromCandidatesBySpec(part, owner, to, occupiedNow, outSet)) {
        return false;
      }
    }
    return true;
  }

  return false;
}

function reverseGenerateFromCandidatesStatic(beforeName, owner, to, occupiedNow, rules = {}) {
  if (reverseHasDynamicMoveChangeRule(rules)) return null;
  if (localIsFriendMoveName(beforeName)) return null;
  const spec = localPieceSpec(String(beforeName || ""));
  if (!spec) return null;
  const outSet = new Set();
  const ok = reverseStaticFromCandidatesBySpec(spec, Number(owner), to, occupiedNow, outSet);
  if (!ok) return null;
  const out = [];
  for (const key of outSet) {
    const [sx, sy] = String(key).split(",");
    const x = Number(sx);
    const y = Number(sy);
    if (!localInBoard(x, y)) continue;
    out.push({ x, y });
  }
  return out;
}

function reverseCirceRebirthSquaresByRule(pieceName, owner, capturePos) {
  const baseName = standardBaseName(pieceName);
  const startsRaw = LOCAL_CIRCE_START_POS_SENTE[baseName];
  if (!Array.isArray(startsRaw) || startsRaw.length <= 0) return [];
  const cap = capturePos ? { x: Number(capturePos.x), y: Number(capturePos.y) } : null;
  if (!cap || !localInBoard(cap.x, cap.y)) return [];
  let starts = startsRaw.map((v) => ({ x: Number(v[0]), y: Number(v[1]) }));
  if (Number(owner) === 1) {
    starts = starts.map((s) => ({ x: 8 - s.x, y: 8 - s.y }));
  }
  if (baseName === "歩") {
    starts = starts.filter((s) => Number(s.x) === Number(cap.x));
  }
  if (starts.length <= 0) return [];
  const dists = starts.map((s) => ({
    s,
    d: Math.abs(Number(cap.x) - Number(s.x)) + Math.abs(Number(cap.y) - Number(s.y)),
  }));
  const minDist = Math.min(...dists.map((v) => Number(v.d)));
  return dists.filter((v) => Number(v.d) === Number(minDist)).map((v) => ({ x: Number(v.s.x), y: Number(v.s.y) }));
}

function reverseCirceNoHandCaptureNameCandidates(pieces, capturedOwner, capturePos, typeAttrsOrCtx = null) {
  const out = new Set();
  const src = Array.isArray(pieces) ? pieces : [];
  const ownerNum = Number(capturedOwner);
  const cap = capturePos ? { x: Number(capturePos.x), y: Number(capturePos.y) } : null;
  if (!cap || !localInBoard(cap.x, cap.y)) return [];
  for (const p of src) {
    if (!p) continue;
    if (Number(p.owner) !== ownerNum) continue;
    if (localPieceIsKing(p)) continue;
    const base = standardBaseName(String(p.name || ""));
    if (!base) continue;
    if (reverseIsNonCapturableName(base, typeAttrsOrCtx)) {
      continue;
    }
    const rebirthSquares = reverseCirceRebirthSquaresByRule(base, ownerNum, cap);
    if (
      rebirthSquares.some((sq) => Number(sq.x) === Number(p.x) && Number(sq.y) === Number(p.y))
    ) {
      const variants = reverseCapturableNamesForStandardBase(base, typeAttrsOrCtx);
      if (variants.length > 0) {
        for (const cand of variants) out.add(String(cand));
      } else {
        out.add(base);
      }
    }
  }
  return Array.from(out.values());
}

function reverseMoveCapturesKingFromPre(prePieces, move, typeAttrsOrCtx = null) {
  if (!move || move.kind !== "move" || !move.capture) return false;
  const src = Array.isArray(prePieces) ? prePieces : [];
  const moverOwner = Number(move.owner);
  const capPos =
    move?.take_make?.capture_at && localInBoard(Number(move.take_make.capture_at.x), Number(move.take_make.capture_at.y))
      ? { x: Number(move.take_make.capture_at.x), y: Number(move.take_make.capture_at.y) }
      : move?.locust_capture && localInBoard(Number(move.locust_capture.x), Number(move.locust_capture.y))
      ? { x: Number(move.locust_capture.x), y: Number(move.locust_capture.y) }
      : move?.to && localInBoard(Number(move.to.x), Number(move.to.y))
      ? { x: Number(move.to.x), y: Number(move.to.y) }
      : null;
  if (!capPos) return false;
  const cap = src.find((p) => p && Number(p.x) === Number(capPos.x) && Number(p.y) === Number(capPos.y));
  if (!cap) return false;
  if (Number(cap.owner) === Number(moverOwner)) return false;
  return localPieceIsKing(localAnnotatePieceEffectiveAttrs({ ...cap, attrs: localCloneRawPieceAttrs(cap?.attrs) }, typeAttrsOrCtx));
}

function reverseComputeOnePlyCandidates(options = {}) {
  const opt = options && typeof options === "object" ? options : {};
  const relaxPredecessorCheckPolicy = Boolean(opt.relaxPredecessorCheckPolicy);
  const profile = {
    _start_ms: reverseNowMs(),
    legal_compute_ms: 0,
    state_match_ms: 0,
    hypothesis_count: 0,
    pre_eval_count: 0,
    pre_cache_hit: 0,
    pre_cache_miss: 0,
    pre_cache_local_hit: 0,
    pre_cache_global_hit: 0,
    legal_scanned: 0,
    matcher_passed: 0,
    hinted_eval_count: 0,
    full_eval_count: 0,
    result_count: 0,
    limit_reached: false,
    skip_invalid_pre: 0,
    skip_prev_mover_checked: 0,
    skip_defender_not_checked: 0,
  };
  reverseMoves = [];
  reverseStatusText = "-";
  if (!state || state.mode !== "play") {
    reverseStatusText = "検討モードのみ";
    return reverseFinalizeProfile(profile);
  }
  const rules = state?.rules && typeof state.rules === "object" ? cloneJson(state.rules) : {};
  const typeAttrs = state?.type_attrs && typeof state.type_attrs === "object" ? cloneJson(state.type_attrs) : {};
  const reverseCtx = reverseResolveComputeContext();
  const reverseStartTurn = reverseNormalizeStartTurn(reverseCtx?.start_turn, state?.turn);
  const reverseNode = reverseCurrentNode();
  const reverseNodePlyRaw = Number.parseInt(reverseNode?.ply, 10);
  const reverseNodePly = Number.isFinite(reverseNodePlyRaw) && reverseNodePlyRaw >= 0 ? reverseNodePlyRaw : 0;
  const flowForwardPlyRaw = Number.parseInt(reverseCtx?.current_forward_ply, 10);
  const flowForwardPly = Number.isFinite(flowForwardPlyRaw) && flowForwardPlyRaw >= 0 ? flowForwardPlyRaw : null;
  const nodeForwardPlyRaw = Number.parseInt(reverseNode?.forward_ply, 10);
  const nodeForwardPly = Number.isFinite(nodeForwardPlyRaw) && nodeForwardPlyRaw >= 0 ? nodeForwardPlyRaw : null;
  const ruleProblemPlyRaw = Number.parseInt(rules?.problem_ply, 10);
  const ruleProblemPly = Number.isFinite(ruleProblemPlyRaw) && ruleProblemPlyRaw >= 0 ? ruleProblemPlyRaw : null;
  let currentForwardPly = nodeForwardPly;
  if (currentForwardPly === null && Number.isFinite(flowForwardPly) && flowForwardPly >= 0) {
    currentForwardPly = flowForwardPly;
  }
  if (currentForwardPly === null && Number.isFinite(ruleProblemPly)) {
    currentForwardPly = Math.max(0, Number(ruleProblemPly) - reverseNodePly);
  }
  if (Number.isFinite(ruleProblemPly)) {
    const byRule = Math.max(0, Number(ruleProblemPly) - reverseNodePly);
    if (
      currentForwardPly === null ||
      (Number(currentForwardPly) === 0 && byRule > 0 && reverseNodePly < Number(ruleProblemPly))
    ) {
      currentForwardPly = byRule;
    }
  }
  // 逆算候補の手番は、常に現在局面 state.turn を正とする。
  // （forward_ply 由来の推定は、受先初手例外判定のみで使う）
  const currentTurn = Number(state?.turn) === 1 ? 1 : 0;
  const prevTurn = currentTurn === 0 ? 1 : 0;
  // 逆算 pre局面でも「直前着手側(=非手番側)が王手状態」は通常は王手放置になるため除外する。
  const enforceNoCheckedPreviousMoverKing =
    !relaxPredecessorCheckPolicy &&
    !Boolean(rules?.allow_check_on_self);
  const reverseObjective = String(rules?.objective || "詰");
  const reverseObjectiveRequiresCheckObligation =
    reverseObjective === "詰" || reverseObjective === "自玉詰";
  const requireDefenderCheckedBeforeDefenderMove = reverseObjectiveRequiresCheckObligation;
  const requireAttackerCheckingMove =
    reverseObjectiveRequiresCheckObligation &&
    !relaxPredecessorCheckPolicy &&
    !Boolean(rules?.allow_sente_non_check);
  // 受先の初手逆算例外:
  // 逆算後に規定手数の開始局面へ到達する手(=現在forward手数が1)のみ、受方王手必須を外す。
  const allowUncheckedDefenderAtOpening =
    Number(prevTurn) === 1 && Number.isFinite(currentForwardPly) && Number(currentForwardPly) === 1;
  // 規定手数ちょうどまで逆算した境界（reverse ply === problem_ply）では、
  // 受方手の逆算候補に限り王手必須を一度だけ外す。
  const allowUncheckedDefenderAtConfiguredBoundary =
    Number(prevTurn) === 1 &&
    Number.isFinite(ruleProblemPly) &&
    Number(reverseNodePly) + 1 === Number(ruleProblemPly);
  const allowUncheckedDefenderForThisStep =
    allowUncheckedDefenderAtOpening || allowUncheckedDefenderAtConfiguredBoundary;
  const enforceCheckedDefenderBeforeDefenderMove =
    requireDefenderCheckedBeforeDefenderMove &&
    !relaxPredecessorCheckPolicy &&
    !Boolean(rules?.allow_sente_non_check) &&
    !Boolean(rules?.allow_check_on_self) &&
    Number(prevTurn) === 1 &&
    !allowUncheckedDefenderForThisStep;
  profile.debug_current_turn = Number(currentTurn);
  profile.debug_prev_turn = Number(prevTurn);
  profile.debug_enforce_defender_checked = Boolean(enforceCheckedDefenderBeforeDefenderMove);
  profile.debug_forward_ply = Number.isFinite(currentForwardPly) ? Number(currentForwardPly) : null;
  profile.debug_reverse_ply = Number(reverseNodePly);
  profile.debug_problem_ply = Number.isFinite(ruleProblemPly) ? Number(ruleProblemPly) : null;
  const predecessorPolicyKey = [
    enforceNoCheckedPreviousMoverKing ? "pmok" : "pm__",
    enforceCheckedDefenderBeforeDefenderMove ? "def1" : "def_",
  ].join("|");
  const currentPieces = Array.isArray(state?.board?.pieces)
    ? state.board.pieces.map((p) => reverseNormalizePieceForCompare(p, typeAttrs))
    : [];
  const currentHands = localCloneHands(state?.hands || {});
  const currentSig = reverseBuildTargetStateComparator(currentPieces, currentHands, currentTurn);
  const occupiedNow = new Set(currentPieces.map((p) => `${p.x},${p.y}`));
  const captureNameMap = reverseCaptureNamesByHandName(typeAttrs);
  const allCapturableNames = reverseAllCapturablePieceNames(typeAttrs);
  const noHandCaptureNeededByRules = Boolean(rules?.circe) || Boolean(rules?.pwc);
  const noHandCaptureNeededByAttrs = currentPieces.some((p) => {
    if (!p) return false;
    const owner = Number(p.owner);
    if (owner !== 0 && owner !== 1) return false;
    const name = String(p.name || "");
    if (!name) return false;
    const eff = localEffectivePieceAttrs(p, typeAttrs);
    if (Boolean(eff?.is_king) || localIsNeutralImitatorName(name) || name === "石" || name === "穴" || name === "塔") {
      return false;
    }
    return !localShouldCapturedGoToHand(p, typeAttrs);
  });
  const enableNoHandCaptureHypothesis = noHandCaptureNeededByRules || noHandCaptureNeededByAttrs;
  const reverseFastTargetHintEnabled = !(
    Boolean(rules?.greedy) || Boolean(rules?.abstinence) || Boolean(rules?.maxi) || Boolean(rules?.mini)
  );
  const seen = new Set();
  const results = [];
  const predecessorLegalCache = new Map();
  const rulesTypeKey = reverseBuildRulesTypeQuickKey(rules, typeAttrs);
  let evalCount = 0;
  const evalLimit = 9000;
  let limitReached = false;

  const pushResult = (mv, prePieces, preHands, captureNameHint = "") => {
    if (!mv) return;
    const key = [
      String(mv.kind || ""),
      Number(mv.owner),
      String(mv.name || ""),
      mv.from ? `${mv.from.x},${mv.from.y}` : "-",
      mv.to ? `${mv.to.x},${mv.to.y}` : "-",
      mv.promote ? "1" : "0",
      mv.rebirth ? `${mv.rebirth.x},${mv.rebirth.y}` : "-",
      String(mv.notation || ""),
      String(captureNameHint || ""),
    ].join("|");
    if (seen.has(key)) return;
    seen.add(key);
    const prePieceMap = localPieceMapFromList(prePieces || []);
    const label = formatReverseMoveLabel(mv, prePieceMap, captureNameHint, { turn: prevTurn, rules });
    results.push({
      ...mv,
      label,
      trail_label: label,
      captured_name_hint: String(captureNameHint || ""),
      pre_state: {
        mode: "play",
        turn: prevTurn,
        board: {
          width: 9,
          height: 9,
          pieces: (prePieces || []).map((p) => reverseNormalizePieceForCompare(p, typeAttrs)),
        },
        hands: localCloneHands(preHands || {}),
        rules: cloneJson(rules),
        type_attrs: cloneJson(typeAttrs),
      },
    });
  };

  const evaluatePredecessor = (prePieces, preHands, matcher, captureNameHint = "", targetHint = null) => {
    profile.hypothesis_count += 1;
    const hintKey = targetHint
      ? [
          String(targetHint.kind || ""),
          Number(targetHint.owner),
          String(targetHint.name || ""),
          targetHint.from ? `${Number(targetHint.from.x)},${Number(targetHint.from.y)}` : "-",
          targetHint.to ? `${Number(targetHint.to.x)},${Number(targetHint.to.y)}` : "-",
          typeof targetHint.promote === "boolean" ? (targetHint.promote ? "1" : "0") : "-",
        ].join(":")
      : "-";
    const preKey = `${REVERSE_PRE_LEGAL_CACHE_VERSION}|${rulesTypeKey}|${predecessorPolicyKey}|${reverseBuildPreStateQuickKey(
      prePieces,
      preHands,
      prevTurn
    )}|${hintKey}`;
    const preState = {
      mode: "play",
      turn: prevTurn,
      // prePieces はこの時点で reverseNormalizePieceForCompare 済み
      board: { width: 9, height: 9, pieces: prePieces },
      // preHands も呼び出し側で確定済みのため参照を使い、必要箇所のみ clone する
      hands: preHands,
      rules,
    };
    let cached = predecessorLegalCache.get(preKey) || null;
    if (!cached) {
      const globalCached = reverseGetPredecessorLegalGlobalCache(preKey);
      if (globalCached) {
        cached = globalCached;
        predecessorLegalCache.set(preKey, cached);
        profile.pre_cache_hit += 1;
        profile.pre_cache_global_hit += 1;
      }
    } else {
      profile.pre_cache_hit += 1;
      profile.pre_cache_local_hit += 1;
    }
    if (!cached) {
      profile.pre_cache_miss += 1;
      if (limitReached) return;
      evalCount += 1;
      profile.pre_eval_count += 1;
      if (evalCount > evalLimit) {
        limitReached = true;
        return;
      }
      if (reverseHasInvalidPreStatePlacement(preState.board.pieces, rules)) {
        cached = { skip: true, legal: [], reason: "invalid" };
      } else {
        const tLegalStart = reverseNowMs();
        const simCtx = localBuildAnalysisContext(preState, null, "", null, typeAttrs);
        // 前局面では「直前着手側(=1-prevTurn)の玉が王手状態」は王手放置になるため除外する。
        if (enforceNoCheckedPreviousMoverKing) {
          const prevMover = Number(prevTurn) === 0 ? 1 : 0;
          const checkedPrevMoverKing = localIsInCheckWithRules(preState.board.pieces, prevMover, rules, {
            neutralTurnOwner: Number(prevTurn),
            typeAttrsOrCtx: typeAttrs,
          });
          if (checkedPrevMoverKing) {
            cached = { skip: true, legal: [], reason: "prev_mover_checked" };
          }
        }
        if (!cached && enforceCheckedDefenderBeforeDefenderMove && Number(prevTurn) === 1) {
          const checkedDefenderKing = localIsInCheckWithRules(preState.board.pieces, 1, rules, {
            neutralTurnOwner: Number(prevTurn),
            typeAttrsOrCtx: typeAttrs,
          });
          if (!checkedDefenderKing) {
            cached = { skip: true, legal: [], reason: "defender_not_checked" };
          }
        }
        if (!cached) {
          const legalOptions = { skipStatusEvaluation: true };
          if (reverseFastTargetHintEnabled && targetHint && typeof targetHint === "object") {
            legalOptions.targetMoveHint = targetHint;
            profile.hinted_eval_count += 1;
          } else {
            profile.full_eval_count += 1;
          }
          localComputeLegalAll(simCtx, legalOptions);
          cached = {
            skip: false,
            legal: Array.isArray(simCtx?.legal?.moves) ? simCtx.legal.moves : [],
          };
        }
        profile.legal_compute_ms += reverseNowMs() - tLegalStart;
      }
      predecessorLegalCache.set(preKey, cached);
      reverseSetPredecessorLegalGlobalCache(preKey, cached);
    }
    if (!cached || cached.skip) {
      const reason = String(cached?.reason || "");
      if (reason === "invalid") profile.skip_invalid_pre += 1;
      else if (reason === "prev_mover_checked") profile.skip_prev_mover_checked += 1;
      else if (reason === "defender_not_checked") profile.skip_defender_not_checked += 1;
      return;
    }
    const legal = Array.isArray(cached.legal) ? cached.legal : [];
    profile.legal_scanned += legal.length;
    for (const mv of legal) {
      if (!matcher(mv)) continue;
      // 駒取ヒント付き仮説は、実際に駒取りが発生する合法手だけを通す。
      if (captureNameHint) {
        const hasCapture =
          Boolean(mv?.capture) || Boolean(mv?.locust_capture) || Boolean(mv?.take_make?.capture_at);
        if (!hasCapture) continue;
      }
      profile.matcher_passed += 1;
      const tMatchStart = reverseNowMs();
      const matched =
        reverseMoveMatchesTargetState(
          preState.board.pieces,
          preState.hands,
          prevTurn,
          mv,
          rules,
          typeAttrs,
          currentSig
        );
      profile.state_match_ms += reverseNowMs() - tMatchStart;
      if (!matched) continue;
      const checkedSimInfo = localCandidateLastMoveInfo(mv);
      const checkedSimMoveStr = String(mv?.notation || "");
      const enforceSelfCheck = !Boolean(rules?.allow_check_on_self);
      const enforceAttackerCheckNow =
        requireAttackerCheckingMove && Number(mv?.owner) === 0;
      let checkedSim = null;
      if (enforceSelfCheck || enforceAttackerCheckNow) {
        checkedSim = localSimulateStateAfterCandidate(
          preState.board.pieces,
          preState.hands,
          prevTurn,
          mv,
          rules,
          typeAttrs
        );
      }
      if (
        enforceSelfCheck &&
        checkedSim &&
        localIsInCheckWithRules(checkedSim.board.pieces, Number(prevTurn), rules, {
          lastMoveInfo: checkedSimInfo,
          lastMoveStr: checkedSimMoveStr,
          neutralTurnOwner: Number(checkedSim.turn),
          typeAttrsOrCtx: typeAttrs,
        })
      ) {
        continue;
      }
      if (enforceAttackerCheckNow && checkedSim) {
        const givesCheckForObligation = localIsInCheckWithRules(
          checkedSim.board.pieces,
          1 - Number(mv.owner),
          rules,
          {
            lastMoveInfo: checkedSimInfo,
            lastMoveStr: checkedSimMoveStr,
            ignoreCaptureRepeatType: true,
            neutralTurnOwner: Number(mv.owner),
            typeAttrsOrCtx: typeAttrs,
          }
        );
        const takesKing = reverseMoveCapturesKingFromPre(preState.board.pieces, mv, typeAttrs);
        if (!givesCheckForObligation && !takesKing) {
          continue;
        }
      }
      pushResult(mv, preState.board.pieces, preState.hands, captureNameHint);
    }
  };

  const currentHandCountsByOwner = { "0": new Map(), "1": new Map() };
  for (const owner of [0, 1]) {
    const m = currentHandCountsByOwner[String(owner)];
    for (const n of currentHands[String(owner)] || []) {
      const name = String(n || "");
      m.set(name, (m.get(name) || 0) + 1);
    }
  }

  for (let idx = 0; idx < currentPieces.length; idx += 1) {
    if (limitReached) break;
    const movedNow = currentPieces[idx];
    if (!movedNow) continue;
    const reverseAllInShogi = Boolean(rules?.all_in_shogi);
    const movedNowOwner = Number(movedNow.owner);
    const moveOwnerExpected =
      reverseAllInShogi && movedNowOwner !== -1 ? movedNowOwner : Number(prevTurn);
    if (moveOwnerExpected !== 0 && moveOwnerExpected !== 1) continue;
    if (!reverseAllInShogi && movedNowOwner !== Number(prevTurn) && movedNowOwner !== -1) continue;
    const movingPieceOwnerExpected = movedNowOwner === -1 ? -1 : moveOwnerExpected;
    const dropAsNeutral = movedNowOwner === -1;
    const currentHandCountsMover = currentHandCountsByOwner[String(moveOwnerExpected)] || new Map();
    if (localSkipBoardMoveGenerationForPiece(movedNow)) {
      // 逆算でドロップ起源はあり得るため、ドロップ検証は実行する。
    }
    const to = { x: movedNow.x, y: movedNow.y };
    const others = currentPieces.filter((_p, i) => i !== idx).map((p) => reverseNormalizePieceForCompare(p, typeAttrs));

    // Drop reverse candidates
    const baseDropName = String(baseNameForHand(movedNow.name) || "");
    const dropNameCands = new Set([baseDropName]);
    for (const dropName of dropNameCands) {
      if (limitReached) break;
      if (!dropName) continue;
      const dropHandToken = localMakeHandToken(dropName, dropAsNeutral);
      if (!localCanDropFromHandName(dropHandToken, moveOwnerExpected, typeAttrs)) continue;
      const preHands = localCloneHands(currentHands);
      preHands[String(moveOwnerExpected)].push(dropHandToken);
      evaluatePredecessor(others, preHands, (mv) => {
        return (
          mv &&
          mv.kind === "drop" &&
          Number(mv.owner) === moveOwnerExpected &&
          localDropHandTokenMatches(mv, dropHandToken) &&
          Number(mv?.to?.x) === to.x &&
          Number(mv?.to?.y) === to.y
        );
      }, "", {
        kind: "drop",
        owner: moveOwnerExpected,
        name: dropName,
        to: { x: to.x, y: to.y },
      });
    }

    // Move reverse candidates
    const prevNameCands = reversePrevNameCandidates(movedNow, typeAttrs);
    for (const prevInfo of prevNameCands) {
      if (limitReached) break;
      const beforeName = String(prevInfo.name || "");
      if (!beforeName) continue;
      const promote = Boolean(prevInfo.promote);
      const beforeAttrsCands = reverseBeforeAttrsCandidatesForMove(movedNow, promote, typeAttrs);
      const staticFromCandidates = reverseGenerateFromCandidatesStatic(
        beforeName,
        moveOwnerExpected,
        to,
        occupiedNow,
        rules
      );
      const fromSources =
        !rules?.rifle &&
        !localIsTakeMakeActive(rules) &&
        Array.isArray(staticFromCandidates) &&
        staticFromCandidates.length > 0
          ? staticFromCandidates
          : null;
      for (const beforeAttrs of beforeAttrsCands) {
        if (limitReached) break;
        const beforeSpec = localPieceSpec(beforeName);
        const allowSameSquareSource = Boolean(beforeSpec && beforeSpec.type === "zero");
        const beforeAttrsResolved = reverseResolveBeforeAttrsForPreState(beforeAttrs, movedNow, typeAttrs);
        if (fromSources) {
          for (const src of fromSources) {
            if (limitReached) break;
            const fx = Number(src?.x);
            const fy = Number(src?.y);
            if (!localInBoard(fx, fy)) continue;
            const sameSquareSource = fx === to.x && fy === to.y;
            if (sameSquareSource && !allowSameSquareSource) continue;
            const fromKey = `${fx},${fy}`;
            if (occupiedNow.has(fromKey) && !(allowSameSquareSource && sameSquareSource)) continue;

            const prePiecesNoCapture = others.map((p) => reverseNormalizePieceForCompare(p, typeAttrs));
            const movingPieceNoCapture = {
              x: fx,
              y: fy,
              owner: movingPieceOwnerExpected,
              name: beforeName,
              attrs: localCloneRawPieceAttrs(beforeAttrsResolved),
            };
            prePiecesNoCapture.push(movingPieceNoCapture);
            const pseudoNoCaptureReach = reverseHasPseudoTarget(
              prePiecesNoCapture,
              movingPieceNoCapture,
              to,
              promote,
              rules,
              moveOwnerExpected
            );
            if (!pseudoNoCaptureReach && !localIsTakeMakeActive(rules)) {
              continue;
            }
            if (pseudoNoCaptureReach) {
              evaluatePredecessor(prePiecesNoCapture, currentHands, (mv) => {
                return (
                  mv &&
                  mv.kind === "move" &&
                  Number(mv.owner) === moveOwnerExpected &&
                  Number(mv?.from?.x) === fx &&
                  Number(mv?.from?.y) === fy &&
                  Number(mv?.to?.x) === to.x &&
                  Number(mv?.to?.y) === to.y &&
                  Boolean(mv.promote) === promote
                );
              }, "", {
                kind: "move",
                owner: moveOwnerExpected,
                name: beforeName,
                from: { x: fx, y: fy },
                to: { x: to.x, y: to.y },
                promote,
              });
            }

            // Capture reverse candidates
            // 1) captured -> hand（通常）
            for (const [handName, cnt] of currentHandCountsMover.entries()) {
              if (limitReached) break;
              if (!cnt || cnt <= 0) continue;
              const handInfo = localParseHandToken(handName);
              const capNames = captureNameMap.get(handInfo.name) || [];
              if (capNames.length <= 0) continue;
              const capturedOwnerByHand = handInfo.neutral ? -1 : moveOwnerExpected === 0 ? 1 : 0;
              const captureSquares = reverseCaptureSquaresForMoveWithRules(
                { x: fx, y: fy },
                to,
                rules,
                prePiecesNoCapture,
                movingPieceNoCapture,
                moveOwnerExpected
              );
              if (captureSquares.length <= 0) continue;
              for (const capName of capNames) {
                if (limitReached) break;
                const preHands = localCloneHands(currentHands);
                if (!localRemoveFromHandArray(preHands[String(moveOwnerExpected)] || [], handName)) continue;
                for (const capSq of captureSquares) {
                  if (limitReached) break;
                  const prePiecesCapture = others.map((p) => reverseNormalizePieceForCompare(p, typeAttrs));
                  const movingPieceCapture = {
                    x: fx,
                    y: fy,
                    owner: movingPieceOwnerExpected,
                    name: beforeName,
                    attrs: localCloneRawPieceAttrs(beforeAttrsResolved),
                  };
                  prePiecesCapture.push(movingPieceCapture);
                  prePiecesCapture.push({
                    x: Number(capSq.x),
                    y: Number(capSq.y),
                    owner: capturedOwnerByHand,
                    name: capName,
                    attrs: {},
                  });
                  const pseudoDirect = reverseHasPseudoTarget(
                    prePiecesCapture,
                    movingPieceCapture,
                    to,
                    promote,
                    rules,
                    moveOwnerExpected
                  );
                  const pseudoTakeMake =
                    !pseudoDirect &&
                    localIsTakeMakeActive(rules) &&
                    reverseHasPseudoTakeMakeTarget(
                      prePiecesCapture,
                      movingPieceCapture,
                      to,
                      capSq,
                      {
                        x: Number(capSq.x),
                        y: Number(capSq.y),
                        owner: capturedOwnerByHand,
                        name: capName,
                        attrs: {},
                      },
                      rules,
                      typeAttrs,
                      moveOwnerExpected
                    );
                  if (!pseudoDirect && !pseudoTakeMake) {
                    continue;
                  }
                  evaluatePredecessor(prePiecesCapture, preHands, (mv) => {
                    const takeMakeCaptureMatch = !localIsTakeMakeActive(rules)
                      ? true
                      : Number(mv?.take_make?.capture_at?.x) === Number(capSq.x) &&
                        Number(mv?.take_make?.capture_at?.y) === Number(capSq.y);
                    return (
                      mv &&
                      mv.kind === "move" &&
                      Number(mv.owner) === moveOwnerExpected &&
                      Number(mv?.from?.x) === fx &&
                      Number(mv?.from?.y) === fy &&
                      Number(mv?.to?.x) === to.x &&
                      Number(mv?.to?.y) === to.y &&
                      Boolean(mv.promote) === promote &&
                      takeMakeCaptureMatch
                    );
                  }, reverseCaptureHintEncode(capName, capturedOwnerByHand), {
                    kind: "move",
                    owner: moveOwnerExpected,
                    name: beforeName,
                    from: { x: fx, y: fy },
                    to: { x: to.x, y: to.y },
                    promote,
                  });
                }
              }
            }

            // 2) captured が手駒にならない系（Circe / PWC など）も仮説に含める
            const captureSquaresNoHand = reverseCaptureSquaresForMoveWithRules(
              { x: fx, y: fy },
              to,
              rules,
              prePiecesNoCapture,
              movingPieceNoCapture,
              moveOwnerExpected
            );
            if (enableNoHandCaptureHypothesis && captureSquaresNoHand.length > 0) {
              for (const capSq of captureSquaresNoHand) {
                if (limitReached) break;
                const capturedOwnerNoHand = moveOwnerExpected === 0 ? 1 : 0;
                const capNameCandidatesRaw =
                  rules?.circe && !rules?.pwc && !rules?.anti_circe
                    ? reverseCirceNoHandCaptureNameCandidates(others, capturedOwnerNoHand, capSq, typeAttrs)
                    : allCapturableNames;
                const capNameCandidates =
                  Array.isArray(capNameCandidatesRaw) && capNameCandidatesRaw.length > 0
                    ? capNameCandidatesRaw
                    : allCapturableNames;
                if (!Array.isArray(capNameCandidates) || capNameCandidates.length <= 0) continue;
                for (const capName of capNameCandidates) {
                  if (limitReached) break;
                  const prePiecesCaptureNoHandBase = others.map((p) => reverseNormalizePieceForCompare(p, typeAttrs));
                  const movingPieceCaptureNoHand = {
                    x: fx,
                    y: fy,
                    owner: movingPieceOwnerExpected,
                    name: beforeName,
                    attrs: localCloneRawPieceAttrs(beforeAttrsResolved),
                  };
                  prePiecesCaptureNoHandBase.push(movingPieceCaptureNoHand);
                  prePiecesCaptureNoHandBase.push({
                    x: Number(capSq.x),
                    y: Number(capSq.y),
                    owner: capturedOwnerNoHand,
                    name: capName,
                    attrs: {},
                  });
                  // Circe は復活/非復活で事前局面の占有が揺れるため、
                  // 疑似到達フィルタで取りこぼしが起きるケースがある。
                  // Circe 時はここで弾かず、後段の合法手+状態一致で確定する。
                  if (!rules?.circe) {
                    const pseudoDirect = reverseHasPseudoTarget(
                      prePiecesCaptureNoHandBase,
                      movingPieceCaptureNoHand,
                      to,
                      promote,
                      rules,
                      moveOwnerExpected
                    );
                    const pseudoTakeMake =
                      !pseudoDirect &&
                      localIsTakeMakeActive(rules) &&
                      reverseHasPseudoTakeMakeTarget(
                        prePiecesCaptureNoHandBase,
                        movingPieceCaptureNoHand,
                        to,
                        capSq,
                        {
                          x: Number(capSq.x),
                          y: Number(capSq.y),
                          owner: capturedOwnerNoHand,
                          name: capName,
                          attrs: {},
                        },
                        rules,
                        typeAttrs,
                        moveOwnerExpected
                      );
                    if (!pseudoDirect && !pseudoTakeMake) continue;
                  }

                  const preVariantsNoHand = [prePiecesCaptureNoHandBase];
                  // Circe の逆算では、現局面の復活駒を「捕獲で復活した結果」とみなせるよう
                  // 復活候補地点の同駒(基底駒)を前局面側で除去した仮説も試す。
                  if (rules?.circe) {
                    const rebirthCandidates = reverseCirceRebirthSquaresByRule(
                      capName,
                      capturedOwnerNoHand,
                      { x: Number(capSq.x), y: Number(capSq.y) }
                    );
                    const rebornBase = standardBaseName(capName);
                    for (const rb of rebirthCandidates) {
                      if (!rb || !localInBoard(rb.x, rb.y)) continue;
                      if (Number(rb.x) === Number(capSq.x) && Number(rb.y) === Number(capSq.y)) continue;
                      const removeIdx = prePiecesCaptureNoHandBase.findIndex((p) => {
                        if (!p) return false;
                        if (Number(p.x) !== Number(rb.x) || Number(p.y) !== Number(rb.y)) return false;
                        if (Number(p.owner) !== Number(capturedOwnerNoHand)) return false;
                        return String(p.name || "") === String(rebornBase || "");
                      });
                      if (removeIdx < 0) continue;
                      const variant = prePiecesCaptureNoHandBase.slice();
                      variant.splice(removeIdx, 1);
                      preVariantsNoHand.push(variant);
                    }
                  }

                  for (const prePiecesCaptureNoHand of preVariantsNoHand) {
                    if (limitReached) break;
                    evaluatePredecessor(prePiecesCaptureNoHand, currentHands, (mv) => {
                        const takeMakeCaptureMatch = !localIsTakeMakeActive(rules)
                          ? true
                          : Number(mv?.take_make?.capture_at?.x) === Number(capSq.x) &&
                            Number(mv?.take_make?.capture_at?.y) === Number(capSq.y);
                        return (
                          mv &&
                          mv.kind === "move" &&
                          Number(mv.owner) === moveOwnerExpected &&
                          Number(mv?.from?.x) === fx &&
                          Number(mv?.from?.y) === fy &&
                          Number(mv?.to?.x) === to.x &&
                          Number(mv?.to?.y) === to.y &&
                          Boolean(mv.promote) === promote &&
                          takeMakeCaptureMatch
                        );
                    }, reverseCaptureHintEncode(capName, capturedOwnerNoHand), {
                      kind: "move",
                      owner: moveOwnerExpected,
                      name: beforeName,
                      from: { x: fx, y: fy },
                      to: { x: to.x, y: to.y },
                      promote,
                    });
                  }
                }
              }
            }
          }
        } else {
          for (let fy = 0; fy < 9; fy += 1) {
            if (limitReached) break;
            for (let fx = 0; fx < 9; fx += 1) {
              if (limitReached) break;
              const sameSquareSource = fx === to.x && fy === to.y;
              const rifleCaptureSource = Boolean(rules?.rifle) && sameSquareSource;
              if (sameSquareSource && !Boolean(rules?.rifle) && !allowSameSquareSource) continue;
              const fromKey = `${fx},${fy}`;
              if (occupiedNow.has(fromKey) && !(rifleCaptureSource || (allowSameSquareSource && sameSquareSource))) continue;

              if (!rifleCaptureSource) {
                const prePiecesNoCapture = others.map((p) => reverseNormalizePieceForCompare(p, typeAttrs));
                const movingPieceNoCapture = {
                  x: fx,
                  y: fy,
                  owner: movingPieceOwnerExpected,
                  name: beforeName,
                  attrs: localCloneRawPieceAttrs(beforeAttrsResolved),
                };
                prePiecesNoCapture.push(movingPieceNoCapture);
                const pseudoNoCaptureReach = reverseHasPseudoTarget(
                  prePiecesNoCapture,
                  movingPieceNoCapture,
                  to,
                  promote,
                  rules,
                  moveOwnerExpected
                );
                if (!pseudoNoCaptureReach && !localIsTakeMakeActive(rules)) {
                  continue;
                }
                if (pseudoNoCaptureReach) {
                  evaluatePredecessor(prePiecesNoCapture, currentHands, (mv) => {
                    return (
                      mv &&
                      mv.kind === "move" &&
                      Number(mv.owner) === moveOwnerExpected &&
                      Number(mv?.from?.x) === fx &&
                      Number(mv?.from?.y) === fy &&
                      Number(mv?.to?.x) === to.x &&
                      Number(mv?.to?.y) === to.y &&
                      Boolean(mv.promote) === promote
                    );
                  }, "", {
                    kind: "move",
                    owner: moveOwnerExpected,
                    name: beforeName,
                    from: { x: fx, y: fy },
                    to: { x: to.x, y: to.y },
                    promote,
                  });
                }
              }

              const enableCaptureFromThisSource = !Boolean(rules?.rifle) || rifleCaptureSource;
              if (!enableCaptureFromThisSource) continue;

              // Capture reverse candidates
              // 1) captured -> hand（通常）
              const captureFrom = { x: fx, y: fy };
              const prePiecesForCaptureSquares = [
                ...others,
                {
                  x: fx,
                  y: fy,
                  owner: movingPieceOwnerExpected,
                  name: beforeName,
                  attrs: localCloneRawPieceAttrs(beforeAttrsResolved),
                },
              ];
              const captureSquares = rules?.rifle
                ? reverseRifleCaptureSquaresFromSource(captureFrom)
                : reverseCaptureSquaresForMoveWithRules(
                    captureFrom,
                    to,
                    rules,
                    prePiecesForCaptureSquares,
                    prePiecesForCaptureSquares[prePiecesForCaptureSquares.length - 1],
                    moveOwnerExpected
                  );
              for (const [handName, cnt] of currentHandCountsMover.entries()) {
                if (limitReached) break;
                if (!cnt || cnt <= 0) continue;
                const handInfo = localParseHandToken(handName);
                const capNames = captureNameMap.get(handInfo.name) || [];
                if (capNames.length <= 0) continue;
                if (captureSquares.length <= 0) continue;
                const capturedOwnerByHand = handInfo.neutral ? -1 : moveOwnerExpected === 0 ? 1 : 0;
                for (const capName of capNames) {
                  if (limitReached) break;
                  const preHands = localCloneHands(currentHands);
                  if (!localRemoveFromHandArray(preHands[String(moveOwnerExpected)] || [], handName)) continue;
                  for (const capSq of captureSquares) {
                    if (limitReached) break;
                    const targetTo = rules?.rifle ? { x: Number(capSq.x), y: Number(capSq.y) } : to;
                    const prePiecesCapture = others.map((p) => reverseNormalizePieceForCompare(p, typeAttrs));
                    const movingPieceCapture = {
                      x: fx,
                      y: fy,
                      owner: movingPieceOwnerExpected,
                      name: beforeName,
                      attrs: localCloneRawPieceAttrs(beforeAttrsResolved),
                    };
                    prePiecesCapture.push(movingPieceCapture);
                    prePiecesCapture.push({
                      x: Number(capSq.x),
                      y: Number(capSq.y),
                      owner: capturedOwnerByHand,
                      name: capName,
                      attrs: {},
                    });
                    const pseudoDirect = reverseHasPseudoTarget(
                      prePiecesCapture,
                      movingPieceCapture,
                      targetTo,
                      promote,
                      rules,
                      moveOwnerExpected
                    );
                    const pseudoTakeMake =
                      !pseudoDirect &&
                      localIsTakeMakeActive(rules) &&
                      reverseHasPseudoTakeMakeTarget(
                        prePiecesCapture,
                        movingPieceCapture,
                        targetTo,
                        capSq,
                        {
                          x: Number(capSq.x),
                          y: Number(capSq.y),
                          owner: capturedOwnerByHand,
                          name: capName,
                          attrs: {},
                        },
                        rules,
                        typeAttrs,
                        moveOwnerExpected
                      );
                    if (!pseudoDirect && !pseudoTakeMake) {
                      continue;
                    }
                    evaluatePredecessor(prePiecesCapture, preHands, (mv) => {
                      const takeMakeCaptureMatch = !localIsTakeMakeActive(rules)
                        ? true
                        : Number(mv?.take_make?.capture_at?.x) === Number(capSq.x) &&
                          Number(mv?.take_make?.capture_at?.y) === Number(capSq.y);
                      return (
                        mv &&
                        mv.kind === "move" &&
                        Number(mv.owner) === moveOwnerExpected &&
                        Number(mv?.from?.x) === fx &&
                        Number(mv?.from?.y) === fy &&
                        Number(mv?.to?.x) === Number(targetTo.x) &&
                        Number(mv?.to?.y) === Number(targetTo.y) &&
                        Boolean(mv.promote) === promote &&
                        takeMakeCaptureMatch
                      );
                    }, reverseCaptureHintEncode(capName, capturedOwnerByHand), {
                      kind: "move",
                      owner: moveOwnerExpected,
                      name: beforeName,
                      from: { x: fx, y: fy },
                      to: { x: Number(targetTo.x), y: Number(targetTo.y) },
                      promote,
                    });
                  }
                }
              }

              // 2) captured が手駒にならない系（Circe / PWC など）も仮説に含める
              if (enableNoHandCaptureHypothesis && captureSquares.length > 0) {
                for (const capSq of captureSquares) {
                  if (limitReached) break;
                  const targetTo = rules?.rifle ? { x: Number(capSq.x), y: Number(capSq.y) } : to;
                  const capturedOwnerNoHand = moveOwnerExpected === 0 ? 1 : 0;
                  const capNameCandidatesRaw =
                    rules?.circe && !rules?.pwc && !rules?.anti_circe
                      ? reverseCirceNoHandCaptureNameCandidates(others, capturedOwnerNoHand, capSq, typeAttrs)
                      : allCapturableNames;
                  const capNameCandidates =
                    Array.isArray(capNameCandidatesRaw) && capNameCandidatesRaw.length > 0
                      ? capNameCandidatesRaw
                      : allCapturableNames;
                  if (!Array.isArray(capNameCandidates) || capNameCandidates.length <= 0) continue;
                  for (const capName of capNameCandidates) {
                    if (limitReached) break;
                    const prePiecesCaptureNoHandBase = others.map((p) => reverseNormalizePieceForCompare(p, typeAttrs));
                    const movingPieceCaptureNoHand = {
                      x: fx,
                      y: fy,
                      owner: movingPieceOwnerExpected,
                      name: beforeName,
                      attrs: localCloneRawPieceAttrs(beforeAttrsResolved),
                    };
                    prePiecesCaptureNoHandBase.push(movingPieceCaptureNoHand);
                    prePiecesCaptureNoHandBase.push({
                      x: Number(capSq.x),
                      y: Number(capSq.y),
                      owner: capturedOwnerNoHand,
                      name: capName,
                      attrs: {},
                    });
                    if (
                      !rules?.circe
                    ) {
                      const pseudoDirect = reverseHasPseudoTarget(
                        prePiecesCaptureNoHandBase,
                        movingPieceCaptureNoHand,
                        targetTo,
                        promote,
                        rules,
                        moveOwnerExpected
                      );
                      const pseudoTakeMake =
                        !pseudoDirect &&
                        localIsTakeMakeActive(rules) &&
                        reverseHasPseudoTakeMakeTarget(
                          prePiecesCaptureNoHandBase,
                          movingPieceCaptureNoHand,
                          targetTo,
                          capSq,
                          {
                            x: Number(capSq.x),
                            y: Number(capSq.y),
                            owner: capturedOwnerNoHand,
                            name: capName,
                            attrs: {},
                          },
                          rules,
                          typeAttrs,
                          moveOwnerExpected
                        );
                      if (!pseudoDirect && !pseudoTakeMake) continue;
                    }

                    const preVariantsNoHand = [prePiecesCaptureNoHandBase];
                    if (rules?.circe) {
                      const rebirthCandidates = reverseCirceRebirthSquaresByRule(
                        capName,
                        capturedOwnerNoHand,
                        { x: Number(capSq.x), y: Number(capSq.y) }
                      );
                      const rebornBase = standardBaseName(capName);
                      for (const rb of rebirthCandidates) {
                        if (!rb || !localInBoard(rb.x, rb.y)) continue;
                        if (Number(rb.x) === Number(capSq.x) && Number(rb.y) === Number(capSq.y)) continue;
                        const removeIdx = prePiecesCaptureNoHandBase.findIndex((p) => {
                          if (!p) return false;
                          if (Number(p.x) !== Number(rb.x) || Number(p.y) !== Number(rb.y)) return false;
                          if (Number(p.owner) !== Number(capturedOwnerNoHand)) return false;
                          return String(p.name || "") === String(rebornBase || "");
                        });
                        if (removeIdx < 0) continue;
                        const variant = prePiecesCaptureNoHandBase.slice();
                        variant.splice(removeIdx, 1);
                        preVariantsNoHand.push(variant);
                      }
                    }

                    for (const prePiecesCaptureNoHand of preVariantsNoHand) {
                      if (limitReached) break;
                      evaluatePredecessor(prePiecesCaptureNoHand, currentHands, (mv) => {
                        const takeMakeCaptureMatch = !localIsTakeMakeActive(rules)
                          ? true
                          : Number(mv?.take_make?.capture_at?.x) === Number(capSq.x) &&
                            Number(mv?.take_make?.capture_at?.y) === Number(capSq.y);
                        return (
                          mv &&
                          mv.kind === "move" &&
                          Number(mv.owner) === moveOwnerExpected &&
                          Number(mv?.from?.x) === fx &&
                          Number(mv?.from?.y) === fy &&
                          Number(mv?.to?.x) === Number(targetTo.x) &&
                          Number(mv?.to?.y) === Number(targetTo.y) &&
                          Boolean(mv.promote) === promote &&
                          takeMakeCaptureMatch
                        );
                      }, reverseCaptureHintEncode(capName, capturedOwnerNoHand), {
                        kind: "move",
                        owner: moveOwnerExpected,
                        name: beforeName,
                        from: { x: fx, y: fy },
                        to: { x: Number(targetTo.x), y: Number(targetTo.y) },
                        promote,
                      });
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  results.sort((a, b) => String(a?.label || "").localeCompare(String(b?.label || ""), "ja"));
  reverseApplyTrailLabelDisambiguation(results);
  reverseMoves = results;
  reverseStatusText = limitReached ? `件数：${results.length} (候補上限)` : `件数：${results.length}`;
  profile.result_count = results.length;
  profile.limit_reached = Boolean(limitReached);
  return reverseFinalizeProfile(profile);
}

function renderPlaySubModeButtons() {
  const playable = state?.mode === "play";
  if (ui.btnPlayModeNormal) {
    ui.btnPlayModeNormal.disabled = !playable;
    ui.btnPlayModeNormal.classList.toggle("active", playSubMode !== "reverse");
  }
  if (ui.btnPlayModeReverse) {
    ui.btnPlayModeReverse.disabled = !playable;
    ui.btnPlayModeReverse.classList.toggle("active", playSubMode === "reverse");
  }
}

function renderLegalList() {
  if (!ui.legalList) return;
  renderPlaySubModeButtons();
  // 分岐は playSubMode を最優先し、逆算モード中に通常一覧(詰み/ステイルメイト)へ落ちないようにする。
  const reverseMode = playSubMode === "reverse";
  if (ui.legalTitle) {
    ui.legalTitle.textContent = reverseMode ? "逆算可能指し手一覧" : "可能指し手一覧";
  }
  // 先に一度クリアして、描画途中例外時にも前回一覧が残らないようにする。
  ui.legalList.innerHTML = "";
  if (reverseMode) {
    if (state?.mode === "play") {
      ensureReverseMovesForCurrentState();
    } else {
      reverseMoves = [];
      reverseStatusText = "検討モードのみ";
    }
  }
  if (reverseMode) {
    if (ui.legalSummary) {
      ui.legalSummary.textContent = reverseStatusText || "-";
    }
    if (reverseMoves.length <= 0) {
      const li = document.createElement("li");
      li.className = "legal-item";
      const d = document.createElement("div");
      d.className = "legal-empty";
      d.textContent = "（なし）";
      li.appendChild(d);
      ui.legalList.appendChild(li);
      return;
    }
    const groupedMoves = reverseGroupMovesForList(reverseMoves);
    for (const group of groupedMoves) {
      const li = document.createElement("li");
      li.className = "legal-item";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = String(group?.label || "-");
      btn.disabled = state?.mode !== "play" || !Array.isArray(group?.moves) || group.moves.length <= 0;
      btn.addEventListener("click", () => {
        void enqueueSequentialAction(async () => {
          const pick = await chooseReverseCandidateVariant(group.moves || []);
          if (!pick) return;
          await applyReverseCandidate(pick);
        }).catch((e) => {
          logLine(e.message || String(e), true);
        });
      });
      li.appendChild(btn);
      ui.legalList.appendChild(li);
    }
    return;
  }
  const terminalResult = getCurrentHistoryTerminalResult();
  if (terminalResult) {
    if (ui.legalSummary) {
      ui.legalSummary.textContent = `終局：${terminalResult}`;
    }
    const li = document.createElement("li");
    li.className = "legal-item";
    const d = document.createElement("div");
    d.className = "legal-empty";
    d.textContent = `（${terminalResult}）`;
    li.appendChild(d);
    ui.legalList.appendChild(li);
    return;
  }
  const target = selectedLegalMoves();
  const pieceMap = pieceMapFromState();
  const statusText = legalStatus?.text ? ` / ${legalStatus.text}` : "";
  const modeText = state?.mode === "edit" ? " / 編集モード(着手不可)" : "";
  if (ui.legalSummary) {
    ui.legalSummary.textContent = `件数：${target.length}${statusText}${modeText}`;
  }
  const status = String(legalStatus?.text || "").trim();
  const statusBase = status.replace(/\s*[\(（].*[\)）]\s*$/, "");
  const canInputSennichite = statusBase === "千日手";
  if (canInputSennichite) {
    const li = document.createElement("li");
    li.className = "legal-item";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "千日手";
    btn.disabled = state?.mode !== "play";
    btn.addEventListener("click", () => {
      void addTerminalResult("千日手").catch((e) => logLine(e.message || String(e), true));
    });
    li.appendChild(btn);
    ui.legalList.appendChild(li);
  }
  if (target.length === 0) {
    if (canInputSennichite) {
      return;
    }
    const terminalInput =
      status === "詰み" || status === "ステイルメイト"
        ? status
        : statusBase === "王手義務で指し手なし"
          ? "逃れ"
          : null;
    if (terminalInput) {
      const li = document.createElement("li");
      li.className = "legal-item";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = terminalInput;
      btn.disabled = state?.mode !== "play";
      btn.addEventListener("click", () => {
        void addTerminalResult(terminalInput).catch((e) => logLine(e.message || String(e), true));
      });
      li.appendChild(btn);
      ui.legalList.appendChild(li);
    } else {
      const li = document.createElement("li");
      li.className = "legal-item";
      const d = document.createElement("div");
      d.className = "legal-empty";
      d.textContent = "（なし）";
      li.appendChild(d);
      ui.legalList.appendChild(li);
    }
    return;
  }
  const groupedLegalMoves = buildNormalLegalGroupsForList(target, pieceMap);
  for (const group of groupedLegalMoves) {
    const li = document.createElement("li");
    li.className = "legal-item";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = String(group?.label || "-");
    btn.disabled = state?.mode !== "play" || !Array.isArray(group?.moves) || group.moves.length <= 0;
    btn.addEventListener("click", () => {
      void enqueueSequentialAction(async () => {
        const moves = Array.isArray(group?.moves) ? group.moves.filter(Boolean) : [];
        if (moves.length <= 0) return;
        if (moves.length === 1) {
          await applyLegalMove(moves[0]);
          return;
        }
        const pick = await chooseLegalDropByDialog(moves);
        if (!pick) return;
        await applyDrop(pick);
      }).catch((e) => {
        logLine(e.message || String(e), true);
      });
    });
    li.appendChild(btn);
    ui.legalList.appendChild(li);
  }
}

function renderAll() {
  renderStatus();
  renderRulePanel();
  renderHands();
  renderPieceBox();
  renderEditPanel();
  renderBoard();
  renderHistoryList();
  if (!historyPlayRunning || isReverseSubModeActive()) {
    renderLegalList();
  }
}

function renderPlaybackStepFrame() {
  renderStatus();
  renderHands();
  renderBoard();
  if (!renderHistoryListFastForPlayback()) {
    renderHistoryList();
  }
}

async function boot() {
  installEngine(engine);
  void registerServiceWorkerIfAvailable();
  const activeEngine = currentEngine();
  if (activeEngine.kind === "local") {
    logLine(`Engine: local (strict=${activeEngine.strictLocalOnly ? "on" : "off"})`);
  } else {
    logLine(`Engine: ${activeEngine.kind}`);
  }
  applyMiscDialogLabels();
  initHistoryDividerDrag();
  await ensureDefaultCustomCatalogSeeded();
  await enforceFixedRuleCompositionFromSample();
  rebuildCustomPieceRuntimeMaps();
  window.addEventListener("resize", () => {
    scheduleHistoryHeaderScrollbarCompensation();
    syncVectorBoardCellSizes();
  });
  try {
    await fetchMeta();
    logLine("表示名定義を読込");
  } catch (e) {
    logLine(`表示名定義の読込失敗：${e.message || String(e)}`, true);
  }

  if (ui.btnNewHirate) {
    ui.btnNewHirate.addEventListener("click", async () => {
      try {
        const keepRules = cloneCurrentRules();
        await createSession("hirate", keepRules);
        await setMode("edit");
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnNewTsume) {
    ui.btnNewTsume.addEventListener("click", async () => {
      try {
        const keepRules = cloneCurrentRules();
        await createSession("tsume", keepRules);
        await setMode("edit");
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnRuleDialogOpen) {
    ui.btnRuleDialogOpen.addEventListener("click", () => {
      openRuleDialog();
    });
  }
  if (ui.btnMiscDialogOpen) {
    ui.btnMiscDialogOpen.addEventListener("click", () => {
      openMiscDialog();
    });
  }
  if (ui.btnIoDialogOpen) {
    ui.btnIoDialogOpen.addEventListener("click", () => {
      openIoDialog();
    });
  }
  if (ui.btnHelpDialogOpen) {
    ui.btnHelpDialogOpen.addEventListener("click", () => {
      openHelpDialog();
    });
  }
  if (ui.ioDialog) {
    ui.ioDialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      if (ioBusyCount > 0) return;
      closeIoDialog();
    });
  }
  if (ui.ioText) {
    ui.ioText.addEventListener("dragenter", (e) => {
      if (!ioEventHasFiles(e)) return;
      e.preventDefault();
      if (ioBusyCount > 0) return;
      ioDragDepth += 1;
      setIoDragActive(true);
    });
    ui.ioText.addEventListener("dragover", (e) => {
      if (!ioEventHasFiles(e)) return;
      e.preventDefault();
      if (ioBusyCount > 0) return;
      if (e.dataTransfer) e.dataTransfer.dropEffect = "copy";
      setIoDragActive(true);
    });
    ui.ioText.addEventListener("dragleave", (e) => {
      if (!ioEventHasFiles(e) && ioDragDepth <= 0) return;
      e.preventDefault();
      ioDragDepth = Math.max(0, ioDragDepth - 1);
      if (ioDragDepth === 0) setIoDragActive(false);
    });
    ui.ioText.addEventListener("drop", (e) => {
      if (!ioEventHasFiles(e)) return;
      e.preventDefault();
      const files = e.dataTransfer?.files;
      resetIoDragState();
      if (ioBusyCount > 0) return;
      const file = files && files[0];
      if (!file) return;
      void (async () => {
        try {
          await loadTextFromFileInput(file);
        } catch (err) {
          logLine(err?.message || String(err), true);
        }
      })();
    });
  }
  if (ui.btnIoDialogClose) {
    ui.btnIoDialogClose.addEventListener("click", () => {
      if (ioBusyCount > 0) return;
      closeIoDialog();
    });
  }
  if (ui.btnIoUpload) {
    ui.btnIoUpload.addEventListener("click", () => {
      ioFileLoadMode = "auto";
      if (ui.ioFileInput) ui.ioFileInput.click();
    });
  }
  if (ui.btnIoUploadKifuOnly) {
    ui.btnIoUploadKifuOnly.addEventListener("click", () => {
      ioFileLoadMode = "kifu_only";
      if (ui.ioFileInput) ui.ioFileInput.click();
    });
  }
  if (ui.ioFileInput) {
    ui.ioFileInput.addEventListener("change", async () => {
      try {
        const mode = ioFileLoadMode;
        ioFileLoadMode = "auto";
        const file = ui.ioFileInput.files && ui.ioFileInput.files[0];
        if (!file) return;
        await loadTextFromFileInput(file, { mode });
      } catch (e) {
        logLine(e.message || String(e), true);
      } finally {
        if (ui.ioFileInput) ui.ioFileInput.value = "";
      }
    });
  }
  if (ui.btnIoDownload) {
    ui.btnIoDownload.addEventListener("click", async () => {
      try {
        await downloadIoTextFile();
      } catch (e) {
        showIoClipboardNotice(e.message || String(e), true, 4200);
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.ruleDialog) {
    ui.ruleDialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeRuleDialog();
    });
  }
  if (ui.miscDialog) {
    ui.miscDialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeMiscDialog();
    });
  }
  if (ui.helpDialog) {
    ui.helpDialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeHelpDialog();
    });
  }
  if (ui.customFairyDialog) {
    ui.customFairyDialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeCustomFairyDialog();
    });
  }
  if (ui.customFairyVectorBoardDialog) {
    ui.customFairyVectorBoardDialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeCustomFairyVectorBoardDialog();
    });
  }
  if (ui.fairyMoveViewerDialog) {
    ui.fairyMoveViewerDialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeFairyMoveViewerDialog();
    });
  }
  if (ui.repeatDialog) {
    ui.repeatDialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeRepeatDialog();
    });
  }
  if (ui.btnRuleDialogClose) {
    ui.btnRuleDialogClose.addEventListener("click", () => {
      closeRuleDialog();
    });
  }
  if (ui.btnMiscDialogClose) {
    ui.btnMiscDialogClose.addEventListener("click", () => {
      closeMiscDialog();
    });
  }
  if (ui.btnHelpDialogClose) {
    ui.btnHelpDialogClose.addEventListener("click", () => {
      closeHelpDialog();
    });
  }
  if (ui.btnCustomFairyClose) {
    ui.btnCustomFairyClose.addEventListener("click", () => {
      closeCustomFairyDialog();
    });
  }
  if (ui.btnCustomFairyVectorBoardOpen) {
    ui.btnCustomFairyVectorBoardOpen.addEventListener("click", () => {
      openCustomFairyVectorBoardDialog();
    });
  }
  if (ui.btnCustomFairyVectorBoardClose) {
    ui.btnCustomFairyVectorBoardClose.addEventListener("click", () => {
      closeCustomFairyVectorBoardDialog();
    });
  }
  if (ui.btnFairyMoveViewerClose) {
    ui.btnFairyMoveViewerClose.addEventListener("click", () => {
      closeFairyMoveViewerDialog();
    });
  }
  if (ui.fairyMoveViewerSelect) {
    ui.fairyMoveViewerSelect.addEventListener("change", () => {
      if (ui.fairyMoveViewerScenario) ui.fairyMoveViewerScenario.value = "";
      renderFairyMoveViewerBoard();
    });
  }
  if (ui.fairyMoveViewerScenario) {
    ui.fairyMoveViewerScenario.addEventListener("change", () => {
      renderFairyMoveViewerBoard();
    });
  }
  if (ui.btnCustomFairyVectorBoardClear) {
    ui.btnCustomFairyVectorBoardClear.addEventListener("click", () => {
      setCustomVectorPresetActive("");
      setCustomFairyVectorsFromArray([]);
    });
  }
  if (ui.customFairyMoveModeSelect) {
    ui.customFairyMoveModeSelect.addEventListener("change", () => {
      syncCustomFairyDialogMoveMode();
    });
  }
  if (ui.customFairyNameInput) {
    ui.customFairyNameInput.addEventListener("input", () => {
      updateCustomFairyVectorBoardCenter();
    });
  }
  if (ui.customFairyDisplayInput) {
    ui.customFairyDisplayInput.addEventListener("input", () => {
      updateCustomFairyVectorBoardCenter();
    });
  }
  if (ui.customFairyVectorsInput) {
    ui.customFairyVectorsInput.addEventListener("input", () => {
      setCustomVectorPresetActive("");
      updateCustomFairyVectorPreview();
    });
  }
  if (ui.customFairyDxInput) {
    ui.customFairyDxInput.addEventListener("input", () => {
      if (customVectorPresetActive === "knight") applyCustomVectorPreset("knight");
    });
  }
  if (ui.customFairyDyInput) {
    ui.customFairyDyInput.addEventListener("input", () => {
      if (customVectorPresetActive === "knight") applyCustomVectorPreset("knight");
    });
  }
  if (ui.btnCustomFairyVectorAdd) {
    ui.btnCustomFairyVectorAdd.addEventListener("click", () => {
      const dx = Number.parseInt(ui.customFairyDxInput?.value ?? "", 10);
      const dy = Number.parseInt(ui.customFairyDyInput?.value ?? "", 10);
      if (!appendCustomFairyVector(dx, dy)) {
        logLine("dx/dy は -9〜9 の整数で入力してください。", true);
      } else {
        setCustomVectorPresetActive("");
      }
    });
  }
  if (ui.btnCustomFairyVectorUndo) {
    ui.btnCustomFairyVectorUndo.addEventListener("click", () => {
      undoCustomFairyVector();
      setCustomVectorPresetActive("");
    });
  }
  if (ui.customFairyVectorsWrap) {
    ui.customFairyVectorsWrap.addEventListener("click", (e) => {
      const btn = e.target?.closest?.("[data-custom-vector-preset]");
      if (!btn) return;
      const preset = btn.getAttribute("data-custom-vector-preset");
      if (preset && preset !== "clear") setCustomVectorPresetActive(preset);
      applyCustomVectorPreset(preset);
    });
  }
  if (ui.customFairyVectorBoard) {
    ui.customFairyVectorBoard.addEventListener("click", (e) => {
      const cell = e.target?.closest?.(".misc-fairy-vector-board-cell");
      if (!cell || cell.dataset.center === "1") return;
      toggleCustomFairyVectorBoardCell(cell.dataset.dx, cell.dataset.dy);
    });
  }
  if (ui.btnCustomFairyAdd) {
    ui.btnCustomFairyAdd.addEventListener("click", async () => {
      try {
        await addUiDefinedFairyPiece({
          name: ui.customFairyNameInput?.value,
          display_name: ui.customFairyDisplayInput?.value,
          move_mode: ui.customFairyMoveModeSelect?.value,
          copy_from: ui.customFairyMoveSelect?.value,
          vectors_text: ui.customFairyVectorsInput?.value,
          tag: ui.customFairyTagInput?.value,
          description: ui.customFairyDescInput?.value,
        });
        if (ui.customFairyNameInput) ui.customFairyNameInput.value = "";
        if (ui.customFairyDisplayInput) ui.customFairyDisplayInput.value = "";
        if (ui.customFairyVectorsInput) ui.customFairyVectorsInput.value = "";
        if (ui.customFairyDescInput) ui.customFairyDescInput.value = "";
        updateCustomFairyVectorPreview();
        ui.customFairyNameInput?.focus?.();
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnCustomFairyClearAll) {
    ui.btnCustomFairyClearAll.addEventListener("click", async () => {
      try {
        const nameFromInput = String(ui.customFairyNameInput?.value || "").trim();
        const selectedCustomName =
          editSelection?.source === "box" && customUserTagForPieceName(editSelection?.name)
            ? String(editSelection.name || "")
            : "";
        const targetName = nameFromInput || selectedCustomName;
        if (!targetName) {
          logLine("削除する追加駒名を入力、または追加駒を選択してください。");
          return;
        }
        await deleteUiDefinedFairyPiece(targetName);
        if (ui.customFairyNameInput) ui.customFairyNameInput.value = "";
        if (ui.customFairyDisplayInput) ui.customFairyDisplayInput.value = "";
        if (ui.customFairyVectorsInput) ui.customFairyVectorsInput.value = "";
        if (ui.customFairyTagInput) ui.customFairyTagInput.value = "";
        if (ui.customFairyDescInput) ui.customFairyDescInput.value = "";
        updateCustomFairyVectorPreview();
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnMiscApply) {
    ui.btnMiscApply.addEventListener("click", async () => {
      try {
        await applyUiSettings();
        closeMiscDialog();
      } catch (e) {
        logLine(e?.message || String(e), true);
      }
    });
  }
  if (ui.btnRepeatDialogClose) {
    ui.btnRepeatDialogClose.addEventListener("click", () => {
      closeRepeatDialog();
    });
  }
  if (ui.btnRepeatApply) {
    ui.btnRepeatApply.addEventListener("click", async () => {
      await applyRepeatFromDialog();
    });
  }
  if (ui.btnRepeatDialogOpen) {
    ui.btnRepeatDialogOpen.addEventListener("click", () => {
      openRepeatDialog();
    });
  }
  if (ui.ruleTabs) {
    ui.ruleTabs.addEventListener("click", (e) => {
      const btn = e.target?.closest ? e.target.closest("button.rule-tab[data-rule-tab]") : null;
      if (!btn) return;
      const tabId = btn.dataset.ruleTab;
      if (!tabId || tabId === activeRuleTab) return;
      syncRuleDraftFromInputs();
      activeRuleTab = tabId;
      renderedRuleFlagKeys = [];
      renderRulePanel();
    });
  }
  if (ui.ruleStrategySelect) {
    ui.ruleStrategySelect.addEventListener("change", () => {
      const draft = ensureRuleDraft();
      draft.strategy = ui.ruleStrategySelect.value;
    });
  }
  if (ui.ruleObjectiveSelect) {
    ui.ruleObjectiveSelect.addEventListener("change", () => {
      const draft = ensureRuleDraft();
      draft.objective = ui.ruleObjectiveSelect.value;
    });
  }
  if (ui.ruleProblemPlyInput) {
    ui.ruleProblemPlyInput.addEventListener("input", () => {
      const draft = ensureRuleDraft();
      const raw = Number.parseInt(ui.ruleProblemPlyInput.value, 10);
      draft.problem_ply = Number.isFinite(raw) && raw > 0 ? raw : 0;
    });
  }
  if (ui.btnRefresh) {
    ui.btnRefresh.addEventListener("click", async () => {
      try {
        await refreshAll();
        logLine("再読込しました");
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnModePlay) {
    ui.btnModePlay.addEventListener("click", async () => {
      try {
        await setMode("play");
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnModeEdit) {
    ui.btnModeEdit.addEventListener("click", async () => {
      try {
        await setMode("edit");
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnPlayModeNormal) {
    ui.btnPlayModeNormal.addEventListener("click", () => {
      void setPlaySubMode("normal").catch((e) => {
        logLine(e.message || String(e), true);
      });
    });
  }
  if (ui.btnPlayModeReverse) {
    ui.btnPlayModeReverse.addEventListener("click", () => {
      void setPlaySubMode("reverse").catch((e) => {
        logLine(e.message || String(e), true);
      });
    });
  }
  if (ui.btnEditTurnTop) {
    ui.btnEditTurnTop.addEventListener("click", async () => {
      try {
        await editPreset("switch_turn");
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnEditAttrDialogTop) {
    ui.btnEditAttrDialogTop.addEventListener("click", () => {
      if (state?.mode !== "edit") return;
      if (!editSelection) {
        logLine("属性編集する駒を先に選択してください。");
        return;
      }
      void openAttrEditorForSelection().catch((e) => {
        logLine(e.message || String(e), true);
      });
    });
  }
  if (ui.btnRuleApply) {
    ui.btnRuleApply.addEventListener("click", async () => {
      try {
        await applyRulesFromPanel();
        closeRuleDialog();
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnRuleReset) {
    ui.btnRuleReset.addEventListener("click", () => {
      if (!state) return;
      ruleDraft = buildTsumeOnlyRuleDraft();
      setRuleConstraintInfo("");
      renderRulePanel();
    });
  }
  if (ui.btnPieceBoxStandard) {
    ui.btnPieceBoxStandard.addEventListener("click", () => {
      pieceBoxStandardMode = true;
      if (editSelection && editSelection.source === "box" && !canUsePieceFromBox(editSelection.name)) {
        setEditSelection(null);
      }
      renderAll();
    });
  }
  if (ui.btnPieceBoxNonStandard) {
    ui.btnPieceBoxNonStandard.addEventListener("click", () => {
      pieceBoxStandardMode = false;
      renderAll();
    });
  }
  if (ui.pieceBoxFairyTabs) {
    ui.pieceBoxFairyTabs.addEventListener("click", (e) => {
      const btn = e.target?.closest?.("button.piecebox-fairy-tab[data-piecebox-fairy-tab]");
      if (!btn) return;
      const tab = btn.dataset.pieceboxFairyTab;
      if (!PIECEBOX_FAIRY_TAB_IDS.includes(tab)) return;
      if (pieceBoxFairyTab === tab) return;
      pieceBoxFairyTab = tab;
      renderAll();
    });
  }

  const bindHandAreaClick = (el, owner) => {
    if (!el) return;
    el.addEventListener("click", (e) => {
      if (e.target && e.target.closest && e.target.closest("button.hand-item")) return;
      void onHandClick(owner, null).catch((err) => logLine(err.message || String(err), true));
    });
  };
  bindHandAreaClick(ui.hand0List, 0);
  bindHandAreaClick(ui.hand1List, 1);
  if (ui.editPieceSelect) {
    ui.editPieceSelect.addEventListener("change", () => {
      renderAll();
    });
  }
  if (ui.btnEditOwnerSente) {
    ui.btnEditOwnerSente.addEventListener("click", () => {
      applyEditOwner(0);
      renderAll();
    });
  }
  if (ui.btnEditOwnerGote) {
    ui.btnEditOwnerGote.addEventListener("click", () => {
      applyEditOwner(1);
      renderAll();
    });
  }
  if (ui.btnEditOwnerNeutral) {
    ui.btnEditOwnerNeutral.addEventListener("click", () => {
      applyEditOwner(-1);
      renderAll();
    });
  }
  if (ui.btnQuickOwnerSente) {
    ui.btnQuickOwnerSente.addEventListener("click", () => {
      applyEditOwner(0);
      renderAll();
    });
  }
  if (ui.btnQuickOwnerGote) {
    ui.btnQuickOwnerGote.addEventListener("click", () => {
      applyEditOwner(1);
      renderAll();
    });
  }
  if (ui.btnQuickOwnerNeutral) {
    ui.btnQuickOwnerNeutral.addEventListener("click", () => {
      applyEditOwner(-1);
      renderAll();
    });
  }
  if (ui.btnEditPlaceMode) {
    ui.btnEditPlaceMode.addEventListener("click", () => {
      editEraseMode = false;
      renderAll();
    });
  }
  if (ui.btnEditEraseMode) {
    ui.btnEditEraseMode.addEventListener("click", () => {
      editEraseMode = true;
      renderAll();
    });
  }
  if (ui.btnEditAddSenteHand) {
    ui.btnEditAddSenteHand.addEventListener("click", async () => {
      try {
        await editAddHand(0);
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnEditRemoveSenteHand) {
    ui.btnEditRemoveSenteHand.addEventListener("click", async () => {
      try {
        await editRemoveHand(0);
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnEditAddGoteHand) {
    ui.btnEditAddGoteHand.addEventListener("click", async () => {
      try {
        await editAddHand(1);
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnEditRemoveGoteHand) {
    ui.btnEditRemoveGoteHand.addEventListener("click", async () => {
      try {
        await editRemoveHand(1);
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnEditPresetHirate) {
    ui.btnEditPresetHirate.addEventListener("click", async () => {
      try {
        await editPreset("hirate");
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnEditPresetTsume) {
    ui.btnEditPresetTsume.addEventListener("click", async () => {
      try {
        await editPreset("tsume");
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnEditPresetClear) {
    ui.btnEditPresetClear.addEventListener("click", async () => {
      try {
        await editPreset("clear");
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnEditSwitchTurn) {
    ui.btnEditSwitchTurn.addEventListener("click", async () => {
      try {
        await editPreset("switch_turn");
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnEditClearGoteHandToBox) {
    ui.btnEditClearGoteHandToBox.addEventListener("click", async () => {
      try {
        if (shouldFillGoteHandFromBoxInStandardMode()) {
          await editFillGoteHandFromBoxStandard();
        } else {
          await editPreset("clear_gote_hand_to_box");
        }
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnAttrLoadFromBoard) {
    ui.btnAttrLoadFromBoard.addEventListener("click", async () => {
      try {
        await attrLoadFromBoard();
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnAttrApplyToBoard) {
    ui.btnAttrApplyToBoard.addEventListener("click", async () => {
      try {
        await attrApplyToBoard();
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnAttrApplyToType) {
    ui.btnAttrApplyToType.addEventListener("click", async () => {
      try {
        await attrApplyToType();
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.attrIsKingInput) {
    ui.attrIsKingInput.addEventListener("change", () => {
      if (ui.attrIsKingInput.checked && ui.attrImmortalInput) {
        ui.attrImmortalInput.checked = false;
      }
    });
  }
  if (ui.attrImmortalInput) {
    ui.attrImmortalInput.addEventListener("change", () => {
      if (ui.attrImmortalInput.checked && ui.attrIsKingInput) {
        ui.attrIsKingInput.checked = false;
      }
    });
  }
  if (ui.attrDlgIsKingInput) {
    ui.attrDlgIsKingInput.addEventListener("change", () => {
      if (ui.attrDlgIsKingInput.checked && ui.attrDlgImmortalInput) {
        ui.attrDlgImmortalInput.checked = false;
      }
    });
  }
  if (ui.attrDlgImmortalInput) {
    ui.attrDlgImmortalInput.addEventListener("change", () => {
      if (ui.attrDlgImmortalInput.checked && ui.attrDlgIsKingInput) {
        ui.attrDlgIsKingInput.checked = false;
      }
    });
  }

  const bindHistory = (el, kind) => {
    if (!el) return;
    el.addEventListener("click", () => {
      stopHistoryPlayback({ silent: true });
      const action = async () => {
        suppressHistoryAutoScroll = true;
        try {
          const changed = await historyAction(kind);
          ensureCurrentHistoryRowVisible();
          return changed;
        } finally {
          suppressHistoryAutoScroll = false;
        }
      };
      void enqueueSequentialAction(action)
        .catch((e) => {
        logLine(e.message || String(e), true);
      });
    });
  };
  bindHistory(ui.btnHistStart, "start");
  bindHistory(ui.btnHistBack, "back");
  bindHistory(ui.btnHistForward, "forward");
  bindHistory(ui.btnHistEnd, "end");
  if (ui.btnHistPlayReverse) {
    ui.btnHistPlayReverse.addEventListener("click", () => {
      toggleHistoryPlayback(-1);
    });
  }
  if (ui.btnHistPlay) {
    ui.btnHistPlay.addEventListener("click", () => {
      toggleHistoryPlayback(1);
    });
  }

  if (ui.btnPromoteBranch) {
    ui.btnPromoteBranch.addEventListener("click", async () => {
      try {
        await promoteBranch();
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnDeleteBranch) {
    ui.btnDeleteBranch.addEventListener("click", async () => {
      try {
        await deleteBranch();
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }

  if (ui.btnLoadClipboard) {
    ui.btnLoadClipboard.addEventListener("click", async () => {
      try {
        await withIoBusy("読込中... クリップボード", async () => {
          await loadAutoFromClipboard();
        });
        closeIoDialog();
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnLoadClipboardKifuOnly) {
    ui.btnLoadClipboardKifuOnly.addEventListener("click", async () => {
      try {
        await withIoBusy("読込中... クリップボード(棋譜のみ)", async () => {
          await loadAutoFromClipboard({ mode: "kifu_only" });
        });
        closeIoDialog();
      } catch (e) {
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnExportSfen) {
    ui.btnExportSfen.addEventListener("click", async () => {
      try {
        await exportSfenToText();
      } catch (e) {
        showIoClipboardNotice(e.message || String(e), true, 4200);
        logLine(e.message || String(e), true);
      }
    });
  }
  if (ui.btnExportKifu) {
    ui.btnExportKifu.addEventListener("click", async () => {
      try {
        await exportKifuToText();
      } catch (e) {
        showIoClipboardNotice(e.message || String(e), true, 4200);
        logLine(e.message || String(e), true);
      }
    });
  }

  try {
    const preferredKind = resolvePreferredEngineKind();
    const persistedSessionId = preferredKind === "local" ? localReadPersistedSessionId() : "";
    if (persistedSessionId) {
      const env = await currentEngine().getSession(persistedSessionId);
      applyStateEnvelope(env);
      await refreshLegal();
      await refreshHistory();
      renderAll();
      logLine(`ローカルセッション復元：${persistedSessionId}`);
      return;
    }
    await createSession("tsume");
  } catch (e) {
    logLine(e.message || String(e), true);
    try {
      await createSession("tsume");
    } catch (e2) {
      logLine(e2.message || String(e2), true);
    }
  }
}

if (!IS_WORKER_CONTEXT) {
  void boot();
}


