import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";
import { useStateValue } from "./DataLayer/StateProvider";
import Login from "./Components/Login/Login";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
function App() {
  const [{ user }] = useStateValue();
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let mounted = true;
    if (window.innerWidth < 720) {
      if (mounted) {
        setMobile(true);
        setOpen(true);
      }
    } else {
      if (mounted) {
        setMobile(false);
        setOpen(false);
      }
    }
    return () => {
      mounted = false;
    };
  }, []);
  useEffect(() => {
    let mounted = true;
    window.addEventListener("resize", () => {
      if (window.innerWidth < 720) {
        if (mounted) {
          setMobile(true);
          setOpen(true);
        }
      } else {
        if (mounted) {
          setMobile(false);
          setOpen(false);
        }
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* sidebar */}
          {mobile ? (
            <SwipeableDrawer
              anchor="left"
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
            >
              <Sidebar />
            </SwipeableDrawer>
          ) : (
            <Sidebar />
          )}

          {/* Feed */}
          <Feed />
          {/* widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
