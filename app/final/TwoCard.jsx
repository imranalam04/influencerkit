import React from "react";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { PieChart } from "@mui/x-charts";

const TwoCard = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-12 col-md-6 mb-3">
          <div className="card shadow-lg border-dark">
            <div className="card-body">
              <h5 className="card-title fs-4 p-3 font-weight-bold">
                Age Distribution
                <BsFillFileBarGraphFill className="mx-3 text-danger" />
              </h5>
              <div className="age-group">
                <span className="fs-6 text-secondary">13-17</span>
                <div className="progress">
                <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "26%" }}
                aria-valuenow="26"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                26%
              </div>
                </div>
              </div>
              <span className=" d-flex fs-6 text-secondary">18-24</span>
              <div className="progress my-1">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="8"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
              <span className=" d-flex fs-6 text-secondary">25-34</span>
              <div className="progress my-1">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "14%" }}
                  aria-valuenow="49"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  14%
                </div>
              </div>
              <span className=" d-flex fs-6 text-secondary">35-44</span>
              <div className="progress my-1">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "14%" }}
                  aria-valuenow="49"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  14%
                </div>
              </div>
              <span className=" d-flex fs-6 text-secondary">45-44</span>
              <div className="progress my-1">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "3%" }}
                  aria-valuenow="49"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  3%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card shadow-lg border-dark mb-3" style={{height:"21.05rem"}}>
            <div className="card-body">
              <h5 className="card-title fs-4 p-3 font-weight-bold">
                Country Distribution
                <HiLocationMarker className="mx-3 text-danger" />
              </h5>
              <div className="pie-chart-container d-flex justify-content-center">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 33, label: "USA" },
                        { id: 1, value: 8, label: "Brazil" },
                        { id: 2, value: 20, label: "India" },
                        { id: 2, value: 53, label: "Other" },
                      ],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoCard;
