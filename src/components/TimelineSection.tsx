import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

interface Milestone {
    id: string;
    title: string;
    description: string;
    date: string;
    year: string;
    image_url?: string;
    author_image_url?: string;
    display_order: number;
}

interface TimelineCardProps {
    item: Milestone;
    isRight: boolean;
}

const TimelineCard = ({ item, isRight }: TimelineCardProps) => (
    <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors shadow-sm relative group">
        {/* Arrow pointer toward center */}
        <div className={`hidden md:block absolute top-7 w-3 h-3 bg-card rotate-45 border-border transition-colors group-hover:border-primary/50 ${isRight
            ? '-left-[6px] border-l border-b'
            : '-right-[6px] border-r border-t'
            }`}></div>

        <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

                {item.image_url && (
                    <div className="flex gap-2 mt-4">
                        <img src={item.image_url} alt="Event" className="w-24 h-16 object-cover rounded-md" />
                    </div>
                )}

                {item.author_image_url && (
                    <div className="flex items-center gap-3 mt-4">
                        <img src={item.author_image_url} alt="Author" className="w-10 h-10 rounded-full object-cover" />
                    </div>
                )}
            </div>

            <div className="text-center min-w-[60px] border-l border-border pl-4">
                <span className="block text-sm font-medium text-muted-foreground uppercase">{item.date.split(' ')[0]}</span>
                <span className="block text-2xl font-bold text-foreground">{item.date.split(' ')[1]}</span>
                <span className="block text-xs text-muted-foreground mt-1">{item.year}</span>
            </div>
        </div>
    </div>
);

const TimelineSection = () => {
    const [milestones, setMilestones] = useState<Milestone[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMilestones = async () => {
            if (!isSupabaseConfigured || !supabase) {
                console.log("Supabase not configured, timeline data unavailable");
                setLoading(false);
                return;
            }

            try {
                const { data, error } = await supabase
                    .from('milestones')
                    .select('*')
                    .eq('is_active', true)
                    .order('display_order', { ascending: true });

                if (error) {
                    console.error("Error fetching milestones:", error);
                } else if (data && data.length > 0) {
                    setMilestones(data);
                }
            } catch (err) {
                console.error("Failed to fetch milestones:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMilestones();
    }, []);

    return (
        <section className="py-20 relative overflow-hidden bg-background" id="timeline">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Timeline</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">STEMise Milestones</h2>
                    <p className="text-muted-foreground uppercase tracking-widest text-sm">WOW!!! WHAT A JOURNEY SO FAR...</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2"></div>

                    {loading ? (
                        <div className="flex justify-center py-12">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {milestones.map((item, index) => {
                                const isRight = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10 top-8"></div>

                                        {/* Desktop Grid Layout */}
                                        <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                                            {isRight ? (
                                                <>
                                                    <div></div>
                                                    <div className="pl-4">
                                                        <TimelineCard item={item} isRight={true} />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="pr-4">
                                                        <TimelineCard item={item} isRight={false} />
                                                    </div>
                                                    <div></div>
                                                </>
                                            )}
                                        </div>

                                        {/* Mobile Layout */}
                                        <div className="md:hidden pl-10">
                                            <TimelineCard item={item} isRight={true} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
