// Tab functionality for Summary Evolution section
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tabs
    initializeTabs();
    
    // Initialize charts
    initializeCharts();
    
    // Smooth scrolling for navigation links
    initializeSmoothScrolling();
});

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab pane
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}

function initializeCharts() {
    // Sample data - replace with actual data from your experiments
    const iterationLabels = ['Iteration 0', 'Iteration 1', 'Iteration 2', 'Iteration 3'];
    
    // Reward Chart
    const rewardCtx = document.getElementById('rewardChart');
    if (rewardCtx) {
        new Chart(rewardCtx, {
            type: 'line',
            data: {
                labels: iterationLabels,
                datasets: [{
                    label: 'Retrieval Reward',
                    data: [0.65, 0.72, 0.81, 0.89],
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1.0,
                        grid: {
                            color: '#e5e7eb'
                        }
                    },
                    x: {
                        grid: {
                            color: '#e5e7eb'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // MRR@10 Chart
    const mrrCtx = document.getElementById('mrrChart');
    if (mrrCtx) {
        new Chart(mrrCtx, {
            type: 'bar',
            data: {
                labels: ['Baseline', 'Non-iterative', 'ReSuMe (Ours)'],
                datasets: [{
                    label: 'MRR@10',
                    data: [0.245, 0.267, 0.342],
                    backgroundColor: [
                        '#94a3b8',
                        '#64748b',
                        '#2563eb'
                    ],
                    borderWidth: 0,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 0.4,
                        grid: {
                            color: '#e5e7eb'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Recall@100 Chart
    const recallCtx = document.getElementById('recallChart');
    if (recallCtx) {
        new Chart(recallCtx, {
            type: 'bar',
            data: {
                labels: ['Baseline', 'Non-iterative', 'ReSuMe (Ours)'],
                datasets: [{
                    label: 'Recall@100',
                    data: [0.734, 0.756, 0.834],
                    backgroundColor: [
                        '#94a3b8',
                        '#64748b',
                        '#10b981'
                    ],
                    borderWidth: 0,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1.0,
                        grid: {
                            color: '#e5e7eb'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Quality Metrics Chart (ROUGE-L and BLEU-4)
    const qualityCtx = document.getElementById('qualityChart');
    if (qualityCtx) {
        new Chart(qualityCtx, {
            type: 'line',
            data: {
                labels: iterationLabels,
                datasets: [
                    {
                        label: 'ROUGE-L',
                        data: [0.42, 0.45, 0.48, 0.51],
                        borderColor: '#dc2626',
                        backgroundColor: 'rgba(220, 38, 38, 0.1)',
                        borderWidth: 3,
                        fill: false,
                        tension: 0.4
                    },
                    {
                        label: 'BLEU-4',
                        data: [0.18, 0.19, 0.195, 0.201],
                        borderColor: '#7c3aed',
                        backgroundColor: 'rgba(124, 58, 237, 0.1)',
                        borderWidth: 3,
                        fill: false,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 0.6,
                        grid: {
                            color: '#e5e7eb'
                        }
                    },
                    x: {
                        grid: {
                            color: '#e5e7eb'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        });
    }
}

function initializeSmoothScrolling() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add some sample data for the summary evolution examples
function populateExampleData() {
    // This function can be called to populate the summary examples
    // with actual data from your experiments
    
    const examples = {
        iteration0: {
            document: "Machine learning algorithms are computational methods that enable systems to automatically learn and improve from experience without being explicitly programmed. Classification algorithms are a subset of supervised learning techniques that categorize data points into predefined classes or categories. Popular classification algorithms include decision trees, support vector machines, random forests, and neural networks. These algorithms analyze training data to identify patterns and relationships between input features and target classes, then use this knowledge to predict the class of new, unseen data points.",
            summary: "This document discusses machine learning algorithms, particularly classification methods. It mentions several popular algorithms like decision trees and neural networks that can categorize data into different classes.",
            retrievalScore: 0.65,
            rougeL: 0.42
        },
        iteration1: {
            document: "Machine learning algorithms are computational methods that enable systems to automatically learn and improve from experience without being explicitly programmed. Classification algorithms are a subset of supervised learning techniques that categorize data points into predefined classes or categories. Popular classification algorithms include decision trees, support vector machines, random forests, and neural networks. These algorithms analyze training data to identify patterns and relationships between input features and target classes, then use this knowledge to predict the class of new, unseen data points.",
            summary: "Machine learning classification algorithms including decision trees, support vector machines, random forests, and neural networks are supervised learning techniques that categorize data points into predefined classes by analyzing training data patterns.",
            retrievalScore: 0.72,
            rougeL: 0.45
        },
        iteration2: {
            document: "Machine learning algorithms are computational methods that enable systems to automatically learn and improve from experience without being explicitly programmed. Classification algorithms are a subset of supervised learning techniques that categorize data points into predefined classes or categories. Popular classification algorithms include decision trees, support vector machines, random forests, and neural networks. These algorithms analyze training data to identify patterns and relationships between input features and target classes, then use this knowledge to predict the class of new, unseen data points.",
            summary: "Classification algorithms are supervised machine learning methods that categorize data into predefined classes. Key classification algorithms include decision trees, support vector machines, random forests, and neural networks, which learn from training data to predict classes of new data points.",
            retrievalScore: 0.81,
            rougeL: 0.48
        },
        iteration3: {
            document: "Machine learning algorithms are computational methods that enable systems to automatically learn and improve from experience without being explicitly programmed. Classification algorithms are a subset of supervised learning techniques that categorize data points into predefined classes or categories. Popular classification algorithms include decision trees, support vector machines, random forests, and neural networks. These algorithms analyze training data to identify patterns and relationships between input features and target classes, then use this knowledge to predict the class of new, unseen data points.",
            summary: "Machine learning classification algorithms are supervised learning techniques for categorizing data points into predefined classes. Major classification methods include decision trees, support vector machines, random forests, and neural networks. These algorithms learn patterns from training data to classify new data points based on input features and target classes.",
            retrievalScore: 0.89,
            rougeL: 0.51
        }
    };
    
    // You can extend this to populate the actual HTML elements
    // with the example data above
}

// Initialize example data when the page loads
document.addEventListener('DOMContentLoaded', function() {
    populateExampleData();
});
