import React, { useState, useCallback, SVGAttributes, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse as SDKGenerateContentResponse } from "@google/genai";
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import SectionTitle from '../components/common/SectionTitle';
import { Icons } from '../constants';
import { GroundingChunk, GeminiCandidate, GeminiContentResponse } from '../types';
import { setMetaTags, setPageSpecificJsonLd } from '../utils/seo';
import LottieAnimation from '../components/LottieAnimation';
import AnimatedDiv from '../src/components/common/AnimatedDiv';

const API_KEY = process.env.API_KEY;

const InsightsPage: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState<GeminiContentResponse | null>(null);

  useEffect(() => {
    setMetaTags(
      'AI Marketing Insights Tool | BrandsScaler',
      'Generate revolutionary marketing ideas, campaign strategies, and branding tips with BrandsScaler\'s AI Insights tool, powered by Gemini and BlindTech.in technology.',
      'AI marketing tool, marketing ideas generator, branding insights, campaign strategy AI, Gemini API marketing'
    );
    setPageSpecificJsonLd(null);
  }, []);

  useEffect(() => {
    if (aiResponse && aiResponse.text) {
      setPageSpecificJsonLd({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `AI Marketing Insight for: ${prompt.substring(0, 50)}${prompt.length > 50 ? '...' : ''}`,
        "description": aiResponse.text.substring(0, 160) + "...",
        "author": {
          "@type": "Organization",
          "name": "BrandsScaler AI"
        },
        "publisher": {
          "@type": "Organization",
          "name": "BrandsScaler",
          "logo": {
            "@type": "ImageObject",
            "url": "https://brandsscaler.com/logo.png" 
          }
        },
        "datePublished": new Date().toISOString(),
        "mainEntityOfPage": "https://brandsscaler.com/#/insights"
      });
    }
  }, [aiResponse, prompt]);

  const extractGroundingSources = (candidates?: GeminiCandidate[]): GroundingChunk[] => {
    if (!candidates || candidates.length === 0) return [];
    const sources: GroundingChunk[] = [];
    candidates.forEach(candidate => {
      if (candidate.groundingMetadata && candidate.groundingMetadata.groundingChunks) {
        candidate.groundingMetadata.groundingChunks.forEach(chunk => {
          if (chunk.web && chunk.web.uri) { 
            sources.push(chunk);
          }
        });
      }
    });
    return sources;
  };

  const generateInsight = useCallback(async () => {
    if (!prompt.trim()) {
      setError("Please enter a topic or question for your marketing insight.");
      return;
    }
    if (!API_KEY) {
      setError("API Key is not configured. Please contact support.");
      console.error("Gemini API Key is missing from process.env.API_KEY");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAiResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: API_KEY });
      
      const shouldUseSearch = prompt.toLowerCase().includes("recent") || prompt.toLowerCase().includes("latest") || prompt.toLowerCase().includes("current events") || prompt.toLowerCase().includes("news");
      
      const requestConfig: any = {
        model: "gemini-2.5-flash-preview-04-17",
        contents: prompt,
        config: {
          systemInstruction: "You are BrandsScaler AI, a cutting-edge marketing and branding strategist developed in partnership with BlindTech.in. Provide innovative, actionable, and slightly edgy advice to help brands revolutionize their market presence. Think big, be bold. Format your main advice clearly. If providing multiple points, use bullet points or numbered lists for readability.",
          temperature: 0.7,
          topP: 0.9,
          topK: 40,
        }
      };

      if (shouldUseSearch) {
        requestConfig.config.tools = [{googleSearch: {}}];
      }
      
      const result: SDKGenerateContentResponse = await ai.models.generateContent(requestConfig);
      
      const responseText = result.text; 
      const adaptedResponse: GeminiContentResponse = {
        text: responseText,
        candidates: result.candidates as GeminiCandidate[] 
      };
      
      setAiResponse(adaptedResponse);

    } catch (e: any) {
      console.error("Gemini API error:", e);
      setError(e.message || "Failed to generate insight. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateInsight();
  };

  const sources = aiResponse ? extractGroundingSources(aiResponse.candidates) : [];

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatedDiv animationType="fadeIn" delay={100}>
        <SectionTitle 
          title="Unlock Revolutionary Marketing Ideas" 
          subtitle="Tap into AI-powered brilliance with BrandsScaler AI. Ask for unique strategies, campaign ideas, or branding tips to give your business an edge. Developed with BlindTech.in."
        />
      </AnimatedDiv>
      
      <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
        <AnimatedDiv animationType="fadeInLeft" delay={200} className="md:col-span-2 space-y-6 p-6 bg-brand-surface rounded-xl shadow-soft border border-brand-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              id="insight-prompt"
              label="What marketing challenge or topic are you exploring?"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., 'Innovative ways to launch a new SaaS product'"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              isLoading={isLoading} 
              disabled={isLoading || !prompt.trim()}
              icon={React.cloneElement(Icons.SparklesIcon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5 text-white"})}
              className="w-full md:w-auto"
              variant="primary"
            >
              {isLoading ? 'Generating...' : 'Get AI Insight'}
            </Button>
          </form>
        </AnimatedDiv>
        <AnimatedDiv animationType="fadeInRight" delay={300} className="hidden md:flex justify-center items-center">
            <LottieAnimation src="https://assets3.lottiefiles.com/packages/lf20_bo8vqwyw.json" style={{ maxWidth: '250px', height: '250px' }}/>
        </AnimatedDiv>
      </div>


      {error && <ErrorMessage message={error} />}

      {isLoading && <LoadingSpinner text="Our AI is brewing some brilliant ideas..." />}

      {aiResponse && aiResponse.text && (
        <AnimatedDiv animationType="fadeInUp" delay={100} className="mt-8 p-6 bg-brand-surface rounded-xl shadow-soft-lg border border-brand-border">
          <h3 className="text-2xl font-semibold font-heading text-brand-text-primary mb-4 flex items-center">
            {Icons.LightBulbIcon && React.cloneElement(Icons.LightBulbIcon as React.ReactElement<{ className?: string }>, { className: 'w-7 h-7 mr-3 text-brand-accent' })}
            Your AI-Powered Insight:
          </h3>
          <div 
            className="prose prose-sm sm:prose-base max-w-none text-brand-text-secondary leading-relaxed whitespace-pre-wrap prose-headings:font-heading prose-headings:text-brand-text-primary prose-strong:text-brand-text-primary prose-a:text-brand-primary hover:prose-a:text-brand-accent"
          >
            {aiResponse.text.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </div>
          {sources.length > 0 && (
            <div className="mt-6 pt-4 border-t border-brand-border">
              <h4 className="text-md font-semibold text-brand-text-primary mb-2">Sources from Google Search:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {sources.map((source, index) => (
                  source.web && <li key={index}>
                    <a 
                      href={source.web.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:text-brand-accent underline"
                    >
                      {source.web.title || source.web.uri}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </AnimatedDiv>
      )}
    </div>
  );
};

export default InsightsPage;