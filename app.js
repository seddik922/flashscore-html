// Données des équipes
const teams = [
  {
    rank: 1,
    name: "Lens",
    logo: "/rc-lens-logo.png",
    played: 16,
    goalDiff: "28:13",
    points: 37,
    rankColor: "bg-blue-600",
  },
  {
    rank: 2,
    name: "PSG",
    logo: "/psg-paris-logo.jpg",
    played: 16,
    goalDiff: "35:14",
    points: 36,
    rankColor: "bg-blue-600",
  },
  {
    rank: 3,
    name: "Marseille",
    logo: "/marseille-om-logo.jpg",
    played: 16,
    goalDiff: "36:15",
    points: 32,
    rankColor: "bg-blue-600",
  },
  {
    rank: 4,
    name: "Lille",
    logo: "/lille-losc-logo.jpg",
    played: 16,
    goalDiff: "33:20",
    points: 32,
    rankColor: "bg-cyan-400",
  },
  {
    rank: 5,
    name: "Lyon",
    logo: "/lyon-ol-logo.jpg",
    played: 16,
    goalDiff: "22:16",
    points: 27,
    rankColor: "bg-red-900",
  },
  {
    rank: 6,
    name: "Rennes",
    logo: "/rennes-stade-logo.jpg",
    played: 16,
    goalDiff: "27:24",
    points: 27,
    rankColor: "bg-yellow-600",
  },
  {
    rank: 7,
    name: "Strasbourg",
    logo: "/strasbourg-rcsa-logo.jpg",
    played: 16,
    goalDiff: "25:20",
    points: 23,
    rankColor: "bg-transparent",
  },
];

