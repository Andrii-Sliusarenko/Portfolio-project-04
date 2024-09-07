// vite.config.js
import { defineConfig } from "file:///Users/anastasiiadmytruk/Documents/GitHub/Portfolio-project-04/node_modules/vite/dist/node/index.js";
import { glob } from "file:///Users/anastasiiadmytruk/Documents/GitHub/Portfolio-project-04/node_modules/glob/dist/esm/index.js";
import injectHTML from "file:///Users/anastasiiadmytruk/Documents/GitHub/Portfolio-project-04/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///Users/anastasiiadmytruk/Documents/GitHub/Portfolio-project-04/node_modules/vite-plugin-full-reload/dist/index.js";
import SortCss from "file:///Users/anastasiiadmytruk/Documents/GitHub/Portfolio-project-04/node_modules/postcss-sort-media-queries/index.js";
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === "commonHelpers") {
              return "commonHelpers.js";
            }
            return "[name].js";
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".html")) {
              return "[name].[ext]";
            }
            return "assets/[name]-[hash][extname]";
          }
        }
      },
      outDir: "../dist",
      emptyOutDir: true
    },
    plugins: [
      injectHTML(),
      FullReload(["./src/**/**.html"]),
      SortCss({
        sort: "mobile-first"
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW5hc3Rhc2lpYWRteXRydWsvRG9jdW1lbnRzL0dpdEh1Yi9Qb3J0Zm9saW8tcHJvamVjdC0wNFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FuYXN0YXNpaWFkbXl0cnVrL0RvY3VtZW50cy9HaXRIdWIvUG9ydGZvbGlvLXByb2plY3QtMDQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FuYXN0YXNpaWFkbXl0cnVrL0RvY3VtZW50cy9HaXRIdWIvUG9ydGZvbGlvLXByb2plY3QtMDQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGdsb2IgfSBmcm9tICdnbG9iJztcbmltcG9ydCBpbmplY3RIVE1MIGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwtaW5qZWN0JztcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJztcbmltcG9ydCBTb3J0Q3NzIGZyb20gJ3Bvc3Rjc3Mtc29ydC1tZWRpYS1xdWVyaWVzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGRlZmluZToge1xuICAgICAgW2NvbW1hbmQgPT09ICdzZXJ2ZScgPyAnZ2xvYmFsJyA6ICdfZ2xvYmFsJ106IHt9LFxuICAgIH0sXG4gICAgcm9vdDogJ3NyYycsXG4gICAgYnVpbGQ6IHtcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgaW5wdXQ6IGdsb2Iuc3luYygnLi9zcmMvKi5odG1sJyksXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogY2h1bmtJbmZvID0+IHtcbiAgICAgICAgICAgIGlmIChjaHVua0luZm8ubmFtZSA9PT0gJ2NvbW1vbkhlbHBlcnMnKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnY29tbW9uSGVscGVycy5qcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ1tuYW1lXS5qcyc7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogYXNzZXRJbmZvID0+IHtcbiAgICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSAmJiBhc3NldEluZm8ubmFtZS5lbmRzV2l0aCgnLmh0bWwnKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ1tuYW1lXS5bZXh0XSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG91dERpcjogJy4uL2Rpc3QnLFxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBpbmplY3RIVE1MKCksXG4gICAgICBGdWxsUmVsb2FkKFsnLi9zcmMvKiovKiouaHRtbCddKSxcbiAgICAgIFNvcnRDc3Moe1xuICAgICAgICBzb3J0OiAnbW9iaWxlLWZpcnN0JyxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFcsU0FBUyxvQkFBb0I7QUFDelksU0FBUyxZQUFZO0FBQ3JCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sYUFBYTtBQUVwQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFFBQVEsTUFBTTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixDQUFDLFlBQVksVUFBVSxXQUFXLFNBQVMsR0FBRyxDQUFDO0FBQUEsSUFDakQ7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxRQUNiLE9BQU8sS0FBSyxLQUFLLGNBQWM7QUFBQSxRQUMvQixRQUFRO0FBQUEsVUFDTixhQUFhLElBQUk7QUFDZixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQSxVQUNBLGdCQUFnQixlQUFhO0FBQzNCLGdCQUFJLFVBQVUsU0FBUyxpQkFBaUI7QUFDdEMscUJBQU87QUFBQSxZQUNUO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQUEsVUFDQSxnQkFBZ0IsZUFBYTtBQUMzQixnQkFBSSxVQUFVLFFBQVEsVUFBVSxLQUFLLFNBQVMsT0FBTyxHQUFHO0FBQ3RELHFCQUFPO0FBQUEsWUFDVDtBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1IsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
