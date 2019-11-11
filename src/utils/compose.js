const compose = (...funcs) => (wrapped) =>
  funcs.reduceRight((prevResult, f) => f(prevResult), wrapped)

export default compose
