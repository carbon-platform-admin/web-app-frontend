class Category {
    constructor(title, subCategories) {
        this.title = title;
        this.link = this.generateLink(title);
        this.subCategories = subCategories ? this.generateSubCategories(subCategories) : [];
    };

    generateSubCategories(subCategories) {
        let temp = []
        
        subCategories.forEach((category_title) => {
            temp.push(new Category(category_title))
        })

        return temp;
    }
    
    generateLink(title) {
        return title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase();
    }
}

export const policies = [
    'Blogs',
    'Terms of Use',
    'Terms of Service',
    "Contact Us",
    'Privacy',
    'Shipping',
    'Returns',
    'FAQs',
    'Refund Policy',
]

export const tags = [
    'Recyclable Packaging',
    'Locally Sourced',
    'Fair Trade',
    'Artisan Led',
    'Woman-led',
    'Locally Sourced',
    'Zero Waste',
    'Cruelty Free',
    'Locally Sourced Ingredients',
    'Natural Fabrics'
]

export const categories = [
    new Category('Alcohol', [
        'At home',
        "Away from home"
    ]),
    new Category('Apparel', [
        "Baby (0 - 2 years)",
        "Footwear",
        "Men and Boys",
        "Other apparel products and services",
        "Women and Girls"
    ]),
    new Category('Education', [
        "College tuition",
        "Elementary and high school tuition",
        "Finance, late, interest charges for student loans",
        "Other school expenses including rentals",
        "School books, supplies, equipment",
        "Test Preparation, Tutoring Services",
        "Vocational and technical school tuition"
    ]),
    new Category('Entertainment', [
        "Audio and visual equipment and services",
        "Fees and admissions",
        "Other entertainment supplies, equipment, and services",
        "Reading",
        "Video Games",
        "Toys, hobbies, and playground equipment",
    ]),
    new Category('Food', [
        "Food at home",
        "Food away from home",
    ]),
    new Category('Healthcare', [
        'Drugs', 
        'Health Insurance',
        'Medical Services',
        "Medical Supplies"
    ]),
    new Category('Home', [
        'Household Furnishings and Equipment',
        "Household Operations",
        "Outdoor/Garden",
        "Housekeeping Supplies",
        "Shelter",
        "Utilities, fuels, and public services",
        "Smart Home"
    ]),
    new Category('Services', []),
    new Category("Personal Care", [
        "Personal Care Products",
        "Personal Care Services",
    ]),
    new Category("Finance", [
        "Accounting fees",
        "Checking accounts, other bank service charges",
        "Credit card memberships",
        "Expenses for other properties",
        "Finance, late, interest charges for credit cards",
        "Finance, late, interest charges for other loans",
        "Interest paid, home equity line of credit",
        "Legal fees",
        "Lotteries and pari-mutuel losses",
        "Miscellaneous fees",
        "Occupational expenses",
        "Safe deposit box rental",
        "Shopping club membership fees",
        "Vacation clubs",
    ]),
    new Category("Personal Insurance & Pensions", [
        "Life and other personal insurance",
        "Pensions and Social Security",
    ]),
    new Category("Tobacco & smoking supplies", [
        "Cigarettes", 
        "Marijuana",
        "Other tobacco products",
        "smoking accessories"
    ]),
    new Category("Transportation", [
        "Gasoline, other fuels, and motor oil",
        "Other vehicle expenses",
        "Public and other transportation",
        "Vehicle Purchances (net outlay)"
    ])
]

export const aboutCategories = [
    new Category("About us"),
    new Category("Founder's Note"),
    new Category("Our philosophy"),
    new Category("Our ethos")
]