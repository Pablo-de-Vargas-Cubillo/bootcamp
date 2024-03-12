const main$$ = document.querySelector(".main");

const getCharacters = () => {
  const characters = {
    status: 200,
    message: "OK",
    data: {
      characters: [
        {
          _id: "62a751dca45299c30fd96a33",
          id: 4,
          name: "Darth Vader",
          origin: "Tatooine",
          role: "Sith Lord",
          image:
            "https://lh3.googleusercontent.com/e3OX9bzgpkbLBZ3bev8RRZc5I_S1T6z00I5CgEvw_4EKZBgEsISJLcpYM7s--Dt3HmJvUjv7Bla4uBLKwMaDei_GfcX0uRhIaBfz8bQL23z-fp3vFGdR5p8nNGYcPrFzmq-WIOciUpbGb-cw8Qe22eR0As6EcwBzLbphZoHuO6eRyancSinjValqmnvujZtVR1ebHTcFKdmL20x69-cfAQmn4o3IB57hpRMTsWQwiDRqk6XSb_iI0RUFC3G9btAHMYwUg7Bpm0D-O2W7urHgUHM3tzV3pozPgLQnUUVP9nbFNoroolbqBPQzzjT1TGscnaYiETUjcWPerRF50pW3rcm0vu1-_oxkW4i5RKaOf2YSmkL0lLQgg70wR3ItAcP2YaMP9WoLYp1jZv9sYfky_jX1ubvJ3sThiSNVucmSzEGM5Pe0qPEDdCO81lWe4e004VD559G-x3c7l9mLikEmCEui8CdFHMZphWfLpYe8I401NwDcd8mw5nnFnEf8CF9ANRR0dzzduDUyUdCQkLC7K0dOe6soDgB7YotjfczAu1jJUpId5_O-XF2I_wChytyeiAmIDzyDt5W4Kck9mP6t8vHik8_mR3PwrQbK4SMQjpMh2-NUoB_dJ77R_8o8tTZW2eBe-PzUSp7MD5qO_lLa9UH3B3AWQ5wU2ZATCNvMZVx7RI_URYIpoRefhg8N6ZX0EVtty6U95XMMXeFieX-W1QjPyWjKYJVyNe_diVPvKqts-aGSTgyvRYZYOEwGn9JwzDZdjx9Hxlc8dYxY7mN_v4Js-oraMGP8wOA=w228-h321-no?authuser=0",
          portrait:
            "https://lh3.googleusercontent.com/m1WES77vLpSCbcWy281BTEes3HM2fduiZP4-vRnq4Ie9LkRJoPBj8UD3hj8nwDvMt3nw5BSwcTw_nb3mP29qlgPzXwZBZH7lhEVxvVCahXMhjvKQHT-PFdTHZ0Qk6-4HVcTy4KT7l7g-YVA8KxQgf2XYOuC_Z2nhzo3VMgMI4eETp_m2fAIXKbI7LalS9TqnBcjQYiEFCIm5iY0aH1TiLJexdVlbhEs8DGhpwo6zDfIuXbaHRmaA1lcI9hFPu06WEgfbNeef8DPSnGEHyHNWajLJ6XRLeaqhrXou-YV4TkNRFTzCh7jm3LRr4qB6Rm5dczHe5i3iAAwj40bc5YsYzFhSW5NnaWKFmrC9kjk6aUN5PSM4_Xz1PEjlf-4wCxQIYo55KeCk9vs7dHp6ERSKgmE4-HLLMQz6DW8ohGOX_2Z1HxXcq2z3WnxyqqWHbmS8rLXr51Lvd4FZeC422jMtHRwnKD_6eid_GkLwXCj9tQfEe8xlzLxW-ni6niqQVN2hR7US2lk_qFpaNl7g1sgJZYoW4dpqDi5IYLb0XSZAoh2ee0ipf05YkAvBVwIt-WJpynFFBXigfSWw4hTET-GSqKK0qy9UHnfMTL5nTUAeHVva-kGjhC4WFRMFTYJyQ2w4Nzuyzwcy5GdwPcCjK3RUl6-odz-BMGk1LfWMYMH30-6VT0EoRtO5CgiiKtsRaMlRcK7ATqJUkxI32OkGuhnRuzM3tfDclLjJCyCRBX3-3U5dreJkvVr_xm47FtnGFWncmiJJGcpUWx8F95b-YS5m0Oh2o0WrW04h54Q=w251-h315-no?authuser=0",
          description:
            "Anakin Skywalker was a legendary Force-sensitive human male who was a Jedi Knight of the Galactic Republic and the prophesied Chosen One of the Jedi Order, destined to bring balance to the Force. Also known as 'Ani' during his childhood, Skywalker earned the moniker 'Hero With No Fear' from his accomplishments in the Clone Wars. His alter ego, Darth Vader, the Dark Lord of the Sith, was created when Skywalker turned to the dark side of the Force, pledging his allegiance to the Sith Lord Darth Sidious at the end of the Republic Era.",
          __v: 0,
          createdAt: "2022-06-13T15:03:56.129Z",
          updatedAt: "2022-06-13T15:03:56.129Z",
        },
        {
          _id: "62a751dca45299c30fd96a3d",
          id: 14,
          name: "Padmé Amidala",
          origin: "Naboo",
          role: "Queen",
          image:
            "https://lh3.googleusercontent.com/N11QQ09c5aUYsZucniT7xvK3tNSNzazYd4BUGFetA1npvbXL2lnsxpf0BaeZtcFZs00cbTV-5nYZyDcrLhwn1RZC4XlZChSPfg55m7Y7so4NIGlhxkITW4mOoV83eUNa-MuBqsrneGVQ22wPdsvj_pHp0gJjk283hKlr9cOU-TiRUO0zcTBXRFHU86e6fSGTbgePD-syCjnS0unoq0RjeBHT0CcbWq_BkQ8IVIeyKrGWto0LDYQVAyLW7Wqpa4NsY1cHBkMDS-4uYJyUFrkbfiO1vPXW1ZxeNwZqg-wo7SYbLdiD681RA_nCzescri1snbwvGn8YAmZ91ra6OhML6uvnZv2_7PS0_horoRV2wptWvyabhffKR2EZP8I5U4zMSEXmUHRjYzmFthmFYpvSAfGDH9hwa6DhkqrnP0LUQ2A3YYlQvngS_QwShHEtDZUEAZe61SaUwH26po9MoClMXEfX7bJ81-mD5wBQcGCKpRB54E6rDMEf50bpL7IjoUq7SgK9JTdiL2faL-axUgbLnTwNVATLBuDT2DcJk_cPI3oPJtah4Hx2GA6AgoXFWhFQuLK2yzgcVX81bGlW5FeGluBimhzC6NSd2dL0MDgFF2lXG-MssXeaQoGBdQbGtxnrQZZhdBJlOOXkcZU6kGIyLMGZM16ij7YS1Bs9Fj2SsFmy2tNTiQO632Sxv-Uf_uxL1U6Ftkk5YotKTsgNycdWfBdwQu3iXszSiVx_ST8ZbIDKcaiChfNfEwNpqz1PkHxFRyDVU9di2miEEy041fYLaPwCHGcEv6-grWc=w245-h346-no?authuser=0",
          portrait:
            "https://lh3.googleusercontent.com/PW1ekUd8I4twHytMm4rrI64T9KoU6LoHiY7mG63fJGydjQDuUGU1ueAtIfPa0VITZuYUZWHS5PfPmO78UU0J5NpAL7_9trbd6y3xQa9yTi76QLVyXZAGSMzk1Wb95j4MsTncVY2I3L74IDedbyIrFrtkOlYMF7dfPvlc9pTURI-GuLLcMRaYwR_9vAo4ptvpxfFaS_xuO0mrZPGLr7iri_GNlOnm_Zj87nj0KFz-D5RBEtDoz8KIgA-xZnU2FzG_D984lhKNN87cVIthlib7Wp96GB_izUweUnymvML-ROVOduSXmVChJ-xgM--HjVGtnAg8aSs4GcL5g_s3aBAr2NGhP-EFwJ4J7CHGbQ0C8fC1JXzKFm33R7OVICkzUjoxLSTfc9BCtvqEbNs113vtJW5tEhb0e43UKAFdY_ZMgVdVvCQfBGH9ukVDKuXYR3kqXS-WHJ8Y2_HcoztEEnNiQNoGTP8D5whSqeQRjsT4rEzscsoogilTpLfMPvYC03qiJMPkF37uR_jr8ZfYKXH0yioGsLOs-dTGrOEMyztLMNYHk6jJX7eJaBf0V1A5bi3SWpXu2ohTbswcI7VWhVl3-DJvWJuAEJiTea501BvRsZIacUYcoisUIJDAyKCgIKEgJkREISbSMKa1fv_kdProK-JjCH6KVY2d3Cw1vDJW6WzudHUL_cfRZUwjALn_buv4rzikFSXnv5T5KoLhXlzA8awh2mvwoSfc-wuHL8wO4Z70pbf23dgf4k_WCfySeQBVvazD8QcDxWQ-p9-_yRR4QbK-7h1HWO_YVFM=w250-h318-no?authuser=0",
          description:
            "Padmé Amidala Naberrie was a human female senator who represented the people of Naboo during the final years of the Galactic Republic. Prior to her career in the Galactic Senate, Amidala was the elected ruler of the Royal House of Naboo. A political idealist, she advocated for the preservation of democracy as well as a peaceful resolution to the Clone Wars. However, her secret marriage to the Jedi Knight Anakin Skywalker would have a lasting effect on the future of the galaxy for decades to come.",
          __v: 0,
          createdAt: "2022-06-13T15:03:56.130Z",
          updatedAt: "2022-06-13T15:03:56.130Z",
        },
        {
          _id: "62a751dca45299c30fd96a36",
          id: 7,
          name: "Qui-Gon Jinn",
          origin: "Coruscant",
          role: "Jedi Master",
          image:
            "https://lh3.googleusercontent.com/P8W5YkipzvE02CjKpxql-jG3NJjQxunGYiIHLbptvDSyqy_ioAdsaywEbkSRjYWu8jKVcdSBLusH5VSL4jI_3AnU0mG62J1Rhj-RHHFyVCdysFZLW0PDy65oZM5gswsLo1K13Q23LdZSgZFMKg6YwbWHAWREvZEWR6Sx8TtFbuty6M_5TwDeXTyNuQowf0nxz7CwX03rU_mY2l1bgdHGUeJej1D-0nkqA2bs9hpJYsKmsBwQbw4ahhrzS8gsXtFu5Rxp2E1iFx0c-wjHQcs9-yryi28Neb7pWA3vRWynJn9tvwjPr-uvAxKHoWO_VqvBY-qiSs6bVtaNFePFk2PsWPwlmh7XXjI5jO0fBrOqhrahvrEtIYQXyV4C3yhJwa7qMInNfrPll9LZ-WhDEDC604fVFY1knjJ8r-biqzuT6aMvLfYZT5z9hphB3-YmWRvgqC5nPZwH2H9CohcTTlHRZvGRCs5Jlr27LzMrB34li7HvYnOBVsduBECQicm8oKzMEduZ5nwYNCWHOClt5tiAOJJHQeQdx1ZH0h1yhxU1a6emGELTUN1CGpiTSJWS2jY_4ef4RkV9flO3lZ6L5pQUtGymN8qQkIsgIpUFM6Wyi2tufYLaHmQ-AUXPqeLNxArsyrOnP23lEw0h05DDQP0ENvbNymB7DpQp7xpayxJ7nL444mcHYxDPGFPOJK_IDmMZrSIOUBn4EpaA0dRP7P0mlFOQjJutwJr-u5K1ZHK-QwsSjgjouV6T_Ek0ne8XIJvdnPZGVEb8BGb_DxV3Ice4KOQ88RRqQiHu9rY=w273-h346-no?authuser=0",
          portrait:
            "https://lh3.googleusercontent.com/dew4L_NsvLojmmWqzSiVbCeSRYlpv1h1KfMsfNJOuh9DAtUK5IRkPNsJcEFT6THHpqHAKIm28q3V7PxA7BH0QmWz_OrY-M3vz1bHYYrhNSvrQBruCht3Hv1kLgJr5e0Ex8R5Tu8tjg2vlxUfw92K4ufA3IvKA3WIKVeF3o63ebDVBnd1Igq3NBIyYE-r-uvE6D7y7-rL7jnO1vJ7ksdCaptxClZ1sg62-G0WSSlMK5QYDCqIBXZ7EjWoIBAltZem0kOj1uEKJBZXKi-8BjGyc3pia_CD8n2wYjURguhNucz9hFkTfNSS1y6XawYnNUtmmkT31yMCCq8lngWiRIzH2B2dId10nNfub3Oq-z3BBx5CStcJrtTEyV956G-8FPTm7pzd_i9nm08Q5WZJCE4rIXDETkud3V1rVKeLxwtA9lfasfLiKwTnIcKPE-ys31XthLwQAcZcAdGLmDlVqlSiNh0BdnR-fdpigKaB7B-yNXFKoy8UqTxYt90zh_XLWSWnPGuzHHQxBZ9HOMIZru0pfBZN6D6Bk4JJTxU4x9z_Ytt_UTDSD3PLwg-lTYaCKp5vup1nmha9kT9Fg7TDdIZ7eoQkckVcqQi3VVFo0RZSR9Wbhyo0qJvUvX3UgXpYalA4Fd7yHQxmVEQm99NHuLFV-4NSgGoy44RAZU33lHVEmyuVs-8VPfmjABprfW3bHGWrSE9SS3OH0hXced1TqWgVOb6anYtVD2NOvZIVNoR7oiFelKFMAR8VyKRof7CVGhGBGXe4M0S_UgXihJ7AYlWdK0wb8ZIlUjMy86s=w381-h362-no?authuser=0",
          description:
            "Qui-Gon Jinn, a Force-sensitive human male, was a venerable if maverick Jedi Master who lived during the last years of the Republic Era. He was a wise and well-respected member of the Jedi Order, and was offered a seat on the Jedi Council, but chose to reject and follow his own path. Adhering to a philosophy centered around the Living Force, Jinn strove to follow the will of the Force even when his actions conflicted with the wishes of the High Council. After encountering Anakin Skywalker, Jinn brought him to the Jedi Temple on Coruscant, convinced he had found the Chosen One. His dying wish was for Skywalker to become a Jedi and ultimately restore balance to the Force.",
          __v: 0,
          createdAt: "2022-06-13T15:03:56.130Z",
          updatedAt: "2022-06-13T15:03:56.130Z",
        },
        {
          _id: "62a751dca45299c30fd96a3b",
          id: 12,
          name: "R2-D2",
          origin: "Naboo",
          role: "Astromech Droid",
          image:
            "https://lh3.googleusercontent.com/cRFp_DZxQeoIJcqedEVF11lrjrspO2m_tNKfHCdKtBH69QVdWDQldHtHuzYdeqWULWf9m3LfgfWDTavsYvqWlFGDNEVkjrx4mkO01MCULkAHeq7n19BbR90nJhsGUw8LjEphqYli6sL4CRNJ6UhQdpMwBPQkHtK3rkQejhxQqx9CZk8aKNaTNzQUxWLDClPvthjYFUA66RFKTfEkJ7Ap1knQ25Hh16iydLhSOvVKNGPkM-BsMPk2lGg9G4TQtsRGDIs88vKOp8KSw34AOyMLHcj4Y48M6MZxIA_0kMhBagKmppJ3dBpna-r58ZwtmvpAO9xK3qFek4ctZaEXiBok5l8GyHWD_47uth2IyhmdEB0VwB3j7T0D0HLDUX4JijR161BzqBDygvWj4u-Wqp_Z85Xz-lk6A-IRp31YJTKGQCYK118M8cyY8thmG6aJdRJYwb1Qe3e9wtkDgMXCafM2hziJEX38mX62mtoOtlGrp24SF8uzmaq46668-OExuvFmatXWIvtyq-k_bVdGgY0gE11oRygZDUdW1SaSNEzqOz2B1lxzu-_raDlRmGPGhXLrryTwqz9QfJnGy8u1ZIFZZKDK0ZePl9AQO8-k6mg_P9BrJj4p2CHRn69GP1_CFO4dIJZLgX04KclcHpGnTpvwqxjJUv0oaVSo3RCi4P2Dey1WpjPUcfxjgcN4a_X_6v9FnNJg4vioGR87I4E_Xw38kdX1BB_7yi6yuQet9u1F0dLsVYqeyDyJ1t6NUlV1Z7luOZdmqobIBN_NNjMUYLw8PQYWwKGJmQieJuE=w216-h306-no?authuser=0",
          portrait:
            "https://lh3.googleusercontent.com/FIfG47icn5Tf8dFHk3vTTTRRONOMANXsI6OqVDrS52klaB3l0_TGieE0lBKBx6G2FPBr9Qu3LZJYP3Jo5APfHfmw9Rpe2XgQ9AUYcDdRrHtUwRqGAwDoFjBmndHUzJ9cKAPkqiJObUNVsd78XAxDMBPUeKPDmybLHRHlfUGvid6oJierFXPr_iT1tjaN_dMKfX_XYnaiz_AJS1KjT8wtXJb3Ryxb-trVGar3Pf9Y-nZZVDgyxgbYAYfC6zDdxvasr2U6Rpf-wn4C-6yHl9eOlDduddyTWfb2a5jWerUsfgGGs1SZMwLZVAhWzq5H__e36BZ2R_xm8V9oHCu1NUR-W-LUbnmn_NkECiQCnBQxbkM2PwYiOqDwrBGiH6ZlUwqRynoYa5y8aSQiXZFTolHaJt--xEJKtLkG6MmH14dPSmQH9XwNP1Xqpa302U9cCkVVME3Fsxl_q68RgPtggEYbNZD-WrkenPkOU1l5AlncuNqq51mz5LP9luK3tGbXIKNOisrKKgaQRCZEttHXBMIizkoHyUDbnpVKmjUG6nOmu8MPTDa9HF0eGlvjA-dDYxhoBVsDrdzqZip4FvpfzFxVDrYjau5DBEbGmQ9PlwtA7JPmPVKZzMPYCX8fO47GL2xqkFhXlpikIBQJVo6i4ZH9cWEFdh9Zx5Ambf8aSkV5RMxFtrWvhaRcrqyHPB0HFEOdlAbFleSUJyV2ZE64bEAOuI0V3WP0sfZ0XrF_CHF-5rFgc5s7Ny6vaLifTIBOEl3j2C9ikuGHVhvjrXNu46wsC5HhwDpBzHQaRa8=w281-h278-no?authuser=0",
          description:
            "R2-D2, pronounced Artoo-Detoo and often referred to as R2 (Artoo), was an R2-series astromech droid manufactured by Industrial Automaton with masculine programming. A smart, spunky droid who would serve a multitude of masters over his lifetime, R2-D2 was never given a full memory wipe nor did he ever receive new programming, with these factors resulting in an adventurous and independent attitude. Often finding himself in pivotal moments in galactic history, his bravery and ingenuity saved the galaxy on numerous occasions.",
          __v: 0,
          createdAt: "2022-06-13T15:03:56.130Z",
          updatedAt: "2022-06-13T15:03:56.130Z",
        },
        {
          _id: "62a751dca45299c30fd96a42",
          id: 19,
          name: "BB-8",
          origin: "Yavin IV",
          role: "Astromechanic Droid",
          image:
            "https://lh3.googleusercontent.com/gc1VLTR0zKHgmlJNADsm8wVtLza8vQTpXceQ8TauaBDiCXQIYB8WM0xpa6Q9QDmmmzSrzdB8D5WBjuz7d7UE-ujtl2X1Z_AeR8O1EkqxAa3YXCoIv7OdHDSmlrG3S5qrO1HuB0njp4IeQDkaqnD1wmxwVInvIsjCuh9X0kH3pl_O43aUKL6mBHiYtZxRa90skZCyb-Rmb956ha4d8mzl10_JycaXHbT6GiTLzqaEJPUZ3f3IXLrxc5b31XQIpgeyGwGxlwEf_M1_J8JaOtjVwbKg5TPeL9QzEWtS0-1COy_iEyMLikcKeujrwc5Dv61J6qnxkGoNTM-O6sdY-RN1ozavGdEhM6uRm_MnDSX0lCXcq7-D4S1iHAFrpRaUokSOKSkzHPdg6Z76beW6gzCQVuO-oeo5yKJRocNuDKCUY4f5f4KOBKJvQdNp1EOxRAXm2nukcbs-6tbPc-lru1t-J4zF8z0QSbmZVgJVTehHcXEVAC-GwfgdFjxpXTrgrdszm74AA8d0W96zLJWX9lXunVuTZ2EzSHVfRyV-1gMRexmWwTpMoYaSkuMW9PqaqbKkumyyl1BYzk9ii_bktAREqLtReKjTfQ1qDccxKmLnMgS25Xi4cgWoE3ZHzOA7Lqx71D9tetDhsTu9nJa_ZpNy91AymC3mzIVF-ob5o1LIVYpLp1xOqrVOdEX1wxQW03dFjkdes5qSp5ABgo6-L5Y1zo1flt9UFok94Q6zUUl90UXR7p79yZZ0pnNd-cnx67YzF94rYN-tJGZCVTQn5T0lXcFslzsp15QmcKU=w260-h346-no?authuser=0",
          portrait:
            "https://lh3.googleusercontent.com/wW7rCGrv10olAIPN7c84qdj8g8tNoCmcbWupKCL-3PxSGbo1DjuCkwBwOq8LFSCJKDEfGGmjB3QBSYXfwV-M8-E8-P2VCCVDxWndb5HDlDr-q9VU5QwlWrRrup45DVgDlg9nMDQABlwzKWU9jhDOhSWKN-YBm8_XwtqN7z35Yoy7aqMqh3EmWNTR-5trAVhDIAYU76DLIaNHW2KcCFmDjgCKEc9SuheEq-mcXsmlw6zBxcQmwyE3aQFyWsqKiGYwmBlMhyP8B5YACtLP0Y1zAhieJUspY6t1UaK77RISJAUHvev4YARgkEEKFMCgUEHKU0JPkivAyhDdOArFq9fx4NpHzS6dVHQ3ME-bdn986s6wmnc9M0N668u3Qo5mmxQS_54KryyI7HKl5ThRWcejwiS-22FqqcjzUBdteRK5Z0PLQQ6T7EH7eMMwnkwqW21le4TLoV7FjB4VwlH_Ao5GqcO7_Vn9vE76Ht8_z5x1gNmy8p_M3AvfWjm_Wsw2SPppDtChKC5_WAIXsEtJo9P2DoKm7odeeRyYAF31DwZi3q9TJnBe8Qsw2NuDXJAYcyp62s4CBT3QVizZkWkUnPrE4Jg1DbYXZ_myKni-fulC_mUbpmnDbzskilmkm5ENVgxivNfbinFktooDZDF2Bng9a2UFS5SEVftwBxU0zHS1NYL795WIWoW8BNk8W7SXYAmcfBKEfchTqhoIqKvozuGN-bPBsnu3_zDe4iDUZ-q79fVGMAnGPvS862q2LxIN0OF1yjm2gl2Ijp3qwWpV6mcoU8eAFi2nofDSuNU=w375-h361-no?authuser=0",
          description:
            "BB-8, sometimes spelled and pronounced Beebee-Ate and nicknamed BB, was a BB-series astromech droid who operated approximately thirty years after the Battle of Endor. He had a dome head, similar to that of R2 series astromech droids, with the bulk of his body made up of a ball on which the droid's head rolled. BB-8 was mostly white, with some silver and orange on his body, as well as a black photoreceptor. The droid belonged to Resistance pilot Poe Dameron, whom he accompanied during his flights on his T-70 X-wing starfighter.",
          __v: 0,
          createdAt: "2022-06-13T15:03:56.131Z",
          updatedAt: "2022-06-13T15:03:56.131Z",
        },
        {
          _id: "62a751dca45299c30fd96a37",
          id: 8,
          name: "Darth Sidious",
          origin: "Coruscant",
          role: "Sith Lord",
          image:
            "https://lh3.googleusercontent.com/R5fO2O3AViQyzUt0n6x0FMnSeCHEbarc_2J1J09RBpvkcf_bwbNJeQ7VKXLrG9CKpWv_j6tIewhJWPlkeA4hL4K7-cQLk3IpCwAtj1WBCNxo6FYmwRlZcyLSvvz7yTZavT61YzC12r7WlE24OkTrSNKcFEOzBC3ZrmOOLAQGKdYlh7eb3db_TVjUY0yi0Ockee2ushclu7ZzdMEJSx1Uo9cPdZfD1uOg-G1DWApC4EIWbowIbQzmKlbvbJoz1iosXnIWV0MX62leIszT3S1282WFiaPyQI72CH97BIDzU0aEf4EGhS3AVb8mzwNHLBWGn1YpzGwb3Oqu7nWF4CTPVD85DqaoNaRIvKuGNORCYay2EUY5RNKTCIJQI3RXeyGfdEeD9ZPpsIc3lwOUzb0W56X2f4dDy732SdfOaa8yjl37yY6SF2NETT4qOgE6fe36BWVEs_C8OvrZt2P4gyljTByXYiZE90aeXY_2IURJwKtac3JqCFaONjradBmaJogd0qMBnCyOen-uHA6UlLK3CtdQYYHYYHRjYlb44oXt3JpDwQuCQut26Yz5Qe99S8yKKi6P7EmxSYO0HThGJxfIv6ZIlYWcZUT_eWvTkehmrrRQE2lLcnlRKcdxrfh1ZQoU1v7GZ9EpW0accBy8NwUVIYg412GUR75FXpzPPk4X3BvUBoAnovTH74rKq_lAmoA5gLEjFStu4hxYNONEPOM-3gmiB1zRPLNyH8MY8e-pPkJWk4urPNSmDZMIcKyU18Unqz5kPPNjLRh9eOQM6JpLX8561akxvoKkYdc=w245-h346-no?authuser=0",
          portrait:
            "https://lh3.googleusercontent.com/Y25eQx9rYQYzCjTSx75kXCmqz3IWvfhXm41-5a4-lIvWKy0Zg2q1D1fbgtMU55i6TMcG13MgWC7puNTUMXu0zEKKKfeAKx0k_8-MwOw0z5n88iN8_SKxjqdMUme-7ANkjPzCzdrJQM14f1RAaVbbZuDWW3QaGULuAd420vFcQPZnyzoEQT2Z1KM_F1Px9jXzE9yLw3czbiybPPOClf0L2uUOB8HoMPhWWHH6bJ-Og_8OCqfm_GA0DXAU1UdrY9yfBpayJMi-Cxvf6Eq13WK3PVKfIn5UsUFzr3qvwJbSijUt4L9lmOXU5cfW9mCczIt2J3pvxLGdAL2OmuexhnSD5O9-acfW9DBqaJelrY-vcRAxcN8tBX2ymZR9f_Qy8gt1d0pOdpNpAmrBwCv96AGs1mhkLdBJQJhNllTx_H9bpBsguVr25SbzMC6TRNPyJU0yzvt4seqDuZM42xIidCImvEhdiBLtD1VoQAPJ-mSvUruZGi4627_QnKdcv7S0tucw9YNm4Sp4axRJopKcTz28XRzOfHtFsfFxswy1TV3aUcyv3dTY4xKjvBZIIrkdV6sg2MKWH1_1XjMTj3ZQA975V3Jsi3bI-cDS1eC1x7BJH_tUnKwYNtBx6lfIAd__0q_9uENQLkohdXDsbxMVuGST2cXtkwkPHYlLPM5sG2307pMRNXoMo-AY6ECThsXNJzQkRE6wSsnchwEnvQzPxfoHFyZPACRd6aXFgLI_7h3ymhs3laCtxU8ZzFYZhvqG0YNVTR6DM8WxNdE00GDeVuQP1bpb55jq8FzV8D0=w346-h365-no?authuser=0",
          description:
            "Darth Sidious, born Sheev Palpatine and also known simply as the Emperor, was a human male Dark Lord of the Sith and Emperor of the Galactic Empire, ruling from 19 BBY to 4 ABY. Rising to power in the Galactic Senate as the senator of Naboo, the secretive Sith Lord cultivated two identities, Sidious and Palpatine, using both to further his political career and deceive his way into accomplishing his goal. He orchestrated the fall of the Galactic Republic and the Jedi Order through the Clone Wars, and then established his reign over the galaxy which lasted until his death at the Battle of Endor. However, the dark side of the Force gave rise to powers which allowed the Emperor to return from the grave.",
          __v: 0,
          createdAt: "2022-06-13T15:03:56.130Z",
          updatedAt: "2022-06-13T15:03:56.130Z",
        },
        {
          _id: "62a751dca45299c30fd96a3a",
          id: 11,
          name: "Finn",
          origin: "Unknown",
          role: "Resistance Commander",
          image:
            "https://lh3.googleusercontent.com/NxWWRDS5YAOq6b7iXM_k9JaxBaSFwALMDz4wHprX1Jw0Kxpc8H4IlLuxyqNobVe0dxwbmR8R7G81BTvi3GdZdX-fqgzfKo-XdvaQ1wSfXHt3yiJkoLfNW8cJB2fyntvjjvysuiGZ2eKSQcKSBzRH4mcyt0Cb6aZVMmXZdIu7tL1vu9MGwauFDBBPiabf9YzmKa7wud_xN73t5amy3h4OEBS7d_vm-wVkDA24h2um9et4JoL3J0Cpdpdt7NRBvy4vh676ShByNb9a6s3RrvQAaaWRteYP_QC4CUD2JrewQHPwBW66nFX8f1--eZtOx1odyDV70Ztn_TvG7nd-gQgDBsQKSdUjV_f4tLSGYkRQ929Y61VLAtfbV3LJEcsBxFLmqfUqFK_fyN61dK7hyFX7KnJHAThXEEdlhllU31Sc2tpgQLGnlWCRMRbq8ps_CCcjfCj_p1AooYkCgOpUO3nd7IvcredqJDn0KGFnnwsyv_g-Vqtsjh0MIjU9wKitgH_1FE9Ted7nK-dkeVO4ncH6vD_Cz43__5PoFuj-lFN2zvw45D0cqpizyHUeHMiRm_rRzWsPsQN472Phklu4kU3jSenmN8GPxRENhzwd62aOltvyZHa2ZvUqSD8MduKSIYr3hmLaKQOSfkXUpZjwR223iSzUzzm9bIBF6rPkc84W_gO23sX-2IFf0hJSENXwZGhoHnEwE9G8s7bvroQLy8Df8B4XkauwFAYupZNBrz6vyWVnJ3hCnqxiy9RSaYnkxcdadGj1LhUdfsHzC9zyBuyCjUJekxXTrlBK1p0=w532-h709-no?authuser=0",
          portrait:
            "https://lh3.googleusercontent.com/mQiRm59QwRekfm108lijgR9ha0yExbc9Hv5KxAVPwnD3z9W5i9XjgcsBxJr6zZHRR3x0OU0SxWkdDNY8zpuARGM4fxTEXsQnwwON3ZVsmkIc4KMdhliwrxOR1xXMJ-ITNoEIGR2XqvUggGnjfmRDnEKjg1KjDHb8fBhKhHGb-D1apjviEDJFNTou4xcmOCWp6qMWojaaMS1M1JoP8W1AHxmRzMksgU0vPJb6FMNEpKuBDw6DjRZIBmq5LEemzOJ-Pa6FsWfBJN3jFmQq9JJiKSUJFJIh7yYkPALcbkyBab0I0-RZ_6D8zkP41tTMvw8hur-QAB8Ci6gQEw5IhCeAGrrzbqi17noT88IKRIozzaqdthHdyeROSzfqfkFhBB-UdzbTYsn7xfwtZ5t9Sf4WO_spkqLZ2Y-hLxsBBwVpKZnq57hdophj0JczSr4K9FMCRlk5ZPAK8pysmPTXXn0A-F_MKZgticeoN3vik4JmTkcFNK_ZFDmwbsdHYLtURPVoEI-OyVaJpRAxrAYzrhle37HiFbuwNtRg2B_3FAcRLGrioOESN16_OiQJ2BMHbUc_xvXWvu0tYmAPpkwVG-U9Xkk8RrfGVnqWXnI1IrJovH3pYDUBz11f788NTgXncmysnhBU__nbJKx_T37IVOgTlxtiAsPz-UCCgevow3_c-EzKtuHmQE2N-QK1LhX7A4_TiDGnoDS3vYilP-IAgCVO7PylxtBKYox5ZokmcL2b4g46qcWEuGHtz2zfzHCyhWLa3xiVfkSYD042YFnkIroLTu-WwDo87lX2AnY=w381-h418-no?authuser=0",
          description:
            "Finn, formerly designated FN-2187 ('Eight-Seven'), was a Force-sensitive human male stormtrooper who served the First Order until his desertion and subsequent defection to the Resistance during the First Order-Resistance War. Though trained since birth to be a loyal and obedient soldier, FN-2187's conscience conflicted with the methods of the First Order. For a time he was unwilling to support the Resistance, hoping to escape the galactic conflict instead of fighting for a cause he believed was doomed to fail. As the galaxy became consumed by war, the renegade trooper was ultimately forced to decide where his true loyalties lay.",
          __v: 0,
          createdAt: "2022-06-13T15:03:56.130Z",
          updatedAt: "2022-06-13T15:03:56.130Z",
        },
        {
          _id: "62a751dca45299c30fd96a3f",
          id: 16,
          name: "Darth Maul",
          origin: "Dathomir",
          role: "Sith",
          image:
            "https://lh3.googleusercontent.com/PuGheloHx8Kz4bfWmhHlpU8z7Pf3Qwp60Q3WJlthIYYPT3yViiNiv_9n5BY5MsGzOKMQDhjB6kgEjzsu9pLDTZNG8co7McAwlJ4gNyt-4RTK4BKShJD44ALP1mHMAby2xOpW3TFq_JJkdblKFS6PT2HAsz2SYvdyz-ZSY-qIpnGG20tW4NFeNsDoBCSidgeQ9YzWsvu7XklZXAiH-vZJgy1tZ_0U4T4pDEHbHCfpLIc5WVAR6VlzWAdemdQnb3WidVaEDuBb-rOJIhLDl_tanui8BGsSgYntUoEchNukbykl5sV06vgLF7YzYwpM4UAMsFBy4RP-qzf0L0CPw7W85i6gY5KhT7wlJEdtlCsHoE7pZow8PLDOYXF-qMyUv58i3Qx9hBJp8Nl9bnsH4lS-Ne6VYq22_tiJDG6RYXq7gd5lSuTbVXPlLrCdqfRrC6oqQe6TwdFxn8opyw0LvZDWW297Hyfn7Bajvuqpl-JDOG7u2E0J4pERbPKilob7GfxSBlgpKd24-h7_SrFdYja2gaESj-ERvgesmYtgVgXCg4z51TzMxMoU-sLSs4yrH2QZLnb3XmaBWNz5b9DHdnWQ79L-zQSxJKQwiEUhKQ4ixjx1HyTCU4rc9TlXh1MmBb4xEEplI2qdZE4z4psWL0s4xtJgIwBYvlbHrjPguV-LYTqgO4KRPXeLJjo2qZQTobSx3V8NhStx-D0s5B3c8yucLjK4OG9XzfqMVeEPFi_ols3xTWhTVx7u1B_5W7S4Sb46HBp-TD6MmwtUmpY-u7x80aisy4tXPY_BaBY=w221-h332-no?authuser=0",
          portrait:
            "https://lh3.googleusercontent.com/x8ZPAwmF8r_Vv1VW2ZMD5TrhW7wxxS3I1DwlvbOeFxUEG-8z091As6KGbe_5jlh-YmCn1JU7KQIt1YzKhuZuOAXPaYLOO34BDDiEAi5u4wSarDp-Zu81xGOVC6afysapqWGnkw3DGX-0AC16dtm89kPPVzI5ljDpQxb03BzCwqKKzvDOHm8g3VoARZL8LZNzSpSDuUP3tI-Hzx8QU4bd1dBwmq_M1E7i2mvaLRJLGT8QD3HeAEl2a_lj5MSaMWuiMxyUrwmx3wB4HMUan44Og5l2okTrfqaNIatJx6YArmz7gw9TfMiYk8Vle_roCg7gSOIoa23DF8g2xcQ6VMaU2jfLC4lYOCkkLGjEURNaCc-dJaVnRUas6rIn2W1sUCKUxLnqxQnUBq6qnYFG6F7l-LOOlIltrRBe4H-hI4vjobMRpx6yFiFzv6LM7lugB0ekwoRVWrdbWdbhODKJ2wX_Sm3cwhoZY9VOixuE36peL3fK9B_8DQuyJsui4PZ2gotUfZQZdIpdLZW8PC8ItPoUNx5365JBkizin1nN4SUawsseV5eY6eYoHMc-IH64Y_rxHV3Mfw9-O7s5VkUXsg9fKRzw92TN3F2GY_Su-77t4H99fsrM5FM-oEHlT_VYoZhDlaNZiXhYARuLAYXuR7Kz_O1KqksEJL0-Evob5vH-dEfVMd5gmLG_zZFXxDk6ccNN6bcn7aWStClDo42hBZ-cTMCcJ6rrPvhjLyrKBFvbS5-u_QPzj2p_NpK8lqDO5D3hPIpNJ3_7CUe3H7-GMf_QaXCKPmZm2AfvF6U=w466-h490-no?authuser=0",
          description:
            "Maul, once known as Darth Maul, was a Force-sensitive Dathomirian Zabrak male who established himself as a crime lord during the reign of the Galactic Empire. However, he was once the Sith apprentice of Darth Sidious, and therefore, a Dark Lord of the Sith. Having trained in the ways of the Force, Maul was a formidable warrior strong with the dark side and deadly skilled in lightsaber combat. In addition, he was a scheming mastermind who plotted his return to power despite losing his place in the ranks of the Sith.",
          __v: 0,
          createdAt: "2022-06-13T15:03:56.131Z",
          updatedAt: "2022-06-13T15:03:56.131Z",
        },
      ],
    },
  };
  return characters.data.characters;
  //   console.log(characters);
};
const mapCharacters = (charactersSinMapear) => {
  // console.log("mapcharacters",charactersSinMapear);
  return charactersSinMapear.map((character) => ({
    id: character.id,
    nombre: character.name,
    foto: character.image,
    rol: character.role,
  }));
};
const drawCharacters = (charactersMapeados) => {
  // console.log("draw",charactersMapeados);
  main$$.innerHTML = "";
  for (const character of charactersMapeados) {
    // console.log(character);
    // const figure$$ = document.createElement("figure")
    // const imageCharacter$$ = document.createElement("img")
    // const figCaption$$ = document.createElement("figcaption")
    // const rol$$ = document.createElement("p")

    // figure$$.className="main__figure"
    // figCaption$$.textContent= character.nombre
    // figCaption$$.className="main__figure__figcaption"
    // rol$$.textContent=character.rol
    // imageCharacter$$.className="main__figure__img"
    // imageCharacter$$.setAttribute("src",character.foto)
    // imageCharacter$$.setAttribute("alt",character.nombre)

    // figure$$.appendChild(figCaption$$)
    // figure$$.appendChild(imageCharacter$$)
    // figure$$.appendChild(rol$$)
    // main$$.appendChild(figure$$)

    const figure$$ = document.createElement("figure");
    figure$$.className = "main__figure";
    main$$.appendChild(figure$$);

    figure$$.innerHTML = `
        <img class="main__figure__img" src="${character.foto}" alt="${character.nombre}">
        <figcaption>${character.nombre}</figcaption>
        <p>${character.rol}</p>

        `;
  }
};
const pickInput = (personajesMapeados) => {
  // console.log(personajesMapeados);
  const input$$ = document.querySelector("input");
  //   console.log(input$$.value);
  input$$.addEventListener("input", () =>
    searchCharacters(input$$.value, personajesMapeados)
  );
};
const searchCharacters = (filtro, array) => {
  // console.log(filtro,array);
  let filteredArray = array.filter((character) =>
    character.nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  drawCharacters(filteredArray);
};
const init = () => {
  // primero me ejecutas esta función, que ya tengo aquí mis personajes
  const characters = getCharacters();
  //   console.log("funcion init",characters);
  // segundo llamo a mi función map
  const charactersMapeados = mapCharacters(characters);
  //   console.log("funcion init despues de mapear",charactersMapeados);
  drawCharacters(charactersMapeados);
  //  quiero que me coja el input para luego filtrarlo
  pickInput(charactersMapeados);
};
init();

