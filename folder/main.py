# from settings import *
# from components import *

import sys
sys.path.append('/home/ubuntu/programming/folder/components')
from Game import *
from Score import *
from Tetromino import *

class Main:
    def __init__(self) -> None:
        pygame.init()
        self.screen = pygame.display.set_mode((APP_WIDTH, APP_HEIGHT))
        self.clock = pygame.time.Clock()
        self.components = [Game(), Score(), Tetromino()]
        # self.game = Game()
        # self.score = Score()
        # self.tetromino = Tetromino()

    def run(self):
        running = True
        while running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False
            self.screen.fill("blue")
            
            for c in self.components:
                c.run()
            
            pygame.display.flip()
            self.clock.tick(60)
        pygame.quit()

if __name__ == "__main__":
    main = Main()
    main.run()