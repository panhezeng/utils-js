import "zx/globals";
// import {Project} from "ts-morph";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//
// let index = 1;
//
// async function main() {
//     // 这部分内容具体可以查阅 ts-morph 的文档
//     // 这里仅需要知道这是用来处理 ts 文件并生成类型声明文件即可
//     const project = new Project({
//         compilerOptions: {
//             declaration: true,
//             emitDeclarationOnly: true,
//             noEmitOnError: true,
//             jsx: "preserve",
//             allowJs: true, // 如果想兼容 js 语法需要加上
//             outDir: "dist", // 可以设置自定义的打包文件夹，如 'types'
//         },
//         tsConfigFilePath: path.resolve(__dirname, "../../../tsconfig.json"),
//         skipAddingFilesFromTsConfig: true,
//     });
//
//     // 获取 lib 下的 .vue 和 .ts 文件
//     const files = await glob(["src/**/*[!.d].ts"]);
//     const sourceFiles = [];
//
//     await Promise.all(
//         files.map(async (file) => {
//             // console.log(file);
//             // 如果是 ts 文件则直接添加即可
//             sourceFiles.push(project.addSourceFileAtPath(file));
//         })
//     );
//
//     const diagnostics = project.getPreEmitDiagnostics();
//
//     // 输出解析过程中的错误信息
//     console.log(project.formatDiagnosticsWithColorAndContext(diagnostics));
//
//     project.emitToMemory();
//
//     // 随后将解析完的文件写道打包路径
//     for (const sourceFile of sourceFiles) {
//         const emitOutput = sourceFile.getEmitOutput();
//
//         for (const outputFile of emitOutput.getOutputFiles()) {
//             const filePath = outputFile.getFilePath();
//             await fs.promises.mkdir(path.dirname(filePath), {recursive: true});
//             await fs.promises.writeFile(filePath, outputFile.getText(), "utf8");
//         }
//     }
// }
//
// await main();

await $`cp -rf ${path.resolve(__dirname, "../../../README.md")} ${path.resolve(__dirname, "../README.md")}`;
