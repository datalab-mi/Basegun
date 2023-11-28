HEADERS = [
    {"name": "Cache-Control", "value": "no-store, max-age=0"},
    {"name": "Clear-Site-Data", "value": '"cache","cookies","storage"'},
    {
        "name": "Content-Security-Policy",
        "value": "default-src 'self'; form-action 'self'; object-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests; block-all-mixed-content",
    },
    {"name": "Cross-Origin-Embedder-Policy", "value": "require-corp"},
    {"name": "Cross-Origin-Opener-Policy", "value": "same-origin"},
    {"name": "Cross-Origin-Resource-Policy", "value": "same-origin"},
    {
        "name": "Permissions-Policy",
        "value": "accelerometer=(),ambient-light-sensor=(),autoplay=(),battery=(),camera=(),display-capture=(),document-domain=(),encrypted-media=(),fullscreen=(),gamepad=(),geolocation=(),gyroscope=(),layout-animations=(self),legacy-image-formats=(self),magnetometer=(),microphone=(),midi=(),oversized-images=(self),payment=(),picture-in-picture=(),publickey-credentials-get=(),speaker-selection=(),sync-xhr=(self),unoptimized-images=(self),unsized-media=(self),usb=(),screen-wake-lock=(),web-share=(),xr-spatial-tracking=()",
    },
    {"name": "Pragma", "value": "no-cache"},
    {"name": "Referrer-Policy", "value": "no-referrer"},
    {
        "name": "Strict-Transport-Security",
        "value": "max-age=31536000 ; includeSubDomains",
    },
    {"name": "X-Content-Type-Options", "value": "nosniff"},
    {"name": "X-Frame-Options", "value": "deny"},
    {"name": "X-Permitted-Cross-Domain-Policies", "value": "none"},
]
