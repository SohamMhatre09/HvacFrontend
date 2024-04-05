import './styles.css';
const active_energy = require('../../../src/assets/images/active_energy.png');
const active_power = require('../../../src/assets/images/active_power.png');
const amb_temp_2 = require('../../../src/assets/images/amb_temp_2.png');
const amb_humdity_1 = require('../../../src/assets/images/Anamoly_amb_humidity_1.png');
const co2 = require('../../../src/assets/images/Anamoly_CO2.png');
const HP1 = require('../../../src/assets/images/AnamolyHighPressue.png');
const HP2 = require('../../../src/assets/images/AnamolyHighPressue2.png');
const HP3 = require('../../../src/assets/images/AnamolyHighPressue3.png');
const LP1 = require('../../../src/assets/images/AnamolyLowPressue1.png');
const LP2 = require('../../../src/assets/images/AnamolyLowPressue2.png');
const LP3 = require('../../../src/assets/images/AnamolyHighPressue3.png');
const OutletTemp = require('../../../src/assets/images/AnamolyOutletTemp.png');
const OutsideTemp = require('../../../src/assets/images/AnamolyOutsideTemp.png');
const forceplot = require('../../../src/assets/images/ForcePlot.png');
const globalbarplot = require('../../../src/assets/images/global_bar_plot.png');
const inletTemp = require('../../../src/assets/images/InletTemp.png');
const localBarPlot = require('../../../src/assets/images/local_bar_plot.png');
const rocCurve = require('../../../src/assets/images/roc_curve.png');
const scatterPlot = require('../../../src/assets/images/ScatterPlot.png');
const shapPlot = require('../../../src/assets/images/Shap_plot.png');
const waterfallPlot = require('../../../src/assets/images/WaterFallPlot.png');