// Données des équipes détaillées
const teamsData = {
  PSG: {
    logo: "/psg-paris-logo.jpg",
    stadium: "Parc des Princes (Paris)",
    capacity: "48 229",
    competitions: [
      {
        name: "Coupe de France",
        country: "FRANCE",
        countryFlag: "🇫🇷",
        matches: [
          {
            date: "20.12.",
            homeTeam: "Fontenay",
            awayTeam: "PSG",
            homeScore: 0,
            awayScore: 4,
            result: "V",
          },
        ],
      },
      {
        name: "FIFA Intercontinental Cup",
        country: "MONDE",
        countryFlag: "🌍",
        matches: [
          {
            date: "17.12.",
            homeTeam: "PSG",
            awayTeam: "Flamengo",
            homeScore: 2,
            awayScore: 1,
            result: "V",
            note: "Après TAB",
          },
        ],
      },
      {
        name: "Ligue 1",
        country: "FRANCE",
        countryFlag: "🇫🇷",
        matches: [
          {
            date: "13.12.",
            homeTeam: "Metz",
            awayTeam: "PSG",
            homeScore: 2,
            awayScore: 3,
            result: "V",
          },
          {
            date: "06.12.",
            homeTeam: "PSG",
            awayTeam: "Lyon",
            homeScore: 3,
            awayScore: 1,
            result: "V",
          },
        ],
      },
      {
        name: "Ligue des Champions",
        country: "EUROPE",
        countryFlag: "🇪🇺",
        matches: [
          {
            date: "10.12.",
            homeTeam: "Ath. Bilbao",
            awayTeam: "PSG",
            homeScore: 0,
            awayScore: 0,
            result: "N",
          },
        ],
      },
    ],
  },
  Lens: {
    logo: "/rc-lens-logo.png",
    stadium: "Stade Bollaert-Delelis (Lens)",
    capacity: "38 223",
    competitions: [
      {
        name: "Ligue 1",
        country: "FRANCE",
        countryFlag: "🇫🇷",
        matches: [
          {
            date: "21.12.",
            homeTeam: "Lens",
            awayTeam: "Monaco",
            homeScore: 2,
            awayScore: 0,
            result: "V",
          },
          {
            date: "14.12.",
            homeTeam: "Rennes",
            awayTeam: "Lens",
            homeScore: 1,
            awayScore: 1,
            result: "N",
          },
          {
            date: "07.12.",
            homeTeam: "Lens",
            awayTeam: "Marseille",
            homeScore: 3,
            awayScore: 1,
            result: "V",
          },
        ],
      },
    ],
  },
  Marseille: {
    logo: "/marseille-om-logo.jpg",
    stadium: "Stade Vélodrome (Marseille)",
    capacity: "67 394",
    competitions: [
      {
        name: "Ligue 1",
        country: "FRANCE",
        countryFlag: "🇫🇷",
        matches: [
          {
            date: "14.12.",
            homeTeam: "Marseille",
            awayTeam: "Lille",
            homeScore: 1,
            awayScore: 1,
            result: "N",
          },
          {
            date: "07.12.",
            homeTeam: "Lens",
            awayTeam: "Marseille",
            homeScore: 3,
            awayScore: 1,
            result: "D",
          },
          {
            date: "01.12.",
            homeTeam: "Marseille",
            awayTeam: "Monaco",
            homeScore: 2,
            awayScore: 1,
            result: "V",
          },
        ],
      },
      {
        name: "Europa League",
        country: "EUROPE",
        countryFlag: "🇪🇺",
        matches: [
          {
            date: "12.12.",
            homeTeam: "Marseille",
            awayTeam: "PAOK",
            homeScore: 3,
            awayScore: 0,
            result: "V",
          },
        ],
      },
    ],
  },
  Lille: {
    logo: "/lille-losc-logo.jpg",
    stadium: "Stade Pierre-Mauroy (Villeneuve-d'Ascq)",
    capacity: "50 186",
    competitions: [
      {
        name: "Ligue 1",
        country: "FRANCE",
        countryFlag: "🇫🇷",
        matches: [
          {
            date: "14.12.",
            homeTeam: "Marseille",
            awayTeam: "Lille",
            homeScore: 1,
            awayScore: 1,
            result: "N",
          },
          {
            date: "08.12.",
            homeTeam: "Lille",
            awayTeam: "Brest",
            homeScore: 2,
            awayScore: 1,
            result: "V",
          },
          {
            date: "30.11.",
            homeTeam: "Nice",
            awayTeam: "Lille",
            homeScore: 2,
            awayScore: 2,
            result: "N",
          },
        ],
      },
    ],
  },
  Lyon: {
    logo: "/lyon-ol-logo.jpg",
    stadium: "Groupama Stadium (Décines-Charpieu)",
    capacity: "59 186",
    competitions: [
      {
        name: "Ligue 1",
        country: "FRANCE",
        countryFlag: "🇫🇷",
        matches: [
          {
            date: "15.12.",
            homeTeam: "Lyon",
            awayTeam: "Reims",
            homeScore: 1,
            awayScore: 1,
            result: "N",
          },
          {
            date: "06.12.",
            homeTeam: "PSG",
            awayTeam: "Lyon",
            homeScore: 3,
            awayScore: 1,
            result: "D",
          },
          {
            date: "01.12.",
            homeTeam: "Lyon",
            awayTeam: "Nice",
            homeScore: 4,
            awayScore: 1,
            result: "V",
          },
        ],
      },
      {
        name: "Europa League",
        country: "EUROPE",
        countryFlag: "🇪🇺",
        matches: [
          {
            date: "12.12.",
            homeTeam: "Lyon",
            awayTeam: "Frankfurt",
            homeScore: 3,
            awayScore: 2,
            result: "V",
          },
        ],
      },
    ],
  },
  Rennes: {
    logo: "/rennes-stade-logo.jpg",
    stadium: "Roazhon Park (Rennes)",
    capacity: "29 778",
    competitions: [
      {
        name: "Ligue 1",
        country: "FRANCE",
        countryFlag: "🇫🇷",
        matches: [
          {
            date: "14.12.",
            homeTeam: "Rennes",
            awayTeam: "Lens",
            homeScore: 1,
            awayScore: 1,
            result: "N",
          },
          {
            date: "07.12.",
            homeTeam: "Monaco",
            awayTeam: "Rennes",
            homeScore: 3,
            awayScore: 2,
            result: "D",
          },
          {
            date: "30.11.",
            homeTeam: "Rennes",
            awayTeam: "Saint-Étienne",
            homeScore: 5,
            awayScore: 0,
            result: "V",
          },
        ],
      },
    ],
  },
  Strasbourg: {
    logo: "/strasbourg-rcsa-logo.jpg",
    stadium: "Stade de la Meinau (Strasbourg)",
    capacity: "29 230",
    competitions: [
      {
        name: "Ligue 1",
        country: "FRANCE",
        countryFlag: "🇫🇷",
        matches: [
          {
            date: "14.12.",
            homeTeam: "Strasbourg",
            awayTeam: "Reims",
            homeScore: 3,
            awayScore: 1,
            result: "V",
          },
          {
            date: "07.12.",
            homeTeam: "Montpellier",
            awayTeam: "Strasbourg",
            homeScore: 0,
            awayScore: 0,
            result: "N",
          },
          {
            date: "01.12.",
            homeTeam: "Strasbourg",
            awayTeam: "Angers",
            homeScore: 1,
            awayScore: 1,
            result: "N",
          },
        ],
      },
    ],
  },
};

