const presence1 = new Presence({
  clientId: "910193698644586536"
});
const browsingStamp2 = Math.floor(Date.now() / 1000);

presence1.on("UpdateData", () => {
  const presenceData: PresenceData = {
    largeImageKey: "german-host",
    startTimestamp: browsingStamp2
  };

   if (window.location.href.includes("portal.german-host.io"))
    presenceData.details = "https://portal.german-host.io";
  else if (window.location.href.includes("portal.german-host.io")) {
    if (window.location.pathname.toLowerCase() === "/index") {
      presenceData.details = "Viewing Dashboard";
      presenceData.state = "Dashboard";
    } else if (window.location.pathname.toLowerCase() === "/auth/login") {
      presenceData.details = "Viewing Login Page";
      presenceData.state = "Login Page";
    } else if (window.location.pathname.toLowerCase() === "/index/rootserver/") {
      presenceData.details = "Viewing Rootserver";
      presenceData.state = "Rootserver";
    } else if (window.location.pathname.toLowerCase() === "/index/webspaces/") {
      presenceData.details = "Viewing Webspaces";
      presenceData.state = "Webspaces";
    } else if (window.location.pathname.toLowerCase() === "/index/domains/") {
      presenceData.details = "Viewing Domains";
      presenceData.state = "Domains";
    } else if (window.location.pathname.toLowerCase() === "/settings/profile/") {
      presenceData.details = "Viewing Profil Settings";
      presenceData.state = "Profil Settings";
    } else if (window.location.pathname.toLowerCase() === "/payment/transactions/") {
      presenceData.details = "Viewing Transactions";
      presenceData.state = "Transactions";
    } else if (window.location.pathname.toLowerCase().includes("/404")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "404 Page";
    } else if (window.location.pathname.toLowerCase().includes("/legal/imprint")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "Imprint";
    } else if (window.location.pathname.toLowerCase().includes("/legal/privacy")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "Privacy";
    } else if (window.location.pathname.toLowerCase().includes("/legal/conditions/")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "Conditions";
    } else if (
      window.location.href.toLowerCase().includes("portal.german-host.io/support/index/")
    ) {
      presenceData.details = "Viewing Support Page";
      presenceData.state = "Support Page";
    } else if (
      window.location.href.toLowerCase().includes("portal.german-host.io/support/tickets/")
    ) {
      presenceData.details = "Viewing Tickets";
      presenceData.state = "Tickets";
    }
  } else {
    presenceData.details = "Viewing a page:";
    if (window.location.pathname.toLowerCase() === "/")
      presenceData.state = "Homepage";
    /*else if (window.location.pathname.toLowerCase().includes("/questions")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "Questions";
    } else if (window.location.pathname.toLowerCase().includes("/create")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "Create";
    } else if (window.location.pathname.toLowerCase().includes("/about")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "About";
    } else if (window.location.pathname.toLowerCase().includes("/culture")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "Blog & Culture";*/
     else if (window.location.pathname.toLowerCase().includes("/404")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "404 Page";
    } else if (window.location.pathname.toLowerCase().includes("/legal/imprint")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "Imprint";
    } else if (window.location.pathname.toLowerCase().includes("/legal/privacy")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "Privacy";
    } else if (window.location.pathname.toLowerCase().includes("/legal/conditions/")) {
      presenceData.details = "Viewing a page:";
      presenceData.state = "Conditions";
    } else delete presenceData.details;
  }

  if (!presenceData.details) {
    presence1.setTrayTitle();
    presence1.setActivity();
  } else presence1.setActivity(presenceData);
});