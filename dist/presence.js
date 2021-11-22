const presence1 = new Presence({
    clientId: "910193698644586536"
});



const browsingStamp2 = Math.floor(Date.now() / 1000);
presence1.on("UpdateData", () => {
    const presenceData = {
        largeImageKey: "german-host-logo",
        startTimestamp: browsingStamp2
    };
    
    if (document.location.pathname.toLocaleLowerCase().includes("/index/")) {
        presenceData.details = "Portal";
        presenceData.state="";
    } else if (document.location.pathname.includes("/")) {
        presenceData.details = "Portal";
        presenceData.state = "";
      } else if (document.location.pathname.includes("/auth/login/")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "Login";
      } else if (document.location.pathname.toLocaleLowerCase().includes("/manage/rootserver/")) {
        presenceData.details = "Managing: ";
        presenceData.state = " Rootserver";
      } else if (document.location.pathname.includes("/manage/webspaces/")) {
        presenceData.details = "Managing: ";
        presenceData.state = "Webspace";
      } else if (document.location.pathname.includes("/manage/domains/")) {
            presenceData.details = "Managing: ";
            presenceData.state = "Domains";
      } else if (document.location.pathname.includes("/legal/imprint")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "Imprint";
      } else if (document.location.pathname.includes("/legal/privacy")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "Privacy";
      } else if (document.location.pathname.includes("/index/domains/")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "Domains";
      } else if (document.location.pathname.includes("/settings/profile/")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "Profil Settings";
      } else if (document.location.pathname.includes("/payment/transactions/")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "Transactions";
      } else if (document.location.pathname.includes("/support/index/")) {
        presenceData.details = "Viewing";
        presenceData.state = "Support Page";
      } else if (document.location.pathname.includes("/support/tickets/")) {
        presenceData.details = "Viewing: ";
            presenceData.state = "Tickets";
      } else if (document.location.pathname.includes("/order/webspace/")) {
        presenceData.details = "Viewing:  ";
        presenceData.state = "Webspace order";
      } else if (document.location.pathname.includes("/order/rootserver/")) {
        presenceData.details = "Viewing:  ";
        presenceData.state = "Rootserver order";
      } else if (document.location.pathname.includes("/order/teamspeak/")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "Teamspeak order";
    } else if (document.location.pathname.includes("/order/vserver/")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "vServer order";
    } else if (document.location.pathname.includes("/order/domains/")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "Domain order";
    } else if (document.location.pathname.includes("/order/plesk-license/")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "Plesk License order";
    } else if (document.location.pathname.includes("/payment/charge")) {
        presenceData.details = "Viewing: ";
        presenceData.state = "Credit Charge ";
      } else {
          presenceData.details = "Viewing: ";
          presenceData.state = "Site not found"
      }
      
    /*if (document.location.pathname.includes("https://portal.german-host.io"))
        presenceData.details = "German Host Portal";
    else if (document.location.pathname.includes("/index/")) {
        if (window.location.pathname.toLowerCase() === "/index") {
            presenceData.details = "Viewing Dashboard";
            presenceData.state = "Dashboard";
        }
        else if (window.location.pathname.toLowerCase() === "/auth/login") {
            presenceData.details = "Viewing Login Page";
            presenceData.state = "Login Page";
        }
        else if (window.location.pathname.toLowerCase() === "/index/rootserver/") {
            presenceData.details = "Viewing Rootserver";
            presenceData.state = "Rootserver";
        }
        else if (window.location.pathname.toLowerCase() === "/index/webspaces/") {
            presenceData.details = "Viewing Webspaces";
            presenceData.state = "Webspaces";
        }
        else if (window.location.pathname.toLowerCase() === "/index/domains/") {
            presenceData.details = "Viewing Domains";
            presenceData.state = "Domains";
        }
        else if (window.location.pathname.toLowerCase() === "/settings/profile/") {
            presenceData.details = "Viewing Profil Settings";
            presenceData.state = "Profil Settings";
        }
        else if (window.location.pathname.toLowerCase() === "/payment/transactions/") {
            presenceData.details = "Viewing Transactions";
            presenceData.state = "Transactions";
        }
        else if (window.location.pathname.toLowerCase().includes("/404")) {
            presenceData.details = "Viewing a page:";
            presenceData.state = "404 Page";
        }
        else if (window.location.pathname.toLowerCase().includes("/legal/imprint")) {
            presenceData.details = "Viewing a page:";
            presenceData.state = "Imprint";
        }
        else if (window.location.pathname.toLowerCase().includes("/legal/privacy")) {
            presenceData.details = "Viewing a page:";
            presenceData.state = "Privacy";
        }
        else if (window.location.pathname.toLowerCase().includes("/legal/conditions/")) {
            presenceData.details = "Viewing a page:";
            presenceData.state = "Conditions";
        }
        else if (window.location.href.toLowerCase().includes("portal.german-host.io/support/index/")) {
            presenceData.details = "Viewing Support Page";
            presenceData.state = "Support Page";
        }
        else if (window.location.href.toLowerCase().includes("portal.german-host.io/support/tickets/")) {
            presenceData.details = "Viewing Tickets";
            presenceData.state = "Tickets";
        }
    }
    else {
        presenceData.details = "Viewing a page:";
        if (window.location.pathname.toLowerCase() === "/")
            presenceData.state = "Homepage";
        else if (window.location.pathname.toLowerCase().includes("/404")) {
            presenceData.details = "Viewing a page:";
            presenceData.state = "404 Page";
        }
        else if (window.location.pathname.toLowerCase().includes("/legal/imprint")) {
            presenceData.details = "Viewing a page:";
            presenceData.state = "Imprint";
        }
        else if (window.location.pathname.toLowerCase().includes("/legal/privacy")) {
            presenceData.details = "Viewing a page:";
            presenceData.state = "Privacy";
        }
        else if (window.location.pathname.toLowerCase().includes("/legal/conditions/")) {
            presenceData.details = "Viewing a page:";
            presenceData.state = "Conditions";
        }
        else
            delete presenceData.details;
    }*/
    if (!presenceData.details) {
        presence1.setTrayTitle();
        presence1.setActivity();
    }
    else
        presence1.setActivity(presenceData);
});
