class Pong {
	constructor(username, player, opp_username, ball) {
		this.canvas = document.getElementById('drawing-canvas');
		this.ctx = document.getElementById('drawing-canvas').getContext('2d');
		this.game = {
			player: player,
			self: { username: username, score: 0, pos: 50 },
			opp: { username: opp_username, score: 0, pos: 50 },
			ball: ball
		};
		this.player_velocity = 3;
	}

	clear() {
		this.ctx.fillStyle = 'black';
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	update() {
		this.clear();
		this.ctx.font = '32px Arial';
		this.ctx.textAlign = 'center';
		if (this.game.player == 1) {
			this.ctx.fillStyle = '#0000ff';
			this.ctx.fillText(
				this.game.self.username,
				this.canvas.width / 4,
				25
			);
			this.ctx.fillRect(
				0.05 * this.canvas.width,
				((this.game.self.pos - 10) / 100) * this.canvas.height,
				0.01 * this.canvas.width,
				0.2 * this.canvas.height
			);
			this.ctx.fillStyle = '#ff0000';
			this.ctx.fillText(
				this.game.opp.username,
				3 * (this.canvas.width / 4),
				25
			);
			this.ctx.fillRect(
				0.95 * this.canvas.width,
				((this.game.opp.pos - 10) / 100) * this.canvas.height,
				0.01 * this.canvas.width,
				0.2 * this.canvas.height
			);
		} else {
			this.ctx.fillStyle = '#ff0000';
			this.ctx.fillText(
				this.game.opp.username,
				this.canvas.width / 4,
				25
			);
			this.ctx.fillRect(
				0.05 * this.canvas.width,
				((this.game.opp.pos - 10) / 100) * this.canvas.height,
				0.01 * this.canvas.width,
				0.2 * this.canvas.height
			);

			this.ctx.fillStyle = '#0000ff';
			this.ctx.fillText(
				this.game.self.username,
				3 * (this.canvas.width / 4),
				25
			);
			this.ctx.fillRect(
				0.95 * this.canvas.width,
				((this.game.self.pos - 10) / 100) * this.canvas.height,
				0.01 * this.canvas.width,
				0.2 * this.canvas.height
			);
		}
		this.ctx.fillStyle = '#ffffff';
		this.ctx.fillRect(
			(this.game.ball[0] / 100) * this.canvas.width,
			(this.game.ball[1] / 100) * this.canvas.height,
			10,
			10
		);
	}

	up() {
		if (this.game.self.pos > 10) this.game.self.pos -= 3;
	}

	down() {
		if (this.game.self.pos < 90) this.game.self.pos += 3;
	}
}
