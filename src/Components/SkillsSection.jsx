import React, { useState } from 'react'
import { cn } from '../lib/Utils';


const skills = [
    //Frontend
    { name: 'HTML', level: 95, category: 'Frontend' },
    { name: 'CSS', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Next.js', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },

    //Backend
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Express.js', level: 75, category: 'Backend' },
    { name: 'GraphQL', level: 60, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Backend' },
    { name: 'MySQL', level: 65, category: 'Backend' },
    { name: 'PostgreSQL', level: 65, category: 'Backend' },

    //Tools
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Version Control', level: 90, category: 'Tools' },
    { name: 'Agile Methodologies', level: 85, category: 'Tools' },
    { name: 'Jira', level: 75, category: 'Tools' },
    { name: 'Slack', level: 80, category: 'Tools' },
    { name: 'Firebase', level: 70, category: 'Tools' },

    //Other
    { name: 'English', level: 100, category: 'Other' },
    { name: 'German', level: 50, category: 'Other' },
    { name: 'Spanish', level: 60, category: 'Other' },
    { name: 'Cooking', level: 100, category: 'Other' },
    { name: 'Photography', level: 45, category: 'Other' },
];

const categories = ['Frontend', 'Backend', 'Tools', 'Other', 'All'];

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredSkills = skills.filter((skill) => activeCategory === 'All' || skill.category === activeCategory);

    return (
        <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary text-glow'>Skills</span>
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category, key) => (
                        <button key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                            activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <div className='text-left mb-4'>
                                <h3 className='font-semibold text-lg'>{skill.name}</h3>
                            </div>
                            <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                                <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]' style={{ width: skill.level + '%' }} />
                            </div>
                            <div className='text-right mt-1'>
                                <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection