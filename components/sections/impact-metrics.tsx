import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TreePine, Users, Globe, Award, TrendingUp, Heart } from "lucide-react"

const impactStats = [
  {
    icon: TreePine,
    label: "Cultural Traditions Preserved",
    value: 127,
    unit: "techniques",
    progress: 85,
    description: "Ancient crafting methods documented and protected",
  },
  {
    icon: Users,
    label: "Artisan Communities Supported",
    value: 1200,
    unit: "families",
    progress: 92,
    description: "Direct economic impact on artisan households",
  },
  {
    icon: Globe,
    label: "Countries Represented",
    value: 52,
    unit: "nations",
    progress: 78,
    description: "Global network of cultural preservation",
  },
  {
    icon: Award,
    label: "UNESCO Heritage Sites",
    value: 23,
    unit: "sites",
    progress: 67,
    description: "Partnerships with protected cultural locations",
  },
]

const recentImpacts = [
  {
    title: "Zapotec Weaving Workshop Funded",
    description: "Your purchases helped establish a new training center in Oaxaca",
    amount: "$12,500",
    beneficiaries: 25,
    date: "2 days ago",
  },
  {
    title: "Ceramic Tools Donated",
    description: "Traditional pottery wheels provided to young artisans in Kyoto",
    amount: "$8,200",
    beneficiaries: 15,
    date: "1 week ago",
  },
  {
    title: "Mud Cloth Documentation",
    description: "Ancient symbols and meanings preserved in digital archive",
    amount: "$5,800",
    beneficiaries: 200,
    date: "2 weeks ago",
  },
]

export function ImpactMetrics() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Heart className="h-3 w-3 mr-1" />
            Cultural Impact
          </Badge>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Your purchases create
            <span className="text-primary"> lasting change</span>
          </h2>

          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Every item you buy directly supports artisan communities and helps preserve cultural heritage for future
            generations. See the real impact of your choices.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-3xl font-bold">{stat.value.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">{stat.unit}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </div>

                <Progress value={stat.progress} className="mb-3" />

                <p className="text-xs text-muted-foreground text-pretty">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Impact Stories */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Recent Impact Stories</h3>
            <div className="space-y-6">
              {recentImpacts.map((impact, index) => (
                <Card key={index} className="border-0 shadow-sm bg-card/30 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{impact.title}</h4>
                        <p className="text-sm text-muted-foreground text-pretty">{impact.description}</p>
                      </div>
                      <Badge variant="secondary" className="ml-4 shrink-0">
                        {impact.date}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border/40">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-primary font-medium">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {impact.amount}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          {impact.beneficiaries} beneficiaries
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>

                <h3 className="font-serif text-2xl font-bold mb-4">Join the Heritage Movement</h3>

                <p className="text-muted-foreground mb-6 text-pretty">
                  Every purchase is a vote for cultural preservation. Together, we're building a sustainable future for
                  traditional crafts and artisan communities.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$2.3M</div>
                    <div className="text-sm text-muted-foreground">Total Impact</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Goes to Artisans</div>
                  </div>
                </div>

                <Badge className="w-full justify-center py-2">
                  <Award className="h-4 w-4 mr-2" />
                  Certified B-Corporation
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
