import { DEFAULT_INPUT_TEMPLATE, NEXT_BASE_PATH } from "../constant";
import packageJson from "../../package.json";

export const getBuildConfig = () => {
  if (typeof process === "undefined") {
    throw Error(
      "[Server Config] you are importing a nodejs-only module outside of nodejs",
    );
  }

  const nextBuildMode = process.env.NEXT_BUILD_MODE ?? "standalone";
  const version = "v" + packageJson.version;

  const commitInfo = (() => {
    try {
      const childProcess = require("child_process");
      const commitDate: string = childProcess
        .execSync('git log -1 --format="%at000" --date=unix')
        .toString()
        .trim();
      const commitHash: string = childProcess
        .execSync('git log --pretty=format:"%H" -n 1')
        .toString()
        .trim();

      return { commitDate, commitHash };
    } catch (e) {
      console.error("[Build Config] No git or not from git repo.");
      return {
        commitDate: "unknown",
        commitHash: "unknown",
      };
    }
  })();

  return {
    version,
    ...commitInfo,
    nextBuildMode,
    nextBasePath: NEXT_BASE_PATH,
    template: process.env.DEFAULT_INPUT_TEMPLATE ?? DEFAULT_INPUT_TEMPLATE,
    visionModels: process.env.VISION_MODELS || "",
  };
};

export type BuildConfig = ReturnType<typeof getBuildConfig>;
