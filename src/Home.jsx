import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './App.css';
import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  useRangeSlider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import hotel from "../src/assets/images/hotel2.jpg";

function Home() {
  const [minValue, setMinValue] = useState(100);
  const [maxValue, setMaxValue] = useState(100000);
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };
  return (
    <>
      <div className="container">
        {/* Header Part start */}
        {/* Header Space */}
        <div style={{height:50}}></div>
         {/* Header Space */}
        <div className="d-flex justify-content-between pb-5" >
          <div className="col-lg-8 d-flex flex-column">
            <div>
              <h2 style={{ color: "#f24413" }}>
                1312 Hotels found in DISNEY LAND, PARIS, FR
              </h2>
            </div>
            <div>
              <p style={{color:"#999693", fontSize:16}}>for Friday, 18th November, 2022 for 2 nights</p>
            </div>
          </div>
          {/* SearchBox */}
          <div className="col-lg-3">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Modify Search"
                aria-label="Search"
                style={{height:60}}
              />
            </form>
          </div>
             {/* SearchBox */}
        </div>
        {/* Header Part end */}
        {/* Body Part Start */}
        <div className="d-flex gap-3 justify-content-between">
        {/* Left Filter Part Start */}
          <div className="col-3 d-flex flex-column">
          {/* Search Section Start */}
            <div style={{borderBottom: "1px solid #cad1e0", bottom:30 }}>
              <form class="form-inline my-2 my-lg-0 py-4">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Hotel"
                  aria-label="Search"
                  style={{height:60}}
                />
              </form>
            </div>
            {/* Search Section End */}
            {/* Rating Accordion Start */}
            <div
              style={{
                paddingTop:20,
                borderBottom: "1px solid #cad1e0",
                paddingBottom:20
              }}
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton className="accordionBack">
                      <Box as="span" flex="1" textAlign="left">
                        <p style={{fontSize:22,fontWeight:600, color:"#f24413"}}>STAR RATING</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        UNCATEGORISED
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/plumpy/24/star--v1.png"
                          alt="star--v1"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/plumpy/24/star--v1.png"
                          alt="star--v1"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/plumpy/24/star--v1.png"
                          alt="star--v1"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/plumpy/24/star--v1.png"
                          alt="star--v1"
                        />
                        <span>(160)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/plumpy/24/star--v1.png"
                          alt="star--v1"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/plumpy/24/star--v1.png"
                          alt="star--v1"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/plumpy/24/star--v1.png"
                          alt="star--v1"
                        />
                        <span>(40)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/plumpy/24/star--v1.png"
                          alt="star--v1"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/plumpy/24/star--v1.png"
                          alt="star--v1"
                        />
                        <span>(121)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/plumpy/24/star--v1.png"
                          alt="star--v1"
                        />
                        <span>(70)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <img
                          width="15"
                          height="15"
                          src="https://img.icons8.com/fluency/48/star.png"
                          alt="star"
                        />
                        <span>(48)</span>
                      </label>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Rating Accordion End */}
            {/* Multi Range Slider Start */}
            <div
              style={{
                paddingTop:20,
                borderBottom: "1px solid #cad1e0",
                paddingBottom:20
              }}
            >
              <MultiRangeSlider
                min={0}
                max={10000}
                step={100}
                ruler={false}
                label={true}
                preventWheel={false}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                  handleInput(e);
                }}
                style={{color:"#0365ab"}}
              />
            </div>
            {/* Multi Range Slider End */}
            {/* Board Basis Accordion Start */}
            <div
             style={{
                paddingTop:20,
                borderBottom: "1px solid #cad1e0",
                paddingBottom:20
              }}
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton className="accordionBack">
                      <Box as="span" flex="1" textAlign="left">
                      <p style={{fontSize:22,fontWeight:600, color:"#f24413"}}>BOARD BASIS</p>
                        
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        ROOMS ONLY
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        BREAKFAST
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        HALF BORAD
                      </label>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Board Basis Accordion End */}
            {/* Property Type Accordion Start */}
            <div
            style={{
                paddingTop:20,
                borderBottom: "1px solid #cad1e0",
                paddingBottom:20
              }}
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton className="accordionBack">
                      <Box as="span" flex="1" textAlign="left">
                      <p style={{fontSize:22,fontWeight:600, color:"#f24413"}}>PROPERTY TYPE</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        HOTEL
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        APARTHOTEL
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        HOSTEL
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        APARTMENT
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        GUESTHOUSE
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        BED & BREAKFAST
                      </label>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Property Type Accordion End */}
            {/* Rate Type Accordion Start */}
            <div
            style={{
                paddingTop:20,
                borderBottom: "1px solid #cad1e0",
                paddingBottom:20
              }}
              >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton className="accordionBack">
                      <Box as="span" flex="1" textAlign="left">
                      <p style={{fontSize:22,fontWeight:600, color:"#f24413"}}>RATE TYPE</p>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        REFUNDABLE
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label labelColor"
                        for="flexCheckDefault"
                      >
                        NON-REFUNDABLE
                      </label>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Rate Type Accordion End */}
          </div>
          {/* Left Filter Part End */}
          {/* Right Result Part Start */}
          <div
            className="col-8 d-flex flex-column gap-3"
            style={{ backgroundColor: "#f5f7fc" }}
          >
            <div className="card cardBack">
              <div className="card-body d-flex gap-3">
                <div className="col-4">
                  <img
                  className="rounded"
                    style={{ maxWidth: "100%", height: "-webkit-fill-available" }}
                    src={hotel}
                  />
                </div>
                <div className="col-8 d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                    </div>
                    <div className="px-3">
                      <button
                        type="button"
                        style={{
                          border: "1px solid #cae6fa",
                          borderRadius: "20px",
                          backgroundColor: "#cae6fa",
                          fontWeight: "bold",
                        }}
                      >
                        <img
                          width="16"
                          height="16"
                          src="https://img.icons8.com/tiny-color/16/home.png"
                          alt="home"
                          style={{paddingBottom:2}}
                        />
                        <span style={{color: "#0365ab",paddingLeft:10}}>Available</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p style={{fontSize:22,fontWeight:600, color:"#0365ab"}}>Charming Waterfront Condo</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img
                        width="30"
                        height="32"
                        class="rounded"
                        src="https://img.icons8.com/deco/48/marker.png"
                        alt="marker"
                      />
                    </div>
                    <div>
                      <p style={{color:"#999693", fontSize:16}}>
                        Address: 86 Tanners Hill, Greater London SE8 4PN
                        (P):+442086926219 London
                      </p>
                    </div>
                  </div>
                  <div style={{ borderBottom: "1px solid gray" }}>
                    <p style={{color:"#999693", fontSize:16}}>
                      Property Description: Hostel in the heart of Lewisham You
                      can look forward to a free daily manager's reception, a
                      coffee shop/cafe, and a
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4 style={{ fontSize:22,fontWeight:600,color: "#de5114" }}>Prices Starting From</h4>
                    </div>
                    <div>
                      <h3 style={{fontSize:22,fontWeight:600, color: "#0365ab" }}>EUR200</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card cardBack">
              <div className="card-body d-flex gap-3">
                <div className="col-4">
                  <img
                  className="rounded"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={hotel}
                  />
                </div>
                <div className="col-8 d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                    </div>
                    <div className="px-3">
                      <button
                        type="button"
                        style={{
                          border: "1px solid #cae6fa",
                          borderRadius: "20px",
                          backgroundColor: "#cae6fa",
                          fontWeight: "bold",
                        }}
                      >
                        <img
                          width="16"
                          height="16"
                          src="https://img.icons8.com/tiny-color/16/home.png"
                          alt="home"
                          style={{paddingBottom:2}}
                        />
                        <span style={{color: "#0365ab",paddingLeft:10}}>Available</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p style={{fontSize:22,fontWeight:600, color:"#0365ab"}}>Charming Waterfront Condo</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img
                        width="30"
                        height="32"
                        class="rounded"
                        src="https://img.icons8.com/deco/48/marker.png"
                        alt="marker"
                      />
                    </div>
                    <div>
                      <p style={{color:"#999693", fontSize:16}}>
                        Address: 86 Tanners Hill, Greater London SE8 4PN
                        (P):+442086926219 London
                      </p>
                    </div>
                  </div>
                  <div style={{ borderBottom: "1px solid gray" }}>
                    <p style={{color:"#999693", fontSize:16}}>
                      Property Description: Hostel in the heart of Lewisham You
                      can look forward to a free daily manager's reception, a
                      coffee shop/cafe, and a
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4 style={{ fontSize:22,fontWeight:600,color: "#de5114" }}>Prices Starting From</h4>
                    </div>
                    <div>
                      <h3 style={{fontSize:22,fontWeight:600, color: "#0365ab" }}>EUR200</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card cardBack">
              <div className="card-body d-flex gap-3">
                <div className="col-4">
                  <img
                  className="rounded"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={hotel}
                  />
                </div>
                <div className="col-8 d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                    </div>
                    <div className="px-3">
                      <button
                        type="button"
                        style={{
                          border: "1px solid #cae6fa",
                          borderRadius: "20px",
                          backgroundColor: "#cae6fa",
                          fontWeight: "bold",
                        }}
                      >
                        <img
                          width="16"
                          height="16"
                          src="https://img.icons8.com/tiny-color/16/home.png"
                          alt="home"
                          style={{paddingBottom:2}}
                        />
                        <span style={{color: "#0365ab",paddingLeft:10}}>Available</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p style={{fontSize:22,fontWeight:600, color:"#0365ab"}}>Charming Waterfront Condo</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img
                        width="30"
                        height="32"
                        class="rounded"
                        src="https://img.icons8.com/deco/48/marker.png"
                        alt="marker"
                      />
                    </div>
                    <div>
                      <p style={{color:"#999693", fontSize:16}}>
                        Address: 86 Tanners Hill, Greater London SE8 4PN
                        (P):+442086926219 London
                      </p>
                    </div>
                  </div>
                  <div style={{ borderBottom: "1px solid gray" }}>
                    <p style={{color:"#999693", fontSize:16}}>
                      Property Description: Hostel in the heart of Lewisham You
                      can look forward to a free daily manager's reception, a
                      coffee shop/cafe, and a
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4 style={{ fontSize:22,fontWeight:600,color: "#de5114" }}>Prices Starting From</h4>
                    </div>
                    <div>
                      <h3 style={{fontSize:22,fontWeight:600, color: "#0365ab" }}>EUR200</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card cardBack">
              <div className="card-body d-flex gap-3">
                <div className="col-4">
                  <img
                  className="rounded"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={hotel}
                  />
                </div>
                <div className="col-8 d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/star.png"
                        alt="star"
                      />
                    </div>
                    <div className="px-3">
                      <button
                        type="button"
                        style={{
                          border: "1px solid #cae6fa",
                          borderRadius: "20px",
                          backgroundColor: "#cae6fa",
                          fontWeight: "bold",
                        }}
                      >
                        <img
                          width="16"
                          height="16"
                          src="https://img.icons8.com/tiny-color/16/home.png"
                          alt="home"
                          style={{paddingBottom:2}}
                        />
                        <span style={{color: "#0365ab",paddingLeft:10}}>Available</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p style={{fontSize:22,fontWeight:600, color:"#0365ab"}}>Charming Waterfront Condo</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img
                        width="30"
                        height="32"
                        class="rounded"
                        src="https://img.icons8.com/deco/48/marker.png"
                        alt="marker"
                      />
                    </div>
                    <div>
                      <p style={{color:"#999693", fontSize:16}}>
                        Address: 86 Tanners Hill, Greater London SE8 4PN
                        (P):+442086926219 London
                      </p>
                    </div>
                  </div>
                  <div style={{ borderBottom: "1px solid gray" }}>
                    <p style={{color:"#999693", fontSize:16}}>
                      Property Description: Hostel in the heart of Lewisham You
                      can look forward to a free daily manager's reception, a
                      coffee shop/cafe, and a
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4 style={{ fontSize:22,fontWeight:600,color: "#de5114" }}>Prices Starting From</h4>
                    </div>
                    <div>
                      <h3 style={{fontSize:22,fontWeight:600, color: "#0365ab" }}>EUR200</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Result Part End */}
        </div>
        {/* Body Part End */}
      </div>
    </>
  );
}
export default Home;
