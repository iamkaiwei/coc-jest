import {
  languages,
  ExtensionContext,
} from "coc.nvim";
import { createTestLensProvider } from "./superMode";

export async function activate(context: ExtensionContext): Promise<void> {
  const codeLensProviderDisposable = languages.registerCodeLensProvider(
    [
      { language: "typescript" },
      { language: "typescript.tsx" },
      { language: "typescriptreact" },
      { language: "javascript" },
      { language: "javascript.jsx" },
      git@github.com:iamkaiwei/coc-jest.git
    ],

    await createTestLensProvider()
  );

  context.subscriptions.push(codeLensProviderDisposable);
}
