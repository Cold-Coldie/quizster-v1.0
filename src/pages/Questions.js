import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Usefetch from "../hooks/UseFetch";
import Loading from "../images/loadinggg.png";

const Questions = () => {
  const { category, difficulty } = useParams();

  const { questions, isPending, error } = Usefetch(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
  );

  const [checked, setChecked] = useState("");

  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);
  const [seven, setSeven] = useState(0);
  const [eight, setEight] = useState(0);
  const [nine, setNine] = useState(0);
  const [ten, setTen] = useState(0);

  var sum = 0;
  sum = one + two + three + four + five + six + seven + eight + nine + ten;

  return (
    <div className="mt-20">
      {isPending && (
        <div className="flex items-center justify-center relative top-52 animate-spin">
          <img className="h-10" src={Loading} alt="loading" />
        </div>
      )}

      {error && <div className="m-6">{error}</div>}

      {questions && (
        <div className="p-4 font-poppins text-gray-700">
          <div className="m-3 bg-gray-50 p-3 rounded-xl">
            <h3>
              <span className="mx-2">1.</span>
              <span>{questions[0].question}</span>
            </h3>

            <form>
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="one"
                  value={questions[0].incorrect_answers[0]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setOne(0);
                  }}
                />
                {questions[0].incorrect_answers[0]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="one"
                  value={questions[0].correct_answer}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setOne(1);
                  }}
                />
                {questions[0].correct_answer}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="one"
                  value={questions[0].incorrect_answers[1]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setOne(0);
                  }}
                />
                {questions[0].incorrect_answers[1]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="one"
                  value={questions[0].incorrect_answers[2]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setOne(0);
                  }}
                />
                {questions[0].incorrect_answers[2]}
              </label>
            </form>
          </div>

          <div className="m-3 bg-gray-50 p-3 rounded-xl">
            <h3>
              <span className="mx-2">2.</span>
              <span>{questions[1].question}</span>
            </h3>

            <form>
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="two"
                  value={questions[1].correct_answer}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setTwo(1);
                  }}
                />
                {questions[1].correct_answer}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="two"
                  value={questions[1].incorrect_answers[0]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setTwo(0);
                  }}
                />
                {questions[1].incorrect_answers[0]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="two"
                  value={questions[1].incorrect_answers[1]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setTwo(0);
                  }}
                />
                {questions[1].incorrect_answers[1]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="two"
                  value={questions[1].incorrect_answers[2]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setTwo(0);
                  }}
                />
                {questions[1].incorrect_answers[2]}
              </label>
            </form>
          </div>

          <div className="m-3 bg-gray-50 p-3 rounded-xl">
            <h3>
              <span className="mx-2">3.</span>
              <span>{questions[2].question}</span>
            </h3>

            <form>
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="three"
                  value={questions[2].incorrect_answers[0]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setThree(0);
                  }}
                />
                {questions[2].incorrect_answers[0]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="three"
                  value={questions[2].incorrect_answers[1]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setThree(0);
                  }}
                />
                {questions[2].incorrect_answers[1]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="three"
                  value={questions[2].incorrect_answers[2]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setThree(0);
                  }}
                />
                {questions[2].incorrect_answers[2]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="three"
                  value={questions[2].correct_answer}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setThree(1);
                  }}
                />
                {questions[2].correct_answer}
              </label>
            </form>
          </div>

          <div className="m-3 bg-gray-50 p-3 rounded-xl">
            <h3>
              <span className="mx-2">4.</span>
              <span>{questions[3].question}</span>
            </h3>

            <form>
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="four"
                  value={questions[3].incorrect_answers[0]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setFour(0);
                  }}
                />
                {questions[3].incorrect_answers[0]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="four"
                  value={questions[3].incorrect_answers[1]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setFour(0);
                  }}
                />
                {questions[3].incorrect_answers[1]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="four"
                  value={questions[3].correct_answer}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setFour(1);
                  }}
                />
                {questions[3].correct_answer}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="four"
                  value={questions[3].incorrect_answers[2]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setFour(0);
                  }}
                />
                {questions[3].incorrect_answers[2]}
              </label>
            </form>
          </div>

          <div className="m-3 bg-gray-50 p-3 rounded-xl">
            <h3>
              <span className="mx-2">5.</span>
              <span>{questions[4].question}</span>
            </h3>

            <form>
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="five"
                  value={questions[4].incorrect_answers[0]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setFive(0);
                  }}
                />
                {questions[4].incorrect_answers[0]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="five"
                  value={questions[4].correct_answer}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setFive(1);
                  }}
                />
                {questions[4].correct_answer}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="five"
                  value={questions[4].incorrect_answers[1]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setFive(0);
                  }}
                />
                {questions[4].incorrect_answers[1]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="five"
                  value={questions[4].incorrect_answers[2]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setFive(0);
                  }}
                />
                {questions[4].incorrect_answers[2]}
              </label>
            </form>
          </div>

          <div className="m-3 bg-gray-50 p-3 rounded-xl">
            <h3>
              <span className="mx-2">6.</span>
              <span>{questions[5].question}</span>
            </h3>

            <form>
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="six"
                  value={questions[5].correct_answer}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setSix(1);
                  }}
                />
                {questions[5].correct_answer}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="six"
                  value={questions[5].incorrect_answers[0]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setSix(0);
                  }}
                />
                {questions[5].incorrect_answers[0]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="six"
                  value={questions[5].incorrect_answers[1]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setSix(0);
                  }}
                />
                {questions[5].incorrect_answers[1]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="six"
                  value={questions[5].incorrect_answers[2]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setSix(0);
                  }}
                />
                {questions[5].incorrect_answers[2]}
              </label>
            </form>
          </div>

          <div className="m-3 bg-gray-50 p-3 rounded-xl">
            <h3>
              <span className="mx-2">7.</span>
              <span>{questions[6].question}</span>
            </h3>

            <form>
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="seven"
                  value={questions[6].incorrect_answers[0]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setSeven(0);
                  }}
                />
                {questions[6].incorrect_answers[0]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="seven"
                  value={questions[6].correct_answer}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setSeven(1);
                  }}
                />
                {questions[6].correct_answer}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="seven"
                  value={questions[6].incorrect_answers[1]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setSeven(0);
                  }}
                />
                {questions[6].incorrect_answers[1]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="seven"
                  value={questions[6].incorrect_answers[2]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setSeven(0);
                  }}
                />
                {questions[6].incorrect_answers[2]}
              </label>
            </form>
          </div>

          <div className="m-3 bg-gray-50 p-3 rounded-xl">
            <h3>
              <span className="mx-2">8.</span>
              <span>{questions[7].question}</span>
            </h3>

            <form>
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="eight"
                  value={questions[7].incorrect_answers[0]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setEight(0);
                  }}
                />
                {questions[7].incorrect_answers[0]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="eight"
                  value={questions[7].incorrect_answers[1]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setEight(0);
                  }}
                />
                {questions[7].incorrect_answers[1]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="eight"
                  value={questions[7].correct_answer}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setEight(1);
                  }}
                />
                {questions[7].correct_answer}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="eight"
                  value={questions[7].incorrect_answers[2]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setEight(0);
                  }}
                />
                {questions[7].incorrect_answers[2]}
              </label>
            </form>
          </div>

          <div className="m-3 bg-gray-50 p-3 rounded-xl">
            <h3>
              <span className="mx-2">9.</span>
              <span>{questions[8].question}</span>
            </h3>

            <form>
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="nine"
                  value={questions[8].incorrect_answers[0]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setNine(0);
                  }}
                />
                {questions[8].incorrect_answers[0]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="nine"
                  value={questions[8].correct_answer}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setNine(1);
                  }}
                />
                {questions[8].correct_answer}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="nine"
                  value={questions[8].incorrect_answers[1]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setNine(0);
                  }}
                />
                {questions[8].incorrect_answers[1]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="nine"
                  value={questions[8].incorrect_answers[2]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setNine(0);
                  }}
                />
                {questions[8].incorrect_answers[2]}
              </label>
            </form>
          </div>

          <div className="m-3 bg-gray-50 p-3 rounded-xl">
            <h3>
              <span className="mx-2">10.</span>
              <span>{questions[9].question}</span>
            </h3>

            <form>
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="ten"
                  value={questions[9].incorrect_answers[0]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setTen(0);
                  }}
                />
                {questions[9].incorrect_answers[0]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="ten"
                  value={questions[9].correct_answer}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setTen(1);
                  }}
                />
                {questions[9].correct_answer}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="ten"
                  value={questions[9].incorrect_answers[1]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setTen(0);
                  }}
                />
                {questions[9].incorrect_answers[1]}
              </label>
              <br />
              <label>
                <input
                  className="mr-3"
                  type="radio"
                  name="ten"
                  value={questions[9].incorrect_answers[2]}
                  onChange={(e) => {
                    setChecked(e.target.value);
                    setTen(0);
                  }}
                />
                {questions[9].incorrect_answers[2]}
              </label>
            </form>
          </div>

          <div className="hidden">{checked}</div>

          <Link to={`/score/${sum}`}>
            <div className="bg-purple-800 text-white w-min m-10 p-2 rounded-md mr-auto cursor-pointer">
              SUBMIT
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Questions;
