/**
 * from: https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web
 * to:   https://github.com/oceanopen/ChatGPT-Next-Web
 */

export const NEXT_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
console.log("[Next] constant NEXT_BASE_PATH: ", NEXT_BASE_PATH);

export const OWNER = "oceanopen";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const PLUGINS_REPO_URL = `https://github.com/ChatGPTNextWeb/NextChat-Awesome-Plugins`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/ChatGPTNextWeb/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const STABILITY_BASE_URL = "https://api.stability.ai";

export const OPENAI_BASE_URL = "https://api.openai.com";
export const ANTHROPIC_BASE_URL = "https://api.anthropic.com";

export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";

export const BAIDU_BASE_URL = "https://aip.baidubce.com";
export const BAIDU_OATUH_URL = `${BAIDU_BASE_URL}/oauth/2.0/token`;

export const BYTEDANCE_BASE_URL = "https://ark.cn-beijing.volces.com";

export const ALIBABA_BASE_URL = "https://dashscope.aliyuncs.com/api/";

export const TENCENT_BASE_URL = "https://hunyuan.tencentcloudapi.com";

export const MOONSHOT_BASE_URL = "https://api.moonshot.cn";

export const XAI_BASE_URL = "https://api.x.ai";

export const CHATGLM_BASE_URL = "https://open.bigmodel.cn";

export const CACHE_URL_PREFIX = `${NEXT_BASE_PATH}/api/cache`;
export const UPLOAD_URL = `${CACHE_URL_PREFIX}/upload`;

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Plugins = "/plugins",
  Auth = "/auth",
  Sd = "/sd",
  SdNew = "/sd-new",
  Artifacts = "/artifacts",
  SearchChat = "/search-chat",
}

export const ApiPath = {
  Cors: "",
  Azure: `${NEXT_BASE_PATH}/api/azure`,
  OpenAI: `${NEXT_BASE_PATH}/api/openai`,
  Anthropic: `${NEXT_BASE_PATH}/api/anthropic`,
  Google: `${NEXT_BASE_PATH}/api/google`,
  Baidu: `${NEXT_BASE_PATH}/api/baidu`,
  ByteDance: `${NEXT_BASE_PATH}/api/bytedance`,
  Alibaba: `${NEXT_BASE_PATH}/api/alibaba`,
  Tencent: `${NEXT_BASE_PATH}/api/tencent`,
  Moonshot: `${NEXT_BASE_PATH}/api/moonshot`,
  Stability: `${NEXT_BASE_PATH}/api/stability`,
  Artifacts: `${NEXT_BASE_PATH}/api/artifacts`,
  XAI: `${NEXT_BASE_PATH}/api/xai`,
  ChatGLM: `${NEXT_BASE_PATH}/api/chatglm`,
} as const;

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "oceanopen-chat-next-web-store",
  Plugin = "oceanopen-chat-next-web-plugin",
  Access = "oceanopen-access-control",
  Config = "oceanopen-app-config",
  Mask = "oceanopen-mask-store",
  Prompt = "oceanopen-prompt-store",
  Update = "oceanopen-chat-update",
  Sync = "oceanopen-sync",
  SdList = "oceanopen-sd-list",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "oceanopen-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "oceanopen-chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
  Google = "Google",
  Anthropic = "Anthropic",
  Baidu = "Baidu",
  ByteDance = "ByteDance",
  Alibaba = "Alibaba",
  Tencent = "Tencent",
  Moonshot = "Moonshot",
  Stability = "Stability",
  XAI = "XAI",
  ChatGLM = "ChatGLM",
}

// Google API safety settings, see https://ai.google.dev/gemini-api/docs/safety-settings
// BLOCK_NONE will not block any content, and BLOCK_ONLY_HIGH will block only high-risk content.
export enum GoogleSafetySettingsThreshold {
  BLOCK_NONE = "BLOCK_NONE",
  BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH",
  BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE",
  BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE",
}