export default function Content() {
  const data = [
    { Date: '2022-08-30', active_power: 0.506082 },
    { Date: '2022-08-31', active_power: 0.677589 },
    { Date: '2022-09-01', active_power: 0.482139 },
    { Date: '2022-09-02', active_power: 0.556511 },
    { Date: '2022-09-06', active_power: 0.661048 },
    { Date: '2022-09-07', active_power: 0.241929 },
    { Date: '2022-09-08', active_power: 0.115612 },
    { Date: '2022-09-09', active_power: 0.900951 },
    { Date: '2022-09-12', active_power: 0.833115 },
    { Date: '2022-09-13', active_power: 0.333533 }
  ];

  return (
    <div>
      <div>
        <h2>Power Forecast for next 10 days</h2>
        <hr />
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Estimated Active Power</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.Date}</td>
                <td>{row.active_power}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Detected Anomalies</h2>
      <hr />
      <div className="image-container">
        {/* Active Energy */}
        <div className="image-wrapper">
          <h2>Active Energy</h2>
          <a href={active_energy} target="_blank">
            <img className="content-image" src={active_energy} alt="Active Energy" />
          </a>
        </div>

        {/* Active Power */}
        <div className="image-wrapper">
          <h2>Anomalies in Active Power</h2>
          <a href={active_power} target="_blank">
            <img className="content-image" src={active_power} alt="Active Power" />
          </a>
        </div>

        {/* Ambient Temperature 2 */}
        <div className="image-wrapper">
          <h2>Anomalies in Ambient Temperature 2</h2>
          <a href={amb_temp_2} target="_blank">
            <img className="content-image" src={amb_temp_2} alt="Ambient Temperature 2" />
          </a>
        </div>

        {/* Anomaly Ambient Humidity 1 */}
        <div className="image-wrapper">
          <h2>Anomalies in Ambient Humidity 1</h2>
          <a href={amb_humdity_1} target="_blank">
            <img className="content-image" src={amb_humdity_1} alt="Anomaly Ambient Humidity 1" />
          </a>
        </div>

        {/* Anomaly CO2 */}
        <div className="image-wrapper">
          <h2>Anomalies in CO2</h2>
          <a href={co2} target="_blank">
            <img className="content-image" src={co2} alt="Anomaly CO2" />
          </a>
        </div>

        {/* Anomaly High Pressure 1 */}
        <div className="image-wrapper">
          <h2>Anomalies in High Pressure 1</h2>
          <a href={HP1} target="_blank">
            <img className="content-image" src={HP1} alt="Anomaly High Pressure 1" />
          </a>
        </div>

        {/* Anomaly High Pressure 2 */}
        <div className="image-wrapper">
          <h2>Anomalies in High Pressure 2</h2>
          <a href={HP2} target="_blank">
            <img className="content-image" src={HP2} alt="Anomaly High Pressure 2" />
          </a>
        </div>

        {/* Anomaly High Pressure 3 */}
        <div className="image-wrapper">
          <h2>Anomalies in High Pressure 3</h2>
          <a href={HP3} target="_blank">
            <img className="content-image" src={HP3} alt="Anomaly High Pressure 3" />
          </a>
        </div>

        {/* Anomaly Low Pressure 1 */}
        <div className="image-wrapper">
          <h2>Anomalies in Low Pressure 1</h2>
          <a href={LP1} target="_blank">
            <img className="content-image" src={LP1} alt="Anomaly Low Pressure 1" />
          </a>
        </div>

        {/* Anomaly Low Pressure 2 */}
        <div className="image-wrapper">
          <h2>Anomalies in Low Pressure 2</h2>
          <a href={LP2} target="_blank">
            <img className="content-image" src={LP2} alt="Anomaly Low Pressure 2" />
          </a>
        </div>

        {/* Anomaly Low Pressure 3 */}
        <div className="image-wrapper">
          <h2>Anomalies in Low Pressure 3</h2>
          <a href={LP3} target="_blank">
            <img className="content-image" src={LP3} alt="Anomaly Low Pressure 3" />
          </a>
        </div>

        {/* Anomaly Outlet Temperature */}
        <div className="image-wrapper">
          <h2>Anomalies in Outlet Temperature</h2>
          <a href={OutletTemp} target="_blank">
            <img className="content-image" src={OutletTemp} alt="Anomaly Outlet Temperature" />
          </a>
        </div>

        {/* Anomaly Outside Temperature */}
        <div className="image-wrapper">
          <h2>Anomalies in Outside Temperature</h2>
          <a href={OutsideTemp} target="_blank">
            <img className="content-image" src={OutsideTemp} alt="Anomaly Outside Temperature" />
          </a>
        </div>

        {/* Inlet Temperature */}
        <div className="image-wrapper">
          <h2>Anomalies in Inlet Temperature</h2>
          <a href={inletTemp} target="_blank">
            <img className="content-image" src={inletTemp} alt="Inlet Temperature" />
          </a>
        </div>

      </div>
      <h2>Explainable AI (XAI) using SHAP</h2>
      <hr />
      <div className="image-container">
        {/* Global Bar Plot */}
        <div className="image-wrapper">
          <h2>Global Bar Plot</h2>
          <a href={globalbarplot} target="_blank">
            <img className="content-image" src={globalbarplot} alt="Global Bar Plot" />
          </a>
        </div>

        {/* Local Bar Plot */}
        <div className="image-wrapper">
          <h2>Local Bar Plot</h2>
          <a href={localBarPlot} target="_blank">
            <img className="content-image" src={localBarPlot} alt="Local Bar Plot" />
          </a>
        </div>

        {/* Scatter Plot */}
        <div className="image-wrapper">
          <h2>Scatter Plot</h2>
          <a href={scatterPlot} target="_blank">
            <img className="content-image" src={scatterPlot} alt="Scatter Plot" />
          </a>
        </div>

        {/* Shap Plot */}
        <div className="image-wrapper">
          <h2>Shap Plot</h2>
          <a href={shapPlot} target="_blank">
            <img className="content-image" src={shapPlot} alt="Shap Plot" />
          </a>
        </div>

        {/* Waterfall Plot */}
        <div className="image-wrapper">
          <h2>Waterfall Plot</h2>
          <a href={waterfallPlot} target="_blank">
            <img className="content-image" src={waterfallPlot} alt="Waterfall Plot" />
          </a>
        </div>
      </div>

      {/* Force Plot */}
      <div className="image-wrapper">
        <h2>Force Plot</h2>
        <a href={forceplot} target="_blank">
          <img className="content-image" src={forceplot} alt="Force Plot" />
        </a>
      </div>

      <div>
        <h2>Model Details</h2>
        <hr />
        <p>
          <h2>Model Architecture:</h2>
          <pre>
            {`
  Model: "sequential_1"
  __________________________________________________________________
  Layer (type)                Output Shape              Param #   
  ==================================================================
  lstm_2 (LSTM)               (None, 30, 128)           75776     
  lstm_3 (LSTM)               (None, 64)                49408     
  dropout_1 (Dropout)         (None, 64)                0         
  dense_1 (Dense)             (None, 1)                 65        
  =================================================================
  Total params: 125249 (489.25 KB)
  Trainable params: 125249 (489.25 KB)
  Non-trainable params: 0 (0.00 Byte)
            `}
          </pre>
        </p>
        <p>
          <h2>Mean Squared Error: 0.00577149074524641</h2>
        </p>
      </div>
      <hr />

      {/* ROC Curve */}
      <div className="image-wrapper">
        <h2>ROC Curve</h2>
        <a href={rocCurve} target="_blank">
          <img className="content-image" src={rocCurve} alt="ROC Curve" />
        </a>
      </div>
    </div>
  );
}
