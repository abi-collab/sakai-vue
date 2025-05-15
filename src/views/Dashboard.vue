<script setup></script>

<template>
    <div class="bg-white">
        <div class="relative isolate px-6 lg:px-8">
            <div class="mx-auto max-w-7xl pt-32 px-8">
                <div class="z-10">
                    <h1 class="text-3xl md:text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Guide in Administering Medical Assistance(GAMA)</h1>
                    <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Illuminating Your Path to Comprehensive Medical Guidance.</p>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-7xl">
            <img src="@/assets/flat/10173261_8486.svg" alt="SVG file" class="w-full" />
        </div>
        <div class="mx-auto max-w-7xl px-8 py-12 text-lg font-medium text-pretty sm:text-xl/8 text-gray-500">
            Understanding and accessing government medical assistance <b>shouldn't</b> be a struggle. <br /><br />
            Our non-profit organization offers this website as a comprehensive, <b>one-stop reference</b> for individuals seeking support.
            <br />
            <br />
            We provide a carefully compiled collection of <b>relevant government offices</b>, along with essential information on their services, locations, and the steps involved in availing their <b>medical assistance programs</b>.
        </div>
        <div class="bg-gradient-to-r from-blue-100 via-yellow-50 to-red-100 my-16">
            <div class="mx-auto max-w-7xl px-8 py-12">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        class="border-2 border-blue-300 bg-blue-50 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl shadow py-8 px-6 flex flex-col items-center transition-transform duration-200 ease-in-out hover:scale-110 active:scale-100 cursor-pointer"
                    >
                        <svg class="w-14 h-14 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <!-- Main building body -->
                            <rect x="3" y="8" width="18" height="12" rx="2" />
                            <!-- Roof -->
                            <polygon points="3,8 12,3 21,8" fill="currentColor" opacity="0.2" />
                            <path d="M3 8L12 3L21 8" />
                            <!-- Doors and windows -->
                            <rect x="7" y="14" width="2" height="3" />
                            <rect x="11" y="14" width="2" height="3" />
                            <rect x="15" y="14" width="2" height="3" />
                            <rect x="9" y="10" width="2" height="2" />
                            <rect x="13" y="10" width="2" height="2" />
                        </svg>
                        <h2 class="text-xl font-semibold mb-2 text-gray-700">Agency</h2>
                        <p class="text-3xl font-bold text-gray-700">10</p>
                        <!-- <span class="text-sm text-gray-500 mt-1">Upcoming</span> -->
                    </div>
                    <div
                        class="border-2 border-green-400 bg-green-50 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl shadow py-8 px-6 flex flex-col items-center transition-transform duration-200 ease-in-out hover:scale-110 active:scale-100 cursor-pointer"
                    >
                        <svg class="w-14 h-14 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <!-- Outer focus ring -->
                            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none" />
                            <!-- Inner focus dot -->
                            <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2" />
                            <!-- Crosshairs -->
                            <line x1="12" y1="5" x2="12" y2="9" stroke="currentColor" stroke-width="2" />
                            <line x1="12" y1="15" x2="12" y2="19" stroke="currentColor" stroke-width="2" />
                            <line x1="5" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="2" />
                            <line x1="15" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" />
                        </svg>
                        <h2 class="text-xl font-semibold mb-2 text-gray-700">Area of Focus</h2>
                        <p class="text-3xl font-bold text-gray-700">2</p>
                        <!-- <span class="text-sm text-gray-500 mt-1">Registered</span> -->
                    </div>
                    <router-link
                        to="/stories"
                        class="border-2 border-yellow-400 bg-yellow-50 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl shadow py-8 px-6 flex flex-col items-center transition-transform duration-200 ease-in-out hover:scale-110 active:scale-100 cursor-pointer"
                    >
                        <svg class="w-14 h-14 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <!-- Book cover -->
                            <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.15" />
                            <!-- Book spine -->
                            <rect x="7" y="4" width="2" height="16" fill="currentColor" opacity="0.3" />
                            <!-- Book lines (pages) -->
                            <line x1="10" y1="7" x2="18" y2="7" stroke="currentColor" stroke-width="1.2" />
                            <line x1="10" y1="11" x2="18" y2="11" stroke="currentColor" stroke-width="1.2" />
                            <line x1="10" y1="15" x2="18" y2="15" stroke="currentColor" stroke-width="1.2" />
                            <!-- Story sparkle/star -->
                            <polygon points="12,9 13,11 15,11 13.5,12.2 14,14 12,13 10,14 10.5,12.2 9,11 11,11" fill="currentColor" opacity="0.7" />
                        </svg>
                        <h2 class="text-xl font-semibold mb-2 text-gray-700">Success Stories</h2>
                        <p class="text-3xl font-bold text-gray-700">30</p>
                        <!-- <span class="text-sm text-gray-500 mt-1">Available</span> -->
                    </router-link>
                    <router-link
                        to="/officers"
                        class="border-2 border-red-300 bg-red-50 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl shadow py-8 px-6 flex flex-col items-center transition-transform duration-200 ease-in-out hover:scale-110 active:scale-100 cursor-pointer"
                    >
                        <svg class="w-14 h-14 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 32 32">
                            <!-- Main person (center, larger, in front) -->
                            <circle cx="16" cy="13" r="4" fill="currentColor" opacity="0.18" />
                            <circle cx="16" cy="13" r="4" />
                            <!-- Main body -->
                            <path d="M10 25c0-3.5 4-5.5 6-5.5s6 2 6 5.5" stroke="currentColor" stroke-width="2" fill="none" />
                            <!-- Left person (smaller, behind) -->
                            <circle cx="8.5" cy="15.5" r="2.5" fill="currentColor" opacity="0.12" />
                            <circle cx="8.5" cy="15.5" r="2.5" />
                            <!-- Left body -->
                            <path d="M4 25c0-2.5 2.5-4 5-4" stroke="currentColor" stroke-width="1.5" fill="none" />
                            <!-- Right person (smaller, behind) -->
                            <circle cx="23.5" cy="15.5" r="2.5" fill="currentColor" opacity="0.12" />
                            <circle cx="23.5" cy="15.5" r="2.5" />
                            <!-- Right body -->
                            <path d="M28 25c0-2.5-2.5-4-5-4" stroke="currentColor" stroke-width="1.5" fill="none" />
                            <!-- Shoulders (center) -->
                            <ellipse cx="16" cy="19.5" rx="5" ry="2" fill="currentColor" opacity="0.08" />
                        </svg>
                        <h2 class="text-xl font-semibold mb-2 text-gray-700">Officers</h2>
                        <p class="text-3xl font-bold text-gray-700">15</p>
                        <!-- <span class="text-sm text-gray-500 mt-1">Pending</span> -->
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
