// The supplied component only uses these APIs for Framer editor controls.
// Runtime rendering is React + Three.js; pass component props explicitly.
export const addPropertyControls = () => {};
export const ControlType = new Proxy({}, { get: (_, key) => key });
export const RenderTarget = { canvas: 'canvas', current: () => 'preview' };
export const useIsStaticRenderer = () => false;