export enum ModelProvider {
  Stability = "Stability",
  GPT = "GPT",
  GeminiPro = "GeminiPro",
  Claude = "Claude",
  Ernie = "Ernie",
  Doubao = "Doubao",
  Qwen = "Qwen",
  Hunyuan = "Hunyuan",
  Moonshot = "Moonshot",
  XAI = "XAI",
  ChatGLM = "ChatGLM",
}

export const Stability = {
  GeneratePath: "v2beta/stable-image/generate",
  ExampleEndpoint: "https://api.stability.ai",
};

export const Anthropic = {
  ChatPath: "v1/messages",
  ChatPath1: "v1/complete",
  ExampleEndpoint: "https://api.anthropic.com",
  Vision: "2023-06-01",
};

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  SpeechPath: "v1/audio/speech",
  ImagePath: "v1/images/generations",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ChatPath: (deployName: string, apiVersion: string) =>
    `deployments/${deployName}/chat/completions?api-version=${apiVersion}`,
  // https://<your_resource_name>.openai.azure.com/openai/deployments/<your_deployment_name>/images/generations?api-version=<api_version>
  ImagePath: (deployName: string, apiVersion: string) =>
    `deployments/${deployName}/images/generations?api-version=${apiVersion}`,
  ExampleEndpoint: "https://{resource-url}/openai",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: (modelName: string) =>
    `v1beta/models/${modelName}:streamGenerateContent`,
};

export const Baidu = {
  ExampleEndpoint: BAIDU_BASE_URL,
  ChatPath: (modelName: string) => {
    let endpoint = modelName;
    if (modelName === "ernie-4.0-8k") {
      endpoint = "completions_pro";
    }
    if (modelName === "ernie-4.0-8k-preview-0518") {
      endpoint = "completions_adv_pro";
    }
    if (modelName === "ernie-3.5-8k") {
      endpoint = "completions";
    }
    if (modelName === "ernie-speed-8k") {
      endpoint = "ernie_speed";
    }
    return `rpc/2.0/ai_custom/v1/wenxinworkshop/chat/${endpoint}`;
  },
};

export const ByteDance = {
  ExampleEndpoint: "https://ark.cn-beijing.volces.com/api/",
  ChatPath: "api/v3/chat/completions",
};

export const Alibaba = {
  ExampleEndpoint: ALIBABA_BASE_URL,
  ChatPath: "v1/services/aigc/text-generation/generation",
};

export const Tencent = {
  ExampleEndpoint: TENCENT_BASE_URL,
};

