let currentPage = 1;

// Function to populate the container with announcements
function populateAnnouncements(pageNumber) {
  const pageSize = 25;
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const announcementContainer = document.getElementById(
    "announcementContainer"
  );
  announcementContainer.innerHTML = ""; // Clear existing announcements

  for (let i = endIndex - 1; i >= startIndex; i--) {
    const announcementData = announcementsData[i];

    if (!announcementData) {
      continue; // Skip if data is undefined
    }

    const { notificationNumber, title, date, fileUrl } = announcementData;

    const announcement = `<tr class="announcement-row">
                                <td>${date} - ${notificationNumber} - ${title}  <a href="${fileUrl}" target="_blank"><img src="../assets/desktop/icons/downloadIcon.svg" alt="downloadIcon"></a></td>
                            </tr>`;

    announcementContainer.innerHTML += announcement;
  }

  // Update current page
  currentPage = pageNumber;
}

// Function to populate pagination
function populatePagination() {
  const totalPages = Math.ceil(announcementsData.length / 25);
  const paginationElement = document.getElementById("pagination");
  paginationElement.innerHTML = "";

  const disablePrev = currentPage === 1 ? "disabled" : "";
  const disableNext = currentPage === totalPages ? "disabled" : "";

  const firstPage = `<li class="page-item ${disablePrev}"><a class="page-link" href="#" onclick="changePage(1)">First</a></li>`;
  const prevPage = `<li class="page-item ${disablePrev}"><a class="page-link" href="#" onclick="changePage(currentPage - 1)">Previous</a></li>`;

  paginationElement.innerHTML += firstPage;
  paginationElement.innerHTML += prevPage;

  for (let i = 1; i <= totalPages; i++) {
    const li = `<li class="page-item ${
      currentPage === i ? "active" : ""
    }"><a class="page-link" href="#" onclick="changePage(${i})">${i}</a></li>`;
    paginationElement.innerHTML += li;
  }

  const nextPage = `<li class="page-item ${disableNext}"><a class="page-link" href="#" onclick="changePage(currentPage + 1)">Next</a></li>`;
  const lastPage = `<li class="page-item ${disableNext}"><a class="page-link" href="#" onclick="changePage(${totalPages})">Last</a></li>`;

  paginationElement.innerHTML += nextPage;
  paginationElement.innerHTML += lastPage;
}

// Function to change page
function changePage(pageNumber) {
  populateAnnouncements(pageNumber);
  populatePagination();
}

// Initial page load
populateAnnouncements(1);
populatePagination();
