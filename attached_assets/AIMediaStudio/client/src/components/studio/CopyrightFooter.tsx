export default function CopyrightFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 border-t border-white/10 pt-8 pb-6">
      <div className="glass-card rounded-2xl p-6">
        <div className="text-center space-y-4">
          <div className="neon-gradient text-2xl font-bold">
            <i className="fas fa-shield-alt mr-2"></i>PROTECTED CONTENT
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-black/20 rounded-xl p-4">
              <h4 className="text-[--neon-green] font-semibold mb-2">
                <i className="fas fa-copyright mr-2"></i>Copyright Notice
              </h4>
              <p className="text-gray-300">
                © {currentYear} Ervin Remus Radosavlevici<br/>
                All Rights Reserved Worldwide
              </p>
            </div>
            
            <div className="bg-black/20 rounded-xl p-4">
              <h4 className="text-[--electric-blue] font-semibold mb-2">
                <i className="fas fa-user-shield mr-2"></i>Private License
              </h4>
              <p className="text-gray-300">
                Proprietary Software<br/>
                Unauthorized use prohibited
              </p>
            </div>
            
            <div className="bg-black/20 rounded-xl p-4">
              <h4 className="text-[--hot-pink] font-semibold mb-2">
                <i className="fas fa-clock mr-2"></i>Timestamp
              </h4>
              <p className="text-gray-300">
                Created: January 12, 2025<br/>
                Build: PROD-{currentYear}.01.12
              </p>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 border-t border-white/10 pt-4">
            This AI Production Studio is the exclusive property of Ervin Remus Radosavlevici. 
            Any reproduction, distribution, or commercial use without explicit written permission is strictly prohibited.
            Protected under international copyright law.
          </div>
        </div>
      </div>
    </footer>
  );
}