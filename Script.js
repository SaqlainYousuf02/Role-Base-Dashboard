    
        // Role-based data structure
        const rolesData = {
            student: {
                id: 'student',
                title: 'Student',
                color: 'primary',
                gradient: 'from-blue-500 to-cyan-500',
                bgGradient: 'from-blue-50 to-cyan-50',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>`,
                stats: {
                    courses: { label: 'Courses', value: 5, icon: 'book' },
                    assignments: { label: 'Assignments', value: 12, icon: 'clipboard' },
                    notifications: { label: 'Notifications', value: 3, icon: 'bell' }
                }
            },
            instructor: {
                id: 'instructor',
                title: 'Instructor',
                color: 'secondary',
                gradient: 'from-purple-500 to-pink-500',
                bgGradient: 'from-purple-50 to-pink-50',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>`,
                stats: {
                    courses: { label: 'Courses', value: 8, icon: 'academic' },
                    assignments: { label: 'Assignments', value: 45, icon: 'clipboard-check' },
                    notifications: { label: 'Notifications', value: 18, icon: 'chat' }
                }
            },
            admin: {
                id: 'admin',
                title: 'Administrator',
                color: 'accent',
                gradient: 'from-orange-500 to-red-500',
                bgGradient: 'from-orange-50 to-red-50',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>`,
                stats: {
                    courses: { label: 'Courses', value: 156, icon: 'collection' },
                    assignments: { label: 'Assignments', value: 23, icon: 'document-report' },
                    notifications: { label: 'Notifications', value: 7, icon: 'exclamation' }
                }
            }
        };
        
        // Stat icons mapping
        const statIcons = {
            book: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`,
            clipboard: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>`,
            bell: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>`,
            academic: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>`,
            'clipboard-check': `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>`,
            chat: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>`,
            collection: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>`,
            'document-report': `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
            exclamation: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`
        };
        
        // Generate random stats for refresh
        function generateRandomStats(roleId) {
            const baseValues = {
                student: { courses: [3, 8], assignments: [5, 20], notifications: [0, 10] },
                instructor: { courses: [5, 15], assignments: [20, 80], notifications: [5, 30] },
                admin: { courses: [100, 200], assignments: [10, 50], notifications: [0, 20] }
            };
            
            const ranges = baseValues[roleId];
            return {
                courses: Math.floor(Math.random() * (ranges.courses[1] - ranges.courses[0] + 1)) + ranges.courses[0],
                assignments: Math.floor(Math.random() * (ranges.assignments[1] - ranges.assignments[0] + 1)) + ranges.assignments[0],
                notifications: Math.floor(Math.random() * (ranges.notifications[1] - ranges.notifications[0] + 1)) + ranges.notifications[0]
            };
        }
        
        // Animate number change
        function animateNumber(element, start, end, duration = 500) {
            const startTime = performance.now();
            
            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(start + (end - start) * easeOutQuart);
                
                element.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }
            
            requestAnimationFrame(update);
        }
        
        // Render dashboard cards
        function renderDashboard() {
            const container = document.getElementById('dashboardContainer');
            container.innerHTML = '';
            
            Object.values(rolesData).forEach(role => {
                const card = document.createElement('div');
                card.className = `stat-card card bg-white shadow-xl border border-slate-100 overflow-hidden`;
                card.dataset.roleId = role.id;
                
                card.innerHTML = `
                    <!-- Card Header -->
                    <div class="bg-gradient-to-r ${role.gradient} p-6 text-white relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                        <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                        
                        <div class="relative z-10 flex items-center justify-between">
                            <div>
                                <h3 class="text-2xl font-bold">${role.title}</h3>
                                <p class="text-white/80 text-sm">${role.subtitle}</p>
                            </div>
                            <div class="icon-wrapper bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                                ${role.icon}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Card Body - Stats -->
                    <div class="card-body p-6 space-y-4">
                        ${Object.entries(role.stats).map(([key, stat]) => `
                            <div class="flex items-center justify-between p-4 bg-gradient-to-r ${role.bgGradient} rounded-xl group hover:shadow-md transition-all">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br ${role.gradient} flex items-center justify-center text-white shadow-md">
                                        ${statIcons[stat.icon]}
                                    </div>
                                    <span class="text-slate-600 font-medium">${stat.label}</span>
                                </div>
                                <span class="stat-number text-2xl font-bold text-slate-800" data-stat="${key}" data-role="${role.id}">${stat.value}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                 
                `;
                
                container.appendChild(card);
            });
            
            updateLastUpdated();
        }
        
        // Update last updated timestamp
        function updateLastUpdated() {
            const now = new Date();
            document.getElementById('lastUpdated').textContent = now.toLocaleString();
        }
        
        // Refresh stats with animation
        function refreshStats() {
            const refreshBtn = document.getElementById('refreshBtn');
            const refreshIcon = document.getElementById('refreshIcon');
            
            // Add spinning animation
            refreshIcon.classList.add('refreshing');
            refreshBtn.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                Object.values(rolesData).forEach(role => {
                    const newStats = generateRandomStats(role.id);
                    
                    // Update data
                    role.stats.courses.value = newStats.courses;
                    role.stats.assignments.value = newStats.assignments;
                    role.stats.notifications.value = newStats.notifications;
                    
                    // Animate number changes in DOM
                    const card = document.querySelector(`[data-role-id="${role.id}"]`);
                    if (card) {
                        Object.entries(newStats).forEach(([key, newValue]) => {
                            const statElement = card.querySelector(`[data-stat="${key}"]`);
                            if (statElement) {
                                const oldValue = parseInt(statElement.textContent);
                                animateNumber(statElement, oldValue, newValue, 600);
                            }
                        });
                    }
                });
                
                updateLastUpdated();
                
                // Remove animation
                refreshIcon.classList.remove('refreshing');
                refreshBtn.disabled = false;
                
                // Show toast notification
                showToast('Stats refreshed successfully!', 'success');
            }, 800);
        }
        
        // Toast notification
        function showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = `alert alert-${type} fixed bottom-4 right-4 w-auto shadow-2xl z-50 animate-bounce`;
            toast.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>${message}</span>
            `;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.remove();
            }, 3000);
        }
        
         //Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderDashboard();
            
            // Attach refresh handler
            document.getElementById('refreshBtn').addEventListener('click', refreshStats);
        });
  