export const formatFileSize = (value) => {
  if (value > 0 && value < 1024) {
    return `${parseInt(value)} bytes`;
  } else if (value > 1000 && value < 1024 * 1024) {
    return `${(value / 1024).toFixed(2)}kB`;
  } else {
    return `${(value / 1024 / 1024).toFixed(2)}MB`;
  }
};
