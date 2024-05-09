/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "SVGEmbed",
    description: "Make SVG images embed as images, instead of as regular files",
    authors: [Devs.nakoyasha],
    patches: [
        {
            find: "[\"image_jpeg\",\"image_png\"]",
            replacement: {
                match: /];/,
                replace: ",\"image_svg\"];",
            }
        }
    ]
});
