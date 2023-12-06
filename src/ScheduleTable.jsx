import react, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ScheduleEvent from "./ScheduleEvent";
import OutsideAlerter from "./OutsideAlerter";

const ScheduleTable = (props) => {
  const [currentlyActive, setCurrentlyActive] = useState("");
  //put in the key of the currently active component in there, not the component straight up

  // const [arrayofScheduleEvents, setArrayofScheduleEvents] = useState([]);
  /*Only one set of components can be currently active at a time.*/

  /* So i need to specify which element is currently active */

  const DAYS = ["MON", "TUES", "WED", "THURS", "FRIDAY", "SAT", "SUN"];
  const HOURS = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
    1100,
    1200,
    1300,
    1400,
    1500,
    1600,
    1700,
    1800,
    1900,
    2000,
    2100,
    2200,
    2300,
    "MIDNIGHT",
  ];

  let arrayofScheduleEvents = [];
  //an array of JSX elements OutsideAlerter and ScheduleEvent elements with a unique key assigned to them.

  const makeUniqueKeys = () => {
    let uniquekeys = [];
    for (let hour in HOURS) {
      for (let day in DAYS) {
        uniquekeys.push(DAYS[day] + HOURS[hour]);
      }
    }
    return uniquekeys;
  };

  const assignUniqueKeys = () => {
    let uniquekeys = makeUniqueKeys();
    arrayofScheduleEvents = uniquekeys.map((key) => {
      // console.log(key);
      return (
        <ScheduleEvent
          currentlyActive={currentlyActive}
          setCurrentlyActive={setCurrentlyActive}
          makeInActive={makeInActive}
          slot={key}
          key={key}
        />
      );
    });
  };

  function makeInActive() {
    setCurrentlyActive("");
  }

  // try to avoid putting jsx into a state
  // a function that returns jsx is okay
  // a state that return jsx is weird and probably bad practice
  // The array of events should be just data, not jsx.
  //

  assignUniqueKeys();
  // console.log(arrayofScheduleEvents);

  function makeTableRow(starting_number) {
    let tablerowarray = [];
    for (let i = starting_number; i < starting_number + 7; i++) {
      tablerowarray.push(<td>{arrayofScheduleEvents[i]}</td>);
    }
    return tablerowarray;
  }

  return (
    <Table striped bordered hover className="table table-dark">
      <thead className="thead-dark">
        <tr>
          <th>Time</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* Anything that is entered in this row occurs at 12:00AM, Monday*/}
          <td>12:00 AM</td>
          {makeTableRow(0)}
        </tr>

        <tr>
          <td>1:00 AM</td>
          {makeTableRow(7)}
        </tr>

        <tr>
          <td>2:00 AM</td>
          {makeTableRow(14)}
        </tr>

        <tr>
          <td>3:00 AM</td>
          {makeTableRow(21)}
        </tr>

        <tr>
          <td>4:00 AM</td>
          {makeTableRow(28)}
        </tr>

        <tr>
          <td>5:00 AM</td>
          {makeTableRow(35)}
        </tr>

        <tr>
          <td>6:00 AM</td>
          {makeTableRow(42)}
        </tr>

        <tr>
          <td>7:00 AM</td>
          {makeTableRow(49)}
        </tr>

        <tr>
          <td>8:00 AM</td>
          {makeTableRow(56)}
        </tr>

        <tr>
          <td>9:00 AM</td>
          {makeTableRow(63)}
        </tr>

        <tr>
          <td>10:00 AM</td>
          {makeTableRow(70)}
        </tr>

        <tr>
          <td>11:00 AM</td>
          {makeTableRow(77)}
        </tr>

        <tr>
          <td>12:00 PM</td>
          {makeTableRow(84)}
        </tr>

        <tr>
          <td>1:00 PM</td>
          {makeTableRow(91)}
        </tr>

        <tr>
          <td>2:00 PM</td>
          {makeTableRow(98)}
        </tr>

        <tr>
          <td>3:00 PM</td>
          {makeTableRow(105)}
        </tr>

        <tr>
          <td>4:00 PM</td>
          {makeTableRow(112)}
        </tr>

        <tr>
          <td>5:00 PM</td>
          {makeTableRow(119)}
        </tr>

        <tr>
          <td>6:00 PM</td>
          {makeTableRow(126)}
        </tr>

        <tr>
          <td>7:00 PM</td>
          {makeTableRow(133)}
        </tr>

        <tr>
          <td>8:00 PM</td>
          {makeTableRow(140)}
        </tr>

        <tr>
          <td>9:00 PM</td>
          {makeTableRow(147)}
        </tr>

        <tr>
          <td>10:00 PM</td>
          {makeTableRow(154)}
        </tr>

        <tr>
          <td>11:00 PM</td>
          {makeTableRow(161)}
        </tr>
      </tbody>
    </Table>
  );
};

export default ScheduleTable;