// Fonction pour afficher le classement
function renderStandings() {
  const teamsList = document.getElementById("teams-list");
  if (!teamsList) {
    console.error("teams-list element not found!");
    return;
  }

  teamsList.innerHTML = "";

  teams.forEach((team) => {
    const teamRow = document.createElement("div");
    teamRow.className =
      "px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer";

    // Stocker le nom de l'équipe comme attribut data
    teamRow.setAttribute("data-team-name", team.name);

    const textColor =
      team.rankColor === "bg-transparent" ? "text-gray-700" : "text-white";

    teamRow.innerHTML = `
      <div class="grid grid-cols-[40px_1fr_60px_80px_60px] gap-2 items-center">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 ${
            team.rankColor
          } rounded-full flex items-center justify-center ${textColor} text-sm font-bold">
            ${team.rank}.
          </div>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="${team.logo}"
            alt="${team.name}"
            class="w-7 h-7 rounded object-contain"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22%3E%3Crect fill=%22%23ddd%22 width=%2240%22 height=%2240%22/%3E%3Ctext fill=%22%23999%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-size=%2212%22%3E${team.name.substring(
              0,
              2
            )}%3C/text%3E%3C/svg%3E'"
          />
          <span class="font-medium text-gray-900">${team.name}</span>
        </div>
        <div class="text-center text-gray-700">${team.played}</div>
        <div class="text-center text-gray-700">${team.goalDiff}</div>
        <div class="text-right font-bold text-gray-900">${team.points}</div>
      </div>
    `;

    teamsList.appendChild(teamRow);
  });

  // Utiliser la délégation d'événements sur le conteneur parent
  teamsList.addEventListener("click", function (e) {
    const teamRow = e.target.closest("[data-team-name]");
    if (teamRow) {
      const teamName = teamRow.getAttribute("data-team-name");
      console.log("Clicked on team:", teamName);
      showTeamResults(teamName);
    }
  });
}

