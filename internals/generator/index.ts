// import { writeFile } from "fs/promises"
// TODO, write to file

type PageType = "landingPage" | "blog" | "institucional"

type HTML = string;

type Content = {
    wireframe: HTML; // this can be Skeleton HTML  
    layout: HTML;
}

type Component = {
    name: string;
    content: {
        [Key in PageType]: Content;
    }
}

type Page = {
    name: AllPages;
    sections: Component[]
}

const pages: Page[] = [
    {
        name: "home",
        sections: [
            {
                name: "hero",
                content: {
                    blog: {
                        wireframe: "<h1 className='skeleton-heading'></h1>",
                        layout: "<h1>Welcome to my blog</h1>",
                    },
                    institucional: {
                        wireframe: "<h1 className='skeleton-heading'></h1>",
                        layout: "<h1>Welcome to my company</h1>",
                    },
                    landingPage: {
                        wireframe: "<h1 className='skeleton-heading'></h1>",
                        layout: "<h1>Welcome to my website</h1>",
                    },
                } 
            }
        ]
    }
]

const pageMap = {
    blog: ["home", "privacy", "terms", "about", "contact", "[post]", "posts", "[category]", "categories"],
    institucional: ["home", "privacy", "about", "contact"],
    landingPage: ["home", "privacy"]
} as const;

type AllPages = (typeof pageMap[keyof typeof pageMap])[number] 

type Sitemap = {
    pages: Array<string>
    type: PageType
}

type Wirframe = Array<HTML>

const wireframe = (sitemap: Sitemap) => {
    const filteredPages = (mode: "wireframe" | "layout") => pages
        .filter(page => sitemap.pages.includes(page.name))
        .map(page => {
            const filteredSections = page.sections
                .map(section => section.content[sitemap.type])
                .map(content => content[mode])

            return {
                title: page.name,
                html: filteredSections,
            } 
        })
        .map(page => {
            return `
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>${page.title}</title>
                    </head>
                    <body>
                        ${page.html.join("")}
                    </body>
                </html>
            `
        })

    return {
        ...filteredPages("wireframe"),
        get layout() {
            return filteredPages("layout")
        }
    }
}

type SitemapProps = {
    type: PageType
    auth?: boolean
    admin?: boolean
}

const sitemap = ({ type, auth = false, admin = false }: SitemapProps): Sitemap => {
    let pages: Array<string> = []

    const pageSitemap = pageMap[type]
    
    pages.push(...pageSitemap)
    
    if(auth) {
        pages.push(...["account", "login", "register"])
    }

    if(admin) {
        pages.push(...["admin"])
    }

    return {
        pages,
        type
    }
}

const websiteSitemap = sitemap({
    type: "blog"
})

console.log("sitemap", websiteSitemap)

const websiteWireframe = wireframe(websiteSitemap)

console.log("wireframe", websiteWireframe)
console.log("layout", websiteWireframe.layout)