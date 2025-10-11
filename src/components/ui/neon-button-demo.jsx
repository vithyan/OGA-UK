import { Button } from "@/components/ui/neon-button"

const NeonButtonDemo = () => {
    return (
        <div className="flex flex-col gap-6 p-8">
            <h2 className="text-2xl font-bold text-white">Neon Button Examples</h2>
            
            {/* Default Button */}
            <div className="flex flex-col gap-2">
                <h3 className="text-white">Default</h3>
                <Button>Button</Button>
            </div>

            {/* Without Neon Effect */}
            <div className="flex flex-col gap-2">
                <h3 className="text-white">Without Neon Effect</h3>
                <Button neon={false}>Normal Button</Button>
            </div>

            {/* Solid Variant */}
            <div className="flex flex-col gap-2">
                <h3 className="text-white">Solid</h3>
                <Button variant="solid">Solid Button</Button>
            </div>

            {/* Ghost Variant */}
            <div className="flex flex-col gap-2">
                <h3 className="text-white">Ghost</h3>
                <Button variant="ghost">Ghost Button</Button>
            </div>

            {/* Golden Variants */}
            <div className="flex flex-col gap-2">
                <h3 className="text-white">Golden</h3>
                <Button variant="golden">Golden Button</Button>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-white">Golden Solid</h3>
                <Button variant="goldenSolid">Golden Solid</Button>
            </div>

            {/* Different Sizes */}
            <div className="flex flex-col gap-2">
                <h3 className="text-white">Sizes</h3>
                <div className="flex gap-4 items-center">
                    <Button size="sm" variant="solid">Small</Button>
                    <Button size="default" variant="solid">Default</Button>
                    <Button size="lg" variant="solid">Large</Button>
                </div>
            </div>

            {/* With Click Handler */}
            <div className="flex flex-col gap-2">
                <h3 className="text-white">Interactive</h3>
                <Button 
                    variant="goldenSolid" 
                    onClick={() => alert('Button clicked!')}
                >
                    Click Me
                </Button>
            </div>
        </div>
    );
};

export default NeonButtonDemo;
