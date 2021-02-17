function UncontrolledInput() {
  return (
    <>
      <h3>
        Uncontrolled input - no <code>value</code> prop.
      </h3>
      <p>
        This means you can type in it freely, but (unlike our controlled input)
        you can't easily access its value in a React-friendly way.
      </p>
      <input />
      <button
        onClick={() => {
          console.log(
            "Take our word for it - there isn't an easy React-style way for us to access the input's value in order for us to log it - or process it in any other way. \n\nThis is a problem - we might want to use this data (as a filter, to change something else, or to store in a database)."
          );
        }}
      >
        Log input
      </button>
    </>
  );
}

export default UncontrolledInput;
