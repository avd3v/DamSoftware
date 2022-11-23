import React from "react";
import $ from "jquery";
import style from "./Exmp.css";

const Exmp = () => {
  $("#percent").on("change", function () {
    var val = parseInt($(this).val());
    var $circle = $("#svg #bar");

    if (isNaN(val)) {
      val = { num };
    } else {
      var r = $circle.attr("r");
      var c = Math.PI * (r * 2);

      if (val < 0) {
        val = 0;
      }
      if (val > 100) {
        val = 100;
      }

      var pct = ((100 - val) / 100) * c;

      $circle.css({ strokeDashoffset: pct });

      $("#cont").attr("data-pct", val);
    }
  });

  const [num, setNum] = React.useState(50);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (props.isError) {
        setNum(randomNumberInRange(90, 100));
      } else {
        setNum(randomNumberInRange(50, 85));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.isError]);

  return (
    <div className="wrapper">
      <h1>SVG Circle Progress</h1>
      <h2>Based off of CSS3 circle progress bars</h2>

      <div id="cont" data-pct="100">
        <svg
          id="svg"
          width="200"
          height="200"
          viewPort="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r="90"
            cx="100"
            cy="100"
            fill="transparent"
            stroke-dasharray="565.48"
            stroke-dashoffset="0"
          ></circle>
          <circle
            id="bar"
            r="90"
            cx="100"
            cy="100"
            fill="transparent"
            stroke-dasharray="565.48"
            stroke-dashoffset="0"
          ></circle>
        </svg>
      </div>
      <label for="percent">Type a percent!</label>
      <input className="input__exmp" id="percent" name="percent"></input>
    </div>
  );
};

export default Exmp;
