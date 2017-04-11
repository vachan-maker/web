angular.module('bit')
    .constant('constants', {
        rememberedEmailCookieName: 'bit.rememberedEmail',
        encType: {
            AesCbc256_B64: 0,
            AesCbc128_HmacSha256_B64: 1,
            AesCbc256_HmacSha256_B64: 2,
            RsaOaep_Sha256_B64: 3
        },
        plans: {
            free: {
                basePrice: 0,
                noAdditionalSeats: true,
                noPayment: true,
                upgradeSortOrder: -1
            },
            personal: {
                basePrice: 1,
                annualBasePrice: 12,
                baseSeats: 5,
                seatPrice: 1,
                annualSeatPrice: 12,
                maxAdditionalSeats: 5,
                annualPlanType: 'personalAnnually',
                upgradeSortOrder: 1
            },
            teams: {
                basePrice: 5,
                annualBasePrice: 60,
                monthlyBasePrice: 8,
                baseSeats: 5,
                seatPrice: 2,
                annualSeatPrice: 24,
                monthlySeatPrice: 2.5,
                monthPlanType: 'teamsMonthly',
                annualPlanType: 'teamsAnnually',
                upgradeSortOrder: 2
            }
        }
    });