module.exports = context => {
  const config = context.config.load('tdd-1-statics');
  return {
    config,
    basename: context.env.MOUNT_POINT
  };
};
