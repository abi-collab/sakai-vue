<script setup></script>

<template>
    <div class="">
        <div class="relative isolate px-6 lg:px-8">
            <div class="mx-auto max-w-7xl pt-16 md:pt-32">
                <div class="z-10">
                    <h1 class="text-3xl md:text-6xl font-semibold tracking-tight text-balance">Guide in Administering Medical Assistance</h1>
                    <p class="mt-4 text-lg md:text-xl font-medium text-pretty ml-1">Teaching Filipinos how to achieve Government Medical Care.</p>
                </div>
            </div>
        </div>
        <div class="px-0 relative mt-8">
            <img src="@/assets/imgs/pinoys2-removebg-preview2.png" alt="SVG file" class="w-full" />
            <svg class="absolute left-0 bottom-0 w-full h-0 md:h-0" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff" />
            </svg>
        </div>
        <!-- <div class="h-2 bg-white"></div> -->
        <div class="bg-blue-200">
            <div class="mx-auto max-w-7xl p-8 md:p-12 text-lg font-medium text-pretty sm:text-xl/8 space-y-2 text-gray-900">
                <div>Understanding and accessing government medical assistance <b>shouldn't</b> be a struggle.</div>
                <!-- <div>Our non-profit organization offers this website as a comprehensive, <b>one-stop reference</b> for individuals seeking support.</div> -->
                <div>We provide a carefully compiled collection of <b>relevant government offices</b>, along with essential information on their services, locations, and the steps involved in availing their <b>medical assistance programs</b>.</div>
            </div>
        </div>
        <div class="bg-white">
            <div class="max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="grid place-items-center px-8 text-balance">
                    <div class="text-lg md:text-2xl" style="font-family: 'Lato', sans-serif; font-weight: 500; color: #1e293b">
                        <b class="text-2xl md:text-4xl" style="font-family: 'EB Garamond', sans-serif; font-weight: 500; line-height: 1.1; color: #1d4ed8">
                            <span v-for="(word, i) in 'The Church of Jesus Christ of Latter-Day Saints'.split(' ')" :key="i" style="display: inline-block; margin-right: 0.15em; color: #1d4ed8">{{ word }}</span>
                        </b>
                        <i style="line-height: 1.1; color: #334155">
                            <span v-for="(word, i) in 'teachings emphasize the importance of financial preparedness as a vital component of'.split(' ')" :key="'a' + i" :style="'display: inline-block; margin-right: 0.15em; color: #15803d;'">
                                {{ word }}
                            </span>
                            <u>
                                <span v-for="(word, i) in ' overall well-being'.split(' ')" :key="'b' + i" class="text-2xl md:text-3xl" style="display: inline-block; margin-right: 0.15em; color: #f59e1a">
                                    {{ word }}
                                </span>
                            </u>
                            <span style="color: #334155">both temporal and spiritual.</span>
                        </i>
                        <br /><br />
                        <i class="text-lg md:text-2xl" style="line-height: 1.1; color: #334155">
                            <span style="line-height: 1.1">
                                <span v-for="(word, i) in 'Leaders encourage individuals'.split(' ')" :key="'c' + i" style="display: inline-block; margin-right: 0.15em; color: #15803d">{{ word }}</span>
                            </span>
                            <span style="color: #334155">to </span>
                            <span class="text-2xl md:text-3xl" style="line-height: 1.1; color: #1d4ed8">
                                <span v-for="(word, i) in 'live within their means, avoid debt, and save'.split(' ')" :key="'d' + i" style="display: inline-block; margin-right: 0.15em; color: #1d4ed8">{{ word }}</span>
                            </span>
                            <span style="color: #334155">for the future through</span>
                            <span class="text-2xl md:text-3xl" style="line-height: 1.1; color: #f59e1a">
                                <span v-for="(word, i) in ' wise financial choices'.split(' ')" :key="'e' + i" style="display: inline-block; margin-right: 0.15em; color: #f59e1a">{{ word }}</span>
                            </span>
                            <span style="color: #334155">.</span>
                        </i>
                    </div>
                </div>
                <div class="pt-16 md:pt-0 hidden md:block">
                    <img src="@/assets/flat/10173261_8486.svg" alt="SVG file" class="w-full" />
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 pb-12 mt-12">
            <!-- <h2 class="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-900">Financial Preparedness Principles</h2> -->
            <div class="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                <!-- Card 1 -->
                <div class="flex-1 bg-white rounded-2xl shadow-md p-8 border-t-4 border-blue-400 hover:shadow-xl transition-shadow duration-200">
                    <h3 class="text-xl font-semibold text-blue-700 mb-4 flex items-center" style="font-family: 'Noto Sans Deseret', sans-serif; font-weight: 500">
                        <svg class="w-12 h-12 mr-4 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M12 3v18M3 12h18" stroke-linecap="round" />
                        </svg>
                        Importance of Financial Preparedness
                    </h3>
                    <ul class="text-gray-700 space-y-4 mt-8">
                        <li>
                            <span class="font-bold">Spiritual and Temporal Well-being</span>
                            <br />
                            Financial preparedness enables individuals and families to face challenges with greater resilience and security.
                        </li>
                        <li>
                            <span class="font-bold">Self-Reliance</span>
                            <br />
                            Promotes self-reliance, allowing individuals to provide for themselves and their families.
                        </li>
                        <li>
                            <span class="font-bold">Blessings from God</span>
                            <br />
                            Following wise financial principles, including paying tithes and offerings, invites blessings and provision from God.
                        </li>
                    </ul>
                </div>
                <!-- Card 2 -->
                <div class="flex-1 bg-white rounded-2xl shadow-md p-8 border-t-4 border-green-400 hover:shadow-xl transition-shadow duration-200">
                    <h3 class="text-xl font-semibold text-green-700 mb-4 flex items-center" style="font-family: 'Noto Sans Deseret', sans-serif; font-weight: 500">
                        <svg class="w-14 h-14 mr-4 text-green-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Key Principles of Financial Preparedness
                    </h3>
                    <ul class="text-gray-700 space-y-6 mt-8">
                        <li>
                            <span class="font-bold">Avoiding Debt</span> <br />
                            Strongly discourage excessive debt, as it can lead to financial hardship.
                        </li>
                        <li>
                            <span class="font-bold">Living Within Means</span> <br />
                            Spend less than you earn to maintain control over finances.
                        </li>
                        <li>
                            <span class="font-bold">Saving for the Future</span> <br />
                            Build financial reserves for unforeseen circumstances and future needs.
                        </li>
                        <li>
                            <span class="font-bold">Using a Budget</span> <br />
                            Track expenses and allocate resources effectively.
                        </li>
                        <li><span class="font-bold">Tithing and Offerings</span> Paying a tithe (10% of income) is a core principle and invites blessings.</li>
                    </ul>
                </div>
                <!-- Card 3 -->
                <div class="flex-1 bg-white rounded-2xl shadow-md p-8 border-t-4 border-yellow-400 hover:shadow-xl transition-shadow duration-200">
                    <h3 class="text-xl font-semibold text-yellow-700 mb-4 flex items-center" style="font-family: 'Noto Sans Deseret', sans-serif; font-weight: 500">
                        <svg class="w-14 h-14 mr-4 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M12 8v4l3 3" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                        Practical Tips for Financial Preparedness
                    </h3>
                    <ul class="text-gray-700 space-y-4 mt-8">
                        <li>
                            <span class="font-bold">Debt-Elimination Calendar</span><br />
                            Track and manage debt, focusing on high-interest debts first.
                        </li>
                        <li>
                            <span class="font-bold">Insurance</span><br />
                            Maintain adequate insurance to protect against major financial setbacks.
                        </li>
                        <li>
                            <span class="font-bold">Emergency Fund</span><br />
                            Establish an emergency fund for unforeseen expenses and challenges.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="pt-16 md:pt-0 block md:hidden">
            <img src="@/assets/flat/10173261_8486.svg" alt="SVG file" class="w-full" />
        </div>
    </div>
</template>
