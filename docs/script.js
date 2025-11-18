// Tab functionality for Summary Evolution section
document.addEventListener("DOMContentLoaded", function () {
    // Initialize tabs
    initializeTabs();

    // Initialize charts
    initializeCharts();

    // Smooth scrolling for navigation links
    initializeSmoothScrolling();
});

function initializeTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn");

    tabButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const targetTab = this.getAttribute("data-tab");

            // Remove active class from all buttons and panes (query dynamically)
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            const tabPanes = document.querySelectorAll(".tab-pane");
            tabPanes.forEach((pane) => pane.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");

            // Show corresponding tab pane
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add("active");
            }
        });
    });
}

function initializeCharts() {
    // Sample data - replace with actual data from your experiments
    const iterationLabels = [
        "Iteration 0",
        "Iteration 1",
        "Iteration 2",
        "Iteration 3",
        "Iteration 4",
        "Iteration 5",
    ];

    // Reward Chart
    const rewardCtx = document.getElementById("rewardChart");
    if (rewardCtx) {
        new Chart(rewardCtx, {
            type: "line",
            data: {
                labels: iterationLabels,
                datasets: [
                    {
                        label: "Retrieval Reward",
                        data: [
                            0.295721, 0.348292, 0.734302, 0.973899, 1.064666,
                            1.115048,
                        ],
                        borderColor: "#2563eb",
                        backgroundColor: "rgba(37, 99, 235, 0.1)",
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1.2,
                        grid: {
                            color: "#e5e7eb",
                        },
                    },
                    x: {
                        grid: {
                            color: "#e5e7eb",
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });
    }

    // MRR@10 Chart
    const mrrCtx = document.getElementById("mrrChart");
    if (mrrCtx) {
        new Chart(mrrCtx, {
            type: "bar",
            data: {
                labels: ["Baseline", "Non-iterative", "ReSuMe (Ours)"],
                datasets: [
                    {
                        label: "MRR@10",
                        data: [0.266, 0.234, 0.301],
                        backgroundColor: ["#94a3b8", "#64748b", "#2563eb"],
                        borderWidth: 0,
                        borderRadius: 4,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 0.4,
                        grid: {
                            color: "#e5e7eb",
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });
    }

    // Recall@100 Chart
    const recallCtx = document.getElementById("recallChart");
    if (recallCtx) {
        new Chart(recallCtx, {
            type: "bar",
            data: {
                labels: ["Baseline", "Non-iterative", "ReSuMe (Ours)"],
                datasets: [
                    {
                        label: "Recall@100",
                        data: [0.819, 0.789, 0.874],
                        backgroundColor: ["#94a3b8", "#64748b", "#10b981"],
                        borderWidth: 0,
                        borderRadius: 4,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1.0,
                        grid: {
                            color: "#e5e7eb",
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });
    }

    // Quality Metrics Chart (ROUGE-L and BLEU-4)
    const qualityCtx = document.getElementById("qualityChart");
    if (qualityCtx) {
        new Chart(qualityCtx, {
            type: "line",
            data: {
                labels: iterationLabels,
                datasets: [
                    {
                        label: "ROUGE-L",
                        data: [0.42, 0.45, 0.48, 0.51],
                        borderColor: "#dc2626",
                        backgroundColor: "rgba(220, 38, 38, 0.1)",
                        borderWidth: 3,
                        fill: false,
                        tension: 0.4,
                    },
                    {
                        label: "BLEU-4",
                        data: [0.18, 0.19, 0.195, 0.201],
                        borderColor: "#7c3aed",
                        backgroundColor: "rgba(124, 58, 237, 0.1)",
                        borderWidth: 3,
                        fill: false,
                        tension: 0.4,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 0.6,
                        grid: {
                            color: "#e5e7eb",
                        },
                    },
                    x: {
                        grid: {
                            color: "#e5e7eb",
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: true,
                        position: "top",
                    },
                },
            },
        });
    }
}

function initializeSmoothScrolling() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        });
    });
}

// Generate and populate summary evolution examples
function populateExampleData() {
    // Define the data for each iteration
    let title = 'Example from MS-MARCO'
    let docText = "Primary Biliary Cirrhosis. Up to 95% of primary biliary cirrhosis (PBC) cases occur in women, usually around age 50. In people with PBC, the immune system attacks and destroys cells in the liver's bile ducts. Like many autoimmune disorders, the causes of PBC are unknown.rimary Biliary Cirrhosis. Up to 95% of primary biliary cirrhosis (PBC) cases occur in women, usually around age 50. In people with PBC, the immune system attacks and destroys cells in the liver's bile ducts. Like many autoimmune disorders, the causes of PBC are unknown."
    const examples = {
        iteration0: {
            summary:
                "Primary Biliary Cirrhosis (PBC) is an autoimmune disorder where the immune system attacks and destroys cells in the liver's bile ducts. Up to 95% of PBC cases occur in women, typically around age 50, and the underlying causes remain unknown.",
            rougeL: 0.49,
            summaryTitle: "Generated Summary",
        },
        iteration1: {
            summary:
                "Primary biliary cirrhosis (PBC) affects up to 95% of cases in women, typically presenting around age 50. The condition involves an autoimmune process where the immune system attacks and destroys cells in the liver's bile ducts. As an autoimmune disorder, the exact causes of PBC remain unknown.",
            rougeL: 0.5,
            summaryTitle: "Generated Summary",
        },
        iteration2: {
            summary:
                "Primary Biliary Cirrhosis (PBC) affects up to 95% of cases in women, typically diagnosed around age 50. In PBC, the immune system attacks and destroys cells in the liver's bile ducts, classifying it as an autoimmune disorder with unknown causes. PBC is a chronic liver condition characterized by immune-mediated damage to bile ducts.",
            rougeL: 0.48,
            summaryTitle: "Generated Summary",
        },
        iteration3: {
            summary:
                "Primary Biliary Cirrhosis (PBC) affects up to 95% of cases in women, typically diagnosed around age 50. In PBC, the immune system attacks and destroys cells in the liver's bile ducts. Primary Biliary Cirrhosis is an autoimmune disorder with unknown causes. PBC is a specific type of autoimmune liver disease targeting bile ducts. Primary Biliary Cirrhosis (PBC) is the medical term for this condition.",
            rougeL: 0.48,
            summaryTitle: "Generated Summary",
        },
        iteration4: {
            summary:
                "Primary Biliary Cirrhosis (PBC) affects up to 95% of cases in women, typically diagnosed around age 50. In primary biliary cirrhosis, the immune system attacks and destroys cells in the liver's bile ducts. Primary biliary cirrhosis is an autoimmune disorder with unknown causes. Primary Biliary Cirrhosis (PBC) is a condition characterized by immune-mediated damage to the liver's bile ducts. Primary Biliary Cirrhosis (PBC) is an autoimmune disorder.",
            rougeL: 0.51,
            summaryTitle: "Generated Summary",
        },
        iteration5: {
            summary:
                "Primary Biliary Cirrhosis (PBC) affects up to 95% of cases in women, typically around age 50. In primary biliary cirrhosis, the immune system attacks and destroys cells in the liver's bile ducts. Primary biliary cirrhosis is an autoimmune disorder with unknown causes. Primary Biliary Cirrhosis is a type of autoimmune liver disease. Primary Biliary Cirrhosis is also known as primary biliary cholangitis. Primary Biliary Cirrhosis is a chronic liver condition.",
            rougeL: 0.45,
            summaryTitle: "Generated Summary",
        },
        iteration6: {
            summary:
                "Primary Biliary Cirrhosis (PBC) affects up to 95% of women, typically around age 50. In primary biliary cirrhosis, the immune system attacks and destroys cells in the liver's bile ducts. Primary biliary cirrhosis is an autoimmune disorder with unknown causes. Primary biliary cirrhosis (PBC) is a type of autoimmune liver disease. Primary biliary cirrhosis (PBC) is a condition where the immune system targets bile duct cells in the liver. Primary biliary cirrhosis (PBC) is a chronic liver disease.",
            rougeL: 0.50,
            summaryTitle: "Generated Summary",
        },
    };

    // Get the tab content container
    const tabContent = document.querySelector(".tab-content");
    if (!tabContent) return examples;

    // Clear existing content
    tabContent.innerHTML = "";

    // Generate HTML for each iteration
    Object.keys(examples).forEach((iterationKey, index) => {
        const data = examples[iterationKey];
        const isActive = index === 0 ? "active" : "";

        // Create the tab pane
        const tabPane = document.createElement("div");
        tabPane.className = `tab-pane ${isActive}`;
        tabPane.id = iterationKey;

        // Generate the HTML content
        let metricsHTML = `<div class="metrics-small">
            <span>ROUGE-L: <strong>${data.rougeL}</strong></span>
        </div>`;

        tabPane.innerHTML = `
            <div class="example-container">
                <h4>${title}</h4>
                <div class="summary-comparison">
                    <div class="summary-box">
                        <h5>Original Document</h5>
                        <p class="document-text">${docText}</p>
                    </div>
                    <div class="summary-box">
                        <h5>${data.summaryTitle}</h5>
                        <p class="summary-text">${data.summary}</p>
                        ${metricsHTML}
                    </div>
                </div>
            </div>
        `;

        tabContent.appendChild(tabPane);
    });

    return examples;
}

// Initialize example data when the page loads
document.addEventListener("DOMContentLoaded", function () {
    populateExampleData();
});
