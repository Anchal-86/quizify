import React, { useState } from "react";
import CheLogo from "./chelogo.png";
import PhyLogo from "./phylogo.png";
import MathLogo from "./mathlogo.png";
import Logo from "./logo.png";
import { mathData } from "../mathData";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import CommonPopup from "./CommonPopup";
import { physicsData } from "../physicsData";
import { chemistryData } from "../chemistryData";

export default function MainPage() {
  const [mathdata] = useState(mathData);
  const [phydata] = useState(physicsData);
  const [chedata] = useState(chemistryData);
  const [mathDialog, setMathDialog] = useState(false);
  const [cheDialog, setCheDialog] = useState(false);
  const [phyDialog, setPhyDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentData, setCurrentData] = useState<any>(null);

  const openche = () => {
    setCheDialog(true);
  };
  const closeche = () => {
    setCheDialog(false);
  };
  const openphy = () => {
    setPhyDialog(true);
  };
  const closephy = () => {
    setPhyDialog(false);
  };
  const open = () => {
    setMathDialog(true);
  };
  const close = () => {
    setMathDialog(false);
  };
  return (
    <>
      <div
        className="bg"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <nav style={{ marginTop: "-20px" }}>
          <img style={{ width: "350px" }} src={Logo} alt="Quizify" />
        </nav>
        <p>Welcome to Quizify.com</p>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Russo One",
          }}
        >
          <div
            onClick={() => {
              open();
            }}
            style={{
              backgroundColor: "#7AE061",
              width: "200px",
              marginTop: "20px",
              boxShadow: "0px 0px 15px 0px #e6e6e6",
              borderRadius: "50px",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Mathematics</h3>
          </div>
          <div
            onClick={openphy}
            style={{
              backgroundColor: "#0000FF",
              color: "#fff",
              width: "200px",
              marginTop: "20px",
              borderRadius: "50px",
              boxShadow: "0px 0px 15px 0px #e6e6e6",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Physics</h3>
          </div>
          <div
            onClick={openche}
            style={{
              backgroundColor: "#7AE061",
              width: "200px",
              borderRadius: "50px",
              marginTop: "20px",
              boxShadow: "0px 0px 15px 0px #e6e6e6",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Chemistry</h3>
          </div>
        </div>
      </div>
      {mathDialog && (
        <Dialog open={mathDialog} fullScreen>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "80px", height: "80px" }}
              src={MathLogo}
              alt=""
            />
            <h1 style={{ fontFamily: "Pacifico", color: "#0000FF" }}>
              Mathematics
            </h1>
          </div>
          <DialogContent>
            {mathdata.map((item) => {
              return (
                <div
                  onClick={() => {
                    setOpenDialog(true);
                    setCurrentData(item);
                  }}
                  style={{
                    width: "280px",
                    padding: "8px 10px",
                    marginTop: "20px",
                    backgroundColor: "#bdc8d9",
                    borderLeft: "10px solid #0000FF",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <h2>{item.category}</h2>
                </div>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                fontFamily: "Pacifico",
                color: "#0000FF",
                textAlign: "center",
              }}
              onClick={close}
            >
              Go Back
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {phyDialog && (
        <Dialog open={phyDialog} fullScreen>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "80px", height: "80px" }}
              src={PhyLogo}
              alt=""
            />
            <h1 style={{ fontFamily: "Pacifico", color: "#0000FF" }}>
              Physics
            </h1>
          </div>
          <DialogContent>
            {phydata.map((item) => {
              return (
                <div
                  onClick={() => {
                    setOpenDialog(true);
                    setCurrentData(item);
                  }}
                  style={{
                    width: "280px",
                    padding: "8px 10px",
                    marginTop: "20px",
                    backgroundColor: "#bdc8d9",
                    borderLeft: "10px solid #0000FF",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <h2>{item.category}</h2>
                </div>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                fontFamily: "Pacifico",
                color: "#0000FF",
                textAlign: "center",
              }}
              onClick={closephy}
            >
              Go Back
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {cheDialog && (
        <Dialog open={cheDialog} fullScreen>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "80px", height: "80px" }}
              src={CheLogo}
              alt=""
            />
            <h1 style={{ fontFamily: "Pacifico", color: "#0000FF" }}>
              Chemistry
            </h1>
          </div>
          <DialogContent>
            {chedata.map((item) => {
              return (
                <div
                  onClick={() => {
                    setOpenDialog(true);
                    setCurrentData(item);
                  }}
                  style={{
                    width: "280px",
                    padding: "8px 10px",
                    marginTop: "20px",
                    backgroundColor: "#bdc8d9",
                    borderLeft: "10px solid #0000FF",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <h2>{item.category}</h2>
                </div>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                fontFamily: "Pacifico",
                color: "#0000FF",
                textAlign: "center",
              }}
              onClick={closeche}
            >
              Go Back
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {openDialog && (
        <CommonPopup
          open={openDialog}
          setOpen={setOpenDialog}
          data={currentData}
        />
      )}
    </>
  );
}
