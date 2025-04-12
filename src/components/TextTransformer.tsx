
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRightIcon, ClipboardCopyIcon, SparklesIcon, RefreshCwIcon } from "lucide-react";
import { transformText } from "@/services/transformService";

const MAX_CHAR_COUNT = 1000;

const TextTransformer = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [charactersLeft, setCharactersLeft] = useState(MAX_CHAR_COUNT);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= MAX_CHAR_COUNT) {
      setInputText(text);
      setCharactersLeft(MAX_CHAR_COUNT - text.length);
    }
  };

  const handleCopyToClipboard = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText);
      toast({
        title: "Copied to clipboard",
        description: "The transformed text has been copied to your clipboard.",
      });
    }
  };

  const handleTransform = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some text to transform.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      
      // Call the real API service
      const response = await transformText({
        text: inputText,
        maxWords: 1000
      });
      
      setOutputText(response.transformedText);
      
      toast({
        title: "Transformation complete",
        description: "Your text has been successfully transformed.",
      });
    } catch (error) {
      console.error("Error transforming text:", error);
      toast({
        title: "Error",
        description: "There was an error transforming your text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl p-6 shadow-lg bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl animate-fadein">
      <Tabs defaultValue="transform" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="transform">Transform Text</TabsTrigger>
          <TabsTrigger value="about">About the Tool</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transform" className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="input-text" className="text-sm font-medium text-gray-700">
                Input Text (AI-generated)
              </label>
              <span className={`text-xs ${charactersLeft < 100 ? 'text-red-500' : 'text-gray-500'}`}>
                {charactersLeft} characters left
              </span>
            </div>
            <Textarea
              id="input-text"
              placeholder="Paste your AI-generated text here..."
              className="min-h-[150px] resize-y"
              value={inputText}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleTransform}
              disabled={isLoading || !inputText.trim()}
              className="relative overflow-hidden group transition-all"
            >
              {isLoading ? (
                <>
                  <RefreshCwIcon className="mr-2 h-4 w-4 animate-spin" />
                  Transforming...
                </>
              ) : (
                <>
                  <span className="relative z-10 flex items-center">
                    Transform 
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    <SparklesIcon className="ml-2 h-4 w-4 opacity-70" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </>
              )}
            </Button>
          </div>

          {outputText && (
            <div className="space-y-2 animate-fadein">
              <div className="flex justify-between items-center">
                <label htmlFor="output-text" className="text-sm font-medium text-gray-700">
                  Transformed Text (Human-like)
                </label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyToClipboard}
                  className="flex items-center gap-1 text-xs"
                >
                  <ClipboardCopyIcon className="h-3 w-3" />
                  Copy
                </Button>
              </div>
              <Textarea
                id="output-text"
                className="min-h-[150px] resize-y bg-gray-50"
                value={outputText}
                readOnly
              />
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="about">
          <div className="prose prose-sm max-w-none">
            <h3 className="text-lg font-semibold mb-2">How it Works</h3>
            <p className="text-gray-700 mb-4">
            WarmText AI Humanizer Free uses advanced AI algorithms to convert robotic AI-generated text into natural, engaging, and human-like content—without changing the original meaning.
            </p>
            
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Preserves original meaning and intent while sounding fully human</li>
              <li>Keeps original format like lists, headings, and paragraphs intact</li>
              <li>Humanizes content into warm, conversational, and engaging text</li>
              <li>Transform up to 1000 characters at once – absolutely free</li>
              <li>Get instant results powered by cutting-edge AI technology</li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
            <p className="text-gray-700">
            For best results using our AI Humanizer Free tool, input full sentences or well-structured paragraphs. The AI works most effectively with content that has clear grammar and intent.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default TextTransformer;
