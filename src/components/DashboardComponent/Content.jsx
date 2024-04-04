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
        <h2>Data Table</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Active Power</th>
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
  
      <div className="image-container">
        {/* Active Energy */}
        <div className="image-wrapper">
          <h2>Active Energy</h2>
          <img className="content-image" src={active_energy} alt="Active Energy" />
        </div>
  
        {/* Active Power */}
        <div className="image-wrapper">
          <h2>Active Power</h2>
          <img className="content-image" src={active_power} alt="Active Power" />
        </div>
  
        {/* Ambient Temperature 2 */}
        <div className="image-wrapper">
          <h2>Ambient Temperature 2</h2>
          <img className="content-image" src={amb_temp_2} alt="Ambient Temperature 2" />
        </div>
  
        {/* Anomaly Ambient Humidity 1 */}
        <div className="image-wrapper">
          <h2>Anomaly Ambient Humidity 1</h2>
          <img className="content-image" src={amb_humdity_1} alt="Anomaly Ambient Humidity 1" />
        </div>
  
        {/* Anomaly CO2 */}
        <div className="image-wrapper">
          <h2>Anomaly CO2</h2>
          <img className="content-image" src={co2} alt="Anomaly CO2" />
        </div>
  
        {/* Anomaly High Pressure 1 */}
        <div className="image-wrapper">
          <h2>Anomaly High Pressure 1</h2>
          <img className="content-image" src={HP1} alt="Anomaly High Pressure 1" />
        </div>
  
        {/* Anomaly High Pressure 2 */}
        <div className="image-wrapper">
          <h2>Anomaly High Pressure 2</h2>
          <img className="content-image" src={HP2} alt="Anomaly High Pressure 2" />
        </div>
  
        {/* Anomaly High Pressure 3 */}
        <div className="image-wrapper">
          <h2>Anomaly High Pressure 3</h2>
          <img className="content-image" src={HP3} alt="Anomaly High Pressure 3" />
        </div>
  
        {/* Anomaly Low Pressure 1 */}
        <div className="image-wrapper">
          <h2>Anomaly Low Pressure 1</h2>
          <img className="content-image" src={LP1} alt="Anomaly Low Pressure 1" />
        </div>
  
        {/* Anomaly Low Pressure 2 */}
        <div className="image-wrapper">
          <h2>Anomaly Low Pressure 2</h2>
          <img className="content-image" src={LP2} alt="Anomaly Low Pressure 2" />
        </div>
  
        {/* Anomaly Low Pressure 3 */}
        <div className="image-wrapper">
          <h2>Anomaly Low Pressure 3</h2>
          <img className="content-image" src={LP3} alt="Anomaly Low Pressure 3" />
        </div>
  
        {/* Anomaly Outlet Temperature */}
        <div className="image-wrapper">
          <h2>Anomaly Outlet Temperature</h2>
          <img className="content-image" src={OutletTemp} alt="Anomaly Outlet Temperature" />
        </div>
  
        {/* Anomaly Outside Temperature */}
        <div className="image-wrapper">
          <h2>Anomaly Outside Temperature</h2>
          <img className="content-image" src={OutsideTemp} alt="Anomaly Outside Temperature" />
        </div>
  
        {/* Force Plot */}
        <div className="image-wrapper">
          <h2>Force Plot</h2>
          <img className="content-image" src={forceplot} alt="Force Plot" />
        </div>
  
        {/* Global Bar Plot */}
        <div className="image-wrapper">
          <h2>Global Bar Plot</h2>
          <img className="content-image" src={globalbarplot} alt="Global Bar Plot" />
        </div>
  
        {/* Inlet Temperature */}
        <div className="image-wrapper">
          <h2>Inlet Temperature</h2>
          <img className="content-image" src={inletTemp} alt="Inlet Temperature" />
        </div>
  
        {/* Local Bar Plot */}
        <div className="image-wrapper">
          <h2>Local Bar Plot</h2>
          <img className="content-image" src={localBarPlot} alt="Local Bar Plot" />
        </div>
  
        {/* ROC Curve */}
        <div className="image-wrapper">
          <h2>ROC Curve</h2>
          <img className="content-image" src={rocCurve} alt="ROC Curve" />
        </div>
  
        {/* Scatter Plot */}
        <div className="image-wrapper">
          <h2>Scatter Plot</h2>
          <img className="content-image" src={scatterPlot} alt="Scatter Plot" />
        </div>
  
        {/* Shap Plot */}
        <div className="image-wrapper">
          <h2>Shap Plot</h2>
          <img className="content-image" src={shapPlot} alt="Shap Plot" />
        </div>
  
        {/* Waterfall Plot */}
        <div className="image-wrapper">
          <h2>Waterfall Plot</h2>
          <img className="content-image" src={waterfallPlot} alt="Waterfall Plot" />
        </div>
      </div>
    </div>
  );
  
}
