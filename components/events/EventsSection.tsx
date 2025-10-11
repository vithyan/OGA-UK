"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Clock, Users, Filter, Download } from "lucide-react";
import { events } from "@/content/seed";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

const filterOptions = ["all", "upcoming", "past", "formal", "casual"];

export function EventsSection() {
  const [filter, setFilter] = useState("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    return event.status === filter || event.tags.includes(filter);
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Events & Gatherings
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join us for memorable occasions that strengthen our bonds and
            celebrate our shared legacy.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterOptions.map((option) => (
            <Button
              key={option}
              variant={filter === option ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter(option)}
              className="capitalize"
            >
              <Filter size={16} className="mr-2" />
              {option}
            </Button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <GlassCard className="p-0 overflow-hidden h-full">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold uppercase">
                      {event.status}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="glass text-white px-3 py-1 rounded-full text-xs">
                      {event.price}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-white font-serif font-semibold text-xl mb-3 line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-300">
                      <Calendar size={16} className="mr-2 text-yellow-400" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock size={16} className="mr-2 text-yellow-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin size={16} className="mr-2 text-yellow-400" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 text-yellow-400 px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Users size={16} className="mr-2" />
                      RSVP
                    </Button>
                    <Button size="sm" variant="glass">
                      <Download size={16} />
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
