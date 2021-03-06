import OneAnimal from "./OneAnimal";

function FieldAnimal({ fieldAnimal, field, goHome, addWeight, addDate }) {
  if (field === fieldAnimal.field && "cow" === fieldAnimal.animal) {
    return (
      <div className="cow">
        <OneAnimal
          goHome={goHome}
          addWeight={addWeight}
          fieldAnimal={fieldAnimal}
          addDate={addDate}
        ></OneAnimal>
      </div>
    );
  } else if (field === fieldAnimal.field && "sheep" === fieldAnimal.animal) {
    return (
      <div className="sheep">
        <OneAnimal
          goHome={goHome}
          addWeight={addWeight}
          fieldAnimal={fieldAnimal}
          addDate={addDate}
        ></OneAnimal>
      </div>
    );
  } else if (field === fieldAnimal.field && "horse" === fieldAnimal.animal) {
    return (
      <div className="horse">
        <OneAnimal
          goHome={goHome}
          addWeight={addWeight}
          fieldAnimal={fieldAnimal}
          addDate={addDate}
        ></OneAnimal>
      </div>
    );
  } else {
    return null;
  }
}

export default FieldAnimal;
