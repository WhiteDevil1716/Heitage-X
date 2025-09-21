"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, Send, Loader2, BookOpen, Globe, Sparkles, User } from "lucide-react"

interface ChatMessage {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  context?: string
}

const suggestedQuestions = [
  "What is the significance of Zapotec weaving patterns?",
  "How are traditional Japanese ceramics made?",
  "Tell me about African mud cloth traditions",
  "What makes handmade textiles authentic?",
  "How do artisan communities preserve their heritage?",
  "What is the cultural importance of natural dyes?",
]

const culturalTopics = [
  { name: "Textile Arts", icon: "🧵", description: "Weaving, dyeing, and fabric traditions" },
  { name: "Ceramics", icon: "🏺", description: "Pottery and ceramic arts worldwide" },
  { name: "Woodworking", icon: "🪵", description: "Traditional carpentry and carving" },
  { name: "Metalwork", icon: "⚒️", description: "Blacksmithing and jewelry making" },
  { name: "Natural Dyes", icon: "🌿", description: "Plant-based coloring techniques" },
  { name: "Cultural Symbols", icon: "🔮", description: "Meanings behind traditional patterns" },
]

export function HeritageChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Welcome! I'm your Cultural Heritage Guide. I can help you learn about traditional crafts, artisan techniques, and the cultural significance behind handmade treasures. What would you like to explore?",
      timestamp: new Date(),
      context: "welcome",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai/heritage-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: content,
          context: "heritage_chatbot",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: data.response,
        timestamp: new Date(),
        context: "heritage_response",
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error sending message:", error)

      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content:
          "I apologize, but I'm having trouble connecting right now. Traditional crafts represent the living heritage of communities worldwide, preserving techniques and cultural knowledge passed down through generations. Each handmade piece tells a story of cultural identity and artistic mastery.",
        timestamp: new Date(),
        context: "error_fallback",
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question)
  }

  return (
    <div className="space-y-6">
      {/* Cultural Topics */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary/20 to-accent/10">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Explore Cultural Topics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {culturalTopics.map((topic, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-3 flex flex-col items-start space-y-1 hover-lift bg-transparent"
                onClick={() => handleSuggestedQuestion(`Tell me about ${topic.name.toLowerCase()}`)}
              >
                <div className="flex items-center space-x-2 w-full">
                  <span className="text-lg">{topic.icon}</span>
                  <span className="font-medium text-sm">{topic.name}</span>
                </div>
                <span className="text-xs text-muted-foreground text-left">{topic.description}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="border-0 shadow-xl bg-card/50 backdrop-blur">
        <CardHeader className="border-b border-border/40">
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span>Cultural Heritage Chat</span>
            <Badge variant="secondary" className="ml-auto">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Messages */}
          <ScrollArea className="h-96 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarFallback
                      className={message.type === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"}
                    >
                      {message.type === "user" ? <User className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                    </AvatarFallback>
                  </Avatar>

                  <div className={`flex-1 max-w-[80%] ${message.type === "user" ? "text-right" : ""}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground ml-auto"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 px-2">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarFallback className="bg-secondary">
                      <BookOpen className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-secondary text-secondary-foreground rounded-2xl px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Thinking about cultural heritage...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Suggested Questions */}
          {messages.length <= 1 && (
            <div className="p-4 border-t border-border/40 bg-secondary/20">
              <p className="text-sm font-medium mb-3">Try asking about:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.slice(0, 3).map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-auto py-2 bg-transparent"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border/40">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about cultural heritage, traditional crafts, or artisan techniques..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !inputValue.trim()}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