export const Moonshot = {
  ExampleEndpoint: MOONSHOT_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const XAI = {
  ExampleEndpoint: XAI_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const ChatGLM = {
  ExampleEndpoint: CHATGLM_BASE_URL,
  ChatPath: "api/paas/v4/chat/completions",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
// export const DEFAULT_SYSTEM_TEMPLATE = `
// You are ChatGPT, a large language model trained by {{ServiceProvider}}.
// Knowledge cutoff: {{cutoff}}
// Current model: {{model}}
// Current time: {{time}}
// Latex inline: $x^2$
// Latex block: $$e=mc^2$$
// `;
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by {{ServiceProvider}}.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: \\(x^2\\) 
Latex block: $$e=mc^2$$
`;

export const SUMMARIZE_MODEL = "gpt-4o-mini";
export const GEMINI_SUMMARIZE_MODEL = "gemini-pro";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "gpt-4-turbo": "2023-12",
  "gpt-4-turbo-2024-04-09": "2023-12",
  "gpt-4-turbo-preview": "2023-12",
  "gpt-4o": "2023-10",
  "gpt-4o-2024-05-13": "2023-10",
  "gpt-4o-2024-08-06": "2023-10",
  "gpt-4o-2024-11-20": "2023-10",
  "chatgpt-4o-latest": "2023-10",
  "gpt-4o-mini": "2023-10",
  "gpt-4o-mini-2024-07-18": "2023-10",
  "gpt-4-vision-preview": "2023-04",
  "o1-mini": "2023-10",
  "o1-preview": "2023-10",
  // After improvements,
  // it's now easier to add "KnowledgeCutOffDate" instead of stupid hardcoding it, as was done previously.
  "gemini-pro": "2023-12",
  "gemini-pro-vision": "2023-12",
};

export const DEFAULT_TTS_ENGINE = "OpenAI-TTS";
export const DEFAULT_TTS_ENGINES = ["OpenAI-TTS", "Edge-TTS"];
export const DEFAULT_TTS_MODEL = "tts-1";
export const DEFAULT_TTS_VOICE = "alloy";
export const DEFAULT_TTS_MODELS = ["tts-1", "tts-1-hd"];
export const DEFAULT_TTS_VOICES = [
  "alloy",
  "echo",
  "fable",
  "onyx",
  "nova",
  "shimmer",
];

export const VISION_MODEL_REGEXES = [
  /vision/,
  /gpt-4o/,
  /claude-3/,
  /gemini-1\.5/,
  /gemini-exp/,
  /gemini-2\.0/,
  /learnlm/,
  /qwen-vl/,
  /qwen2-vl/,
  /gpt-4-turbo(?!.*preview)/, // Matches "gpt-4-turbo" but not "gpt-4-turbo-preview"
  /^dall-e-3$/, // Matches exactly "dall-e-3"
];

export const EXCLUDE_VISION_MODEL_REGEXES = [/claude-3-5-haiku-20241022/];

// https://platform.openai.com/docs/models#current-model-aliases
const openaiModels = [
  "gpt-3.5-turbo",
  "gpt-4o",
  "chatgpt-4o-latest",
  "gpt-4o-mini",
  "o1",
  "o1-mini",
  "gpt-4o-realtime-preview",
  "gpt-4o-mini-realtime-preview",
  "gpt-4o-audio-preview",
  "gpt-4",
  "gpt-4-turbo",
  "gpt-4-turbo-preview",
];

// https://ai.google/get-started/our-models/
// https://aistudio.google.com/prompts/new_chat
// https://gemini.google.com/app/559a3f17e3924258
// https://deepmind.google/technologies/imagen-3/
const googleModels = [
  "gemini-1.5-pro",
  "gemini-1.5-flash",
  "gemini-1.5-flash-8b",
  "gemini-2.0-flash-exp",
  "gemini-exp-1206",
  "gemini-2.0-flash-thinking-exp-1219",
  "gemma-2-2b-it",
  "gemma-2-9b-it",
  "gemma-2-27b-it",
];

// https://docs.anthropic.com/en/docs/about-claude/models
const anthropicModels = [
  "claude-instant-1.2",
  "claude-2.0",
  "claude-2.1",
  "claude-3-5-haiku-latest",
  "claude-3-5-sonnet-latest",
  "claude-3-opus-latest",
];

// https://console.bce.baidu.com/qianfan/modelcenter/model/buildIn/list
const baiduModels = [
  "ERNIE-4.0-Turbo-8K",
  "ERNIE-4.0-Turbo-8K-Latest",
  "ERNIE-4.0-Turbo-128K",
  "ERNIE-4.0-8K",
  "ERNIE-4.0-8K-Latest",
  "ERNIE-3.5-8K",
  "ERNIE-3.5-128K",
  "ERNIE-Speed-8K",
  "ERNIE-Speed-128K",
  "ERNIE-Speed-Pro-128K",
  "ERNIE-Lite-8K",
  "ERNIE-Lite-Pro-128K",
  "ERNIE-Tiny-8K",
];

// https://www.volcengine.com/product/doubao
const bytedanceModels = [
  "Doubao-pro-256k",
  "Doubao-pro-128k",
  "Doubao-pro-32k",
  "Doubao-pro-4k",
  "Doubao-lite-128k",
  "Doubao-lite-32k",
  "Doubao-vision-pro-32k",
  "Doubao-vision-lite-32k",
];

// https://www.alibabacloud.com/help/zh/model-studio/getting-started/models
const alibabaModes = [
  "qwen-turbo",
  "qwen-plus",
  "qwen-max",
  "qwen-vl-plus",
  "qwen-vl-max",
  "qwen2-72b-instruct",
  "qwen2-7b-instruct",
  "text-embedding-v3",
];

// https://cloud.tencent.com/product/hunyuan
const tencentModels = [
  "hunyuan-turbo-latest",
  "hunyuan-turbo",
  "hunyuan-large-longcontext",
  "hunyuan-large",
  "hunyuan-standard",
  "hunyuan-lite",
  "hunyuan-translation-lite",
  "hunyuan-code",
  "hunyuan-functioncall",
  "hunyuan-role",
];

// https://platform.moonshot.cn/docs/pricing/chat
const moonshotModes = ["moonshot-v1-8k", "moonshot-v1-32k", "moonshot-v1-128k"];

// https://docs.x.ai/docs/models
const xAIModes = ["grok-beta", "grok-vision-beta"];

// https://bigmodel.cn/console/modelcenter/square
const chatglmModels = [
  "glm-4-plus",
  "glm-4-air",
  "glm-4-long",
  "glm-4-flashx",
  "glm-4-flash",
];

let seq = 1000; // 内置的模型序号生成器从1000开始
export const DEFAULT_MODELS = [
  ...openaiModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
      sorted: 1, // 这里是固定的，确保顺序与之前内置的版本一致
    },
  })),
  ...openaiModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "azure",
      providerName: "Azure",
      providerType: "azure",
      sorted: 2,
    },
  })),
  ...googleModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
      sorted: 3,
    },
  })),
  ...anthropicModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "anthropic",
      providerName: "Anthropic",
      providerType: "anthropic",
      sorted: 4,
    },
  })),
  ...baiduModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "baidu",
      providerName: "Baidu",
      providerType: "baidu",
      sorted: 5,
    },
  })),
  ...bytedanceModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "bytedance",
      providerName: "ByteDance",
      providerType: "bytedance",
      sorted: 6,
    },
  })),
  ...alibabaModes.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "alibaba",
      providerName: "Alibaba",
      providerType: "alibaba",
      sorted: 7,
    },
  })),
  ...tencentModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "tencent",
      providerName: "Tencent",
      providerType: "tencent",
      sorted: 8,
    },
  })),
  ...moonshotModes.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "moonshot",
      providerName: "Moonshot",
      providerType: "moonshot",
      sorted: 9,
    },
  })),
  ...xAIModes.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "xai",
      providerName: "XAI",
      providerType: "xai",
      sorted: 11,
    },
  })),
  ...chatglmModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "chatglm",
      providerName: "ChatGLM",
      providerType: "chatglm",
      sorted: 12,
    },
  })),
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

// some famous webdav endpoints
export const internalAllowedWebDavEndpoints = [
  "https://dav.jianguoyun.com/dav/",
  "https://dav.dropdav.com/",
  "https://dav.box.com/dav",
  "https://nanao.teracloud.jp/dav/",
  "https://bora.teracloud.jp/dav/",
  "https://webdav.4shared.com/",
  "https://dav.idrivesync.com",
  "https://webdav.yandex.com",
  "https://app.koofr.net/dav/Koofr",
];

export const PLUGINS = [
  { name: "Plugins", path: Path.Plugins },
  { name: "Stable Diffusion", path: Path.Sd },
  { name: "Search Chat", path: Path.SearchChat },
];

export const SAAS_CHAT_URL = "https://nextchat.dev/chat";
export const SAAS_CHAT_UTM_URL = "https://nextchat.dev/chat?utm=github";
