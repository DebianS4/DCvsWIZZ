package com.debians4.dcwizz;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import java.io.IOException;
import java.io.InputStream;
import java.util.Locale;

public class MainActivity extends Activity {
    private WebView webView;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        webView = new WebView(this);
        webView.setBackgroundColor(0xFF07070E);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.getSettings().setMediaPlaybackRequiresUserGesture(false);
        webView.setWebViewClient(new LocalAssetClient());
        setContentView(webView);
        webView.loadUrl("https://dcwizz.local/index.html");
    }

    @Override public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack(); else super.onBackPressed();
    }

    private final class LocalAssetClient extends WebViewClient {
        @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            return openAsset(request.getUrl().getPath());
        }
        @Override public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
            return openAsset(android.net.Uri.parse(url).getPath());
        }
        private WebResourceResponse openAsset(String rawPath) {
            if (rawPath == null) return null;
            String path = rawPath.startsWith("/") ? rawPath.substring(1) : rawPath;
            if (path.isEmpty()) path = "index.html";
            try {
                InputStream stream = getAssets().open(path);
                return new WebResourceResponse(mime(path), "UTF-8", stream);
            } catch (IOException ignored) { return null; }
        }
        private String mime(String path) {
            String p = path.toLowerCase(Locale.US);
            if (p.endsWith(".html")) return "text/html";
            if (p.endsWith(".css")) return "text/css";
            if (p.endsWith(".js")) return "application/javascript";
            if (p.endsWith(".png")) return "image/png";
            if (p.endsWith(".jpg") || p.endsWith(".jpeg")) return "image/jpeg";
            if (p.endsWith(".m4a")) return "audio/mp4";
            if (p.endsWith(".apk")) return "application/vnd.android.package-archive";
            return "application/octet-stream";
        }
    }
}
