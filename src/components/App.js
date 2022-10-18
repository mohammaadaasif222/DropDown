import React, { useState, useReducer, useEffect } from "react";
import "./../styles/App.css";

const states = [
  {
    name: "Madhya Pradesh",
    description:
      "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
    city: [
      {
        name: "Indore",
        description:
          "Indore is a city in west-central India. It’s known htmlFor the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
        landmarks: [
          {
            name: "Mhow",
            description:
              "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",
          },
          {
            name: "Dewas",
            description:
              "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
          },
        ],
      },
      {
        name: "Bhopal",
        description:
          "DBhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest city. There are two main lakes, the Upper Lake and the Lower Lake.",
        landmarks: [
          {
            name: "MANIT",
            description:
              "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology. ",
          },
          {
            name: "Berasia",
            description:
              "Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India. ",
          },
        ],
      },
      {
        name: "Gwalior",
        description:
          "Gwalior is a city in the central Indian state of Madhya Pradesh. It's known htmlFor its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. ",
        landmarks: [
          {
            name: "Ajaypur",
            description: "Little less known city Ajaypur.",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    description:
      "Jharkhand is a state in eastern India. It's known htmlFor its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.",
    city: [
      {
        name: "Dhanbad",
        description:
          "Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India. It is the 96th fastest growing urban area of the world by the City Mayors Foundation.",
        landmarks: [
          {
            name: "IIT(ISM) Dhanbad",
            description:
              "Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India. It is an Institute of National Importance. IIT has 18 academic departments covering Engineering,",
          },
          {
            name: "Hirapur",
            description:
              "Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
          },
        ],
      },
      {
        name: "Wasseypur",
        description:
          "Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India. ",
        landmarks: [
          {
            name: "Pandey muhalla",
            description:
              "Located behind the dhanbad junction is must visit place.",
          },
          {
            name: "MPI Hall",
            description: "Space htmlFor everyone",
          },
        ],
      },
      {
        name: "Hazaribagh",
        description:
          "Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand. It is the divisional headquarters of North Chotanagpur division.",
        landmarks: [
          {
            name: "Shaheed Nirmal Mahto Park",
            description: "Famous htmlFor its giant dinosaur structure",
          },
          {
            name: "Gandhi Maidan",
            description: "Ideal htmlFor conduction major events",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    description:
      "Assam is a state in northeastern India known htmlFor its wildlife, archeological sites and tea plantations. ",
    city: [
      {
        name: "Guwhati",
        description:
          "Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It’s known htmlFor holy sites like the hilltop Kamakhya Temple,",
        landmarks: [
          {
            name: "Ganesh Guri",
            description: "Famous because of PVR city center.",
          },
          {
            name: "Kalyani Nagar",
            description: "located near famous Lakshmi Nagar",
          },
        ],
      },
      {
        name: "dimapur",
        description:
          "Dimapur is a city in Nagaland, India. It is the most populous city of Nagaland and also the most densely populated city in the state with an estimated population of about 250,000.",
        landmarks: [
          {
            name: "City Tower",
            description: "Giant Tower standing by the road since history.",
          },
          {
            name: "Sunday Market",
            description: "Famous htmlFor its weekend Sale on all items.",
          },
        ],
      },
      {
        name: "Tezpur",
        description:
          "Tezpur is a landmark and urban agglomeration in Sonitpur district, Assam state, India. Tezpur is located on the banks of the river Brahmaputra, 175 kilometres northeast of Guwahati, and is the largest of the north bank landmarks with a population exceeding 100,000 as per Metropolitan Census 2011.",
        landmarks: [
          {
            name: "Bamuni Hills",
            description: "Best location htmlFor photoshoots",
          },
          {
            name: "Bhujkhowa Bazar",
            description: "Central Market htmlFor Tezpur",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    description:
      "Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated.",
    city: [
      {
        name: "Patna",
        description:
          "Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India.",
        landmarks: [
          {
            name: "Sonpur",
            description:
              "Sonpur is a city and sub-division in the Indian state of Bihar, situated on the banks of the River Gandak and Ganges River in the Saran District.",
          },
          {
            name: "Maner",
            description:
              "Maner also spelled Maner or Maner Sharif, is a satellite landmark in Patna Metropolitan Region, in the Patna district in the Indian state of Bihar. Maner Sharif lies 24 km west of Patna the capital of Bihar on National Highway 30.",
          },
        ],
      },
      {
        name: "Gaya",
        description:
          "Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar. It’s known htmlFor 18th-century Vishnupad Mandir, a riverside temple with an octagonal shrine. Close by, ancient Mangla Gauri Temple is set on a hilltop. ",
        landmarks: [
          {
            name: "Bakraur",
            description:
              "Bakraur, sometimes called Bakrour, is a village located slightly east of Bodh Gaya in the state of Bihar, India. It lies directly across the Phalgu River from the landmark of Bodh Gaya, where Gautama Buddha is said to have attained enlightenment.",
          },
          {
            name: "Barachatti",
            description:
              "Barachatti is a block in the Gaya district of Bihar, India. Barachatti contains 141 villages and 13 gram panchayat. Sarwan bazar is the biggest and Nimi is the smallest village of Barachatti. The total population in Barachatti sub-district is 142,534 according to the census during 2011 by Indian Government.",
          },
        ],
      },
      {
        name: "Darbhanga",
        description:
          "Darbhanga is a city and Municipal Corporation in the Indian state of Bihar. It is the 6th largest city of Bihar, only after Patna, Gaya, Bhagalpur, Muzaffarpur and Purnea. It is the headquarters of Darbhanga district and Darbhanga division and was the seat of the Raj Darbhanga and capital of the Mithila region.",
        landmarks: [
          {
            name: "Singhwara",
            description: "Famous htmlFor its Groundnut Market",
          },
          {
            name: "Jale",
            description: "Famous htmlFor its roasted seads market.",
          },
        ],
      },
    ],
  },
];

function App() {
  const [state, setState] = useState("Madhya pradesh");
  const [stateDesc, setStateDesc] = useState(
    "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history."
  );
  const [city, setCity] = useState("Indore");
  const [cityDesc, setCityDesc] = useState("");
  const [landmark, setLandmark] = useState("Mhow");
  const [landmarkDesc, setLandmarkDesc] = useState("");

  const stateHandler = (e) => {
    let st = states.filter((state) => state.name == e.target.value);
    // set cities
    setCity(
      st[0].city.map((item, index) => {
        return (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        );
      })
    );
    let cities = st[0].city.map((item, index) => item);
    setCityDesc(cities.map((item) => item.description));
    let landm = cities.map((item) => item.landmarks);
    let l = landm.map((item) => item);

    //  set landmaorks
    setLandmark(
      l[0].map((item, index) => {
        return (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        );
      })
    );
    setLandmarkDesc(l[0].map((item) => item.description));

    // set state
    setState(e.target.value);
    setStateDesc(st.map((item) => item.description));
  };
  const cityHandler = (e) => {
    states.map((item, index) => {
      return item.city.map((ct, i) => {
        return console.log(ct.name);
      });
    });
    setCity(e.target.value);
  };
  const landmarkHandler = (e) => {
    setLandmark(e.target.value);
  };
  // Do not alter/remove main div
  return (
    <div id="main" className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6  p-3">
            <div className="row">
              <div className="col-md-6 ">
                <label htmlFor="state">State:</label>
                <br />
                <label htmlFor="city">City:</label>
                <br />
                <label htmlFor="landmark">Landmark:</label>
              </div>
              <div className="col-md-6 p-">
                <select name="state" id="state" onChange={stateHandler}>
                  {states.map((item, index) => {
                    return (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <br />
                <select name="city" id="city" onChange={cityHandler}>
                  {city}
                </select>
                <br />
                <select
                  name="landmark"
                  id="landmark"
                  onChange={landmarkHandler}
                >
                  {landmark}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="border p-3 mb-2" id="state-name">
              <h4>{state}</h4>
              <div className=" p-3 mb-2" id="state-description ">
                {stateDesc}
              </div>
              <div className=" p-3 mb-2" id="state-title "></div>
            </div>
            <div className="border p-3 mb-2" id="city-name">
              <h4> {city}</h4>
              <div className="p-3 mb-2" id="city-description">
                {cityDesc}
              </div>
              <div className="p-3 mb-2" id="city-title"></div>
            </div>
            <div className="border p-3 mb-2" id="landmark-name">
              <h4>{landmark}</h4>
              <div className=" p-3 mb-2" id="landmark-description">
                {landmarkDesc}
              </div>
              <div className=" p-3 mb-2" id="landmark-title"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