// Fonction pour afficher les résultats d'une équipe
function showTeamResults(teamName) {
  console.log("showTeamResults called with:", teamName);
  const teamData = teamsData[teamName];
  if (!teamData) {
    console.error("No data found for team:", teamName);
    return;
  }

  // Cacher la vue classements et afficher la vue résultats
  const standingsView = document.getElementById("standings-view");
  const teamResultsView = document.getElementById("team-results-view");

  console.log("Views found:", !!standingsView, !!teamResultsView);

  standingsView.classList.add("hidden");
  teamResultsView.classList.remove("hidden");

  // Remplir l'en-tête de l'équipe
  const teamHeader = document.getElementById("team-header");
  teamHeader.innerHTML = `
    <div class="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm">
      <img src="${
        teamData.logo
      }" alt="${teamName}" class="w-20 h-20 object-contain" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/%3E%3Ctext fill=%22%23999%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-size=%2220%22%3E${teamName.substring(
    0,
    2
  )}%3C/text%3E%3C/svg%3E'"/>
    </div>
    <h1 class="text-3xl font-bold text-gray-900">${teamName}</h1>
  `;

  // Remplir les infos du stade
  const stadiumInfo = document.getElementById("stadium-info");
  stadiumInfo.innerHTML = `
    <svg class="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="2" y="8" width="20" height="12" rx="2" stroke-width="1.5"/>
      <path d="M2 12h20M6 8V6M10 8V6M14 8V6M18 8V6" stroke-width="1.5"/>
    </svg>
    <div>
      <div class="text-gray-900 font-medium">${teamData.stadium}</div>
      <div class="text-gray-500 text-sm">Capacité: ${teamData.capacity}</div>
    </div>
  `;

  // Remplir les résultats
  const resultsList = document.getElementById("results-list");
  resultsList.innerHTML = "";

  teamData.competitions.forEach((competition) => {
    const competitionDiv = document.createElement("div");
    competitionDiv.className = "bg-white";

    let competitionIcon = "";
    if (competition.name.includes("Coupe")) {
      competitionIcon = `<div class="w-10 h-10 bg-[#003082] rounded-full flex items-center justify-center text-white text-xs font-bold">CF</div>`;
    } else if (competition.name.includes("FIFA")) {
      competitionIcon = `<div class="w-10 h-10 bg-[#c5a572] rounded-full flex items-center justify-center"><span class="text-2xl">🏆</span></div>`;
    } else if (competition.name.includes("Ligue 1")) {
      competitionIcon = `<div class="w-10 h-10 flex items-center justify-center"><div class="text-2xl font-bold">L1</div></div>`;
    } else if (
      competition.name.includes("Champions") ||
      competition.name.includes("Europa")
    ) {
      competitionIcon = `<div class="w-10 h-10 bg-black rounded-full flex items-center justify-center"><span class="text-2xl">⭐</span></div>`;
    }

    let matchesHTML = "";
    competition.matches.forEach((match) => {
      const resultColor =
        match.result === "V"
          ? "bg-green-600"
          : match.result === "N"
          ? "bg-orange-500"
          : "bg-red-600";

      matchesHTML += `
        <div class="px-4 py-4 flex items-center gap-4">
          <div class="text-gray-600 text-sm font-medium w-12">${
            match.date
          }</div>
          
          <div class="flex-1 space-y-3">
            <!-- Home Team -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 flex-1">
                <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <div class="text-xs font-bold">${match.homeTeam.substring(
                    0,
                    2
                  )}</div>
                </div>
                <span class="text-gray-900 font-medium flex-1">${
                  match.homeTeam
                }</span>
              </div>
              <span class="text-2xl font-bold text-gray-900 w-8 text-right">${
                match.homeScore
              }</span>
            </div>

            <!-- Away Team -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 flex-1">
                <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <div class="text-xs font-bold">${match.awayTeam.substring(
                    0,
                    2
                  )}</div>
                </div>
                <span class="text-gray-900 font-medium flex-1">${
                  match.awayTeam
                }</span>
              </div>
              <span class="text-2xl font-bold text-gray-900 w-8 text-right">${
                match.awayScore
              }</span>
            </div>

            ${
              match.note
                ? `<div class="text-gray-500 text-sm text-right">${match.note}</div>`
                : ""
            }
          </div>

          <!-- Result Badge -->
          <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg ${resultColor}">
            ${match.result}
          </div>
        </div>
      `;
    });

    competitionDiv.innerHTML = `
      <!-- Competition Header -->
      <div class="px-4 py-3 flex items-center gap-3 border-b border-gray-200">
        <div class="w-12 h-12 flex items-center justify-center">
          ${competitionIcon}
        </div>
        <div class="flex-1">
          <div class="text-gray-900 font-semibold">${competition.name}</div>
          <div class="flex items-center gap-1.5 mt-0.5">
            <span class="text-lg">${competition.countryFlag}</span>
            <span class="text-gray-600 text-xs font-medium">${competition.country}</span>
          </div>
        </div>
      </div>

      <!-- Matches -->
      ${matchesHTML}
    `;

    resultsList.appendChild(competitionDiv);
  });
}

// Fonction pour revenir au classement
function goBack() {
  document.getElementById("team-results-view").classList.add("hidden");
  document.getElementById("standings-view").classList.remove("hidden");
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  renderStandings();

  // Bouton retour
  document.getElementById("back-button").addEventListener("click", goBack);
});
