import { defineConfig } from '@wagmi/cli';
import { react,foundry } from "@wagmi/cli/plugins";


export default defineConfig({ 
    out: 'src/generated.ts', 
    contracts: [], 
    plugins: [
        react(),
        foundry({
            project: '../foundry'
        })
    ] 
});
