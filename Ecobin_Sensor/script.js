function toggleNotifications() {
  const panel = document.getElementById("notificationPanel");
  const overlay = document.getElementById("overlay");
  panel.classList.toggle("active");
  overlay.classList.toggle("active");
}

function closeNotifications() {
  const panel = document.getElementById("notificationPanel");
  const overlay = document.getElementById("overlay");
  panel.classList.remove("active");
  overlay.classList.remove("active");
}

function viewNotification(id) {
  alert(
    "Viewing notification #" +
      id +
      "\n\nThis would open the detailed view of this notification."
  );
}

function openSettings() {
  alert("Opening Settings...\n\nThis would open the settings panel.");
}

function updateNotificationCount() {
  const unreadCount = document.querySelectorAll(
    ".notification-item.unread"
  ).length;
  const badge = document.getElementById("notificationCount");
  if (unreadCount > 0) {
    badge.textContent = unreadCount;
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

window.onload = function () {
  updateNotificationCount();
};

const fillLevelCtx = document.getElementById("fillLevelChart").getContext("2d");
new Chart(fillLevelCtx, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Fill Level",
        data: [45, 55, 62, 58, 75, 68, 58],
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: "Water Level",
        data: [30, 38, 45, 52, 48, 42, 38],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 80,
      },
    },
  },
});

const alertFrequencyCtx = document
  .getElementById("alertFrequencyChart")
  .getContext("2d");
new Chart(alertFrequencyCtx, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Alerts",
        data: [12, 15, 8, 18, 22, 16, 10],
        backgroundColor: "#ea580c",
        borderRadius: 4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 24,
      },
    },
  },
});

let currentZoom = 1;
function zoomMap(delta) {
  currentZoom = Math.max(0.5, Math.min(2, currentZoom + delta));
  const mapContainer = document.getElementById("mapContainer");
  mapContainer.style.transform = `scale(${currentZoom})`;
}
