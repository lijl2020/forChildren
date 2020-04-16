/*
 * @Descripttion: 
 * @msg: 
 * @version: 1.0
 * @Author: Ling
 * @Date: 2020-03-31 22:16:29
 * @LastEditors: Ling
 * @LastEditTime: 2020-04-15 21:48:21
 */
import keyMirror from 'keymirror';

/**
 * Names for each state of the stage size toggle
 * @enum {string}
 */
const STAGE_SIZE_MODES = keyMirror({
    /**
     * The "large stage" button is pressed; the user would like a large stage.
     */
    large: null,

    /**
     * The "small stage" button is pressed; the user would like a small stage.
     */
    small: null
});

/**
 * Names for each stage render size
 * @enum {string}
 */
const STAGE_DISPLAY_SIZES = keyMirror({
    /**
     * Large stage with wide browser
     */
    large: null,

    /**
     * Large stage with narrow browser
     */
    largeConstrained: null,

    /**
     * Small stage (ignores browser width)
     */
    small: null
});

const STAGE_DISPLAY_SCALES = {};
STAGE_DISPLAY_SCALES[STAGE_DISPLAY_SIZES.large] = 1; // large mode, wide browser (standard)
STAGE_DISPLAY_SCALES[STAGE_DISPLAY_SIZES.largeConstrained] = 0.85; // large mode but narrow browser
STAGE_DISPLAY_SCALES[STAGE_DISPLAY_SIZES.small] = 0.5; // small mode, regardless of browser size

export default {
    standardStageWidth: document.getElementsByTagName("html")[0].clientWidth / 2,
    standardStageHeight: (document.getElementsByTagName("html")[0].clientWidth / 2) * 0.52,
    fullSizeMinWidth: 1096,
    fullSizePaintMinWidth: 1250
};

export {
    STAGE_DISPLAY_SCALES,
    STAGE_DISPLAY_SIZES,
    STAGE_SIZE_MODES
};
